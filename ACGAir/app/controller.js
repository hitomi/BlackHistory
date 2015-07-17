(function () {
	var app = angular.module('ACGAir', []);
	app.controller('ACGAirCore', function () {
		this.selectTabs = [];
		this.pagecover = {
			'cover': {
				'background-image': 'url(./image/cover/cover-01.jpg)'
			},
			'name': '乐园追放 - Expelled From Paradise -'
		};
		this.animes = [
			{
				'aid': '1',
				'cover': {
					'background-image': 'url(./image/anime/1.jpg)'
				},
				'type': '完结',
				'name': 'FREE!-Eternal Summer-',
				'producer': '京都アニメーション/原案: 『ハイ☆スピード!』おおじこうじ',
				'actors': '七濑遥/松岡凛/橘真琴/叶月渚/龙崎怜',
				'tags': ['2014', 'TV', '京阿尼', '校园', '夏季', '基肉', '运动'],
				'showtags': false,
				'showdl': false
			}, {
				'aid': '2',
				'cover': {
					'background-image': 'url(./image/anime/2.jpg)'
				},
				'type': '完结',
				'name': '花舞少女',
				'producer': 'マッドハウス/原作: 浜弓場双',
				'actors': '哈娜·N·芳婷史坦/关谷鸣/笹目夜弥/常盘真智/西御门多美',
				'tags': ['2014', 'TV', '夏季', 'MADHouse', '治愈', '校园', '和服', '夜来舞', '漫画改'],
				'showtags': false,
				'showdl': false
			}
		];
		this.taggroups = [
			{
				'type': '类型',
				'tags': ['TV', '剧场版', 'OVA', 'BDRip', '其他'],
				'showtags': false
			}, {
				'type': '年份',
				'tags': ['2014', '2013', '2012', '2011'],
				'showtags': false
			}, {
				'type': '季节',
				'tags': ['春季', '夏季', '秋季', '冬季'],
				'showtags': false
			}, {
				'type': '元素',
				'tags': ['京阿尼', '校园', '搞笑', '治愈', '热血', '漫画改', '轻小说', '基肉', '百合', '软妹'],
				'showtags': false
			}
		];
		// TagSearch
		this.tabClick = function (addTag) {
			this.selectTabs.in_array(addTag) ? this.selectTabs.remove(addTag) : this.selectTabs.push(addTag);
		};
		this.tabAdder = function (addTag) {
			if (!this.selectTabs.in_array(addTag)) this.selectTabs.push(addTag);
		};
	});
	app.controller('ACGAirTagSearch', function () {

	});
})();