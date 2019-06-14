//Las variables llaman a los elementos en el HTML de la sección fake: button//
const buttonMetamorfosis = document.getElementById ('button-metamorfosis');
const buttonMetamorfosisBack = document.getElementById ('button-metamorfosis-back');
//Las variables llaman a los elementos en el HTML de la sección cipher//
const buttonClear = document.getElementById('button-clear');
const buttonCopy = document.getElementById('button-copy');

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

//Crear un evento que desencadene la función //
buttonMetamorfosis.addEventListener('click',metamorfosis);
buttonMetamorfosisBack.addEventListener('click',metamorfosisBack);

//Crear botones que desencadenan las funciones cifrar y descifrar//
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');

//Crear funcion que obtenga los valores del HTML para cifrar//
buttonCode.addEventListener('click',(e) => {
    e.preventDefault();
    let stringInput = document.getElementById ('text-input').value;
    stringInput = stringInput.toUpperCase();
   // console.log (stringInput);//
    let offsetKey = document.getElementById('select-key').value;
    offsetKey = parseInt(offsetKey);
    //console.log(typeof offsetKey);//
    // console.log(stringInput);// 
    document.getElementById('content-1').innerHTML = window.cipher.encode (offsetKey, stringInput);
});
//Crear una función que obtenga los vaores del HTML para descifrar//
buttonDecode.addEventListener ('click',(e) => {
    e.preventDefault();
    let stringInput = document.getElementById('text-input').value;
    stringInput = stringInput.toUpperCase();
    //console.log(stringInput);//
    let offsetKey = document.getElementById('select-key').value;
    offsetKey = parseInt(offsetKey);
    //console.log (typeof offsetKey);//
    document.getElementById ('content-1').innerHTML = window.cipher.decode (offsetKey, stringInput);
});
//Crear una funcion que limpie los campos//
buttonClear.addEventListener('click',() => {
    const clearAll = document.getElementById('my-form').reset();
});
//Crear una funcion que seleccione y copie el texto//
buttonCopy.addEventListener('click',() => {
    let copyCode = document.getElementById('text-input').value;
    let seleccion = document.createRange();
    seleccion.selectNodeContents (copyCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    let resCopy = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
});