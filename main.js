var i = 1;

function test() {
    var elementSearch = document.getElementById("content2");
    

    // добавляю перенос строки
    var addLineBreak = document.createElement('br');
    elementSearch.appendChild(addLineBreak);

    // первое поле для фио
    var copyText = document.getElementById("myInputFio");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
    var inputFio = document.createElement('input');
    inputFio.setAttribute("type", "text");
    inputFio.setAttribute("name", i);
    inputFio.setAttribute("value", copyText.value);
    elementSearch.appendChild(inputFio);
    

    i++;
    alert(i);
    alert('123');


}

function test2() {
    var elementSearch = document.getElementById("content2");

      // третья форма с телефоном
      document.getElementById("MyInputTelNumber").innerHTML = form.telephonNumber.value;
      var copyText = document.getElementById("myInputFio");
      copyText.select();
      document.execCommand("copy");

      
      alert("Copied the text: " + copyText.value);
      var inputFio = document.createElement('input');
      inputFio.setAttribute("type", "tel");
      inputFio.setAttribute("name", i);
      inputFio.setAttribute("value", copyText.value);
      elementSearch.appendChild(inputFio);
}