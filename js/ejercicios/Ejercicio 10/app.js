
    iniciar();
    function iniciar(boolean)
    {
    var numAzar = Math.floor(Math.random()*51); 
    var turnos = 0;
    var numPensado = prompt('Introduzca el numero que piense que ha salido');   
    while (Number(numPensado) != numAzar)
    {
        if (Number(numPensado) > numAzar)
        {
            alert('El numero es mayor');
            turnos++;
            var numPensado = prompt('Introduzca el numero que piense que ha salido');  
        }
        else if (Number(numPensado) < numAzar)
        {
            alert('El numero es menor');
            turnos++;
            var numPensado = prompt('Introduzca el numero que piense que ha salido');  
        }
    } 

    if (Number(numPensado) == numAzar )
    {
        alert('Es correcto, jugaste '+ turnos.toString() + ' turnos');
        confirm('Quiere volver a Jugar?')
        if (resp == true){
            iniciar();

        }
        else 
        {
            alert('Gracias a jugar '); 
        }
    }
    return true;
}
