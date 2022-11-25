import React from 'react';
import { useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

    useEffect(() => {
        const list = document.querySelectorAll('.list');
        function activeLink() {
            list.forEach((item) => item.classList.remove('active'))
            this.classList.add('active');
        }
        list.forEach((item) => item.addEventListener('click', activeLink));
    });
  return (
    <div className="navigation">
        <ul>
            <li className="list active">
                <Link to="/">
                    <span className="icon"><img className='w-8 h-8 mt-4 mb-8' src="./planet.png" alt="" /></span>
                    <span className="text">Planets</span>
                </Link>
            </li>

            <li className="list">
                <Link to="dwarfs">
                    <span className="icon"><img className='w-6 h-6 mt-6 mb-8' src="./planet.png" alt="" /></span>
                    <span className="text">Dwarfs</span>
                </Link>
            </li>

            <li className="list">
                <Link to="moons">
                    <span className="icon"><img className='w-8 h-8 mt-4 mb-8' src="./moon.png" alt="" /></span>
                    <span className="text">Moons</span>
                </Link>
            </li>

            <li className="list">
                <Link to="asteroids">
                    <span className="icon"><img className='w-8 h-8 mt-4 mb-8' src="./asteroid.png" alt="" /></span>
                    <span className="text">Asteriods</span>
                </Link>
            </li>

            <li className="list">
                <Link to="comets">
                    <span className="icon"><img className='w-8 h-8 mt-4 mb-8' src="./comet.png" alt="" /></span>
                    <span className="text">Comets</span>
                </Link>
            </li>

            <div className="indicator bg-green-400"></div>

        </ul>
    </div>
  )
}
