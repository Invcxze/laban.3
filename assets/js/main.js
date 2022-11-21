//1 
//прокручивает страницу через 3 секунды после клика
function btnClick(){
	setTimeout(()=>{
		window.scrollBy(0,500)
	  },3000)
  }
//2
// В условии при вставке текста больших размеров в браузере появляется прокрутка и наша функция говорит через alert нам об этом
// addEventListener как обработчик клика
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click",func);
// function func() {
// if ((window.innerWidth - document.documentElement.clientWidth) > 0) {
// 			alert("Имеется");
// 		} else {
// 			alert('Отсутствует');
// 		}
// }
//3 
// привязываем обработчик, записываем input, вывод
// let btn = document.getElementById('btn');
// btn.addEventListener('click', function (event) {
//     event.preventDefault(); 
//     let form = document.getElementsByTagName('input');
//     let count = 0;
//    for (let i = 0; i < form.length; i++ ){
//         count += Number(form[i].value)
//     }
//     alert(count)
// });
//4
// через if высвечиваем селекты выбранной страны 
// var countries = document.querySelector('#countries'); 
// var brazTowns = document.querySelector('#braz'); 
// var gvTowns = document.querySelector('#gv'); 
// var jpTowns = document.querySelector('#jp'); 
// countries.addEventListener('change', function() { 
// document.querySelector('.alive.Towns').classList.remove('alive'); 
// if(this.value == 'braz') { 
//     brazTowns.classList.add('alive'); 
// } 
// if(this.value == 'gv') { 
//     gvTowns.classList.add('alive'); 
// } 
// if(this.value == 'jp') { 
//     jpTowns.classList.add('alive'); 
// } 
// }); 
// 5
//находим родителя и создаем лишку, добавляем внутри пункт и добавляем его в конец
// function addElement() {
//     let parent = document.querySelector('#parent');
//     let li = document.createElement('li');
// 	li.innerHTML = 'пункт';
// 	parent.appendChild(li);
// }
//6
//исп mogveover, тем самым каждый раз когда курсор на нашей ссылке то выполняется условие
// var elems = document.getElementsByTagName('a');
// for (var i = 0; i < elems.length; i++) {
//  elems[i].addEventListener('mouseover', func);
// }
// function func() {
//  this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// }
//7 
//при клике на текст наше число возводится в квадрат
// document.querySelectorAll('p').forEach(p => {
// 	p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
//   })  
// 8
// при каждом нажатии на кнопку счётчик count будет возрастать, тем самым считать клики совершённые по кнопке
// let count = 0;
// let btn = document.getElementById('btn')
// function btnClick(){
//     count +=1;
//     btn.innerHTML = count
// }
//9 
// Element.closest() возвращает ближайший родительский элемент (или сам элемент)
// создаём с помощью createElement новые лишки, с помощью нашего if добавляем к нему при клике воскл.знак
// var ul = document.getElementById("ul");
// ul.addEventListener("click", function func(event) {
// 	var li = event.target.closest("li");	
// 	if (li) {
// 		li.innerHTML +="!"; 
// 	}
// });
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", function() {
// var liElem = document.createElement("li");
// liElem.innerHTML = "текст какой-то там";
// ul.appendChild(liElem);
// });
//10
// если клик на тд то изменяется, если мимо то игнор 
// с помощью appendChild добавляем нашу строку
// let table = document.querySelector("table");
// let names = document.querySelector(".name");
// let surname = document.querySelector(".surname");
// let btn = document.querySelector("button");
// table.onclick = function(event){
//     let target = event.target;
//         if(target.tagName != 'TD') return;
//         if(target.tagName == 'TD') {
//             target.innerText = prompt("Изменить",target.innerText);
//         }
//     }
// btn.onclick = function() {
//     let tr = document.createElement("tr");
//     if(names.value != "" && surname.value != "") {
//         tr.innerHTML = `<td>${names.value}</td><td>${surname.value}</td>`;
//         table.appendChild(tr);
//     }
// }