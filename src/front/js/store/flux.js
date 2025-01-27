const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			perfilUsuario: null,
			url:"",
		},
		actions: {
		getPerfilUsuario: async () => {
			try {
				console.log("obteniendo el usuario");
				const response = await fetch(`${getStore().url}/perfil/usuario`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				});
				if (!response.ok) throw new Error('Error obteniendo usuario');
				const data = await response.json();
				setStore({ perfilUsuario: data});
			} catch (error) {
				console.error("error obteniendo el usuario", error);
			}
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	}
};
};

export default getState;
