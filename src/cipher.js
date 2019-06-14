window.cipher = {
  //Crear el objeto encode key:value//
  encode:(offset,string) => {
  //se crea variable de salida//
    let result = '';
      //Obtener la longitud del input y luego aplicar la formula//
    for (let i = 0; i < string.length; i++) {
    let positionAscii = string.charCodeAt(i);
    //console.log(positionAscii);//
    let positionEncode = ((positionAscii-65 + offset) %26 + 65);
    result += String.fromCharCode(positionEncode);
  };
  return result;
  },
  decode:(offset,string) => {
    //se crea variable de salida//
    let result = '';
    //Obtener la longitud del input y luego aplicar la formula//
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
      //console.log (positionAscii);//
      let positionDecode = ((positionAscii+65 - offset) %26 + 65);
      result += String.fromCharCode(positionDecode);
    };
  return result
  }
};
