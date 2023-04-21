function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert ('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento != null){
        
        if(elemento.localName === 'audio'){
            elemento.play();

        }
    }
}

const listaDeTeclas=document.querySelectorAll('.tecla');


// Para - Repetição e otimização do FOR
for (let contador = 0; contador < listaDeTeclas.length; contador++ ) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];    
    const idAudio=`#som_${instrumento}`; //templaite string - marcação de interpolação
   
    tecla.onclick=function(){
        tocaSom(idAudio);
    }
    
    //evento que representa o momento que uma tecla é precionada
    tecla.onkeydown = function (evento){
      
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
        
    }
    
    // evento de quando o usuario solta a tecla
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
        
