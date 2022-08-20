const form = document.forms.popupForm;

if (form) {
    form.addEventListener('submit', function (e) {
        sendForm(e)
    })
}

function sendForm(e) {
    e.preventDefault()

    let nameGroup = form.elements.name.parentElement;
    let phoneGroup = form.elements.phone.parentElement;
    let nameValue = form.elements.name.value;
    let phoneValue = form.elements.phone.value;

    nameGroup.classList.remove('unvalidated')
    phoneGroup.classList.remove('unvalidated')

    if (!nameValue || !phoneValue) {
        if (!nameValue) {
            nameGroup.classList.add('unvalidated')
        }
        if (!phoneValue) {
            phoneGroup.classList.add('unvalidated')
        }
    } else {
        form.classList.add('sent')
    }
}