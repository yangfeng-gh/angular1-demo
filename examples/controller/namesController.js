angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
    {name: 'Linus Torvalds', country: 'Finland'},
    {name: 'Bill Gates', country: 'Sweden'},
    {name: 'Larry Page', country: 'Denmark'},
    {name: 'Sergey Brin', country: 'Denmark'},
    {name: 'Steve Jobs', country: 'Norway'}
  ];
});