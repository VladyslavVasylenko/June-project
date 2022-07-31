const btnLogin = document.getElementById('formLogin'),
      btnForm = document.querySelector('.btn-form'),
      form = document.querySelector('#form-first'),
      table = document.querySelector('.table'),
      formStyle = document.querySelector('.form');

let userName = document.querySelector('.name'),
    userPassword = document.querySelector('.password'),
    configUserPassword = document.querySelector('.config-password'),
    formUserLogin;

btnLogin.addEventListener('click', function(){
  formStyle.classList.toggle("open");
});

function formLogin() {
  table.innerHTML = '<h3 class="thank">Thank for your regastration! <br> Wait for email!</h3>';
  table.classList.toggle("open");
  form.reset();
}

function inputErr() {
  table.innerHTML = '<h3 class="thank">Write your name!</h3>';
  table.classList.toggle("open");
}

function inputErr2() {
  table.innerHTML = '<h3 class="thank">Your password wrong!</h3>';
  table.classList.toggle("open");
}

btnForm.addEventListener('click', function(event){
  event.preventDefault();

  if(userPassword.value !== configUserPassword.value || userPassword.value === '' || userName.value === ''){
    if(userName.value === '') {
      setTimeout(inputErr, 3000);
      inputErr();
    } else{
        setTimeout(inputErr2, 3000);
        inputErr2();
    }
  } else{
    setTimeout(formLogin, 1000);
    setTimeout(() => {table.classList.toggle("open");}, 3000);
    formStyle.classList.toggle("open");
  }
});