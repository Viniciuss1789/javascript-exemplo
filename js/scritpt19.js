const carroMarca = ["Volkswagen", "Toyota", "Hyundai", "BYD", "Ford", "BMW", "Ferrari"]

let tamanho = carroMarca.length

let contadora = 0

for (; contadora < tamanho; ) {
    console.log("As marcas que minha oficina atende são : " + (contadora +1) + "° " + carroMarca[contadora])
    contadora++
}