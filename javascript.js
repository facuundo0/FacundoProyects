const AutosConProblemas = [
    {
        Modelo: "Fiat Cronos ",
        Año: "2018-2024",
        Imagen: "images/Cronos.png",
        Problemas: ["Problemas con el arranque", "Problemas con la puerta", "Problemas con la bateria", "Problemas con las ruedas", "Problemas con los fusibles"]
    },
    {
        Modelo: "Peugeot 208 ",
        Año: "2012-2024",
        Imagen: "images/208.png",
        Problemas: ["Problemas con el arranque", "Problemas con la puerta", "Problemas con el volante", "Problemas con las vibraciones", "Problemas con los fusibles"]

    },
    {
        Modelo: "Toyota Etios ",
        Año: "2010-2024",
        Imagen: "images/etios.png",
        Problemas: ["Problemas con el arranque", "Problemas con la puerta", "Problemas con la radio", "Problemas con la radio", "Problemas con el volante"]
    },
    {
        Modelo: "Gol trend ",
        Año: "2008-2023",
        Imagen: "images/gol.png",
        Problemas: ["Problemas con el arranque", "Problemas con la puerta", "Problemas con las temperaturas", "Problemas con las perdidas de potencia", "Problemas con los fusibles"]
    },
    {
        Modelo: "Chevrolet Celta ",
        Año: "2000-2015",
        Imagen: "images/celta.png",
        Problemas: ["Problemas con el estereo", "Problemas con el arranque", "Problemas con las bujias", "Problemas con las puertas", "Problemas con los fusibles"]
    },
    {
        Modelo: "Toyota Corolla ",
        Año: "2013-2019",
        Imagen: "images/corolla.png",
        Problemas: ["Problemas con el arranque", "Problemas con los fusibles", "Problemas con la perdida de potencia", "Problemas con las vibraciones", "Problemas con los inyectores"]
    },
    {
        Modelo: "Nissan Tiida ",
        Año: "2006-2024",
        Imagen: "images/tiida.png",
        Problemas: ["Problemas con el arranque", "Problemas con la perdida de potencia", "Problemas con el volante", "Problemas con la vibraciones", "Problemas con los fusibles"]
    },
    {
        Modelo: "Renault Sandero ",
        Año: "2008-2024",
        Imagen: "images/sandero.png",
        Problemas: ["Problemas con el codigo de la radio", "Problemas con la puerta", "Problemas con el arranque", "Problemas con el volante", "Problemas con el estereo"]
    },
];

function Autos() {
    const listaAutos = document.getElementById(`listaAutos`);

    let contenido = ``;
    let problemas = ``;
    AutosConProblemas.forEach((Auto) => {
        Auto.Problemas.forEach((problema) => {
            problemas += `<p> ${problema}</p>`
        })

        contenido += `<div><div class="Auto1"> <img class="Auto1" src="${Auto.Imagen}"> </div> <div class="ModelosAutos"> <h2>${Auto.Modelo} ${Auto.Año}</h2> <h2>Problemas comunes</h2>${problemas}  </div></div>`;
        problemas = ``;
    });

    listaAutos.innerHTML = contenido;

}
