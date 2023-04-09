
const $form= document.querySelector('#form');
const $buttonMailto =document.querySelector('#toMail');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:lcgk.021@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
    $buttonMailto.click();
}


