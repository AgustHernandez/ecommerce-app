let productos = [
    {id: 1, name: "Taza", description: "Taza de cerámica con diseño", stock: 10},
    {id: 2, name: "Macetero Vertical", description: "Macetero vertical", stock: 5},
    {id: 3, name: "Maceta", description: "Maceta de cerámica con diseño", stock: 15},
    {id: 4, name: "Cesto para Juguetes", description: "Cesto para juguetes con diseño", stock: 10}]

export const getFetch = new Promise((respuesta, rejected) => {
    let url = productos
    if (url === productos) {
        setTimeout(() => {
        respuesta(productos);
        }, 3000);
    } else {
        rejected('400 not found')
    }
})