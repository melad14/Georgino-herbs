import { Link } from 'react-router-dom';

// Navbar & Hero Start
const Navbar = () => {
  return (
    <div className="container-fluid nav-bar p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="display-5 text-secondary m-0">
            <img src="img/brand-logo.png" className="img-fluid" alt="" />
            Georgino <span className='fs-6 text-dark text-muted'>herbs</span>
          </h1>
          
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/products" className="nav-item nav-link">Products</Link>
         
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
         
        </div>
      </nav>
    </div>
  );
};
// Navbar & Hero End

export default Navbar;