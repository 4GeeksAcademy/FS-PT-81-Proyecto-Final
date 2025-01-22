const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			perfilUsuario: null,
			post: [],
			url: "https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/",
		},
		actions: {
			getPerfilUsuario: async () => {
				try {
					console.log("obteniendo el usuario");
					const response = await fetch(`${getStore().url}users/<int:id>`, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!response.ok) throw new Error('Error obteniendo usuario');
					const data = await response.json();
					setStore({ perfilUsuario: data });
				} catch (error) {
					console.error("error obteniendo el usuario", error);
				}
			},
			getPost: async () => {
				//get the stor
				try {
					const respone = await fetch(`${getStore().url}/post`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (!response.ok) throw new Error("Error obteniendo los posts")

					//we have to loop the entire demo array to look for the respective index
					//and change its color
					const data = await response.json();
					setStore({ post: data });
					console.log("post cargado", data);
				} catch (error) {
					console.error("Error cargando post:", error);
				}
			},
			//reset the global store
			resetDemo: () => {
				setStore({ demo: demo });
			},

		},
	};
};

export default getState;
