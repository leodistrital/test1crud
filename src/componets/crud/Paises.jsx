import React, { useEffect, useState } from "react";
import { Menu } from "../Menu";
import { ListaPaises } from "./tablas/ListaPaises";
import { Conexion } from "../../backend/peticiones";
import { Button } from "react-bootstrap";
import { ContryForms } from "./formularios/ContryForms";

export const Paises = () => {
	const [data, setdata] = useState([]);
	const [openform, setopenform] = useState(false);
	const [openlist, setopenlist] = useState(true);

	const datatable = new Conexion();
	const TABLA = "country";

	useEffect(() => {
		datatable.gettable(TABLA).then((data) => setdata(data));
	}, []);

	const Handleform = () => {
		setopenform(!openform);
		setopenlist(!openlist);
	};

	return (
		<div className='container'>
			<Menu />
			<hr />

			<Button variant='primary' onClick={Handleform}>
				Nuevo
			</Button>
			{openlist && <ListaPaises datosTabla={data} />}
			<hr />
			{openform && <ContryForms />}
		</div>
	);
};
