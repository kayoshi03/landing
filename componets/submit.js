import {close} from "./closeModal.js";

const url = "https://jsonplaceholder.typicode.com"

const popup = document.createElement("div")
popup.className = "modal"
popup.innerHTML = `
    <div class="modal_window">
      <div class="modal_header popup">
        <h1>Successfully</h1>
        <img class="cross" src="../assets/icons/cross.svg" alt="">
      </div>
    </div>
`


export const submit = async(e) =>  {
    e.preventDefault()
    if (e.target[0].value !== "" && e.target[1].value !== "" && e.target[2].value !== ""){
        try{
            const data = new FormData(e.target)
            const post = {
                name: data.get("name"),
                email: data.get("email"),
                message: data.get("message")
            }

            const response = await fetch(url + "/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(post)
            })
                .then((response) => response)
            if (response.status === 201 || response.status === 200) {
                document.body.append(popup)
                document.body.classList.add("open")
                for(let i = 0; e.target.length; i++){
                    e.target[i].value = ""
                }
            }

        }
        catch (e) {

        }
    }
    else {
        if(e.target[0].value === "") {
            e.target[0].classList.add("test")
        }
        if(e.target[1].value === "") {
            e.target[1].classList.add("test")
        }
        if(e.target[2].value === "") {
            e.target[2].classList.add("test")
        }
    }
}

popup.addEventListener("click", (e) => {
    close(e)
})