import { Bangkok } from "../pages/bangkok";

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
