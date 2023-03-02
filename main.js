/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    const snd = new Audio("wind.wav");
    snd.play().then();

  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement(event) {
    event.preventDefault()
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInputTitle").value;
    var inputDate = document.getElementById("myInputDate").value;
    var inputType = document.getElementById("myInputType").value;
    console.log(inputDate)
    let splitHours = inputDate.split("T")
    let date = splitHours[0].split("-")

    var t = document.createTextNode(inputValue + "\t\t\t" + date[1] + "/" + date[2] + "/" + date[0] + "\t" + splitHours[1] + "\t\t\t" + inputType);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInputTitle").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}



