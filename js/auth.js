app.controller('authCtrl',['$scope','$http',function($scope,$http){
	$scope.username = "Username";
	$scope.password = "Password";

}]);

app.directive('submitButton',function(){
	return{
		restrict: 'A',
		controller: SubmitButtonControler,
		controllerAs: 'ctrl',
		bindToController: true,
	  link: (scope, ele, attr) => {
	  	
      ele.on('click', function(e){
        scope.ctrl.submit();
      });
	  }
	}
})

function SubmitButtonControler($scope,$http,api){
	this.submit = function(){
	  const request = {'u':username.value,'p':password.value};
	  //console.log(request);	
	  const promise = api.authenticate(request);

	  promise.then(function(response){
	  	//console.log(response.data);
	  	const data = JSON.parse(JSON.stringify(eval(response))).data;
         //console.log(data);
        if(data != 'NO_USER'){
	  		window.location = '../contracts/home.php';
	  	}else{
	  		alert("No User Match");
	  		console.log(data);
	  	}
	  });
	}
}