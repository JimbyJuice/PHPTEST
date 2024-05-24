<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information</title>
</head>
<body>
    <h1>User Information</h1>
    <?php
    // Retrieve the username and givenName from the URL parameters
    if (isset($_GET['username']) && isset($_GET['givenName'])) {
        $username = htmlspecialchars($_GET['username']);
        $givenName = htmlspecialchars($_GET['givenName']);
        
        echo "<p>Username: $username</p>";
        echo "<p>First Name: $givenName</p>";
    } else {
        echo "<p>No user information available.</p>";
    }
    ?>
</body>
</html>
