import { Bangkok } from "../pages/bangkok";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
			user: null,
			users:localStorage.getItem("user") || null,
			error: null,
			posts: [],
			comments: [],
			favorites: [],
			token: localStorage.getItem("token") || null,
            selectedCity: null,
            weather: null,
            url: "",
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
                    nombre: "Ayutthaya",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WCbRzW4sMStT4uy2iWDCKhB9wgT1pfi8Rw&s",
                    region: "Asia",
                    ruta: "/ayuttayah",
                    omsLink:"https://www.openstreetmap.org/search?query=Ayutthaya",
                },
                {   ciudad:"Sevilla",
                    nombre:"Giralda",
                    omsLink:"https://www.openstreetmap.org/search?query=Giralda+de+Sevilla"
                },
                {   ciudad:"Sevilla",
                    nombre:"Catedral",
                    omsLink:"https://www.openstreetmap.org/search?query=Catedral+de+Sevilla"
                },
                {   ciudad:"Sevilla",
                    nombre:"Alcazar",
                    omsLink:"https://www.openstreetmap.org/search?query=Alcazar+de+Sevilla"
                },
                {   ciudad:"Sevilla",
                    nombre:"Plaza España",
                    omsLink:"https://www.openstreetmap.org/search?query=Plaza+de+España+de+Sevilla"
                },
                {   ciudad:"Sevilla",
                    nombre:"Barrio Triana",
                    omsLink:"https://www.openstreetmap.org/search?query=Barrio+de+Triana+de+Sevilla"
                },
                {   ciudad:"Bangkok",
                    nombre:"Palacio",
                    omsLink:"https://www.openstreetmap.org/search?query=Grand+Palace"
                },
                {   ciudad:"Bangkok",
                    nombre:"Wat Arun",
                    omsLink:"https://www.openstreetmap.org/search?query=Wat+Arun"
                },
                {   ciudad:"Bangkok",
                    nombre:"Khao San",
                    omsLink:"https://www.openstreetmap.org/search?query=Khao+San+Road"
                },
                {   ciudad:"Bangkok",
                    nombre:"Mercado flotante",
                    omsLink:"https://www.openstreetmap.org/search?query=Mercado+Flotante"
                },
                {   ciudad:"Bangkok",
                    nombre:"Mae Klong",
                    omsLink:"https://www.openstreetmap.org/search?query=Mae+Klong"
                },
                {   ciudad:"Ayutthaya",
                    nombre:"Wat Mahathat",
                    omsLink:"https://www.openstreetmap.org/search?query=Wat+Mahathat"
                },
                {   ciudad:"Ayutthaya",
                    nombre:"Wat Phra",
                    omsLink:"https://www.openstreetmap.org/search?query=Wat+Phra+Si+Sanphet"
                },
                {   ciudad:"Ayutthaya",
                    nombre:"Wat Chainwatthanaram",
                    omsLink:"https://www.openstreetmap.org/search?query=Wat+Chainwatthanaram"
                },
                {   ciudad:"Ayutthaya",
                    nombre:"Wat Lokayasutharam",
                    omsLink:"https://www.openstreetmap.org/search?query=Wat+Lokayasutharam"
                },
                {   ciudad:"Ayutthaya",
                    nombre:"Ayutthaya Floating Market",
                    omsLink:"https://www.openstreetmap.org/search?query=Ayutthaya+Floating+Market"
                },
                {   ciudad:"Krabi",
                    nombre:"Railay Beach",
                    omsLink:"https://www.openstreetmap.org/search?query=Railay+Beach"
                },
                {   ciudad:"Krabi",
                    nombre:"Phi Phi Islands",
                    omsLink:"https://www.openstreetmap.org/search?query=Phi+Phi+Islands"
                },
                {   ciudad:"Krabi",
                    nombre:"Smerald Pool",
                    omsLink:"https://www.openstreetmap.org/search?query=Smerald+Pool"
                },
                {   ciudad:"Krabi",
                    nombre:"Tiger Cave",
                    omsLink:"https://www.openstreetmap.org/search?query=Tiger+Cave+Temple"
                },
                {   ciudad:"Krabi",
                    nombre:"Ao Nang",
                    omsLink:"https://www.openstreetmap.org/search?query=Ao+Nang"
                },
                {   ciudad:"Madrid",
                    nombre:"Palacio Real",
                    omsLink:"https://www.openstreetmap.org/search?query=Palacio+Real+Madrid"
                },
                {   ciudad:"Madrid",
                    nombre:"Museo del Prado",
                    omsLink:"https://www.openstreetmap.org/search?query=Museo+Del+Prado"
                },
                {   ciudad:"Madrid",
                    nombre:"Parque del Retiro",
                    omsLink:"https://www.openstreetmap.org/search?query=Parque+Del+Retiro"
                },
                {   ciudad:"Madrid",
                    nombre:"Puerta del Sol",
                    omsLink:"https://www.openstreetmap.org/search?query=Puerta+Del+Sol"
                },
                {   ciudad:"Madrid",
                    nombre:"Gran Via",
                    omsLink:"https://www.openstreetmap.org/search?query=Gran+Via+De+Madrid"
                },
                {   ciudad:"Barcelona",
                    nombre:"Sagrada Familia",
                    omsLink:"https://www.openstreetmap.org/search?query=Sagrada+Familia"
                },
                {   ciudad:"Barcelona",
                    nombre:"Parque Güell",
                    omsLink:"https://www.openstreetmap.org/search?query=Parc+Güell+De+Barcelona"
                },
                {   ciudad:"Barcelona",
                    nombre:"Rambla",
                    omsLink:"https://www.openstreetmap.org/search?query=La+Rambla+De+Barcelona"
                },
                {   ciudad:"Barcelona",
                    nombre:"Barrio Gótico",
                    omsLink:"https://www.openstreetmap.org/search?query=Barrio+Gótico+De+Barcelona"
                },
                {   ciudad:"Barcelona",
                    nombre:"Monserrat",
                    omsLink:"https://www.openstreetmap.org/search?query=Monasterio+De+Monserrat"
                },
                {   ciudad:"Marrakech",
                    nombre:"Plaza Fna",
                    omsLink:"https://www.openstreetmap.org/search?query=Plaza+Fna"
                },
                {   ciudad:"Marrakech",
                    nombre:"Jardín Majorelle",
                    omsLink:"https://www.openstreetmap.org/search?query=Jardin+Majorelle"
                },
                {   ciudad:"Marrakech",
                    nombre:"Cataratas Ourika",
                    omsLink:"https://www.openstreetmap.org/search?query=Cataratas+De+Ourika"
                },
                {   ciudad:"Marrakech",
                    nombre:"Desierto Agafay",
                    omsLink:"https://www.openstreetmap.org/search?query=Desierto+De+Agafay"
                },
                {   ciudad:"Marrakech",
                    nombre:"Mezquita Koutoubia",
                    omsLink:"https://www.openstreetmap.org/search?query=Mezquita+De+Koutoubia"
                },
                {   ciudad:"Essaouira",
                    nombre:"Puerto Essaouira",
                    omsLink:"https://www.openstreetmap.org/search?query=Puerto+De+Essaouira"
                },
                {   ciudad:"Essaouira",
                    nombre:"Playa Essaouira",
                    omsLink:"https://www.openstreetmap.org/search?query=Playa+De+Essaouira"
                },
                {   ciudad:"Essaouira",
                    nombre:"Skala Kabah",
                    omsLink:"https://www.openstreetmap.org/search?query=Skala+Kabah"
                },
                {   ciudad:"Essaouira",
                    nombre:"Souks",
                    omsLink:"https://www.openstreetmap.org/search?query=Souks"
                },
                {   ciudad:"Essaouira",
                    nombre:"Medina",
                    omsLink:"https://www.openstreetmap.org/search?query=La+Medina"
                },
                {   ciudad:"Merzouga",
                    nombre:"Dunas Erg Chebbi",
                    omsLink:"https://www.openstreetmap.org/search?query=Erg+Chebbi"
                },
                {   ciudad:"Merzouga",
                    nombre:"Paseos camello",
                    omsLink:"https://www.openstreetmap.org/search?query=Merzouga"
                },
                {   ciudad:"Merzouga",
                    nombre:"Lago Dayet",
                    omsLink:"https://www.openstreetmap.org/search?query=Lago+Dayet+Srij"
                },
                {   ciudad:"Merzouga",
                    nombre:"Pueblo Khamlia",
                    omsLink:"https://www.openstreetmap.org/search?query=Khamlia"
                },
                {   ciudad:"Merzouga",
                    nombre:"Noche Desierto",
                    omsLink:"https://www.openstreetmap.org/search?query=Merzouga"
                },
                
                
            ],
        },

		actions: {
			loadUser:() =>{
				const user= localStorage.getItem("user");
				const token = localStorage.getItem("token");
				if (user && token) {
					setStore({user, token
					});
					console.log("usuario cargado en store:", getStore().user);
					
				} else {
					console.log("no hay usuario en local storage")
				}
			},

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
					console.log("enviando datos a:", `${process.env.BACKEND_URL}api/register`);
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
			loginUser: async (userData) => {
				try {
					console.log("datos des de login")
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
					if (!data.token || !data.user){
						throw new Error("no se recibe token o usuario en response");
						
					}
					console.log("Iniciando sesion correcta:", data);

					localStorage.setItem("token", data.token);
					localStorage.setItem("user", JSON.stringify (data.user));

					setStore({ currentUser: data.user, token: data.token });
					
				} catch (error) {
					console.error("error inicio de sesion:", error)
					setStore({ error: error.message });
					

				}
			},
			logout: () => {
				console.log("Cerrando sesión...");
				localStorage.removeItem("token");
				localStorage.removeItem("user");
				setStore({token: null, user:null });
			},
			getPosts: async () => {
				try {
					const {getStore, setStore} = getActions();
					const response = await fetch(`${process.env.BACKEND_URL}api/posts`);
					if (!response.ok) throw new Error("error al obtener posts");

					const data = await response.json();
					const user = getStore().user;
					if (!user) {
					setStore({posts: data});
						
					}
					const userId = user.id;
					const userPosts = data.filter(post => post.user_id === userId);

					setStore({ posts: userPosts });
				} catch (error) {
					console.error(error);
				}

			},
			createPost: async (title, body, image) => {
				try {
					const store = getStore();
					const token = localStorage.getItem("token");
					if (!token) throw new Error("no hay token");
					
					const response = await fetch(`${process.env.BACKEND_URL}api/posts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify({ title: title, body: body, image: image}),
					});
					const data = await response.json();
					if (!response.ok) throw new Error("Error creando post");
					console.log(" post creado correctamente:", data);
					setStore({  posts: [...getStore().posts, data.post] });

					await getActions().getPosts();


				} catch (error) {
					console.error(error);
				}
			},
			deletePost: async (id) => {
				try {
					console.log(`Eliminando post con iD:${id}`);
					const response = await fetch(`${process.env.BACKEND_URL}api/posts/${id}`, {
						method: 'DELETE',
						headers: {
							"Authorization": `Bearer ${getStore().token}`,
						}
					});
					if (!response.ok) throw new Error("Error eliminando post");
					setStore({ posts: getStore().posts.filter((post) => post.id !== id) });
					console.log("post eliminado");
				} catch (error) {
					console.error(error);

				}
			},
			getComment: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/comments`);
					const data = await response.json();
					if (!response.ok) throw new Error("error al obtener comentarios");
					setStore({ comments: data });
				} catch (error) {
					console.error(error);
				}

			},
			createComment: async (postId, commentText) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/comments`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${getStore().token}`,
						},
						body: JSON.stringify({ post_id: postId, comment_text: commentText }),
					});
					if (!response.ok) throw new Error("Error agregando comentario");
					getActions().getComments();


				} catch (error) {
					console.error(error);
				}
			},
			deleteComment: async (id) => {
				try {
					console.log(`Eliminando comentario con iD:${id}`);
					const response = await fetch(`${process.env.BACKEND_URL}api/comments/${id}`, {
						method: 'DELETE',
						headers: {
							"Authorization": `Bearer ${getStore().token}`,
						}
					});
					if (!response.ok) throw new Error("Error eliminando comentario");
					setStore({ comments: getStore().comments.filter((c) => c.id !== id) });
					console.log("post eliminado");
				} catch (error) {
					console.error(error);

				}
			},
			getFavorite: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/favourites`,{
						headers: {
							Authorization: `Bearer ${getStore().token}`,	
					},
				});
					const data = await response.json();
					if (!response.ok) throw new Error("error al obtener favoritos");
					setStore({ favourites: data });
				} catch (error) {
					console.error(error);
				}

			},
			addFavorite: async (postId) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}api/favourites`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${getStore().token}`,
						},
						body: JSON.stringify({ post_id: postId }),
					});
					if (!response.ok) throw new Error("Error agregando comentario");
					getActions().getFavorites();


				} catch (error) {
					console.error(error);
				}
			},
			uploadImg: async ({image, title, description}) => {
				const formData = new FormData();
				formData.append('file', image);
				formData.append('username', title )
				formData.append('description', description ) 
				
				const response = await fetch(process.env.BACKEND_URL + 'api/upload', {
					method: 'POST',
					body: formData,
				});

				const data = await response.json();
				if (data.secure_url) {
					setStore({ img_url: data.secure_url }); 
					return data.secure_url
				}
			},
			updStore: (key, value) => {
				setStore({ [key]: value })
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
};
export default getState;

