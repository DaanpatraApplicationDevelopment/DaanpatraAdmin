import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars"> </i>
      </div>
      <div className="navbar_left">
        <a className="active_link" href="#">
          Admin Dashboard
        </a>
      </div>
      <div className="navbar__right">
        <a href="#"></a>
        <a href="#">
          
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
