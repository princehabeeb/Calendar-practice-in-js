var btn = document.getElementById('btn');


btn.addEventListener('click', () => {
var yourDate = new Date(document.getElementById('date').value);
var CurrentDate = new Date();

const yourYears = CurrentDate.getFullYear() - yourDate.getFullYear();
const yourMonth = CurrentDate.getMonth() - yourDate.getMonth();
const yourDay = CurrentDate.getDate() - yourDate.getDate();

console.log(yourYears, yourMonth, yourDay);



});