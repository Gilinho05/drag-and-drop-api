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
    /* para cada card colocamos os eventos, ou seja tera estes 3 eventos
    e cada um dos eventos vao executar a sua função*/
    card.addEventListener('dragstart', dragStart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragEnd)
})

//criacao das funcoes que sao disparadas pelos eventos criados
function dragStart(){
    //log('CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    // o "this" é o card referenciado acima 
    this.classList.add('is-dragging')
}

function drag(){
    //log('CARD: is dragging')
} 

function dragEnd(){
    //log('CARD: Stop dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
     
    this.classList.remove('is-dragging')
}


/* local onde se vai soltar os cards */ 
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    //log('DROPZONE: enter in zone')
    this.classList.remove('over')
}

function dragover(){
    //log('DROPZONE: in the zone')
    // this = dropzone
    this.classList.add('over')
    /*apanhar o cartao que esta a ser arrastado, neste caso sabemos que vai
    apanhar o cartao que esta a ser arrastado por tem a class .is-dragging*/
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)
} 

function dragleave(){
    //log('DROPZONE: leave the zone')
    this.classList.remove('over')
}

function drop(){
    //log('DROPZONE: dropped in the zone')
    this.classList.remove('over')
}