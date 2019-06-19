window.cipher = {
//Crear el objeto encode key:value//
  encode: (offset, string) => {
//se crea variable de salida//
    let result = '';
//console.log(string);//
//Obtener la longitud del input //
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
//console.log(positionAscii);//
//y luego aplicar la formula//
      if (positionAscii >= 65 && positionAscii <= 90){
        let positionEncode = ((positionAscii - 65 + offset) % 26 + 65);
        result += String.fromCharCode(positionEncode);
      }else if (positionAscii >=97 && positionAscii <= 122){
        let positionEncode = ((positionAscii - 97 + offset) % 26 + 97);
        result += String.fromCharCode(positionEncode);
      }else {
        result += string[i]
      } 
    }
    return result;
  },

  decode: (offset, string) => {
    //se crea variable de salida//
    let result = '';
    //Obtener la longitud del input y luego aplicar la formula//
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
//console.log(positionAscii);//
//y luego aplicar la formula//
      if (positionAscii >= 65 && positionAscii <= 90){
        let positionDecode = ((positionAscii - 90 - offset) % 26 + 90);
        result += String.fromCharCode(positionDecode);
      }else if (positionAscii >=97 && positionAscii <= 122){
        let positionDecode = ((positionAscii -122 - offset) % 26 + 122);
        result += String.fromCharCode(positionDecode);
      }else {
        result += string[i]
      } 
    }
    return result
  }
};
