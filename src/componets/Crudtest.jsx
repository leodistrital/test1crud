import { FormularioData } from "./FormularioData";
import { Menu } from "./Menu";
import { Tablesdata } from "./Tablesdata";

export const Crudtest = () => {
	return (
		<div className='container'>
			<Menu />
			<h1>Hello CodeSandbox</h1>
			<Tablesdata />
			<FormularioData />
		</div>
	);
};
