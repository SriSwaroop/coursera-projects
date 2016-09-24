(function(){
  'use strict';
  angular.module('LunchCheck',[]).
  controller('LunchCheckController',function ($scope){
    $scope.txtintextbox="";
    $scope.isenjoyable=function () {
    $scope.msgonfoodtaken = checkifenjoyable($scope.txtintextbox);
  };

    function checkifenjoyable(string) {
      var arr =string.split(',');
      var tot=0;
      console.log(string);
      console.log(string.length);
      if(string.length>0)
      {
        for (var i = 0; i < string.split(',').length; i++) {
           tot++;
        }
        if(tot<=3)  {
          return "Enjoy!";
        }
        else {
          //console.log("");
          return "Too much!";
        }
      }
      else{
        return"Please enter data first";
      }
    }
  });

})();
