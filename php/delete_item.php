<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Make a database delete query.
    $query_delete_item = "delete from item where id = " . $_GET['id'] . ";";
    $statement = $con->prepare($query_delete_item);
    // Update record.
    $statement->execute();
    // Send status message.
    echo $statement->rowCount() . " records deleted successfully!";
?>