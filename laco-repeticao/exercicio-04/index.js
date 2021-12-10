
document.querySelector("#btn-calcular").addEventListener("click", function
(){
    let fatorial = parseInt(document.querySelector('#txtFatorial').value);
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}

document.querySelector('#fatorial').innerHTML = 'O resultado de ' + '!' + fatorial + ' é igual a ' + resultado; 

});21
