function getGeneros (url) {
      return new Promise((resolve, reject) => {
          let xhr = new XMLHttpRequest();
          xhr.open('GET', url);

          xhr.addEventListener('readystatechange', () => {
              if (xhr.readyState === 4 && xhr.status === 200) {
                const generosConIds = JSON.parse(xhr.responseText);
                resolve(generosConIds);
              }
          });
          xhr.send();
      });
  }

  function pintarDesplegable(opciones) {
    let desplegable = document.getElementById('desplegable-generos');
    let opcionesHTML = '';
  
    for (let id in opciones) {
      opcionesHTML += `<option value="${opciones[id]}">${opciones[id]}</option>`;
    }
  
    desplegable.innerHTML = opcionesHTML;
  }

getGeneros('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((generosConIds) => {
    pintarDesplegable(generosConIds);
})

function savePelicula(genero, pelicula) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(); 
            }
        });
        xhr.send(JSON.stringify(pelicula));
    });
}

let btnGuardar = document.getElementById('btn-guardar')
  btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
  
    let {pelicula, genero} = getDatosForm();
  

    if (pelicula && genero) {
      savePelicula(genero, pelicula).then(() => {
        Swal.fire({
            text: 'Pelicula guardada correctamente...',
            type: 'success'
          })
    })
    }
  })

  function getDatosForm() {
        let pelicula = document.getElementById('input-pelicula').value.trim();
        let genero = document.getElementById('desplegable-generos').value.trim();
        return {
            pelicula: pelicula,
            genero: genero
        }
    }

  let btnRedirect = document.getElementById('btn-guardar-redirect');
  btnRedirect.addEventListener('click', () => {
    event.preventDefault();
  
    let {pelicula, genero} = getDatosForm();
  

    if (pelicula && genero) {
      savePelicula(genero, pelicula).then(() => {
        Swal.fire({
            text: 'Pelicula guardada correctamente...',
            type: 'success'
          }).then(() => {
              //window.open('http://localhost:8080/index.html');
              location.href = ('http://localhost:8080/index.html');
          })
         

    })
    }
  })



  