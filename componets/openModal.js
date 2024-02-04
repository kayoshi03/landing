 const openModal = document.createElement("div")
  openModal.className = "modal"
  openModal.innerHTML = `
    <div class="modal_window">
      <div class="modal_header">
        <h1>SEND US MESSAGE</h1>
        <img class="cross" src="../assets/icons/cross.svg" alt="">
      </div>
      <form method="post" class="modal_body">
        <label>Full Name</label>
        <input name="name" id="name" placeholder="Your Name">
        <label>Email</label>
        <input name="email" id="email" placeholder="Your Email">
        <label>Message</label>
        <textarea name="message" id="message" placeholder="Your Message" maxlength="200"></textarea>
        <button type="submit">
           SUBMIT
        </button>
      </form>
    </div>
    `

 export function open() {
    document.body.append(openModal)
    document.body.classList.add("open")
  }
