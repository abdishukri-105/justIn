import React from 'react';

const NavBar = () => {
    return ( 
      <nav className="navbar bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href=' #'>JUSTIN</a>
           <ul className='navbar-nav me-auto'>
             <li className='nav-item'>
                <a href="#" className='nav-link text-light '>{'SOURCES'}</a>
             </li>
           </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn text-light btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </nav>
     );
}
 
export default NavBar;