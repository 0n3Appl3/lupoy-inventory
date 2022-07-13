<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $query = "select price from item;";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $price = 0;
        // Add all records into the array.
        while($row = $result->fetch()) {
            $price = $price + $row[0];
        }
        // Send JSON data.
        echo json_encode($price);
    } else {
        die("Error in database query!");
    }
?>