export function validateModal(e) {
    const patternName = /[a-zA-Zа-яА-Я]/g
    const patternEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/gm
    const patternMessage = /\w+/g;

    if (e.target.value !== "") {
        if (e.target.id === "name") {
            const res = patternName.test(e.target.value)
            if (!res) {
                e.target.value = ""
                e.target.classList.add("test")
            } else {
                e.target.classList.remove("test")
            }
        }
        if (e.target.id === "email") {

            const res = e.target.value.match(patternEmail)
            console.log(res)
            if (!res) {
                e.target.classList.add("test")
            } else {
                e.target.classList.remove("test")
            }
        }
        if (e.target.id === "message") {
            const res = patternMessage.test(e.target.value)
            if(!res) {
                e.target.classList.add("test")
            }
            else  {
                e.target.classList.remove("test")
            }
        }
    } else {
        e.target.classList.remove("test")
    }
}