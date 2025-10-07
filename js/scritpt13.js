let idade = parseInt(prompt("Digite sua idade em anos : "))

if (idade < 16) {
    alert("Não pode votar")
} else if (idade < 18) {
    alert("Você possui a opção de votar")
} else {
    alert("Você deve votar")
}