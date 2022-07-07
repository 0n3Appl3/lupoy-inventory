<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database query.
    $offset = $_GET['amount'] * $_GET['page'] - $_GET['amount'];
    $query = "select * from item limit " . $_GET['amount'] . " offset " . $offset . ";";
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