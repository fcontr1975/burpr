<?php require "burprConfig.php"; ?>

<html>

	<head>
		<title>BURPR</title>
		<meta name="description=" content="Burpr, a dynamic, SQL or Flat File guestbook">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="styles.css">
		<script src="js/fc_utility.js"></script>
	</head>

	<body>

	<h1 class="heroHeader">BURPR &nbsp; <a class="addaburp" href="#letonerip">Let one rip.</a></h1>

	<hr />
	
	<h2>Most recent burps</h2>

	<div id="burplist">
	<?php require 'readBurpsA.php'; ?>
	</div>

	<h1>LET ONE RIP.</h1>

		<form id="mainForm" method="POST">

		<a name="letonerip"></a>

		<p>
			<input type="text" id="username" class="username" onKeyUp="javascript: gather();" placeholder="Handle (Anonymous is fine)"></input>
		</p>

		<input type="hidden" id="JSONPacket" name="JSONPacket" value=""></input>
		<input type="hidden" id="submit" name="submit" value=""></input>
		<p>
			<textarea id="messagearea" class="messagearea" rows="16" cols="40" onKeyUp="javascript: gather();"></textarea>
		</p>
		
		<input type="submit" id="btnSubmit" style="display:none;"></input>
		
		<div id="fakeSubmitBtn" class="button" onclick="javascript: submitForm();">SUBMIT</div>

		<?php require 'insertBurp.php'; ?>
		
		<script src="js/frontEnd.js"></script>

		<?php require 'readBurpsB.php';?>
		</form>
	</body>
</html>
