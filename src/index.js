const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copyButton = document.querySelector(".btn-copiar");

copyButton.style.display = "none";

function validateChar() {
  let chars = textArea.value;
  let SpecialChars = chars.match(/^[a-z\s]*$/);

  if (!SpecialChars || SpecialChars === 0) {
    alert("No es permitido caracteres especiales");
    location.reload(); //https://www.w3schools.com/jsref/met_loc_reload.asp
    return true;
  }
}

function btnEncriptar() {
  if (!validateChar()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copyButton.style.display = "block";
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesncriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  copyButton.style.display = "block";
}

function desencriptar(stringdesEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringdesEncriptada.includes(matrizCodigo[i][1])) {
      stringdesEncriptada = stringdesEncriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringdesEncriptada;
}

/*
https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
*/

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
}
