let productos = [
    {id: "1", nombre: "Taza", imagen: require('../img/taza.jpg'), categoria: "hogar", description: "Taza de cerámica", stock: 10, precio: 800},
    {id: "2", nombre: "Macetero Vertical", imagen: require('../img/macetero.jpg'), categoria: "jardin", description: "Macetero vertical", stock: 5, precio: 1000},
    {id: "3", nombre: "Maceta", imagen: require('../img/maceta.jpg'), categoria: "jardin",description: "Maceta de cerámica", stock: 15, precio: 950},
    {id: "4", nombre: "Cesto para Juguetes", imagen: require('../img/cestoJuguetes.jpg'), categoria: "mascotas",description: "Cesto para juguetes", stock: 10, precio: 1100},
    {id: "5", nombre: "Buzo para Mascotas", imagen: require('../img/buzoMascAzul.jpg'), categoria: "mascotas", description: "Buzo para Mascotas", stock: 8, precio: 1050},
    {id: "6", nombre: "Cama para Mascotas", imagen: require('../img/camaMascotas.jpg'), categoria: "mascotas", description: "Cama para Mascotas", stock: 5, precio: 2000},
    {id: "7", nombre: "Caramelero", imagen: require('../img/carameleros.jpg'), categoria: "hogar", description: "Caramelero", stock: 10, precio: 950},]

export const getFetch = new Promise((respuesta, rejected) => {
    let url = productos
    if (url === productos) {
        setTimeout(() => {
        respuesta(productos);
        }, 2000);
    } else {
        rejected('400 not found')
    }
})

