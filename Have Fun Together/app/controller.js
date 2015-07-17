(function () {
	var app = angular.module('HFT', ['ngAnimate']);
	app.filter('hoffset', function () {
		return function (input, start) {
			start = parseInt(start, 10);
			if(start<10) {
				start = 0;
			} else {
				start = start - 10;
			}
			return input.slice(start);
		};
	});
	app.filter('search', function () {
		return function (input, key) {
			var res = new Array(), i;
			for(i=0;i<input.length;i++) {
				if(!key || input[i].title.indexOf(key)!=-1) {
					res.push(input[i]);
				}
			}
			return res;
		};
	});
	app.directive('checkpw', [
	function () {
			return {
				require: "ngModel",
				link: function (scope, element, attr, ngModel) {
					
				}
			};
	}]);
	app.controller('HFTCore', ['$http', '$scope', function ($http, $scope) {
		this.showLogin = false;
		this.showRegister = false;
		this.showDlg = false;
		this.dlgTitle = '';
		this.dlgMsg = '';
		this.dlgSuccess = true;
		this.keyword = '';
		this.ableLogin = {
			un: true,
			pw: true
		};
		this.ableReg = {
			un: true,
			pw: true,
			rp: true
		};
		this.user = {
			login: true,
			name: 'test',
			head: './assets/images/head/01.png'
		};
		this.posts = [{
			type: '线上',
			title: '活动标题',
			author: '组织者',
			head: './assets/images/head/01.png',
			datetime: '2014/12/27 13:58:33',
			content: '其中，指令无疑是使用量最大的，ng内置了很多指令用来控制模板，如ng-repeat，ng-class，也有很多指令来帮你完成业务逻辑，如ng-controller,ng-model。过滤器通常是伴随标记来使用的，将你model中的数据格式化为需要的格式。表单的控制功能主要涉及到数据验证以及表单控件的增强。'
		},{
			type: '线上',
			title: 'asdfsadgasgfdgad',
			author: '组织者',
			head: './assets/images/head/01.png',
			datetime: '2014/12/27 13:58:33',
			content: '其中，指令无疑是使用量最大的，ng内置了很多指令用来控制模板，如ng-repeat，ng-class，也有很多指令来帮你完成业务逻辑，如ng-controller,ng-model。过滤器通常是伴随标记来使用的，将你model中的数据格式化为需要的格式。表单的控制功能主要涉及到数据验证以及表单控件的增强。'
		},{
			type: '线上',
			title: 'w123123123123123',
			author: '组织者',
			head: './assets/images/head/01.png',
			datetime: '2014/12/27 13:58:33',
			content: '其中，指令无疑是使用量最大的，ng内置了很多指令用来控制模板，如ng-repeat，ng-class，也有很多指令来帮你完成业务逻辑，如ng-controller,ng-model。过滤器通常是伴随标记来使用的，将你model中的数据格式化为需要的格式。表单的控制功能主要涉及到数据验证以及表单控件的增强。'
		},{
			type: '线上',
			title: '活动标题qeqweqw e1231 ',
			author: '组织者',
			head: './assets/images/head/01.png',
			datetime: '2014/12/27 13:58:33',
			content: '其中，指令无疑是使用量最大的，ng内置了很多指令用来控制模板，如ng-repeat，ng-class，也有很多指令来帮你完成业务逻辑，如ng-controller,ng-model。过滤器通常是伴随标记来使用的，将你model中的数据格式化为需要的格式。表单的控制功能主要涉及到数据验证以及表单控件的增强。'
		}];
		this.prepost = {
			edit: false,
			type: '线下',
			title: '',
			author: this.user.name,
			head: this.user.head,
			datetime: '',
			content: ''
		};
		this.chatMsg = [{
			head: './assets/images/head/01.png',
			msg: '23333'
		},{
			head: './assets/images/head/02.png',
			msg: '23333'
		}];
		this.havePosts = function() {
			var input = this.posts;
			for(i=0;i<input.length;i++) {
				if(!$scope.keywords || input[i].title.indexOf($scope.keywords)!=-1) {
					return false;
				}
			}
			return true;
		};
		this.searchKeyword = function() {
			this.keyword = $scope.keywords;
		};
		this.loginDlg = function() {
			this.showLogin = !this.showLogin;
			if(!this.showLogin) {
				$scope.loginUsername = '';
				$scope.loginPassword = '';
			}
		};
		this.regDlg = function() {
			this.showRegister = !this.showRegister;
			if(!this.showLogin) {
				$scope.registerUsername = '';
				$scope.registerPassword = '';
				$scope.registerRPassword = '';
			}
		};
		this.setDlg = function(title, msg) {
			this.dlgTitle = title;
			this.dlgMsg = msg;
		};
		this.dlgIt = function(){
			this.showDlg = !this.showDlg;
		};
		this.postAct = function() {
			if(!this.user.login) {
				this.loginDlg();
				return;
			}
			this.prepost.edit = !this.prepost.edit;
		};
		/*this.doLogin = function() {
			this.showLogin = false;
			this.setDlg('登陆', '登陆成功！');
			this.dlgSuccess = true;
			this.showDlg = true;
		};*/
		// POST DATA
		this.doLogin = function(s) {
			if(!s) {
				if(!$scope.loginUsername) this.ableLogin.un = false;
				if(!$scope.loginPassword) this.ableLogin.pw = false;
				return;
			};
			/*$http({
				method: 'POST',
				data: {
					username: $scope.loginUsername,
					password: $scope.loginPassword
				},
				url: './cgi-bin/api?action=login'
			})
			.success(function(response, status, headers, config){
				
			})
			.error(function(){
				
			});*/
		};
		this.doRegister = function(s) {
			if(!s) {
				if(!$scope.registerUsername) this.ableReg.un = false;
				if(!$scope.registerPassword) this.ableReg.pw = false;
				if(!$scope.registerRPassword) this.ableReg.rp = false;
				return;
			};
			/*$http({
				method: 'POST',
				data: {
					username: $scope.registerUsername,
					password: $scope.registerPassword
				},
				url: './cgi-bin/api?action=register'
			})
			.success(function(response, status, headers, config){
				
			})
			.error(function(){
				
			});*/
		};
		this.doSendMsg = function(s) {
			if(!s) return;
			if(!this.user.login) {
				this.loginDlg();
				return;
			}
			this.chatMsg.push({
				head: './assets/images/head/01.png',
				msg: $scope.mchat
			});
			$scope.mchat = '';
			/*$http({
				method: 'POST',
				data: {
					
				},
				url: './cgi-bin/api?action=msg'
			})
			.success(function(response, status, headers, config){
				
			})
			.error(function(){
				
			});*/
		};
		this.doSendPost = function(s) {
			if(!s) return;
			if(!this.user.login) {
				this.loginDlg();
				return;
			}
			/*$http({
				method: 'POST',
				data: {
				
				},
				url: './cgi-bin/api?action=post'
			})
			.success(function(response, status, headers, config){
				
			})
			.error(function(){
				
			});*/
		};
	}]);
})();