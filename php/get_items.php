<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $query = "select * from item;";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $item = array();
        // Add all records into the array.
        while($row = $result->fetch()) {
            $item[] = $row;
        }
        // Send JSON data.
        echo json_encode($item);
    } else {
        die("Error in database query!");
    }
?>