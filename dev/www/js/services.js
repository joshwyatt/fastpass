angular.module('fastpass.services', ['ionic'])

// factory to setup our firebase connection
// used in listController
.factory('listService', ['$firebase', function($firebase) {
  var ref = new Firebase('https://fastpass-connection.firebaseio.com/');
  return $firebase(ref);
}])

.factory('formService', [function() {
  
}])

.factory('userService', function(){

  var isLoggedIn = function(){
    return true;
  };

  return {
    isLoggedIn: isLoggedIn
  };
});



// leftover tutorial junk
// .factory('Friends', function() {
//   // Might use a resource here that returns a JSON array

//   // Some fake testing data
//   var friends = [
//     { id: 0, name: 'Scruff McGruff' },
//     { id: 1, name: 'G.I. Joe' },
//     { id: 2, name: 'Miss Frizzle' },
//     { id: 3, name: 'Ash Ketchum' }
//   ];

//   return {
//     all: function() {
//       return friends;
//     },
//     get: function(friendId) {
//       // Simple index lookup
//       return friends[friendId];
//     }
//   };
// });



