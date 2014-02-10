var main = function($scope){
	$scope.users =[
	               {"name":"A"  , "score":300},
	               {"name":"B"  , "score":150},
	               {"name":"C"  , "score":400},
	               {"name":"D"  , "score":500},
	               {"name":"E"  , "score":200},
	               ];
	$scope.today = new Date();
}


var plus = function($scope){
	$scope.increment = function(){
		$scope.user.score ++ ;
	}
}