const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			error: null,
			perfilUsuario: null,

		},
		actions: {
			getPerfilUsuario: async () => {
				try {
					console.log("obteniendo el usuario");
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/users", {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						},
					});
					if (!response.ok) throw new Error('Error obteniendo usuario');
					const data = await response.json();
					setStore({ perfilUsuario: data });
				} catch (error) {
					console.error("error obteniendo el usuario", error);
				}
			},
			registro: async (form, navigate) => {
				const { username, email, password } = form;
				try {
					console.log("enviando datos de registro");
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/users", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({ username, email, password }),
					});
					if (!response.ok) {
						const errorData = await response.json();
						throw new Error('Error al resgistrar usuario');

					}
					const data = await response.json();
					console.log("registro verificado", data);

					if (navigate) navigate("/login");

				} catch (error) {
					console.error("error obteniendo el usuario", error);
					setStore({ error: error.message });
				}
			},
		}
	};
};
export default getState;
