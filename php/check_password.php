<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Get JSON data.
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);
    $username = $data['username'];
    $password = $data['password'];

    // Make a database query.
    $query = "select password from account where username = '" . $username . "';";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $correct_password = False;
        $db_password = "";
        // Add all records into the array.
        while($row = $result->fetch()) {
            $db_password = $row[0];
        }
        if ($password === $db_password) {
            $correct_password = True;
        }
        // Send JSON data.
        echo json_encode($correct_password);
    } else {
        die("Error in database query!");
    }
?>