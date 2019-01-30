
function Data(){
  document.write("Текущий год  : "+ new Date().getFullYear()+ " от Рождества Христова");
}

send.onclick = function myFunk(){
    var check = document.querySelector('input[type=checkbox]');    

    if (check.checked) {
        alert("Отправлено");
    }
    
else {
    alert("Обработка информации не подтверждена,отправка не возможна")
}
}
