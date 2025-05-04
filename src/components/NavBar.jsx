import React from 'react'

const NavBar = ({setCategory}) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark ">
    <div className="container-fluid">
      <a className="navbar-brand text-light fst-italic" href="#">NewsMagazine</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
        <div className="nav-link" onClick={()=>{setCategory("business")}}>business</div>
      </li>
      <li className="nav-item">
      <div className="nav-link" onClick={()=>{setCategory("technology")}}>technology</div>
    </li>
    <li className="nav-item">
    <div className="nav-link" onClick={()=>{setCategory("sports")}}>sports</div>
  </li>
  <li className="nav-item">
  <div className="nav-link" onClick={()=>{setCategory("science")}}>science</div>
</li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBar
