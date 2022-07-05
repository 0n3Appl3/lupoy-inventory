<?php
   try {
   	$con = new PDO('mysql:host=localhost;dbname=[name]','[username]','[password]');
   	} catch (PDOException $e) {
   		echo "Database connection error " . $e->getMessage();
   	}
?>