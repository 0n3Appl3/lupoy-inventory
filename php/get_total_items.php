<?php
    // Connect to the database.
    require_once("connect_home.php");
    require_once("helper/apply_filter.php");

    // Make a database query.
    $query = "select count(*) as count from item where";

    // Apply query filters.
    apply_filter("name", true);
    apply_filter("category", false);
    apply_filter("location", false);

    $query = $query . ";";
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