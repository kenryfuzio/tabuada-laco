document.querySelector("#btn-calcular").addEventListener("click", function
(){
     let adicao = 0; 
    document.querySelector('#tabuada').innerHTML = '';
    for (let i = 0; i <= 100; i = i + 2 ){
        adicao =  i 
 if (adicao % 5 == 0)
        let result = document.createElement ('p');
        result.innerHTML = adicao; 
        result.style = 'margin: 0';
        document.querySelector('#tabuada').appendChild(result);
    }


});