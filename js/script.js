let more = document.querySelectorAll('.order')[0],
    send = document.getElementsByClassName('send')[0],
    mob = document.getElementsByClassName('mob')[0],
    close = document.getElementsByClassName('close')[0],
    input = document.getElementsByClassName('mob_w'),
    user = document.getElementsByClassName('user')[0],
    more_close = document.getElementsByClassName('more_close')[0],
    more_inf = document.getElementsByClassName('more_inf')[0],
    overlaw = document.getElementsByClassName('overlaw')[0],
    more_int = document.getElementsByClassName('more_int'),
    mob_text = document.getElementsByClassName('mob_text'),
    box_input = document.getElementsByClassName('box_main_button')[0];


console.log(mob_text[0])

more.addEventListener('click' , function(){
    mob.style.display = 'flex';
    send.classList.add('anim');
    input[0].placeholder = 'Телефон';
    input[1].placeholder = 'Имя';
    send.value = 'Отправить';
    overlaw.style.display = 'block'
    mob_text[0].innerText = 'Просто заполните форму заявки и мы перезвоним вам в течении 10 минут';

})
user.addEventListener('click' , function () {
    mob.style.display = 'flex';
    send.classList.add('anim');
    input[0].placeholder = 'Логин';
    input[1].placeholder = 'Пароль';
    send.value = 'Войти';
    overlaw.style.display = 'block';
    mob_text[0].innerText = 'Вход'
})
send.addEventListener('click' , function(){
    mob.style.display = 'none';
    overlaw.style.display = 'none'
})

close.addEventListener('click' , function(){
    mob.style.display = 'none';
    overlaw.style.display = 'none'
})
more_close.addEventListener('click' , function(){
    more_inf.style.display = 'none';
    overlaw.style.display = 'none'
})
more_int[0].addEventListener('click' , function(){
    more_inf.style.display = 'block';
    overlaw.style.display = 'block'
})
box_input.addEventListener('click' , function(){
    mob.style.display = 'flex';
    send.classList.add('anim');
    input[0].placeholder = 'Телефон';
    input[1].placeholder = 'Имя';
    send.value = 'Отправить';
    overlaw.style.display = 'block'
    mob_text[0].innerText = 'Просто заполните форму заявки и мы перезвоним вам в течении 10 минут';
})