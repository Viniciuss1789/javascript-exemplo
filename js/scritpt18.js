const carroMarca = ["Volkswagen", "Toyota", "Hyundai", "BYD", "Ford", "BMW", "Ferrari"]

let tamanho = carroMarca.length

let contadora = 2

for (; contadora < tamanho; contadora++) {
    console.log("As marcas que minha oficina atende são : " + (contadora - 1) + "° " + carroMarca[contadora])
}