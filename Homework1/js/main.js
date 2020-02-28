// Первая кнопка
// Ссылка

function goToPage() {
  var button = document.getElementById("button-first");
  document.location.href = "https://www.google.com/"; // Location!
}

// Кнопка 2
// Изменение стиля

var color = document.getElementById("body");
function newColor() {
  if (color.style.backgroundColor == "aqua") {
    color.style.backgroundColor = "green";
  } else {
    color.style.backgroundColor = "aqua";
  }
}

//Кнопка 3
//Разметка

function destruction() {
  var elem = document.getElementById("wrapper");
  var elem2 = document.getElementById("second-wrapper");
  elem.style.display = "none";
  elem2.style.display = "flex";
}

//Кнопка 4
//Инфо

function info() {
  var box = document.getElementById("box"),
    text = document.getElementById("text");
  (box.style.display = "flex"), (text.innerHTML = "<b>Text</b> innerHTML"); //innerHTML!
}
function cl() {
  var box = document.getElementById("box");
  box.style.display = "none";
}

// Кнопка 5
// Вернуть назад

function original() {
  var ori = document.getElementById("wrapper");
  var ori2 = document.getElementById("second-wrapper");
  ori.style.display = "flex";
  ori2.style.display = "none";
}

// obj
// Условие

var term = {
  Германия: 13,
  Канада: 5,
  Искания: 20,
  Турция: 30,
  Rome: 25
};

//Среднее значение
var sum = 0;
for (var j in term) {
  sum += term[j];
}
alert(
  "Значение: Германия: 13, Канада: 5, Испания: 20, Турция: 30, Rome: 25 Cреднее значение: " +
    sum / 5
);

//Максимальное значение
function fterm(term) {
  var maxsum = 0;
  for (var j in term) {
    if (term[j] >= maxsum) {
      maxsum = +term[j];
    }
  }
  return maxsum;
}
alert(
  "Значение: Германия: 13, Канада: 5, Испания: 20, Турция: 30, Rome: 25 Максимальное значение: " +
    fterm(term)
);
