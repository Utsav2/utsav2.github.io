var myAppModule = angular.module('todolist', ['ui.sortable'])

function todo($scope){

	$scope.user = null;

	$scope.todos = []

	$scope.startSession = function(){

		Todo.startSession({

			email: $scope.email,

			password: $scope.password,

			success: function(myuser){$scope.user = myuser; $scope.$apply()},

			error: errorAlert

		});

	}

	$scope.createUser = function(){

		Todo.createUser({

			email: $('#email').val(),

			password: $('#password').val(),

			success: function(myuser){$scope.user = myuser; $scope.$apply()},

			error: errorAlert

		});

	}

	$scope.loadTodos = function(){

		Todo.USER = $scope.user;

		Todo.loadTodos({
	      success: function(todos) { $scope.todos = todos; $scope.$apply();},
	      error: errorAlert
	    });	

	}

	$scope.createTodo = function(){

		Todo.USER = $scope.user;

		var todo = {};

		todo.description = $scope.addTodoForm;

		$scope.addTodoForm = null

		Todo.createTodo({

			todo:todo,

			success: function(todo){$scope.loadTodos(); console.log($scope.todos)},

			error: errorAlert

		}); 

	}

	$scope.updateTodo = function(item){

		Todo.updateTodo({

			todoId: item.id,

			data:{is_complete : !item.is_complete},

			success: function(todo){},

			error: errorAlert

		})
	}

	$scope.$watch('user', function(){

		if($scope.user === null){ 		

			//If the user has not yet logged in.

			$('#login').removeClass('hidden');

			$('#todo').addClass('hidden');

		}
		else{	

			//If the user has succesfully logged in.

			$('#login').addClass('hidden');

			$('#todo').removeClass('hidden');

			$scope.loadTodos();

		}
	
	});

	function errorAlert(xhr){ 


		//parse the error response and print the server's error message

		alert((JSON.parse(xhr.responseText)).error);
	}

}