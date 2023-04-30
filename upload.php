<?php


if (isset($_FILES['user_image']['name']) AND !empty($_FILES['user_image']['name'])){
  //  echo"<pre>";
  //  print_r($_FILES['user_image']);

  //  echo"</pre>";

    $img_name = $_FILES['user_image']['name'];
    $img_size = $_FILES['user_image']['size'];
    $tmp_name = $_FILES['user_image']['tmp_name'];
    $error = $_FILES['user_image']['error'];

    if($error===0){
        if($img_size>12500000){
            $em = "Sorry your file is too large";
            header("Location: signup.php?error=$em");
            
        }
        else{
           $img_ex = pathinfo($img_name,PATHINFO_EXTENSION);
          $img_ex_lc = strtolower($img_ex);
          $allowed_exs = array("jpg","png","jpeg");
          if(in_array($img_ex_lc,$allowed_exs)){
            $new_img_name = uniqid("IMG-",true).'.'.$img_ex_lc;
            $img_upload_path = 'uploads/'.$new_img_name;
            move_uploaded_file($tmp_name,$img_upload_path);

          }else{
            $em = "you cant upload files of this type";
            header("Location: signup.php?error=$em");
          }
          
        }
    }else{
        $em = "unkown error occured!";
        header("Location: signup.php?error=$em");

    }

}