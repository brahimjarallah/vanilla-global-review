// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item))

// const items = document.querySelectorAll(".item")
// items.forEach((item) => console.log(item))

// const ul = document.querySelector('.items')

// ul.firstElementChild.remove()
// ul.firstElementChild.innerHTML = "hello"
// ul.firstElementChild.textContent = "hi"

// ul.children[1].innerText = 'brahim'

// ul.lastElementChild.innerHTML= '<h1>Hello!</h1>'


// const btn = document.querySelector('.btn')

// btn.style.background = 'red'

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault()
//   // myForm.style.background = 'yellow'
//   myForm.classList.add("bg-font")
//   setTimeout(() => myForm.classList.remove("bg-font"), 3000)
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')
const btn = document.querySelector(".btn")

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    if (nameInput.value === '' || emailInput.value === '') {
         
        // msg.apppendChild('li')
        msg.innerHTML = 'Please enter all fields !'
        msg.classList.add('error')
        setTimeout(() =>  msg.remove(), 3000)
    } else {
        // console.log("success")
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        nameInput.value = ''
        emailInput.value= ''
    }
}


