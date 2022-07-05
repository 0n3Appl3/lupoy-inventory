<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $query = "select name from location where id = '" . $_GET['id'] . "';";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $location = array();
        // Add all records into the array.
        while($row = $result->fetch()) {
            $location[] = $row;
        }
        // Send JSON data.
        echo json_encode($location);
    } else {
        die("Error in database query!");
    }
?>