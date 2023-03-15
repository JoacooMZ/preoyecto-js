let respuesta=[];   

const render= () =>{

    if(respuesta.length > 0){
        respuesta.forEach(respuesta =>{
            const p = document.createElement('p');
            p.textContent = respuesta.Texto
            p.id = respuesta.id
            respuesta.appenChild (p)

        
        });
    }

    }
    const agregarRespuesta=(Event)=>{
        Event.preventDefault()  
        const respuesta = document.querySelector('#respuesta').value
        
        
        }



const limpiarHTML =() =>{
    while(respuesta.firstChild){
        respuesta.removeChild(respuesta.firstChild);
    }
}

const sincronizarStorage = () =>{
localStorage.setItem('respuesta', JSON.stringify(respuesta) )
}


const formulario = document.querySelector('#formulario'); 

document.addEventListener ('DOMcontentloaded',()=>{
    if(JSON.parse(localStorage.getItem('respuesta')) !=null){
        respuesta = JSON.parse(localStorage.getItem('respuesta'))
    }

    sincronizarStorage()

});




const respuestaObj={
    id: Date.now(),
    Texto: respuesta
}
respuesta.push(respuestaObj)
formulario.addEventListener('submit', agregarRespuesta);

const formulariogow = document.querySelector ('#formulariogow');
formulariogow.addEventListener('submit',agregarRespuesta);

const formulariorr2 = document.querySelector('#formulariorr2');
formulariorr2.addEventListener('submit' ,agregarRespuesta);

