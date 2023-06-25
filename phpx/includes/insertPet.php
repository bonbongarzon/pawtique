<?php


include('../connections.php');



if (isset($_POST['addNewPet'])) {


    $petname = "Sample";

    $sql = "INSERT INTO pets (owner_email, petname, species,breed) 
    VALUES ('$petname', '$petname','$petname','$petname')";
    mysqli_query($conn, $sql);

    echo $petname;

}

?>