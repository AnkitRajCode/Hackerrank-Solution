import logo from '../image/icon.png';
import '../css/navbar.css'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <a className="navbar-brand" href="/"><img src={logo} alt="logo"/>Geeksforgeeks</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav ml-auto">
                <div className="nav-item active mr-4">
                    <a className="nav-link" href="/">Home</a>
                </div>
                <div className="nav-item active mr-4">
                    <a className="nav-link" href="/">Contact</a>
                </div>
                <div className="nav-item active">
                    <a className="nav-link" href="/">About Us</a>
                </div>
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;