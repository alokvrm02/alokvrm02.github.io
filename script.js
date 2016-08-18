var app = angular.module('myApp', ['ngStorage']);

app.controller('myCtrl', ['$rootScope', function ($rootScope) {
    $rootScope.test = "Welcome to Webinar";

}]);

app.controller('Cart', function ($rootScope, $localStorage) {
    var array = [];
    var getCart = function(){
        if($localStorage.arr==null){
            $localStorage.arr = [];
        }

        $rootScope.obj = $localStorage.arr;
        $rootScope.data = array;
        console.log('array is', array);

    };
    getCart();

    $rootScope.saveData = function (object) {
    if(object!=null){
        var obj  = {
            pro_name : object.prod,
            qty : object.qty,
            price : object.price
        };
        array.push(obj);
        if($localStorage.arr==null){
            $localStorage.arr = [];
        }
       // $localStorage.arr.push( obj);
    }
    };

    $rootScope.saveCart = function () {
        for(i in array)
        {
            $localStorage.arr.push( array[i]);
        }
       // $localStorage.arr= array;
        location.reload();

    }

    $rootScope.loadData = function () {
        for(var i in localStorage) {
            console.log(i + ' = ' + localStorage[i]);
        }

        $rootScope.obj = $localStorage.arr;
    };

    $rootScope.clearData = function () {
        localStorage.clear();
        location.reload();
    };

    $rootScope.removeData = function (index) {

        for(var i in $localStorage.arr) {

            console.log( $localStorage.arr[i].pro_name);
            if ( $localStorage.arr[i].pro_name === index ){
                $localStorage.arr.splice(i,1);
            }
            //console.log(i + ' = ' + localStorage[i]);
        }
        //localStorage.clear();
    };
});

