function calculateVacation() {
  // Получаем значения полей ввода
  const startDate = new Date(document.getElementById("startDate").value);
  var duration = Number(document.getElementById("duration").value);
  const endDate1=new Date(document.getElementById("endDate").value);
  var dates = readDateFields()



 console.log(duration);
  if(isNaN(endDate1.getTime())){
	  

  // Рассчитываем дату завершения отпуска
  var endDate = new Date(startDate.getTime() + (duration - 1) * 86400000);
// Проверяем, что дата завершения не попадает на воскресенье
  console.log(duration);
for( var i=0;i<dates.length;i++){
        if(dates[i].getTime()<=endDate.getTime()&&dates[i].getTime()>=startDate.getTime())
		duration++;
	  }  
	    console.log(duration);
  endDate = new Date(startDate.getTime() + (duration - 1) * 86400000);
  if (endDate.getDay() === 0) {
    alert("Дата завершения попадает на воскресенье!");
    return;
  }

  // Устанавливаем значения полей ввода
  document.getElementById("endDate").value = endDate.toISOString().substr(0, 10);  
 }
  if (isNaN(startDate.getTime())) {
   var startDate1 = new Date(endDate1.getTime() - (duration - 1) * 86400000);
     console.log(duration);
   for( var i=0;i<dates.length;i++){
        if(dates[i].getTime()<=endDate1.getTime()&&dates[i].getTime()>=startDate1.getTime())
		duration++;
	  }  
	    console.log(duration);
	  startDate1 = new Date(endDate1.getTime() - (duration - 1) * 86400000);
    // Проверяем, что дата начала не попадает на воскресенье
  if (startDate1.getDay() === 0) {
    alert("Дата начала попадает на воскресенье!");
    return;
  }
   // Устанавливаем значения полей ввода
  document.getElementById("startDate").value = startDate1.toISOString().substr(0, 10);  
}

 if(duration==0){
	 if (startDate.getDay() === 0) {
    alert("Дата начала попадает на воскресенье!");
    return;
  }
    if (endDate1.getDay() === 0) {
    alert("Дата завершения попадает на воскресенье!");
    return;
  }
	var duration1=(endDate1.getTime()-startDate.getTime())/86400000+1;
	 for( var i=0;i<dates.length;i++){
        if(dates[i].getTime()<=endDate1.getTime()&&dates[i].getTime()>=startDate.getTime())
		duration1++;
	  }  
	  document.getElementById("duration").value = duration1; 
 }

}

function addHolidays(){
  const daysAmount=document.getElementById("holidayAmount").value;	
   const formContainer = document.getElementById('form-container');
  for (let i = 0; i < daysAmount; i++) { // Генерируем n форм    
    const form = document.createElement('form'); // Создаем форму
    const label = document.createElement('label'); // Создаем метку для поля ввода даты
    label.innerText = `Введите дату праздника`; // Устанавливаем текст метки
    const input = document.createElement('input'); // Создаем поле ввода даты
	input.classList.add('holiday');
    input.type = 'date'; // Устанавливаем тип поля ввода даты
    form.appendChild(label); // Добавляем метку в форму
    form.appendChild(input); // Добавляем поле ввода в форму
    formContainer.appendChild(form); // Добавляем форму в контейнер
  }
}

function readDateFields() {
  const dateFields = document.querySelectorAll('input[class="holiday"]');
  const dates = [];

  dateFields.forEach(field => {
    const dateValue = field.value;
    if (dateValue) {
      dates.push(new Date(dateValue));
    }
  });

  return dates;
}