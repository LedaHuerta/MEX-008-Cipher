//Las variables llaman a los elementos en el HTML de la sección fake: button//
const buttonMetamorfosis = document.getElementById ('button-metamorfosis');
const buttonMetamorfosisBack = document.getElementById ('button-metamorfosis-back');
//Las variables llaman a los elementos en el HTML de la sección cipher//
const buttonClear = document.getElementById('button-clear');
//const buttonCopy = document.getElementById('button-copy');//

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

//Crear un evento que desencadene las funciones para mostrar y ocultar secciones //
buttonMetamorfosis.addEventListener('click',metamorfosis);
buttonMetamorfosisBack.addEventListener('click',metamorfosisBack);

//Crear botones que desencadenan las funciones cifrar y descifrar//
const buttonCode = document.getElementById('button-code');
const buttonDecode = document.getElementById('button-decode');

//Crear evento que obtenga los valores del HTML para cifrar//
buttonCode.addEventListener('click',(e) => {
    e.preventDefault();
    let stringInput = document.getElementById ('text-input').value;
    //stringInput = stringInput.toUpperCase();//
   // console.log (stringInput);//
    let offsetKey = document.getElementById('select-key').value;
    offsetKey = parseInt(offsetKey);
    //console.log(typeof offsetKey);//
    // console.log(stringInput);// 
    //Imprimir el resultado en pantalla con el DOM//
    document.getElementById('content-1').innerHTML = window.cipher.encode (offsetKey, stringInput);
});
//Crear evento que obtenga los valores del HTML para descifrar//
buttonDecode.addEventListener ('click',(e) => {
    e.preventDefault();
    let text = '';
    //elige entre los campos//
    let stringInput = document.getElementById('content-1').innerHTML;
    if (stringInput !== '') {
        text = stringInput;
    } else {
        text = document.getElementById ('text-input').value;
    }
    //stringInput = stringInput.toUpperCase();//
    //console.log(stringInput);//
    let offsetKey = document.getElementById('select-key').value;
    offsetKey = parseInt(offsetKey);
    //console.log (typeof offsetKey);//
    //Imprimir el resultado en pantalla con el DOM//
    document.getElementById ('content-1').innerHTML = window.cipher.decode (offsetKey, text);
});
//Crear una funcion que limpie los campos, CR: usar DOM para imprimir string vacío.//
buttonClear.addEventListener('click',() => {
    document.getElementById('my-form').reset();
    document.getElementById ('content-1').innerHTML = '';
    
});
//Crear una funcion que seleccione y copie el texto//
/* No funciona, revisar por que 
    buttonCopy.addEventListener('click',() => {
    let copyCode = document.getElementById('text-input').value;
    let seleccion = document.createRange();
    seleccion.selectNodeContents (copyCode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    let resCopy = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
});*/

/*no corre y rompe el evento del boton metamorfosis:

    buttonCopy.addEventListener('click', () => {
    let copyCode = document.getElementById('text-input').value;
    copyCode.select();
    copyCode = document.execCommand('copy');
    if (!copyCode){
        console.error('no se pudo copiar el texto');
    } else {
        console.log('el texto esta en el portapapeles');
    }
    catch (err) {
        console.log ('no se pudo copiar');
    }
})*/

/*no corre y rompe el descifrado:
    buttonCopy.addEventListener('click', () => {
    let copyCode = document.getElementById ('content-1').value;
    Selection(copyCode);
    document.execCommand('copy');
    console.log ('texto copiado')
})*/
/*buttonCopy.addEventListener('click', () => {
    document.getElementById('content-1').select;
    document.execCommand('copy');

})/* no funciona
buttonCopy.addEventListener('click',() => {
    let copyArea = document.getElementById ('content-1');
    copyArea.focus();
    copyArea.querySelector('.result');
try {
        let copyCode = document.execCommand('copy');
        if (copyCode) console.log ('copiado');
        else console.log ('aun no lo logras!');
    } 
    catch (err) {
        console.log('no soportado');
    }     
});*/ 

/*No funciona consola dice que el select no es una funcion de un boton de html:
buttonCopy.addEventListener('click',() => {
   document.getElementById ('content-1').select();
    
try {
        let copyCode = document.execCommand('copy');
        if (copyCode) console.log ('copiado');
        else console.log ('aun no lo logras!');
    } 
    catch (err) {
        console.log('no soportado');
    }     
});*/
