 const openModal = document.createElement("div")
  openModal.className = "modal"
  openModal.innerHTML = `
    <div class="modal_window">
      <div class="modal_header">
        <h1>SEND US MESSAGE</h1>
        <svg class="cross"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#1F3F68;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg>
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
