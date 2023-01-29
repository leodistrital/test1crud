import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
	return (
		<nav className='navbar navbar-expand-sm bg-light'>
			<div className='container-fluid'>
				<ul className='navbar-nav'>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Peliculas
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/actores'>
							Actores
						</Link>
					</li>
					<li className='nav-item'>
						<a className='nav-link'>Directores</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link'>Genero</a>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/paises'>
							Paises
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
