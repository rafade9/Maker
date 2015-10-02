(function(){
    var makerApp = angular.module('makerApp', []);

    makerApp.controller('MakerController', function($scope, $sce){
        $scope.jsonHtml = {id:1, html: $sce.trustAsHtml("<strong>Prueba<\/strong>")};

        $scope.fields = [{id:1, tag:'Nombre', html:$sce.trustAsHtml("<input type=\"text\" class=\"form-control\" ng-model=\"nombre\">")},
                         {id:1, tag:'Apellido Paterno', html:$sce.trustAsHtml("<input class=\"form-control\" type=\"text\" ng-model=\"paterno\">")},
                         {id:1, tag:'Apellido Materno', html:$sce.trustAsHtml("<input class=\"form-control\" type=\"text\" ng-model=\"materno\">")},
                         {id:1, tag:'Edad', html:$sce.trustAsHtml("<input class=\"form-control\" type=\"number\" ng-model=\"edad\">")}];
    });
})();
