
<?php include "connection.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab3</title>
</head>
<body>

<form action="1.php" method="get">
    <p><strong> Товари обраного виробника</strong>
            <select name="vendor">
                <?php
                    $sql = "SELECT vendors.v_name FROM
                    $db.vendors";
                    $sql = $dbh->query($sql);
                    foreach ($sql as $cell) {
                        echo "<option> $cell[0] </option>";
                    }
                ?>
            </select>
        <button>ОК</button>
    </p>
</form>

<form action="2.php" method="get">
<p><strong> Товари обраної категорії </strong>
        <select name="category">
            <?php
                $sql = "SELECT c_name FROM $db.category";
                $sql = $dbh->query($sql);
                foreach ($sql as $cell) {
                    echo "<option> $cell[0] </option>";
                }
            ?>
        </select>
    <button>ОК</button>
</p>
</form>
<form action="3.php" method="get">
<p><strong>Товари в обраному ціновому діапазоні</strong>

          <label>Мінімальна ціна</label>
          <input id="priceMin" name="minPrice" type="number" min="0">
<label>Максимальна ціна</label>
             <input id="priceMax" name="maxPrice" type="number" min="1">

    <button>ОК</button>
</p>
</form>

</body>
</html>
