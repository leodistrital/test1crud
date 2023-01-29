import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import { Peliculas } from "./componets/crud/Peliculas";
import { Crudtest } from "./componets/Crudtest";
import { Actores } from "./componets/crud/Actores";
import { Paises } from "./componets/crud/Paises";
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Crudtest />}></Route>
				<Route path='/peliculas' element={<Peliculas />}></Route>
				<Route path='/paises' element={<Paises />}></Route>
				{/* <Route path='/peliculas' element={<Peliculas />}></Route>
				<Route path='/peliculas' element={<Peliculas />}></Route>
				<Route path='/peliculas' element={<Peliculas />}></Route> */}
			</Routes>
		</>
	);
}

export default App;
