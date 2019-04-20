var uname = document.querySelector('#uname');
var action = document.querySelector('#action');
var inputForm = document.querySelector('#inputform');
var result = document.querySelector('#result');

var newName = ['Abul','Mofiz','Kangal','Damra','Pocha','Demon','Fokir','Gorib','Modon'];
var randomNumber = parseInt(Math.random() * newName.length);
console.log(newName[randomNumber]);

function boom() {
  action.addEventListener('click',(boom)=>{
    result.innerHTML = uname.value + ", you are " + "<b>"+ newName[randomNumber] + "</b>" + " inside";
    uname.value = ""
  });
};

boom();
