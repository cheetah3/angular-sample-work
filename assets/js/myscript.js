 var app = angular.module ("myapp",['ngRoute']);

 app.config(['$routeProvider', function($routeProvider) {
 		$routeProvider.
 			when('/', {
 				templateUrl : 'index1.html',
 				controller : 'HomePageController'
 			}).
 			when('/signup1',{
 				templateUrl : 'signup1.html',
 				controller : 'Signup1PageController'
 			}).
 			when('/signup2a',{
 				templateUrl : 'signup2a.html',
 				controller : 'Signup2aPageController'
 			}).
 			when('/signup2b',{
 				templateUrl : 'signup2b.html',
 				controller : 'Signup2bPageController'
 			}).
 			when('/signup2c',{
 				templateUrl : 'signup2c.html',
 				controller : 'Signup2cPageController'
 			}).
 			when('/signup2d',{
 				templateUrl : 'signup2d.html',
 				controller : 'Signup2dPageController'
 			}).
 			when('/signup3',{
 				templateUrl : 'signup3.html',
 				controller : 'Signup3PageController'
 			}).
 			when('/signup4',{
 				templateUrl : 'signup4.html',
 				controller : 'Signup4PageController'
 			}).
 			otherwise({
 				redirectTo : '/'
 			});
 }]);

app.service('HomeService', function () {

	var InfoList = [];

	return {
		getInfoList : function () {

			return InfoList;

		},

		saveInfoList : function (list) {

			InfoList.push(list);

		}
	};
});
 
app.controller('HomePageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {
 	 	
 	$scope.continue = function () {

 		$location.path("/signup1");

 	}
}]);

app.controller('Signup1PageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {
 	
 	$scope.continue = function () {

 		if ($scope.theme) {

 			HomeService.saveInfoList($scope.theme);
 			$location.path("/signup2a");

 		};

 	}

}]);

app.controller('Signup2aPageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {

	$scope.continue = function () {

		if ($scope.church_name && $scope.church_location) {

			HomeService.saveInfoList($scope.church_name);
			HomeService.saveInfoList($scope.church_location);
			HomeService.saveInfoList($scope.Domain);
			HomeService.saveInfoList($scope.Domain_owned);
			$location.path("/signup2b");

		};
		
	}
 	
}]);

app.controller('Signup2bPageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {

	$scope.service1_check = true;
	$scope.service1_name = "Sunday School";
	$scope.service1_time = "9:30 am";
	$scope.service2_check = true;
	$scope.service2_name = "Sunday AM Service";
	$scope.service2_time = "10:30 am";
	$scope.service3_check = true;
	$scope.service3_name = "Sunday PM Service";
	$scope.service3_time = "6:00 pm";
	$scope.service4_check = true;
	$scope.service4_name = "Wednesday Bible Study";
	$scope.service4_time = "7:00 pm";
	$scope.service5_name = "Thursday Kids Club";
	$scope.service5_time = "6:30 pm";

 	$scope.continue = function () {

 		HomeService.saveInfoList($scope.service1_check);
 		HomeService.saveInfoList($scope.service1_name);
 		HomeService.saveInfoList($scope.service1_time);

 		HomeService.saveInfoList($scope.service2_check);
 		HomeService.saveInfoList($scope.service2_name);
 		HomeService.saveInfoList($scope.service2_time);

 		HomeService.saveInfoList($scope.service3_check);
 		HomeService.saveInfoList($scope.service3_name);
 		HomeService.saveInfoList($scope.service3_time);

 		HomeService.saveInfoList($scope.service4_check);
 		HomeService.saveInfoList($scope.service4_name);
 		HomeService.saveInfoList($scope.service4_time);

 		HomeService.saveInfoList($scope.service5_check);
 		HomeService.saveInfoList($scope.service5_name);
 		HomeService.saveInfoList($scope.service5_time);
 		

 		// HomeService.saveInfoList($service);
		$location.path("/signup2c");
	}

}]);

app.controller('Signup2cPageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {

 	$scope.continue = function () {
 		if ($scope.PastorName) {

 			HomeService.saveInfoList($scope.PastorName);
 			HomeService.saveInfoList($scope.ChurchAddress);
 			HomeService.saveInfoList($scope.ChurchPhone);
 			HomeService.saveInfoList($scope.ChurchEmail);
 			$location.path("/signup2d");

 		};
		
	}

}]);

