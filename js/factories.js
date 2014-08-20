myApp.factory('CustomerFactory', function(){
	//init any data that we want to use in the view.
	var customers = [
		{name: "Michael Choi", created: '4/17/85'},
		{name: "John Suspusin", created: '4/17/82'},
	    {name: "Trey Villafane", created: '4/15/87'},
		{name: "India", created: '5/17/14'}
	]
	var factory = {};

	factory.getCustomers = function(){
	return customers;
	}

	factory.addCustomer = function(info){
		customers.push({
			name: info.name,
			created: new Date()
		});
		console.log('hello from addCust Factory')
	}

	return factory;

});

myApp.factory('OrderFactory', function(){
	var factory = {};
	var orders = []

	factory.addOrder = function(info){
		console.log(info);
		orders.push({
			name: info.name,
			product: info.product,
			quantity: info.quantity,
			date: new Date()
		})
		console.log(orders)
	}

	factory.getOrders = function(){
		return orders;
	}

	return factory;
})




