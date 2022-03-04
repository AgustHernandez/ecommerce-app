let productos = [
    {id: 1, nombre: "Taza", imagen:'https://drive.google.com/thumbnail?id=1_m_ml_oUxvpH_PldWkvqiyBZy2xhJhZH', description: "Taza de cerámica con diseño", stock: 10, precio: 800},
    {id: 2, nombre: "Macetero Vertical", imagen:'https://drive.google.com/thumbnail?id=1qutYQSHnVlLnoV5qJatKPz8ZT4lLk3Jy', description: "Macetero vertical", stock: 5, precio: 1000},
    {id: 3, nombre: "Maceta", imagen:'https://drive.google.com/thumbnail?id=1hzdTWyqVT9m-eA2lKgvXnbJeZDarrWhU', description: "Maceta de cerámica con diseño", stock: 15, precio: 950},
    {id: 4, nombre: "Cesto para Juguetes", imagen:'https://drive.google.com/thumbnail?id=1ouz98KPD49jGRPOD2HhNHlFyT7-GXIwj', description: "Cesto para juguetes con diseño", stock: 10, precio: 1100},
    {id: 5, nombre: "Buzo para Mascotas", imagen:'https://drive.google.com/thumbnail?id=1IvG9gD47LGrgNNNc-6BgjctyV7nygkUd', description: "Buzo para Mascotas", stock: 8, precio: 1050},
    {id: 6, nombre: "Cama para Mascotas", imagen:'https://drive.google.com/thumbnail?id=1aYT-YRrqFpVwJVBZcKPHITiM8sxWkN7O', description: "Cama para Mascotas", stock: 5, precio: 2000},
    {id: 7, nombre: "Caramelero", imagen:'https://drive.google.com/thumbnail?id=1kd4f_04XuKr6uoEJ17L2pUyapxTyiO3d', description: "Caramelero con diseño", stock: 10, precio: 950},]

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