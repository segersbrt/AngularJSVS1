(function () {

    //instantiëring van de hoofdmodule
    var appAngular = angular.module("MainModule", [])

    var MainController = function (s, h) {


        //Functie die wordt uitgevoerd als gevolg van de promesse methode dat uitgevoerd wordt met de response die terugkomt van de api return
       
        var onSuccess = function (response) {
            s.success = response.data;
        }

        var onError = function (response) {
            s.error = 'Could not fetch the user';
        }


        h.get("https://api.github.com/users/segersbrt").then(onSuccess, onError);



        var person = {
            firstName: "Bart",
            lastName: "Segers",
            imageSource: "http://bartsimpsonpictures.squarelogic.net/bart-simpson-01.gif"
        }

        s.message = "Hello Angular";
       
        s.person = person;

    }

        
    appAngular.controller("MainController", ["$scope", "$http", MainController])


}());

