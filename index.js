var uname = document.querySelector('#uname');
var action = document.querySelector('#action');
var inputForm = document.querySelector('#inputform');
var result = document.querySelector('#result');

function boom() {
  action.addEventListener('click',(boom)=>{
    result.innerHTML = uname.value;
  });
};

boom();
