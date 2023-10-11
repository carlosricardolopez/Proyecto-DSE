<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colegio Bilingüe José Gustavo Morales - Inicio</title>
    <!--Enlazar estilos-->
    <link rel="stylesheet" href="Public/css/index.css">
    <link rel="stylesheet" href="Public/css/main_menu.css">
    <link rel="stylesheet" href="Public/css/footer.css"/>
    <link rel="stylesheet" href="Public/fontawesome-free-5.1.0-web/css/all.css">
    <!---->
    <!--Enlazar scripts-->
    <script src="Public/js/main_menu.js"></script>
    <script src="Public/js/slider.js"></script>
    <!---->
</head>
<body>
    <?php include 'App/main_menu.php'; ?>
    <section id="slider">
        <button id="slider-decrease"><i class="fas fa-arrow-left"></i></button>
        <button id="slider-increase"><i class="fas fa-arrow-right"></i></button>
        <img src="Public/images/img1.jpg" alt="" class="slider-image">
        <img src="Public/images/img3.jpg" alt="" class="slider-image">
        <img src="Public/images/img4.jpg" alt="" class="slider-image">
    </section>
    <?php include 'App/footer.php'; ?>
</body>
</html>