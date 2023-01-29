import axios from "axios";

const URL = process.env.REACT_APP_URLAPI;

export class Conexion {
	header = {};

	gettable(tabla) {
		return axios
			.get(URL + tabla, {
				headers: this.header,
			})
			.then((res) => {
				// console.log(res, "leo");
				return res.data;
			})
			.catch(function (err) {
				return 0;
			});
	}

	// getItem(tabla, id) {
	// 	return axios
	// 		.get(URL + tabla + "/" + id, {
	// 			headers: this.header,
	// 		})
	// 		.then((res) => res.data);
	// }

	getCrearItem(tabla, data) {
		// console.log(tabla, data, 'envia crear')
		return axios
			.post(URL + tabla + "", { ...data }, { headers: this.header })
			.then((res) => res.data);
	}

	// getEditarItem(tabla, data, id) {
	// 	// console.log(data)
	// 	return axios
	// 		.put(URL + tabla + "/" + id, { ...data }, { headers: this.header })
	// 		.then((res) => res.data);
	// }
	// getEliminarItem(tabla, data, id) {
	// 	return axios
	// 		.delete(URL + tabla + "/" + id, { headers: this.header })
	// 		.then((res) => res.data);
	// }
}
