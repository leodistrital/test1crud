import React from "react";

export const ListaPaises = ({ datosTabla }) => {
	console.table(datosTabla);
	return (
		<>
			<h1>Lista de Paises</h1>
			<table className='table'>
				<thead className='thead-dark'>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Name</th>
					</tr>
				</thead>
				<tbody>
					{datosTabla.map((pais) => (
						<tr key={pais.id}>
							<th scope='row'>{pais.id}</th>
							<td>{pais.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
