angular.module('demo', [])
    .controller('navCtrl',function($scope,$location){
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    })
    .controller('tabsCtrl', ['$scope', function ($scope) {
    	
    }])
    .controller('formsCtrl',function ($scope,$rootScope,$http) {

      $scope.submit = function(){
      if ($scope.regForm.$valid) {
        alert('good');
      }

      }
    })
    .controller('loadingCtrl', ['$scope', function ($scope) {
    	
    }])
	.config(function ($routeProvider) {
		$routeProvider.when('/tabs', {
			templateUrl: '../page/tabs.html',
			controller: 'tabsCtrl',
			title: 'tabs',
			info: '一个简单的选项卡切换效果'
	
		}).when('/form', {
			templateUrl: '../page/form.html',
		  controller: 'formsCtrl',
			title: 'form validate',
			info: '基本表单验证代码'
	
		}).when('/', {
	        templateUrl: '../page/tabs.html',
	        controller: 'tabsCtrl',
	        title: 'Demo™',
			info: '我的AngularJS学习笔记'

	    }).when('/loading', {
	        templateUrl: '../page/loading.html',
	        controller: 'loadingCtrl',
	        title: 'loading'
	    })

	})
	.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading"></div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  })
	.run(['$location', '$rootScope', function($location, $rootScope) {
     $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
        $rootScope.title = currentRoute.title;
        $rootScope.info = currentRoute.info;
    });
}])