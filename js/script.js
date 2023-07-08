const user_email = document.getElementById('email');
const user_name = document.getElementById('name');
const user_phone = document.getElementById('phone');

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
        To : 'qfhthcsz@exelica.com',
        From : "jstestsite2105@gmail.com",
        Subject : "Заявка",
        Body : pis
    }).then(function (message) {
      alert("Mail has been sent successfully");
    });
}





