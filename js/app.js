var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'partials/customers.html',
		})
		.when('/orders', 
		{
			templateUrl: 'partials/orders.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

//create filter to filter through the quantity on the order view.
myApp.filter('range', function(){
		//input will be the array that holds the range of #'s ng-repeat will pull from.
	return function(input, min, max){
		min = parseInt(min);  //convert the string input into integer.
		max = parseInt(max);
		for(var i=min; i<max; i++)
			input.push(i);
		return input;
		};
})