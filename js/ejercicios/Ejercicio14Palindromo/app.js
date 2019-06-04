var entrada = 'hola';
var resp = palindrome(entrada);

function palindrome(entrada) {
    entrada.trim();
    var valor = false;
    for (var i = 0; i <= Math.floor(entrada.length/2); i++) {
        for (var j = (entrada.length)-1; j > Math.ceil(entrada.length/2); j--) {
            if (entrada[i] == entrada[j]) 
            {
               valor = true;           
            }
            else 
            {
                valor = false;
                break;
            }
        }
    };

    if (valor = true) {
        console.log('si es');
    }
    else
    {
        console.log('no es');    
    }
}