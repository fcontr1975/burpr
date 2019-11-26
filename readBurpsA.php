<?php
if($storageMode == "SQL"){
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	$sqlcommand = "SELECT * FROM ".$tablename.";";
	$result = $conn->query($sqlcommand);
	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			// echo("<!-- id: " . $row["id"]. " - message:".$row["message"]." -->");
			$jsonObject = json_decode($row["message"]);
			//echo("<p>Handle: ".$jsonObject->{'handle'}."</p>");
			//echo("<p>Message: ".$jsonObject->{'message'}."</p>");
			echo("<div class=\"messageBox\">
				<span class=\"handle\"><small>".$jsonObject->{'handle'}."</small></span><br/>
				<span class=\"message\">".$jsonObject->{'message'}."</span>
			</div>");
		}
	} else {
		echo "<p>Everyone is exceptionally polite today.</p>";
	}
	$conn->close();
} else {
	echo("<!-- using flat file system -->");
}
?>