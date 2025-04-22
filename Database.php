<?php 
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "usersdb";
    $conn = "";

    try{
        $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
    }catch(mysqli_connect){
        echo "failed connection";
    }

    if(isset($_POST["btnSignin"])){
        $userName = $_POST["userName"];
        $userEmail = $_POST["userEmail"];
        $userPhoneNumber = $_POST['userPhoneNumber'];
        $userPassword = password_hash($_POST['userPassword'], PASSWORD_BCRYPT); 
        $subType = $_POST["subType"];
    }

    $sql = "INSERT INTO userdata (userName, userEmail, userNumber, userPassword)
            VALUES (Nomsa Damane, lolwethudamane07@gmail.com, 07118002234, Angelina12)";

    try{
        mysqli_query($conn, $sql);
    }
    catch(mysqli_sql_exception $e){
        echo 'Error: ' . $e->getMessage();
    }

    mysqli_close($conn);
    
?>