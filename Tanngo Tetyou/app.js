(function() {
  (function(exports) {
    var fs = require('fs'),
        tanngobook = fs.openSync("TanngoTetyou", "a+");
    Vue.config.debug = false;
    exports.TanngoSortOrder = ["あア", "いイ", "うウ", "えエ", "おオ", "かカ", "がガ", "きキ", "ぎギ", "くク", "ぐグ", "けケ", "げゲ", "こコ", "ごゴ", "さサ", "ざザ", "しシ", "じジ", "すス", "ずズ", "せセ", "ぜゼ", "そソ", "ぞゾ", "たタ", "だダ", "ちチ", "ぢヂ", "つツ", "づヅ", "てテ", "でデ", "とト", "どド", "なナ", "に二", "ぬヌ", "ねネ", "のノ", "はハ", "ばバ", "ぱパ", "ひヒ", "びビ", "ぴピ", "ふフ", "ぶブ", "ぷプ", "へヘ", "べベ", "ぺペ", "ほホ", "ぼボ", "ぽポ", "まマ", "みミ", "むム", "めメ", "もモ", "やヤ", "ゆユ", "よヨ", "らラ", "りリ", "るル", "れレ", "ろロ", "わワ", "をヲ", "んン"];
    exports.TanngoStorage = {
      data: [],
      initFetch: function() {
        var readData = fs.readFileSync("TanngoTetyou", {encoding: "utf-8"}),
            readArray = readData.split("\n");
        console.log(readData);
        if (readArray.length) {
          readArray = _.remove(readArray, function(n) {
            return n != '';
          });
        }
        this.data = readArray;
        return this.data;
      },
      fetch: function() {
        return this.data;
      },
      save: function(d) {
        fs.writeSync(tanngobook, d + "\n");
        return this.data.push(d);
      },
      fommatAllData: function(datas) {
        var group;
        group = _.groupBy(datas, function(data) {
          return _.findIndex(TanngoSortOrder, function(ch) {
            var checkCh;
            checkCh = data.charAt(0);
            if (data.indexOf('(') === 1) {
              checkCh = data.charAt(2);
            }
            return ch.indexOf(checkCh) !== -1;
          });
        });
        group = _.mapValues(group, function(grp) {
          return _.map(grp, function(ele) {
            return TanngoStorage.analyzeTanngo(ele);
          });
        });
        return group;
      },
      analyzeTanngo: function(tanngo) {
        this.jps = tanngo.replace(/【.*?】/, '');
        this.chs = tanngo.replace(this.jps, '');
        return {
          'tanngo': tanngo,
          'jp': this.jps.replace(/(.)\((.*?)\)/g, '<ruby>$1<rt>$2</rt></ruby>'),
          'ch': this.chs
        };
      }
    };
    return exports.app = new Vue({
      el: '#TanngoTetyou',
      data: {
        tanngos: TanngoStorage.fommatAllData(TanngoStorage.initFetch())
      },
      filters: {
        indexInJp: function(i) {
          if (i === '-1') {
            return '—';
          }
          return TanngoSortOrder[i].replace(/(.)(.)/, "$1・$2");
        },
        searchWord: function(arr, kw) {
          kw = this.$get(kw);
          if (!kw) {
            return arr;
          }
          _.remove(arr, function(obj) {
            return _.findIndex(obj.value, function(v) {
              return v.tanngo.indexOf(kw) !== -1;
            });
          });
          return arr;
        },
        preview: function(v) {
          var ch, jp;
          if (!v) {
            return;
          }
          if (v.indexOf('+') !== 0) {
            return '';
          }
          v = v.replace("+", "");
          jp = v.replace(/【.*?】/, '');
          ch = v.replace(jp, '');
          return "<div>" + (jp.replace(/(.)\((.*?)\)/g, '<ruby>$1<rt>$2</rt></ruby>')) + "</div><div>" + ch + "</div>";
        }
      },
      methods: {
        addTanngo: function(v) {
          if (v.indexOf('+') !== 0) {
            return;
          }
          v = v.replace("+", "");
          if (_.indexOf(TanngoStorage.data, v) !== -1) {
            return;
          }
          TanngoStorage.save(v);
          this.searchText = '';
          return this.tanngos = TanngoStorage.fommatAllData(TanngoStorage.fetch());
        },
        addMode: function(v) {
          if (v) {
            return v.indexOf('+') === 0;
          }
        }
      }
    });
    window.onbeforeunload = function() {
      fs.closeSync(tanngobook);
    };
  })(window);
}).call(this);
