import { open }  from './componets/openModal.js'
import {close} from "./componets/closeModal.js";
import {submit} from "./componets/submit.js";
import {validateModal} from "./componets/validateModal.js";
const buttonModal = document.querySelector('#openModal')
let name, email, message, formFeed
buttonModal.addEventListener("click",  () => {
    open()
    name = document.querySelector("#name")
    email = document.querySelector("#email")
    message = document.querySelector("#message")
    formFeed = document.querySelector(".modal_body")
    
    formFeed.addEventListener("submit", (e) => {
        submit(e)
    })
    name.addEventListener("input", (e) => {
        validateModal(e)
    })
    email.addEventListener("input", (e) => {
        validateModal(e)
    })
    message.addEventListener("input", (e) => {
        validateModal(e)
    })
    document.querySelector(".modal").addEventListener("click", (e) => {
        close(e)
    })
})



