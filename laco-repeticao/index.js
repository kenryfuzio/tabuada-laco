document.querySelector("#btn-calcular").addEventListener("click", function
(){
    let numero = parseInt(document.querySelector('#txtTabuada').value);
    for (let i = 1; i <= 10; i++){
        tabuada = numero * i;
        let result = document.createElement ('p');
        result.innerHTML = tabuada; 
        document.querySelector('#tabuada').appendChild(result);

    }



});