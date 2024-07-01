import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout';
const headerStyle = {
    backgroundColor: '#002147', // Dark Blue
    color: 'white', // White text for contrast
    padding: '10px 0',
    textAlign: 'center'
  };
function Header() {

    const isAuth = localStorage.getItem('auth') === 'true';
   

   
    return (
        <div className='text-center' style={headerStyle}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" >
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link Link class="nav-link active" aria-current="page" to="/aboutus">AboutUs</Link>
                            </li>
                            <li class="nav-item">
                                <Link Link class="nav-link active" aria-current="page" to="/signup">SignUp</Link>
                            </li> */}
                            <li class="nav-item">
                                <Link Link class="nav-link active" aria-current="page" to="/sevekari">Sevekari</Link>
                            </li>
                            {/* {isAuth && <li class="nav=item"><Link  class="nav-link active" aria-current="page" to="/sevekari">Sevekari</Link></li>} */}
                            {isAuth && <li><Logout /></li>}
                           
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header



