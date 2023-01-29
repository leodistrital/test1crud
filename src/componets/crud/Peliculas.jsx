import React from "react";
import { Menu } from "../Menu";
import { ListaPeliculas } from "./tablas/ListaPeliculas";

export const Peliculas = () => {
	return (
		<div className='container'>
			<Menu />
			<ListaPeliculas />
			{/* <FormularioData /> */}
		</div>
	);
};
