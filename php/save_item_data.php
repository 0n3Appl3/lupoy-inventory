<?php
    // Connect to the database.
    require_once("connect_home.php");

    // Get JSON data.
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);
    $id = $data['id'];
    $name = $data['name'];
    $make = $data['make'];
    $model = $data['model'];
    $category = $data['category'];
    $location = $data['location'];
    $purchased_from = $data['purchased_from'];
    $purchase_date = $data['purchase_date'];
    $quantity = $data['quantity'];
    $price = $data['price'];

    // Make a database update query.
    $query_update_item = "update item set name = '" . $name . "', " .
                                          "make = '" . $make . "', " .
                                          "model = '" . $model . "', " .
                                          "category = " . $category . ", " .
                                          "location = " . $location . ", " .
                                          "purchased_from = '" . $purchased_from . "', " .
                                          "purchase_date = '" . $purchase_date . "', " .
                                          "quantity = " . $quantity . ", " .
                                          "price = '" . $price . "' where id = " . $id . ";";
    $statement = $con->prepare($query_update_item);
    // Update record.
    $statement->execute();
    // Send status message.
    echo $statement->rowCount() . " records updated successfully!";
?>