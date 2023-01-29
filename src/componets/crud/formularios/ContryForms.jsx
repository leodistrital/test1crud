import React, { useState } from "react";
import { Conexion } from "../../../backend/peticiones";
export const ContryForms = () => {
	const [valuePais, setvaluePais] = useState({
		name: "",
	});
	const TABLA = "country";
	const datatable = new Conexion();
	const save = (event) => {
		event.preventDefault();
		console.table(valuePais);
		datatable
			.getCrearItem(TABLA, valuePais)
			.then((data) => console.log(data));
		// Conexion.getCrearCrearItem(TABLA, valuePais).then((data) =>
		// 	console.log(data)
		// );
	};

	return (
		<form>
			<div className='form-group'>
				<label htmlFor='inputAddress'>Nombre:</label>
				<input
					type='text'
					className='form-control'
					value={valuePais.name}
					onChange={(e) => {
						setvaluePais({ name: e.target.value });
					}}
				/>
			</div>

			<button className='btn btn-primary' onClick={save}>
				Guardar
			</button>
		</form>
	);
};
