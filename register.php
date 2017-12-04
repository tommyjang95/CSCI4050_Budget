

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<title>Sign Up</title>
<body class="signUp" style="background-color: #ededed;">
<p class="head"> BudgetUp </p>
<form name="signUpForm"  method="POST" >

    <div class="body-content">
        <div class="form-container">
            <p id="form-title" align="center" class="pdtp-3pc">Create Your Account</p>

            <!--  first name / last name -->
            <div class="row ">
                <div class= "col-md-6 pdtp-3pc">
                    <input class="form-control" type="text" name="firstname" placeholder="First Name" ng-model="signUpObj.firstName" ng-required="true">
                </div>
                <div class= "col-md-6 pdtp-3pc">
                    <input class="form-control" type="text" name="lastname" placeholder="Last Name" ng-model="signUpObj.lastName" ng-required="true">
                </div>
            </div>

            <div class="row">
                <div class= "col-md-6 pdtp-3pc">
                    <input class="form-control" type="text" name="username" placeholder="Username">

                </div>

                <div class="row ">
                    <div class= "col-md-6 pdtp-3pc">
                        <input class="form-control" type="password" name="password" placeholder="Password">
                    </div>
                </div>


                <div align="center" class="pdtp-3pc">
                    <button type="submit" class="btn btn-default" name="signupbtn" ><a href="login.html">Sign Up</a> </button>
                    <br><br>
                </div>
            </div>
        </div>
</form>

</body>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</html>