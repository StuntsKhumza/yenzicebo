
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>YC</title>
        <!--
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css" integrity="sha384-AysaV+vQoT3kOAXZkl02PThvDr8HYKPZhNT5h/CXfBThSRXQ6jW5DO2ekP5ViFdi" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha384-3ceskX3iaEnIogmQchP8opvBy3Mi7Ce34nWjpBIwVTHfGYWQS9jwHDVRnpKKHJg7" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js" integrity="sha384-XTs3FgkjiBgo8qjEjBk0tGmf3wPrWtA6coPfQDfFEY8AnYJwjalXCiosYRBIBZX8" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/js/bootstrap.min.js" integrity="sha384-BLiI7JTZm+JWlgKa0M0kGRpJbF2J8q+qreVrKBC47e3K6BW78kGLrCkeRX6I9RoK" crossorigin="anonymous"></script>

	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.2/angular-ui-router.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-cookie/4.1.0/angular-cookie.js"></script>

        -->

        <link rel="stylesheet" href="configs/bootstrap.min.css" >

        <link rel="icon" href="img/icon.png">
       
        <script src="configs/jquery.min.js"></script>
        <script src="configs/tether.min.js"></script>
        <script src="configs/bootstrap.min.js"></script>
	    <script src="configs/angular.min.js"></script>

<link rel="stylesheet" href="css/w3.css" >
<link rel="stylesheet" href="css/nav.css" >
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 

        <link rel="stylesheet" href="css/home.css">
        <link rel="stylesheet" href="css/utils.css">

        <script src="js/modules/main.js"></script>
        <script src="js/modules/home/home.js"></script>
        <script src="js/modules/utils/nav/nav.js"></script>
        <script  src="js/navConfig.js"></script>
        
 <script>
        function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
    </script>
    <body ng-app="main-app">
        <home></home>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img src="img/icons/social/facebook.png" height="40"><img src="img/icons/social/twitter.png" height="40"><img src="img/icons/social/linkedin.png" height="40">
                    </div>
                </div>
                Website designed by <b><a href="#">Web Demos</a></b>
            </div>
        </footer>
    </body>
</html>

