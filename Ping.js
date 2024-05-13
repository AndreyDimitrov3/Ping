document,addEventListener('DOMContentLoaded', function(){

    let input = document.getElementById('input');
    let notify = document.getElementById('notify');
    let fail = document.getElementById('fail');
    let success = document.getElementById('success');

    notify.addEventListener('click', emailListener)

    fail.classList.add("hidden");
    success.classList.add("hidden");

    function emailListener(){
        if(validateEmail()){
            success.classList.remove('hidden');
            fail.classList.add('hidden');
        } else{
            fail.classList.remove('hidden');
            success.classList.add('hidden');
        }
    }

    function validateEmail() {
        email = input.value;
        if (email.includes('@')) {
            return true;
        } else {
            return false;
        }
    }
})