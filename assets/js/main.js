(function(){
    var makerApp = angular.module('makerApp', []);

    makerApp.controller('MakerController', function($scope, $sce){
        $scope.jsonHtml = {id:1, html: $sce.trustAsHtml("<strong>Prueba<\/strong>")};

        $scope.fields = [{id:1, html:$sce.trustAsHtml("<input type:\"text\" ng-model=\"nombre\">")},
                         {id:1, html:$sce.trustAsHtml("<input type:\"text\" ng-model=\"paterno\">")},
                         {id:1, html:$sce.trustAsHtml("<input type:\"text\" ng-model=\"materno\">")}];
    });
})();
