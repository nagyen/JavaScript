//function to get scope of any angular controller
function getCntrlScope(cntrlName){
  //find the cntrl and return its scope
  var $scope = angular.element("[ng-controller=" + cntrlName + "]").scope();
  return $scope;
}

//if there are multiple controllers with same name you can isolate the controller using its unique attribute
//for example lets consider data-distinct-attr as an unique attribute for every controller
function getDistinctCntrlScope(cntrlName, attrValue){
  //find the cntrl with given attr
  var $scope = angular.element("[ng-controller=" + cntrlName + "][data-distinct-attr=" + attrValue + "]").scope();
  return $scope;
}

//you can refine the above function to take the entire attribute instead of attrValue alone to make it more generic
