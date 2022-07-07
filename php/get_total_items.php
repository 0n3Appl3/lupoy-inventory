<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $query = "select count(*) as count from item;";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $count = array();
        // Add all records into the array.
        while($row = $result->fetch()) {
            $count[] = $row;
        }
        // Send JSON data.
        echo json_encode($count);
    } else {
        die("Error in database query!");
    }
?>