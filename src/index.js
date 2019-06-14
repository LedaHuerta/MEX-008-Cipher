//Las variables llaman a los elementos en el HTML de la sección fake: button//
const buttonMetamorfosis = document.getElementById ('button-metamorfosis');
const buttonMetamorfosisBack = document.getElementById ('button-metamorfosis-back');
//variable para mostrar segunda sección//
const showCipherSection = document.getElementById('cipher-caesar');
//variable para ocultar la primera sección//
const hideFakeSection = document.getElementById('fake');

//Crear una función flecha que manipule las secciones//
const metamorfosis = () => {
    hideFakeSection.classList.add('hide');
    showCipherSection.classList.remove('hide');
}
//Crear una función flecha que manipule las secciones de vuelta//
const metamorfosisBack = () => {
    hideFakeSection.classList.remove('hide');
    showCipherSection.classList.add('hide');
}

//Crear un evento que desencadene la función//
buttonMetamorfosis.addEventListener('click',metamorfosis);
buttonMetamorfosisBack.addEventListener('click',metamorfosisBack);

//Crear botones que desencadenan las funciones cifrar y descifrar//
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');

//Crear funcion que obtenga los valores del HTML e invoque cipher//
buttonCode.addEventListener('click',() => {
    let offSetKey = document.getElementById('select-key').value;
    //console.log(offSetKey);//
    //console.log(typeof[offSetKey]);//
    let textInput = document.getElementById ('text-input');
    console.log(textInput.value);
}
)

