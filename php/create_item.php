<?php
    // Connect to the database.
    require_once("connect_home.php");
    
    // Get JSON data.
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);
    $name = $data['name'];
    $make = $data['make'];
    $model = $data['model'];
    $category = $data['category'];
    $location = $data['location'];
    $purchased_from = $data['purchased_from'];
    $purchase_date = $data['purchase_date'];
    $quantity = $data['quantity'];
    $price = $data['price'];

    // Make a database create query.
    $query_create_item = "insert into `item` (`name`, `make`, `model`, `category`, `location`, `purchased_from`, `purchase_date`, `quantity`, `price`) " .
                         "values ('" . $name . "', '" . $make . "', '"  . $model . "', " . $category . ", " . $location . ", '" . $purchased_from . "', '" . $purchase_date . "', " . $quantity . ", '" . $price . "');";
    $statement = $con->prepare($query_create_item);
    // Create record.
    $statement->execute();
    // Send status message.
    echo $statement->rowCount() . " records created successfully!";
?>