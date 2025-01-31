const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            perfilUsuario: null,
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
                    nombre: "Ayuttayah",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WCbRzW4sMStT4uy2iWDCKhB9wgT1pfi8Rw&s",
                    region: "Asia",
                    ruta: "/ayuttayah",
                    omsLink:"https://www.openstreetmap.org/search?query=Ayuttayah",
                },
            ],
        },

        actions: {
            getPerfilUsuario: async () => {
                try {
                    console.log("obteniendo el usuario");
                    const response = await fetch(`${getStore().url}/perfil/usuario`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    if (!response.ok) throw new Error("Error obteniendo usuario");
                    const data = await response.json();
                    setStore({ perfilUsuario: data });
                } catch (error) {
                    console.error("error obteniendo el usuario", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();

                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                setStore({ demo: demo });
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