app.controller('Signup2dPageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {

 	$scope.continue = function () {

 		// if ($scope.WebLeadName && $scope.WebLeadPhone && $scope.WebLeadEmail && $scope.BestTimeToCall) {

 			HomeService.saveInfoList($scope.WebLeadName);
 			HomeService.saveInfoList($scope.WebLeadPhone);
 			HomeService.saveInfoList($scope.WebLeadEmail);
			HomeService.saveInfoList($scope.BestTimeToCall);
 			$location.path("/signup3");

 		// };	

	}

}]);

app.controller('Signup3PageController',['$scope' , '$location' , '$http' , 'HomeService', function($scope, $location,$http, HomeService) {

	$infoList = HomeService.getInfoList();
	console.log($infoList);
	$scope.theme = $infoList[0];
	
	$scope.church_name = $infoList[1];
	$scope.church_location = $infoList[2];
	$scope.Domain = $infoList[3];
	$scope.Domain_owned = $infoList[4];
	
	$scope.service1_check = $infoList[5];
	$scope.service1_name = $infoList[6];
	$scope.service1_time = $infoList[7];
	
	$scope.service2_check = $infoList[8];
	$scope.service2_name = $infoList[9];
	$scope.service2_time = $infoList[10];

	$scope.service3_check = $infoList[11];
	$scope.service3_name = $infoList[12];
	$scope.service3_time = $infoList[13];

	$scope.service4_check = $infoList[14];
	$scope.service4_name = $infoList[15];
	$scope.service4_time = $infoList[16];

	$scope.service5_check = $infoList[17];
	$scope.service5_name = $infoList[18];
	$scope.service5_time = $infoList[19];

	$scope.PastorName = $infoList[20];
	$scope.ChurchAddress = $infoList[21];
	$scope.ChurchPhone = $infoList[22];
	$scope.ChurchEmail = $infoList[23];

	$scope.WebLeadName = $infoList[24];
	$scope.WebLeadPhone = $infoList[25];
	$scope.WebLeadEmail = $infoList[26];
	$scope.BestTimeToCall = $infoList[27];

 	$scope.continue = function () {


 		$service = "";
 		if($scope.service1_check == true) {

 			$service1 = $scope.service1_name + " - " + $scope.service1_time + "\n";
 			$service += $service1;

 		}
 		if($scope.service2_check == true) {

 			$service2 = $scope.service2_name + " - " + $scope.service2_time + "\n";
 			$service += $service2;

 		}
 		if($scope.service3_check == true) {

 			$service3 = $scope.service3_name + " - " + $scope.service3_time + "\n";
 			$service += $service3;

 		}
 		if($scope.service4_check == true) {

 			$service4 = $scope.service4_name + " - " + $scope.service4_time + "\n";
 			$service += $service4;

 		}
 		if($scope.service5_check == true) {

 			$service5 = $scope.service5_name + " - " + $scope.service5_time + "\n";
 			$service += $service5;

 		}

 		var $fields = {};
 		$fields.church_name = $scope.church_name;
 		$fields.Logo = [];
 		$fields.church_location = $scope.church_location;
 		$fields.theme = $scope.theme;
 		$fields.Domain = $scope.Domain;
 		$fields.Domain_owned = $scope.Domain_owned;
 		$fields.Service_Schedule = $service;
 		$fields.Church_Address = $scope.ChurchAddress;
 		$fields.Pastor_Name = $scope.PastorName;
 		$fields.Web_Lead_name = $scope.WebLeadName;
 		$fields.Web_lead_phone = $scope.WebLeadPhone;
 		$fields.Web_lead_email = $scope.WebLeadEmail;
 		$fields.Church_Phone = $scope.ChurchPhone;
 		$fields.Church_email = $scope.ChurchEmail;
 		$fields.Site_Rep = [];

 		var $data = {};
 		$data.fields = $fields;

 		console.log($fields);
 		$http.defaults.headers.common.Authorization = 'Bearer keyRTLlrVS02vC3Vx';
 		$http.post('https://api.airtable.com/v0/appRsxMDmiHHQ5ziK/Client%20entries', $data).then(function(response){
 		 	$location.path("/signup4");
 		},function(response){

 		});
	}
}]);

app.controller('Signup4PageController',['$scope', '$location' ,'HomeService', function($scope,$location,HomeService) {
 	

}]);