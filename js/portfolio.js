filter("all")
function filter(see) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (see == "all") see = "";
  
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "list-show");
    if (x[i].className.indexOf(see) > -1) AddClass(x[i], "list-show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("filter__item");
var btns = btnContainer.getElementsByClassName("filter__btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter__btn-active");
    current[0].className = current[0].className.replace(" filter__btn-active", "");
    this.className += " filter__btn-active";
  });
}