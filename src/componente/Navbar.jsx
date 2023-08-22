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
                <div className='div-svg' id="icono-carrito" >
                    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><svg  id="Carrito" xmlns="http://www.w3.org/2000/svg" fill='white'  class="bi bi-bag-check-fill"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                    </svg></a>
                    <p class="total-productos">
                        <span>0 </span></p>
                </div>

            </nav>



        </>
    )
}




export default Navbar