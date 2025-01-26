const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			error: null,
			posts: [],
			comments: [],
			favorites: [],

		},
		actions: {
			getUsers: async () => {
				try {
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/users");
					if (!response.ok) throw new Error('Error al resgistrar usuario');
					const data = await response.json();
					console.log("registro verificado", data);
					setStore({ users: data });
				} catch (error) {
					console.error("error obteniendo el usuario", error);
				}
			},
			createUser: async (userData) => {
				try {
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/users", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(userData),
					});
					if (!response.ok) throw new Error("Error creando usuario");
					const data = await response.json();
					const store = getStore();
					setStore({ users: [...store.users, data] });
					if (navigate) navigate("/login");
				} catch (error) {
					console.error(error);
				}
			},
			deleteUser: async (id, navigate) => {
				try {
					console.log("enviando datos de registro");
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/users/<int:id>", {
						method: 'DELETE',
					});
					if (!response.ok) throw new Error('Error al eliminar usuario');
					console.log("usuario eliminado");
					const filteredUsers = getStore().users.filter((user) => user.id !== id);
					setStore({ users: filteredUsers });

					if (navigate) navigate("/");

				} catch (error) {
					console.error("error obteniendo el usuario", error);
					setStore({ error: error.message });
				}
			},
			loginUser: async (userData, navigate) => {
				const { email, password } = credentials;
				try {
					const response = await fetch("https://legendary-giggle-69rj79g5qgj4fw56-3001.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email, password }),
					});
					if (!response.ok) throw new Error("Error al iniciar sesión");
					const data = await response.json();
					console.log("datos del usuario", data);
					setStore({ currentUser: data.user });
					navigate("/vistaPerfil")

				} catch (error) {
					console.error("error inicio de sesion:", error)

				}
			}
		}
	};
};
export default getState;
