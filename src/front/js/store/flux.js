const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: localStorage.getItem("user") || null,
			error: null,
			posts: [],
			comments: [],
			favorites: [],
			token: localStorage.getItem("token") || null,
			selectedCity: null,
            weather: null,
			url:"",
			destinos: [
                {
                    nombre: "Marrakech",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbTxAL38LSpvBuDOp1ywCf8IDhyqKrPIbw&s",
                    region: "Africa",
                    ruta:"/marrakech",
                    omsLink:"https://www.openstreetmap.org/search?query=Marrakech",
                },
                {
                    nombre: "Essaouira",
                    imagen: "https://www.freetour.com/images/tours/59421/essaouira-experience-small-group-day-trip-from-marrakech-01.jpg",
                    region: "Africa",
                    ruta:"/essaouira",
                    omsLink:"https://www.openstreetmap.org/search?query=Essaouira",
                },
                {
                    nombre: "Merzouga",
                    imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/0e/ec/63.jpg",
                    region: "Africa",
                    ruta:"/merzouga",
                    omsLink:"https://www.openstreetmap.org/search?query=Merzouga",
                },
                {
                    nombre: "Sevilla",
                    imagen: "https://www.elcaminoconcorreos.com/imagenes-blog/67/que-ver-en-sevilla.jpg",
                    region: "Europa",
                    ruta: "/sevilla",
                    omsLink:"https://www.openstreetmap.org/search?query=Sevilla",
                },
                {
                    nombre: "Barcelona",
                    imagen: "https://cdn-imgix.headout.com/mircobrands-content/image/b299bd25f75c1e299c877fed458576fa-Sagrada%20Familia%20-%20Facades.jpg",
                    region: "Europa",
                    ruta:"/barcelona",
                    omsLink:"https://www.openstreetmap.org/search?query=Barcelona",
                },
                {
                    nombre: "Madrid",
                    imagen: "https://www.hotelpuertamerica.com/uploads/9/8/2/4/98249186/madrid_12.jpg",
                    region: "Europa",
                    ruta:"/madrid",
                    omsLink:"https://www.openstreetmap.org/search?query=Madrid",
                },
                {
                    nombre: "Krabi",
                    imagen: "https://lh5.googleusercontent.com/proxy/3UATxwexRPFM72C6-fzuLn2-34AFXlJthVzR6OKIpR932nhCthXe8KTAH37XgfUO48Zfu3aEgeBJtS27dwa-nygZ9ZEUpJc9cDUqUMBAWIdZJ5GcgkBmM4gBBvMypHhwDN71jGxBcvQt88DAV1P3kcrYrJ6s0g=w540-h312-n-k-no",
                    region: "Asia",
                    ruta:"/krabi",
                    omsLink:"https://www.openstreetmap.org/search?query=Krabi",
                },
                {
                    nombre: "Bangkok",
                    imagen: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQF9sBKWwybUuqYa96UYnDmRCKawmKRhKhxGOubI1O4gTaP78JZTSN1xvtssrKvcGNkWaTldx-jeVpXJzO6ttgeaoPty66adoYBbhUvOg",
                    region: "Asia",
                    ruta:"/bangkok",
                    omsLink:"https://www.openstreetmap.org/search?query=Bangkok",
                    
                },
                {
                    nombre: "Ayuttayah",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WCbRzW4sMStT4uy2iWDCKhB9wgT1pfi8Rw&s",
                    region: "Asia",
                    ruta: "/ayuttayah",
                    omsLink:"https://www.openstreetmap.org/search?query=Ayuttayah",
                },
            ],
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
					console.log("enviando datos a:",`${process.env.BACKEND_URL}api/register`);

					/*if(!process.env.BACKEND_URL){
						throw new Error("backend url no esta definido");
						
					}*/


					const response = await fetch(`${process.env.BACKEND_URL}api/register`, {
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
		},
		getWeather: async (city = null) => {
			try {
				const selectedCity = city || getStore().selectedCity;
				if (!selectedCity) throw new Error("No se ha seleccionado una ciudad");
				console.log(`Obteniendo el clima para ${selectedCity}`);
				const API_KEY = "d8bca3aa71fc5b718156d839001d5254";
				const response = await fetch(
					`https://api.weatherstack.com/current?access_key=${API_KEY}&query=${selectedCity}&units=m`
				);

				if (!response.ok) throw new Error("Error obteniendo el tiempo");

				const data = await response.json();

				if (data.error) {
					throw new Error(data.error.info || "Error desconocido en la API");
				}

				setStore({
					...getStore(),
					weather: data,
				});
			} catch (error) {
				console.error("Error obteniendo el clima:", error);
			}
		},

		setCity: (city) => {
			setStore((prevState) => ({
				...prevState,
				selectedCity: city,
			}));
		},
	},
	};
export default getState;

