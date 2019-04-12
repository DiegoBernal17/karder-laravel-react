import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel navbar-collapse'>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='container'>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/specialities'>Specialities</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/courses'>Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/teachers'>Teachers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/students'>Students</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Header