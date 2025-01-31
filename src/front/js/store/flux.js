const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
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
					const response = await fetch(`${process.env.BACKEND_URL}/api/users`);
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
					console.log("enviando datos a:",`${process.env.BACKEND_URL}/api/register`);

					if(process.env.BACKEND_URL){
						throw new Error("backend url no esta definido");
						
					}


					const response = await fetch(`${process.env.BACKEND_URL}/api/register`, {
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
					const response = await fetch(`${process.env.BACKEND_URL}api/users/${id}`, {
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
				try {
					const BACKEND_URL = getStore().BACKEND_URL;
					console.log("Iniciando sesion con:", userData);
					const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
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
					localStorage.setItem("user", JSON.stringify(data.user));

					setStore({ currentUser: data.user, token: data.token });

					if (navigate) navigate("/")
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
