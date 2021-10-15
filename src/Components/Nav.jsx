import '../css/nav.css';
import logo from '../../src/imgs/tesla-logo.png'
const Nav = ()=>{
    return(
    <div className="container-fluid bg-nav-coolor sticky-top">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="123px" height="auto"/>
    </a>
      <ul className="nav col-12 col-md-auto  justify-content-center mb-md-0 hide-md">
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Model S</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Model 3</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Model X</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Model Y</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Solar Roof</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Solar Panels</a></li>

      </ul>

      <div className="col-md-3 text-end">
      <ul className="nav col-12 col-md-auto  justify-content-center mb-md-0">
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Shop</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Account</a></li>
        <li><a href="/" className="nav-link px-3 link-dark ft-w">Menu</a></li>

      </ul>
      </div>
    </header>
  </div>
  
    )
}

export default Nav;