import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#mycolaps"><span className="navbar-toggler-icon"></span></button>
        <a className="navbar-brand text-warning ml-3" href='/'><i className="fas fa-dove" style={{fontSize:'30px'}}></i></a>
        <div className="collapse navbar-collapse" id="mycolaps">
          <ul className="navbar-nav list-unstyled my-3 my-lg-0">
          <li className="nav-item mx-2"><Link to='/' className="nav-link">خانه</Link></li>
          <li className="nav-item mx-2"><Link to='/gallery' className="nav-link">گالری</Link></li>
          <li className="nav-item mx-2"><Link to='/Products' className="nav-link">محصولات</Link></li>
          <li className="nav-item mx-2"><Link to='/ConectToUs' className="nav-link">ارتباط با ما</Link></li>
          </ul>
          
          <form action="" className="form-inline me-auto mx-3">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="جستوجو"/>
              <div className="input-group-append"><button className="btn btn-outline-secondary"><i className="fas fa fa-search"></i></button></div>
            </div>
          </form>
         </div>
      </nav>
  );
}
 
export default Navbar;