import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"



function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-xl ">
                <div className="logoNav">
                    <Link to="/"> <img class="logo" src="../../public/img/logo.png" alt="" />  </Link>
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
                                <Link  class="nav-link" to="/category/camaras">CAMARAS</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/category/solar">SOLAR</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/category/kit">KITS</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/nosotros">NOSOTROS</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contacto">CONTACTO</Link>
                            </li>

                        </ul>

                    </div>
                </div>
                < CartWidget />

            </nav>



        </>
    )
}




export default Navbar