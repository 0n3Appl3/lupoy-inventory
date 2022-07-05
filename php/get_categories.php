<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $query = "select * from category;";
    $result = $con->query($query);

    // Check that query result is valid.
    if ($result != False) {
        $category = array();
        // Add all records into the array.
        while($row = $result->fetch()) {
            $category[] = $row;
        }
        // Send JSON data.
        echo json_encode($category);
    } else {
        die("Error in database query!");
    }
?>