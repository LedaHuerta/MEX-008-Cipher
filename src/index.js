//Las variables llaman a los elementos en el HTML de la sección fake: button//
const buttonMetamorfosis = document.getElementById ('button-metamorfosis');
//variable para mostrar segunda sección//
const showCipherSection = document.getElementById('cipher-caesar');
//variable para ocultar la primera sección//
const hideFakeSection = document.getElementById('fake');

//Crear una función flecha que manipule las secciones//
const metamorfosis = () => {
    hideFakeSection.classList.add('hide');
    showCipherSection.classList.remove('hide');
}

//Crear un evento que desencadene la función//
buttonMetamorfosis.addEventListener('click',metamorfosis);