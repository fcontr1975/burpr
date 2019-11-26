<?php
$message = $_POST["JSONPacket"];
$jsonObject = json_decode($message);

/*
foreach($_POST as $key => $value)
{
    echo("<p>".$key." : ".$value."</p>");
}
*/

// Guestbook
// DB Connection

if(strlen($_POST["submit"]) > 0){
	
	// first, write JSON packet to a text file.
	// We always do JSON text storage...
	if(strlen($jsonObject->{'message'})>0){
		$burpStore = fopen('burps.txt', 'a+' );
		fwrite( $burpStore,  $message."\n");
		fclose( $burpStore );
	}
	
	if($storageMode == "SQL"){
	
		$conn = mysqli_connect($servername, $username, $password, $dbname);
		
		// Check connection
		if (!$conn) {
			die("Connection failed: " . mysqli_connect_error());
		}
		
		
		
		//echo("<p>handle : ".$jsonObject->{'handle'}."</p>");
		//echo("<p>message: ".$jsonObject->{'message'}."</p>");
		// only write the message if it's not blank...
		// don't write the message if it's blank.
		if(strlen($jsonObject->{'message'})>0){
			// $sqlcommand = "INSERT INTO ".$tablename." (id, message) VALUES (null, '" . $message . "');";
			
			$stmt = $conn->prepare("INSERT INTO ".$tablename." (id, message) VALUES (null, ?);");
			$stmt->bind_param("s", htmlentities ($message));
		
			// echo("$sqlcommand: " . $sqlcommand);
			// if ($conn->query($sqlcommand) === TRUE) {
			if($stmt->execute()){
				//echo "<p>New record created successfully.</p>";
				$conn->close();
				header("Location: guestbook.php");
			} else {
				echo "Error: " . $sqlcommand . "<br>" . $conn->error;
			}
		}
		
		// we're done entering our data, close db connection.
		$conn->close();
		
		// redirect to main index page...
	}
}

?>