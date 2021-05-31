<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="stylesheet" href="./css/app.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Naele</title>
        <style>


        </style>
    </head>
    <body class="antialiased">
    <nav class="navbar navbar-expand-lg navbar-light " style="height: 70px">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="./imgs/NAELE.png" alt="image logo" class="image_logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-0 mb-lg-10 bg-white ">
                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">À propos</a> </li>
                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Services NE</a> </li>
                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Actualités</a> </li>
                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Mon compte</a> </li>
                    <li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Contact</a> </li>
                </ul>

                <!--
                <ul class="list-group">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                  <li class="list-group-item">A fourth item</li>
                  <li class="list-group-item">And a fifth one</li>
                </ul>
                -->
                <form class="d-flex">
                        <input type="search" class="form-control" placeholder="actualités..." aria-label="Search">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                </form>
            </div>
        </div>
    </nav>

    <div class="#"> <img src="./imgs/home-image.png" alt="image logo" class="image_logo" style="width: 100vw; height: 65vh "> </div>
    <br>
    <br>
    <div class="#"> <h3 style="font-family: Skia" class="text-center">Nous sommes déjà 40 000 à utiliser NAELE au quotidient</h3> </div>
    <br>
    <div class="#" style="height: 90vh">
        <img src="./imgs/2home.png" alt="image logo" class="image_logo" style="width: 100vw; height: 80vh">
    </div>
    <br>
    <br>
    <div class="#" style="background-color: #F8F8F8; height: 105vh;">
        <div class="container">
            <br>
            <br>
        <p style="font-family: Skia; font-size: 1.8vw;" class="text-center">
            Le premier Titre de transport sur mobile que vous permet de vous<br>
            déplacer sur touts les transports électriques du quotidien
        </p>
            <img src="./imgs/3home.png" alt="image logo" class="image_logo" style="width: 90vw; height: 100vh">
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="container">
    <div style="height: 100vh">
        <div class="row row-cols-1 row-cols-md-3 g-4">

            <div class="col">
                <div class="card h-100" style="background-color: #F8F8F8; border: none">
                    <div class="card-body">
                        <h5 class="card-title">PASS</h5>
                        <p class="card-text">
                            Parcourez la ville avec NAELE
                            pendant une journée ou une semaine.
                        </p>
                    </div>
                    <div class="d-grid gap-6 col-8 mx-auto card-footer">
                        <a href="#" class="btn btn-dark">Je choisis mon pass</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100" style="background-color: #F8F8F8; border: none">
                    <div class="card-body">
                        <h5 class="card-title">ABONNEMENTS</h5>
                        <p class="card-text">
                            Trouvez l’abonnement Naele
                            qui vous convient.
                        </p>
                    </div>
                    <div class="d-grid gap-6 col-8 mx-auto card-footer">
                        <a href="#" class="btn btn-dark">Choisir son abonnement</a>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card h-100" style="background-color: #59B0E3; border: none">
                        <p class="text-center" style="color: white">Déjà abonné ? </p>
                    <div class="d-grid gap-6 col-8 mx-auto card-footer">
                        <a href="#" class="btn" style="background-color: #0069A4; color: white">Je me connecte</a>
                    </div>
                    <hr style="color: white;">
                    <p class="text-center" style="color: white">C'est votre 1er voyage avec NAELE ?</p>
                    <div class="d-grid gap-6 col-8 mx-auto card-footer">
                        <a href="#" class="btn" style="background-color: #0069A4; color: white">Je découvre</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <br>
    <div class="#" style="height: 100vh">
        <div style="height: 5vh">
        <h3 style="font-family: Skia" class="text-center">LES ÉTAPES À SUIVRE POUR UTILISER LES SERVICES DE NAELE</h3>

    </div>
    <br>
    <br>
    <div class="container" style="height: 50vh">
        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>Change the background</h2>
                    <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                    <button class="btn btn-outline-light" type="button">Example button</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                    <h2>Add borders</h2>
                    <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                    <button class="btn btn-outline-secondary" type="button">Example button</button>
                </div>
            </div>
        </div>
    </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    </body>
</html>
