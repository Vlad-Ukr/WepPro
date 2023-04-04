<?php include "connection.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<?php
    $minPrice = $_GET['minPrice'];
     $maxPrice = $_GET['maxPrice'];

$sqlSelect=$dbh->prepare("SELECT * FROM $db.items WHERE $db.items.price BETWEEN :minPrice AND :maxPrice");

       $sqlSelect->execute(array('minPrice' => $minPrice,'maxPrice' => $maxPrice));

    echo "<table border ='1'>";
    echo "<tr><th>Name</th><th>Price</th><th>Quantity</th><th>Quality</th></tr>";
    while($cell=$sqlSelect->fetch(PDO::FETCH_BOTH)){
        echo "<tr><td>$cell[1]</td><td>$cell[2]</td><td>$cell[3]</td><td>$cell[4]</td></tr>";
    }
    echo "</table>";
?>
</body>
</html>