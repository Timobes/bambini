const user_email = document.getElementById('email');
const user_name = document.getElementById('name');
const user_phone = document.getElementById('phone');

let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

let re2 = /^[a-z0-9_-]{3,16}$/;

let re3 = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

let tests = false;


function exam() {

  while (tests != true) {  
    if (re.test(user_email.value)) {
      console.log('email true')
    }else {
      console.log('email false')
      user_email.value = "Ошибка в названии почты!"
      break
    }

    if (re2.test(user_name.value)) {
      console.log('name true')
    }else {
      console.log('name false')
      user_name.value = "Ошибка в имени!"
      break
    }

    if (re3.test(user_phone.value)) {
      console.log('phone true')
      test = true
      sendEmail()
      break
    }else{
      console.log('phone false')
      user_phone.value = "Ошибка в телефонном номере!"
      break
    }
  }

  console.log("tests = ",tests)
  console.log('---------------------------------------')
}



function sendEmail() {
    console.log('email is ready!')

    console.log(user_email.value)
    console.log(user_name.value)
    console.log(user_phone.value)
    console.log('to: qfhthcsz@exelica.com')

    let pis = `
      Почта пользователя ${user_email.value} <br />
      Имя пользователя: ${user_name.value} <br />
      Номер телефона пользователя: ${user_phone.value}`

    Email.send({
        SecureToken : "c326c01f-fbc6-48d9-b036-94533ecb3967",
        To : 'obertim@yandex.ru',
        From : "jstestsite2105@gmail.com",
        Subject : "Заявка",
        Body : pis
    }).then(function (message) {
      alert("Mail has been sent successfully");
    });
}





