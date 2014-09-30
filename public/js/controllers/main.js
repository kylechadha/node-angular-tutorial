angular.module('todoController', [])

  // inject the Todo service factory into our controller
  .controller('mainController', function($scope, $http, Todos) {
    $scope.formData = {};
    console.log('Angular is linked up!');

    // GET =====================================================================
    // when landing on the page, get all todos and show them
    Todos.get()
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      // .error(function(data) {
      //   console.log('Error: ' + data);
      // });

    // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {

      if (!$.isEmptyObject($scope.formData)) {

        Todos.create($scope.formData)
          .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.todos = data;
            console.log(data);
          })
          // .error(function(data) {
          //   console.log('Error: ' + data);
          // });

      }

    };

    // DELETE ==================================================================
    // delete a todo after checking it
    $scope.deleteTodo = function(id) {

      Todos.delete(id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      // .error(function(data) {
      //   console.log('Error: ' + data);
      // });

    };

  });
