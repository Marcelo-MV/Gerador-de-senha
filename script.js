let slider = document.getElementById("slider")
let buttonElement = document.querySelector("#button")
let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")
let conatainerPassword = document.querySelector(".container-password")
let charset = "abcdefghijklmnoppqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ1234567890!@#"
let novaSenha = ""

sizePassword.innerHTML = slider.value
slider.oninput =function(){
    //a paralavra slider pode ser subistituida por this
    sizePassword.innerHTML = slider.value
}
function generatePassword(){
    // gera uma variavel vazia que recebera uma string
    let pass = ""
    // ao executar a função irá executar també este for i é o iterador, n é comprimeto das caracteres
    //enquanto iterador for menor que o tamanho o input do usuário o laço se repetirá (isso já contando com a diferença que a posição 0 cousa)
    for(let i = 0, n = charset.length; i < slider.value; ++i ){
        //
        pass += charset.charAt(Math.floor(Math.random()* n))
    } 
    conatainerPassword.classList.remove("hide") 
    password.innerHTML = pass
    novaSenha = pass
}
function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}


