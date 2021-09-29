import { Link } from 'react-router-dom';
import logo from '../image/icon.png';
import '../css/navbar.css'

const Navbar = () => {
    return ( 
        <div className="nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/>Hackerrank Solution</Link>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav mx-auto">
                        <div className="nav-item mr-4">
                            <Link className="nav-link" to="/">Home</Link>
                        </div>
                        <div className="nav-item active mr-4">
                            <a className="nav-link active" href="/">NO Bakchodi</a>
                        </div>
                        <div className="nav-item active">
                            <a className="nav-link" href="/">About Us</a>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;