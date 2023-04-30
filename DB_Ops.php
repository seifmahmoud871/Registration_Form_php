<?php

$dbhost="localhost";
$dbname="Registration_webpage";
$dbuser="root";
$dbpass="";

$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

if(!$con){
    echo "hello";
    die("fail to connect");
}


?>

<?php

    // function check_login($con){
    //     if(isset($_SESSION['user_name'])){
    //         $user_name=$_SESSION['user_name'];
    //         $query="Select * users where user_name='$user_name'";
    //         $result=mysqli_query($con,$query);

    //         if($result&&mysqli_num_rows($result)>0){
    //             $user_data=mysqli_fetch_assoc($result);
    //             return $user_data;
    //         }
    //     }

    //     header("Location:login.php");
    //     die;
    // }
?>