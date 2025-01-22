const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			error: null,
			perfilUsuario: null,
			url: "https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/",
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
					setStore({ perfilUsuario: data });
				} catch (error) {
					console.error("error obteniendo el usuario", error);
				}
			},
			actions: {
				registro: async (formData, navigate) => {
					try {
						console.log("enviando datos de registro");
						const response = await fetch(`${getStore().url}users`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(formData),
						});
						if (!response.ok) {
							const errorData = await response.json();
							throw new Error('Error al resgistrar usuario');

						}
						const data = await response.json();
						console.log("registro verificado", data);

						setStore({ perfilUsuario: data });

						if (navigate) navigate("/login");

					} catch (error) {
						console.error("error obteniendo el usuario", error);
						setStore({ error: error.message });
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
		}
	};
};
export default getState;
