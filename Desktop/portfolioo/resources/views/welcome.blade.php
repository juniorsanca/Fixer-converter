<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.tailwindcss.com"></script>

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:transparent}[hidden]{display:none}html{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}a{color:inherit;text-decoration:inherit}svg,video{display:block;vertical-align:middle}video{max-width:100%;height:auto}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-t{border-top-width:1px}.flex{display:flex}.grid{display:grid}.hidden{display:none}.items-center{align-items:center}.justify-center{justify-content:center}.font-semibold{font-weight:600}.h-5{height:1.25rem}.h-8{height:2rem}.h-16{height:4rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.leading-7{line-height:1.75rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.mt-8{margin-top:2rem}.ml-12{margin-left:3rem}.-mt-px{margin-top:-1px}.max-w-6xl{max-width:72rem}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.p-6{padding:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.pt-8{padding-top:2rem}.fixed{position:fixed}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.text-center{text-align:center}.text-gray-200{--text-opacity:1;color:#edf2f7;color:rgba(237,242,247,var(--text-opacity))}.text-gray-300{--text-opacity:1;color:#e2e8f0;color:rgba(226,232,240,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-5{width:1.25rem}.w-8{width:2rem}.w-auto{width:auto}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}@media (min-width:640px){.sm\:rounded-lg{border-radius:.5rem}.sm\:block{display:block}.sm\:items-center{align-items:center}.sm\:justify-start{justify-content:flex-start}.sm\:justify-between{justify-content:space-between}.sm\:h-20{height:5rem}.sm\:ml-0{margin-left:0}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\:pt-0{padding-top:0}.sm\:text-left{text-align:left}.sm\:text-right{text-align:right}}@media (min-width:768px){.md\:border-t-0{border-top-width:0}.md\:border-l{border-left-width:1px}.md\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\:px-8{padding-left:2rem;padding-right:2rem}}@media (prefers-color-scheme:dark){.dark\:bg-gray-800{--bg-opacity:1;background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}.dark\:bg-gray-900{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.dark\:border-gray-700{--border-opacity:1;border-color:#4a5568;border-color:rgba(74,85,104,var(--border-opacity))}.dark\:text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.dark\:text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.dark\:text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--tw-text-opacity))}}
        </style>

        <style>
            body {
                font-family: 'Nunito', sans-serif;
                margin-top: 20px;
                margin: 0;
            }

            @media (min-width: 400px) {
                body {
                    padding: 0;

                }
                .profil-card {
                    padding: 5px;
                }
            }

            .container {
                margin-top: 23px;
            }


            @media (min-width: 640px){
                .main-container {
                    padding: 1.25rem;
                }
            }

        </style>

    </head>
    <body class="bg-gray-100 antialiased ">
    <!-- component -->
    <style>

        :root {
            --main-color: #4a76a8;
        }

        .container {
            margin-left: auto;
            margin-right: auto;
        }

        .bg-main-color {
            background-color: var(--main-color);
        }

        .text-main-color {
            color: var(--main-color);
        }

        .border-main-color {
            border-color: var(--main-color);
        }

        .btn-d{
            padding-left: 2.5rem;
            padding-right: 2.5rem;
        }

        .main-container{
            margin-left: auto;
            margin-right: auto;
            max-width: 64rem;
            padding: 1rem;
        }


    </style>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        <div class="main-container mx-auto px-4">
            <div class="md:flex no-wrap md:-mx-2 ">
                <!-- Left Side -->
                <div class="w-full md:w-6/12 md:mx-2">

                    <!-- Profile Card -->
                    <div class="flex items-center justify-center">
                        <div class=" bg-white text-center rounded-2xl font-semibold shadow-lg overflow-hidden relative" >
                            <!--
                                bg-white font-semibold text-center rounded-2xl border shadow-lg lg:px-12 py-6 max-w-xs
                                --
                                w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col
                            -->
                            <img src="{{asset('/img/sj.png')}}" class="w-full h-22 rounded-t-lg" alt="...">
                            <div class="px-6 py-4 h-full">
                            <img src="{{asset('/img/profil.png')}}" class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" alt="photo profil" >
                            <div style="margin: 5px">
                                <h1 class="text-lg text-gray-700"> SANCA Junior </h1>
                            <h3 class="text-sm text-gray-400 "> Développeur applications web & mobile</h3>
                            </div>

                            <a href="/img/profil.png" download>
                                <button class="bg-violet-300 hover:bg-violet-400 text-violet-700 font-bold py-2 px-4 rounded inline-flex items-center">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>Télécharger CV</span>
                                </button>
                            </a>

                            </div>
                        </div>
                    </div>

                    <!-- End of profile card -->
                    <div class="my-4"></div>
                    <!-- Friends card -->
                    <div class="bg-white p-5 hover:shadow rounded-2xl border shadow-lg max-w-xs">
                        <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span>Informations</span>
                        </div><br>
                        <div class="">
                            <ul>
                                <li>Localisation :<span class="text-align: right;"> Paris, France📍</span></li>
                                <li>Experience :<span> + 3 ans 🚀</span></li>
                                <li>Disponibilité :<span> 📩</span></li>
                            </ul>
                        </div><br>
                    </div><br>

                    <div class="bg-white p-5 hover:shadow rounded-2xl border shadow-lg max-w-xs">
                        <div class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                            <span>Compétences</span>
                        </div><br>
                        <div class="">
                            <ul>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl" style="margin: 2px"> HTML/CSS </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> JavaScript </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> PHP </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> Laravel </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> VueJs </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> Wordpress </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> Swift </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> React Native </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> Node Js </button>
                                <button class="bg-violet-200 hover:bg-violet-400 text-violet-600 font-bold py-2 px-4 rounded-2xl"style="margin: 2px"> Ionic </button>
                            </ul>
                        </div><br>
                    </div>
                    <!-- End of friends card -->
                </div>
                <!-- Right Side -->
                <div class="w-full md:w-12/12 mx-2 h-70">
                    <!-- Profile tab -->
                    <!-- About Section -->
                    <div class="bg-white p-5 hover:shadow rounded-2xl border shadow-lg bg-white p-3 shadow-sm rounded-sm">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span class="tracking-wide"><strong> À propos de moi  </strong></span>
                        </div><br>

                        <div>
                            <p>
                                Hello 👋 Je m'appelle Junior, je suis spécialisé en développement Front-End (HTML, CSS, JavaScript, Vuejs) et développement Back-End (PHP, MySQL, Laravel)  depuis 4 ans, et je suis à même de réaliser votre projet à 100%✅.
                                Quel que soit votre projet, et quels que soient vos besoins, échangeons dessus ! ☕️

                                👫 Je vous accompagne sur :

                                - L'intégration et le développement de vos maquettes/interfaces
                                - Le développement de votre site (Landing Page, Site Vitrine, Blog, E-commerce...)
                                - L'optimisation de votre visibilité et de votre communication digitale (SEO/Social Media)

                            </p>
                        </div><br>


                        <div class="flex flex-col space-y-4">
                            <a href="#0" class="mail-link social-link-hover">
                                <span class="text-violet-700"><span>@</span> jrsanca.pro@gmail.com</span>
                            </a>

                            <ul class="flex space-x-5">
                                <li>
                                    <a href="#0" class="social-link-hover">
                                        <img src="{{asset('/img/insta.png')}}" class="card-img-top" alt="..." style="width: 30px; height: 30px">
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="social-link-hover">
                                        <img src="{{asset('/img/linke.png')}}" class="card-img-top" alt="..." style="width: 30px; height: 30px">
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="social-link-hover">
                                        <img src="{{asset('/img/malt.png')}}" class="card-img-top" alt="..." style="width: 25px; height: 25px">
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="social-link-hover">
                                        <img src="{{asset('/img/github.png')}}" class="card-img-top" alt="..." style="width: 30px; height: 30px">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End of about section -->

                    <div class="my-4"></div>

                    <!-- Experience and education -->
                    <div class="rounded-2xl bg-white p-3 shadow-sm rounded-sm">

                        <div class="grid grid-cols-2">
                            <div>
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span class="text-violet-900">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                    <span class="tracking-wide">Expérience</span>
                                </div>
                                <ul class="list-inside space-y-2">
                                    <li>
                                        <h4>Développeur web mobile</h4>
                                        <div class="text-violet-500">IamEpicEvents - Contrat en alternance</div>
                                        <div class="text-gray-500 text-xs">mars 2021 - 2022</div>
                                    </li>
                                    <li>
                                        <h4>Développeur Full Stack</h4>
                                        <div class="text-violet-500">Malt - Freelance</div>
                                        <div class="text-gray-500 text-xs">sept. 2021</div>
                                    </li>
                                    <li>
                                        <h4>Développeur Web / Wordpress</h4>
                                        <div class="text-violet-600">Leikir web - stage</div>
                                        <div class="text-gray-500 text-xs">avr. 2019 - 2019</div>
                                    </li>
                                    <li>
                                        <h4>Technicien en micro-informatique et réseaux</h4>
                                        <div class="text-violet-500">Axe Vision - stage</div>
                                        <div class="text-gray-500 text-xs">mars 2018 - 2018</div>
                                    </li>
                                    <li>
                                        <h4>Technicien micro-informatique</h4>
                                        <div class="text-violet-500">PCMarket - stage</div>
                                        <div class="text-gray-500 text-xs">Nov 2017 - 2017</div>
                                    </li>
                                    <li>
                                        <h4>Technicien micro-informatique</h4>
                                        <div class="text-violet-500">Cromology - stage</div>
                                        <div class="text-gray-500 text-xs">juin 2018 - 2017</div>
                                    </li>
                                    <li>
                                        <h4>Animateur Multimédia</h4>
                                        <div class="text-violet-500">Le Danube Palace - stage</div>
                                        <div class="text-gray-500 text-xs">mai 2017 - 2017</div>
                                    </li>
                                    <li>
                                        <h4>Animateur Multimédia</h4>
                                        <div class="text-violet-500">Goutte d'ordinateur - stage</div>
                                        <div class="text-gray-500 text-xs">fév. 2017 - 2017</div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span class="text-violet-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                    <span class="tracking-wide">Formation</span>
                                </div>
                                <ul class="list-inside space-y-2">
                                    <li>
                                        <h3>École Webstart</h3>
                                        <div class="text-violet-600">Développeur web et mobile</div>
                                        <div class="text-gray-500 text-xs">Octobre 2019 - 2022</div>
                                    </li>
                                    <li>
                                        <h3>H3 Hitema</h3>
                                        <div class="text-violet-600">Développeur web</div>
                                        <div class="text-gray-500 text-xs">Septembre 2018 - 2019</div>
                                    </li>
                                    <li>
                                        <h3>ASTON - École informatique</h3>
                                        <div class="text-violet-600">Technicien informatique</div>
                                        <div class="text-gray-500 text-xs">Septembre 2017 - 2018</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- End of Experience and education grid -->
                    </div>
                    <!-- End of profile tab -->
                </div>
            </div>
        </div>
    </div>
    </body>
</html>
