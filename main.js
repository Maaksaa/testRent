var i = 1;

function test() {
  var elementSearch = document.getElementById("content2");

  // добавляю перенос строки
  var addLineBreak = document.createElement('br');
  elementSearch.appendChild(addLineBreak);

  // копирую значение из input где фио
  var copyTextFio = document.getElementById("myInputFio").value;

  // копирую значение из input с телефоном
  var copyTextNumber = document.getElementById('myInputTextNumber').value;

  // создаю инпут с фио и добавляю значение
  var inputFio = document.createElement('input');
  inputFio.setAttribute("type", "text");
  inputFio.setAttribute("name", i);
  inputFio.setAttribute("value", copyTextFio);
  elementSearch.appendChild(inputFio);

  // создаю инпут с телефоном и добавляю значение
  var inputNumber = document.createElement('input');
  inputNumber.setAttribute("type", "text");
  inputNumber.setAttribute("name", i);
  inputNumber.setAttribute("value", copyTextNumber);
  elementSearch.appendChild(inputNumber);

  i++;
  alert(i);

}

function randomInfo() {
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong>." + getRandomNumber(255);
  document.body.append(div);

}

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}