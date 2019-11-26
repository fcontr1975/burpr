<?php
	error_reporting(E_ALL & ~E_NOTICE);
	// Guestbook
	// DB Connection
	$servername = "";
	$username = "";
	$password = "";
	$dbname = "";
	$tablename = "guestbook";
	
	// StorageMode to use when reading in burps: 
	$storageMode = "FLAT_FILE";
	// "SQL"  use installed SQL Database
	// "FLAT_FILE" to use flat file system from burps.txt
	// In the case of storage, both are always used for redundancy.
?>