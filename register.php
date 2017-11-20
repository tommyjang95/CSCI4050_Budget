<?php
/**
 * Created by PhpStorm.
 * User: TommyJang
 * Date: 11/20/17
 * Time: 3:35 PM
 */

    $email = "";
    /*
    $fName = "";
    $lName = "";
    $gender = "";
    $bDate = "";
    $pNumber = "";
    $password = "";
    */
    $errors = array();


//connecting to database

    $db = mysql_connect('localhost', 'root', 'registration');

    //when regsiter button is clicked
    if(isset($_POST['register'])) {
        $email = mysql_real_escape_string($POST['email']);
        $fName = mysql_real_escape_string($POST['fName']);
        $lName = mysql_real_escape_string($POST['lName']);
        $gender = mysql_real_escape_string($POST['gender']);
        $bDate = mysql_real_escape_string($POST['bDate']);
        $pNumber = mysql_real_escape_string($POST['pNumber']);
        $password1 = mysql_real_escape_string($POST['password1']);
        $password2 = mysql_real_escape_string($POST['password2']);


        //checking if inputs are filled in correctly

        if(empty($email)) {
            array_push($errors, "Email is required");
        }
        if(empty($fName)) {
            array_push($errors, "First Name is required");
        }
        if(empty($lName)) {
            array_push($errors, "Last Name is required");
        }
        if(empty($gender)) {
            array_push($errors, "Gender is required");
        }
        if(empty($bDate)) {
            array_push($errors, "Birth Date is required");
        }
        if(empty($pNumber)) {
            array_push($errors, "Phone Number is required");
        }
        if(empty($password)) {
            array_push($errors, "Password is required");
        }

        if($password1 != $password2) {
            array_push($errors, "Passwords do not match");
        }


        //if no errors, save user to database

        if(count($errors) == 0 ) {
            $password = md5($password1); // encrypting password for security
            $sql = "INSERT INTO users (email, fName, lName, gender, bDate, pNumber, password)
                    VALUES ('$email', '$fname', '$lName', '$gender', '$bDate', '$pnumber', '$password')";
            mysqli_query($db, $sql);
        }


    }

//14:16









?>