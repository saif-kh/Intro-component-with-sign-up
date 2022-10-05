const form = document.getElementById('form')
const first = document.getElementById('first-name')
const last = document.getElementById('last-name')
const email = document.getElementById('email')
const pwd = document.getElementById('password')
const errMsg = "cannot be empty"

let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function check(e) {
    e.preventDefault();
    // console.log(e)
    
    if(!first.value) {
        first.classList.add('error')
        const parent = first.parentElement;
        parent.children[1].classList.add('show')
        parent.children[2].classList.add('show')

    } else {
        first.classList.remove('error')
        const parent = first.parentElement;
        parent.children[1].classList.remove('show')
        parent.children[2].classList.remove('show')
    }

    if(!last.value) {
        last.classList.add('error')
        const parent = last.parentElement;
        parent.children[1].classList.add('show')
        parent.children[2].classList.add('show')

    } else {
        last.classList.remove('error')
        const parent = last.parentElement;
        parent.children[1].classList.remove('show')
        parent.children[2].classList.remove('show')
    }

    if(!email.value) {
        email.classList.add('error')
        const parent = email.parentElement;
        parent.children[1].classList.add('show')
        parent.children[2].classList.add('show')

    } else if (!email.value.match(pattern)) {
        email.classList.add('error')
        const parent = email.parentElement;
        parent.children[1].classList.remove('show')
        parent.children[3].classList.add('show')
    } else {
        email.classList.remove('error')
        const parent = email.parentElement;
        parent.children[1].classList.remove('show')
        parent.children[2].classList.remove('show')
        parent.children[3].classList.remove('show')
    }

    if(!pwd.value) {
        pwd.classList.add('error')
        const parent = pwd.parentElement;
        parent.children[1].classList.add('show')
        parent.children[2].classList.add('show')

    } else {
        pwd.classList.remove('error')
        const parent = pwd.parentElement;
        parent.children[1].classList.remove('show')
        parent.children[2].classList.remove('show')
    }
}

form.addEventListener('submit',check)
