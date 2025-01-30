const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			backendUrl: process.env.REACT_APP_BACKEND_URL || "https://localhost:3001",
			users: [],
			error: null,
			posts: [],
			comments: [],
			favorites: [],
			token: localStorage.getItem("token") || null,


		},

		actions: {

			getUsers: async () => {
				try {
					console.log("obteniendo usuarios...");
					const response = await fetch(`${backendUrl}/api/users`);
					if (!response.ok) throw new Error('Error al obtener usuarios');
					const data = await response.json();
					console.log("usuarios obtenidos", data);
					setStore({ users: data });
				} catch (error) {
					console.error("error obteniendo el usuario", error);
					setStore({ error: error.message });
				}
			},
			createUser: async (userData, navigate) => {
				try {
					console.log("enviando datos a /api/register:", userData);
					const { backendUrl } = getStore();
					console.log("uSANDO BACKENDURL EN CREATEuSE:",backendUrl);
					console.log("enviando datos a:",`${backendUrl}/api/register`);

					if(!backendUrl){
						throw new Error("backenurl no esta definido.verifica tu env");
						
					}


					const response = await fetch(`${backendUrl}/api/register`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(userData),
					});
					const contentType = response.headers.get("content-type");
		
					if (!response.ok) {
						if (!contentType || !contentType.includes("application/json")) {
							throw new Error("el servidor no devolvio JSON VERIFICA URL");
							
						}
						console.error("Error al crear usuario:", data.message);
						throw new Error(data.message || "Error creando usuario");
					}
					console.log("usuario registrado");
					const data = await response.json();
					if (navigate) navigate("/login");

				} catch (error) {
					console.error("Error en createUser:", error);
					setStore({ error: error.message });
				}
			},
			deleteUser: async (id, navigate) => {
				try {
					console.log(`Eliminando usuario con iD:${id}`);
					const response = await fetch(`${backendUrl}api/users/${id}`, {
						method: 'DELETE',
						headers: {
							"Authorization": `Bearer ${localStorage.getItem("token")}`,
						}
					});
					if (!response.ok) {
						console.error("Error al eliminar usuario:", data.message);
						throw new Error(data.message || "Error eliminando usuario");
					}
					console.log("usuario eliminado");

					const filteredUsers = getStore().users.filter(user => user.id !== id);
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
					console.log("Iniciando sesion con:", userData);
					const response = await fetch(`${backendUrl}/api/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(userData),
					});
					const data = await response.json();
					if (!response.ok) {
						console.error("Error en login:", data.message);
						throw new Error(data.message || "Error iniciando sesion");
					}
					console.log("Iniciando sesion correcta:", data);

					localStorage.setItem("token", data.token);
					setStore({ currentUser: data.user, token: data.token });

					if (navigate) navigate("/vistaPerfil")
				} catch (error) {
					console.error("error inicio de sesion:", error)
					setStore({ error: error.message });

				}
			},
			logout: () => {
				console.log("Cerrando sesión...");
				localStorage.removeItem("token");
				setStore({ currentUser: null, token: null });
			}
		}
	};
};
export default getState;
