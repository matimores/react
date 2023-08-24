import CardWidget from "./CartWidget"



function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-xl ">
                <div class="logo">
                    <a href=""> <img src="../img/logo.png" alt="" />  </a>
                </div>
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" >
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link" href="#">CAMARAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SISTEMAS SOLARES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">KITS</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">NOSOTROS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CONTACTO</a>
                            </li>

                        </ul>

                    </div>
                </div>
                < CardWidget />

            </nav>



        </>
    )
}




export default Navbar