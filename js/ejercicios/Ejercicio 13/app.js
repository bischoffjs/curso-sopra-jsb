var serie1 = new Serie('The Walking Dead', 180, 178);
var serie2 = new Serie('Game of Thrones', 180, 178);
var serie3 = new Serie('Serie 3', 180, 178);
var serie4 = new Serie('Serie 4', 205, 178);
var serie5 = new Serie('Serie 5', 160, 160);
var serie6 = new Serie('Serie 6', 180, 125);

var arreglo = [serie1,serie2,serie3,serie4,serie5, serie6];

mostrarNoFinalizadas(arreglo);

function Serie(titulo, episodios, episodiosVistos) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    this.finalizada = function ()
                        {
                            var resp = this.episodios - this.episodiosVistos;
                            if (resp == 0)
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }
}

function mostrarNoFinalizadas(arreglo){


    var arrayfinal = [];
    // arreglo.forEach(function(element){
    //     if (!element.finalizada())
    //     {
    //         arrayfinal.push(element);
    //     }
    // });
    arrayfinal = arreglo.filter(function(elem){
        return elem.finalizada() == false;
    });

    return arrayfinal
}

console.log(mostrarNoFinalizadas(arreglo));
