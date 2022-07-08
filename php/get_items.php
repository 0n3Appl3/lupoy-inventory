<?php
    // Connect to the database.
    require_once("connect_home.php");
    require_once("helper/apply_filter.php");

    // Make a database query.
    $offset = $_GET['amount'] * $_GET['page'] - $_GET['amount'];
    $query = "select * from item where";

    // Apply query filters.
    applyFilter("name", true);
    applyFilter("category", false);
    applyFilter("location", false);

    // Limit how many records are displayed at once.
    $query = $query . " limit " . $_GET['amount'] . " offset " . $offset . ";";
    // Run the query.
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