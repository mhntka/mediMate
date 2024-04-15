document.querySelector('.login-form').onsubmit = function(event) {
  event.preventDefault();
  // Здесь вы можете добавить проверку введенных данных и дальнейшую логику
  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  console.log("Логин: " + login + " Пароль: " + password);
  // Здесь должна быть логика авторизации
};

document.getElementById('register').onclick = function() {
  // Переход на страницу регистрации
  window.location.href = 'register.html';
};
