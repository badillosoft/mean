// Se tiene un arreglo de objetos dónde cada objeto contine la información de 
// una coordenada geográfica (ej. [{ lat: 20, lon: 18 }]).

// Se require un programa que encuentre todos los puntos cercanos a la coordenada
// { lat: 15, log: 15 } con 2 unidades de radio máximos.

const coordenadas = [
    {
        lat: 17,
        lon: 20
    },
    {
        lat: 13,
        lon: 15
    },
    {
        lat: 14,
        lon: 18
    },
    {
        lat: 12,
        lon: 15
    }
];

const origen = {
    lat: 15,
    lon: 15
};

const cercanos = [];

for (let coord of coordenadas) {
    const dlat = coord.lat - origen.lat;
    const dlon = coord.lon - origen.lon;

    // Distancia euclidia
    const d = Math.sqrt(dlat * dlat + dlon * dlon);

    if (d <= 20) {
        cercanos.push(coord);
    }
}

console.log(cercanos);