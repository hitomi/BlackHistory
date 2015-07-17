var ws = io.connect('http://106.187.102.6:2333');
var sendMsg = function (msg) {
	ws.emit('send.message', msg);
};
/*ColorPicker Copyright(c)2009,www.supersite.me*/

function iColorShow(id, id2) {
	var eICP = jQuery("#" + id).position();
	jQuery("#iColorPicker").css({
		'top': "-140px",
		'left': "170px",
		'position': 'absolute'
	}).fadeIn("fast");
	jQuery("#iColorPickerBg").css({
		'position': 'fixed',
		'top': 0,
		'left': 0,
		'width': '100%',
		'height': '100%'
	}).fadeIn("fast");
	var def = jQuery("#" + id).val();
	jQuery('#color').val(def);
	var hxs = jQuery('#iColorPicker');
	for (i = 0; i < hxs.length; i++) {
		var tbl = document.getElementById('hexSection' + i);
		var tblChilds = tbl.childNodes;
		for (j = 0; j < tblChilds.length; j++) {
			var tblCells = tblChilds[j].childNodes;
			for (k = 0; k < tblCells.length; k++) {
				jQuery(tblChilds[j].childNodes[k]).unbind().click(function () {
					var aaa = "#" + jQuery(this).attr('hx');
					jQuery("#" + id).val(aaa);
					jQuery("#" + id2).css("background", aaa);
					jQuery("#iColorPickerBg").hide();
					jQuery("#iColorPicker").fadeOut();
					jQuery(this)
				})
			}
		}
	}
}
this.iColorPicker = function () {
	jQuery("input.iColorPicker").each(function (i) {
		if (i == 0) {
			jQuery(document.createElement("div")).attr("id", "iColorPicker").css('display', 'none').html('<table class="pickerTable" id="pickerTable0"><tbody id="hexSection0"><tr><td style="background:#f00;" hx="f00"></td><td style="background:#ff0" hx="ff0"></td><td style="background:#0f0" hx="0f0"></td><td style="background:#0ff" hx="0ff"></td><td style="background:#00f" hx="00f"></td><td style="background:#f0f" hx="f0f"></td><td style="background:#fff" hx="fff"></td><td style="background:#ebebeb" hx="ebebeb"></td><td style="background:#e1e1e1" hx="e1e1e1"></td><td style="background:#d7d7d7" hx="d7d7d7"></td><td style="background:#cccccc" hx="cccccc"></td><td style="background:#c2c2c2" hx="c2c2c2"></td><td style="background:#b7b7b7" hx="b7b7b7"></td><td style="background:#acacac" hx="acacac"></td><td style="background:#a0a0a0" hx="a0a0a0"></td><td style="background:#959595" hx="959595"></td></tr><tr><td style="background:#ee1d24" hx="ee1d24"></td><td style="background:#fff100" hx="fff100"></td><td style="background:#00a650" hx="00a650"></td><td style="background:#00aeef" hx="00aeef"></td><td style="background:#2f3192" hx="2f3192"></td><td style="background:#ed008c" hx="ed008c"></td><td style="background:#898989" hx="898989"></td><td style="background:#7d7d7d" hx="7d7d7d"></td><td style="background:#707070" hx="707070"></td><td style="background:#626262" hx="626262"></td><td style="background:#555" hx="555"></td><td style="background:#464646" hx="464646"></td><td style="background:#363636" hx="363636"></td><td style="background:#262626" hx="262626"></td><td style="background:#111" hx="111"></td><td style="background:#000" hx="000"></td></tr><tr><td style="background:#f7977a" hx="f7977a"></td><td style="background:#fbad82" hx="fbad82"></td><td style="background:#fdc68c" hx="fdc68c"></td><td style="background:#fff799" hx="fff799"></td><td style="background:#c6df9c" hx="c6df9c"></td><td style="background:#a4d49d" hx="a4d49d"></td><td style="background:#81ca9d" hx="81ca9d"></td><td style="background:#7bcdc9" hx="7bcdc9"></td><td style="background:#6ccff7" hx="6ccff7"></td><td style="background:#7ca6d8" hx="7ca6d8"></td><td style="background:#8293ca" hx="8293ca"></td><td style="background:#8881be" hx="8881be"></td><td style="background:#a286bd" hx="a286bd"></td><td style="background:#bc8cbf" hx="bc8cbf"></td><td style="background:#f49bc1" hx="f49bc1"></td><td style="background:#f5999d" hx="f5999d"></td></tr><tr><td style="background:#f16c4d" hx="f16c4d"></td><td style="background:#f68e54" hx="f68e54"></td><td style="background:#fbaf5a" hx="fbaf5a"></td><td style="background:#fff467" hx="fff467"></td><td style="background:#acd372" hx="acd372"></td><td style="background:#7dc473" hx="7dc473"></td><td style="background:#39b778" hx="39b778"></td><td style="background:#16bcb4" hx="16bcb4"></td><td style="background:#00bff3" hx="00bff3"></td><td style="background:#438ccb" hx="438ccb"></td><td style="background:#5573b7" hx="5573b7"></td><td style="background:#5e5ca7" hx="5e5ca7"></td><td style="background:#855fa8" hx="855fa8"></td><td style="background:#a763a9" hx="a763a9"></td><td style="background:#ef6ea8" hx="ef6ea8"></td><td style="background:#f16d7e" hx="f16d7e"></td></tr><tr><td style="background:#ee1d24" hx="ee1d24"></td><td style="background:#f16522" hx="f16522"></td><td style="background:#f7941d" hx="f7941d"></td><td style="background:#fff100" hx="fff100"></td><td style="background:#8fc63d" hx="8fc63d"></td><td style="background:#37b44a" hx="37b44a"></td><td style="background:#00a650" hx="00a650"></td><td style="background:#00a99e" hx="00a99e"></td><td style="background:#00aeef" hx="00aeef"></td><td style="background:#0072bc" hx="0072bc"></td><td style="background:#0054a5" hx="0054a5"></td><td style="background:#2f3192" hx="2f3192"></td><td style="background:#652c91" hx="652c91"></td><td style="background:#91278f" hx="91278f"></td><td style="background:#ed008c" hx="ed008c"></td><td style="background:#ee105a" hx="ee105a"></td></tr><tr><td style="background:#9d0a0f" hx="9d0a0f"></td><td style="background:#a1410d" hx="a1410d"></td><td style="background:#a36209" hx="a36209"></td><td style="background:#aba000" hx="aba000"></td><td style="background:#588528" hx="588528"></td><td style="background:#197b30" hx="197b30"></td><td style="background:#007236" hx="007236"></td><td style="background:#00736a" hx="00736a"></td><td style="background:#0076a4" hx="0076a4"></td><td style="background:#004a80" hx="004a80"></td><td style="background:#003370" hx="003370"></td><td style="background:#1d1363" hx="1d1363"></td><td style="background:#450e61" hx="450e61"></td><td style="background:#62055f" hx="62055f"></td><td style="background:#9e005c" hx="9e005c"></td><td style="background:#9d0039" hx="9d0039"></td></tr><tr><td style="background:#790000" hx="790000"></td><td style="background:#7b3000" hx="7b3000"></td><td style="background:#7c4900" hx="7c4900"></td><td style="background:#827a00" hx="827a00"></td><td style="background:#3e6617" hx="3e6617"></td><td style="background:#045f20" hx="045f20"></td><td style="background:#005824" hx="005824"></td><td style="background:#005951" hx="005951"></td><td style="background:#005b7e" hx="005b7e"></td><td style="background:#003562" hx="003562"></td><td style="background:#002056" hx="002056"></td><td style="background:#0c004b" hx="0c004b"></td><td style="background:#30004a" hx="30004a"></td><td style="background:#4b0048" hx="4b0048"></td><td style="background:#7a0045" hx="7a0045"></td><td style="background:#7a0026" hx="7a0026"></td></tr></tbody></table><style>#iColorPicker input{margin:2px}</style>').appendTo(".danmakuuhaku-bar");
			jQuery(document.createElement("div")).attr("id", "iColorPickerBg").click(function () {
				jQuery("#iColorPickerBg").hide();
				jQuery("#iColorPicker").fadeOut()
			}).appendTo(".danmakuuhaku-bar");
			jQuery('table.pickerTable td').css({
				'width': '12px',
				'height': '14px',
				'border': '1px solid #000',
				'cursor': 'pointer'
			});
			jQuery('#iColorPicker table.pickerTable').css({
				'border-collapse': 'collapse'
			});
			jQuery('#iColorPicker').css({
				'border': '1px solid #ccc',
				'background': '#333',
				'padding': '5px',
				'color': '#fff',
				'z-index': 9999
			})
		}
		jQuery(this).css("backgroundColor", jQuery(this).val())
	})
};
jQuery(function () {
	iColorPicker()
})
/*Danmakuuhaku by Hitomi*/
var danmakuuhaku = function () {
	this.initDmkbar = function () {
		$('body').append('<style>.danmakuuhaku-bar { height: 36px; width: 640px; background: #fff; border-radius: 5px 0px 0px 5px; box-shadow: 0 0 5px #000; position: fixed; bottom: 5%; left: 50%; margin-left: -320px; overflow: visible; } .danmakuuhaku-bar .danmakuuhaku-setting { height: 36px; width: 36px; position: absolute; left: 0px; top: 0px; background: url(data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8yOC8xNNUCYp0AAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAABEklEQVQ4jaXTsUpcURAG4O9eLliqjWCVJ4il8QHuVNtsE+xCFJI2qZI2pa1gIYK+g0WqwUqxskmQmBSC75AihWY3xZ6FJXrdXfaHAzNnzv/zzwynGg6HFkEDEfEae3gxA2eIH/iEs6pt2z5OsFyK01CVc4/tBgdYwRXeZObP59gRsYHT4vZzjfVSezeNDJn5He8xwMsGdSl8m8H+GBdG7S7VRWkwB1lm/lFmUc9DfAoLCzSzPIqIL/9d3T0SiIgmMx86NFbwYSJ/NQ5q/C3xZpeDzPyI8ZZ2sFri+xq/SnIYEVsR0TWXt9jHNY6MtnBZtW3bwzHWuhw8gQq/0asz8yt2cTvRznMY4Ab9zDyvFv3O/wA6CkjkmVZ+xwAAAABJRU5ErkJggg==); background-repeat: no-repeat; background-position: 50% 50%; cursor: pointer; } .danmakuuhaku-bar .danmakuuhaku-input { height: 14px; width: 538px; border: none; padding: 5px; line-height: 15px; font-size: 13px; position: absolute; top: 6px; left: 36px; } .danmakuuhaku-bar .danmakuukaku-send { position: absolute; left: 590px; font-size: 14px; line-height: 28px; white-space: nowrap; padding: 4px 14px; color: #fff; background: #333; border-radius: 0px 5px 5px 0px; cursor: pointer; } .danmakuuhaku-bar .danmakuuhaku-dashboard { width: 140px; height: 92px; padding: 10px; border-radius: 5px; box-shadow: 0 0 5px #000; background: #fff; position: absolute; top: -120px; left: 0px; z-index: 1000; white-space: nowrap; overflow: hidden; } .danmakuuhaku-bar .danmakuuhaku-dashboard .color-picker { position: absolute; } .danmakuuhaku-bar .danmakuuhaku-dashboard .size-picker { position: absolute; top: 46px; width: 140px; height: 24px; border-radius: 3px; text-align: center; white-space: nowrap; } .danmakuuhaku-bar .danmakuuhaku-dashboard .size-picker span { display: inline-block; line-height: 24px; text-align: center; width: 42px; cursor: pointer; border-radius: 3px; } .danmakuuhaku-bar .danmakuuhaku-dashboard .dmk-active { background: #000; color: #fff; } .danmakuuhaku-bar .danmakuuhaku-dashboard .event-picker { position: absolute; top: 82px; } .danmakuuhaku-bar .danmakuuhaku-dashboard .event-picker span { padding: 3px; cursor: pointer; } .danmakuuhaku-bar .danmakuuhaku-dashboard #dmk-cp { width: 48px; height: 24px; border-radius: 3px 0px 0px 3px; border: 1px #ccc solid; position: absolute; z-index: 100; top: 1px; left: 1px; } .danmakuuhaku-bar .danmakuuhaku-dashboard #dmk-color { padding-left: 56px; border: 1px #ccc solid; width: 82px; height: 24px; position: absolute; border-radius: 5px; font-size: 14px; } .danmakuuhaku-dmk { pointer-events: none; z-index: 23333; white-space: nowrap; position: fixed; font-size: 24px; color: #FFF; text-shadow: 1px 0 1px #000, 0 1px 1px #000, 0 -1px 1px #000, -1px 0 1px #000; -webkit-filter: glow(color=black, strength=2); filter: glow(color=black, strength=2); font-family: "Microsoft YaHei", "WenQuanYi Micro Hei", "Droid Sans Fallback", "DejaVu Sans", "WenQuanYi Zen Hei", arial, sans-serif; } #dmk-container { overflow: show; width: 0px; height: 0px; position: fixed; top: 0px; left: 0px; } @-webkit-keyframes ml { 100% {left:-100%;} } @keyframes ml { 100% {left:-100%;} }</style>');
		$('body').append('<div class="danmakuuhaku-bar"><div style="display:none"><input type="hidden" id="danmakuuhaku-hidden" value="0"> <input type="hidden" id="danmakuuhaku-enable" value="1"> <input type="hidden" id="danmakuuhaku-fontsize" value="32px"></div><div class="danmakuuhaku-dashboard" style="display:none"><div class="color-picker"><div id="dmk-cp"></div><input type="text" id="dmk-color" class="iColorPicker" onclick="iColorShow(&quot;dmk-color&quot;,&quot;dmk-cp&quot;)" value="#FFFFFF"></div><div class="size-picker"><span dmks="32px">大</span> <span class="dmk-active" dmks="24px">中</span> <span dmks="16px">小</span></div><div class="event-picker"><span id="dmk-hidden">显示弹幕</span> <span id="dmk-enable">关闭弹幕</span></div></div><div class="danmakuuhaku-setting"></div><input type="text" class="danmakuuhaku-input" id="danmakuuhaku-content" placeholder="快来吐槽点什么吧！"><div class="danmakuukaku-send">发送</div><div id="dmk-container"></div></div>');
	};
	this.showOnScreen = function (dmk) {
		$(document.createElement("div")).addClass('danmakuuhaku-dmk').css({
			top: Math.floor(Math.random() * ($(window).height() / 2)) + 'px',
			left: '150%',
			fontSize: dmk.size,
			color: dmk.color,
			animation: 'ml 25s'
		}).text(dmk.content.substr(0, 64)).appendTo("#dmk-container").delay(25000).hide(0, function () {
			$(this).remove();
		});
	};
	this.sendDanmaku = function (dmk) {
		var dmks = {
			size: $('#danmakuuhaku-fontsize').val(),
			color: $('#dmk-color').val(),
			content: $('#danmakuuhaku-content').val()
		};
		sendMsg(dmks);
		this.showOnScreen(dmks);
		$('#danmakuuhaku-content').val('');
	};
	this.bindingEvent = function (self) {
		$('.danmakuuhaku-bar .danmakuuhaku-setting').on('click', function () {
			$('.danmakuuhaku-bar .danmakuuhaku-dashboard').fadeToggle();
		});
		$('.danmakuuhaku-bar .danmakuuhaku-input').on('click', function () {
			$('.danmakuuhaku-bar .danmakuuhaku-dashboard').fadeOut();
		});
		// 24 32 48
		$('.danmakuuhaku-bar .size-picker span').on('click', function () {
			$('.danmakuuhaku-bar .size-picker span').removeClass('dmk-active');
			$(this).addClass('dmk-active');
			$('#danmakuuhaku-fontsize').val($(this).attr('dmks'));
		});
		$('.danmakuuhaku-bar .event-picker #dmk-hidden').on('click', function () {
			if ($(this).hasClass('dmk-active')) {
				$('#danmakuuhaku-hidden').val('0');
				$(this).removeClass('dmk-active');
				$(this).html('显示弹幕');
				$('#dmk-container').fadeIn();
			} else {
				$('#danmakuuhaku-hidden').val('1');
				$(this).addClass('dmk-active');
				$(this).html('隐藏弹幕');
				$('#dmk-container').fadeOut();
			}
		});
		$('.danmakuuhaku-bar .event-picker #dmk-enable').on('click', function () {
			if ($(this).hasClass('dmk-active')) {
				$('#danmakuuhaku-enable').val('0');
				$(this).removeClass('dmk-active');
			} else {
				$('#danmakuuhaku-enable').val('1');
				$(this).addClass('dmk-active');
			}
		});
		$('.danmakuuhaku-bar .danmakuuhaku-input').keypress(function (event) {
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if (keycode == '13') {
				self.sendDanmaku();
			}
		});
		$('.danmakuuhaku-bar .danmakuukaku-send').on('click', function () {
			self.sendDanmaku();
		});
	};

	this.init = function () {
		this.bindingEvent(this);
	}
};
var danmakujs = new danmakuuhaku();
danmakujs.initDmkbar();
danmakujs.init();
$('#danmakuuhaku-content').attr('placeholder', '据说凑齐2333条弹幕可以召唤神龙！');
var addMessage = function (msg) {
	danmakujs.showOnScreen(msg);
}
ws.on('send.message', function (msg) {
	addMessage(msg);
});