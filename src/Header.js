import React from "react";
import CartWidget from "./CartWidget";
import { FaApple } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a className='navbar-brand col-md-8' href="#">Clases Online</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cursos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Precios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contáctanos</a>
              </li>
            </ul>
          </div>
        </div>
        🛒<CartWidget/>
      </nav>
    </header>
  );
};

export default Header;