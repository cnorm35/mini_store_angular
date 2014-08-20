myApp.controller('CustomersController', function($scope, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();

	$scope.removeCust = function($index){
		console.log('Controller Before');
		$scope.customers.splice($index, 1);
		// var index = $scope.customers.indexOf(customer);
		// if(index != -1){
		// 	$scope.customers.splice(index, 1);
		// }

		
	}

	$scope.test = function(){
			console.log('TEST called');
		}

	$scope.addCustomer = function(){
			// CustomerFactory.addCustomer($scope.new_cust);
			// console.log('Hello from addCust Controllers!')
			var new_cust = $scope.new_cust.name;
			var old_cust;

			if(new_cust){
				angular.forEach($scope.customers, function(eachcustomer){
					if(new_cust.toLowerCase() == eachcustomer.name.toLowerCase()){
						old_cust = true;
						$scope.uniqueCust = ['The customer already exists', 'another value here'];
					}
				});
				if(!old_cust){
					CustomerFactory.addCustomer($scope.new_cust);
					//clears the values in the error array
					$scope.uniqueCust = [];
				}
			}
			//clears the customer name from the input field.
			$scope.new_cust.name = ""
		}


});


myApp.controller('OrdersController', function($scope, OrderFactory, CustomerFactory){
	$scope.customers = CustomerFactory.getCustomers();
	$scope.orders = OrderFactory.getOrders();
	
	$scope.addOrder = function(){
		OrderFactory.addOrder($scope.new_order);
	}

	$scope.test = function(){
		alert('dat shit workin now!');
	}
	
});