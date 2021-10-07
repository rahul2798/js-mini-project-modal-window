const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);

//normal way
// for(let i=0; i<btnsOpenModal.length; i++){
//     btnsOpenModal[i].addEventListener('click',function(){
//         modal.classList. remove('hidden');
//         overlay.classList.remove('hidden');
//     });
// }

// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
// overlay.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

//optimised way
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0; i< btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal);

}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function(event){
    console.log(event);
    if(event.key === 'Escape'&& !modal.classList.contains('hidden')){
        closeModal();
    }
})