/*** Help ***/
function log(message){
    console.log('> ' + message)
}

/*** APP ***/

/* criar uma variavel que apanha 
todos os elementos do html com a class card e dropzone */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/* para cada elemento card adicionamos um evento que ira 
disparar uma funcao */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

//criacao das funcoes que sao disparadas pelos eventos criados
function dragstart(){
    //log('CARD: Start dragging')
}

function drag(){
    //log('CARD: is dragging')
} 

function dragend(){
    //log('CARD: Stop dragging')
}


/* local onde se vai soltar os cards */ 
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    log('DROPZONE: enter in zone')
}

function dragover(){
    log('DROPZONE: in the zone')
} 

function dragleave(){
    log('DROPZONE: leave the zone')
}

function drop(){
    log('DROPZONE: dropped in the zone')
}