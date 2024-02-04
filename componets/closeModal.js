export function close(e) {
    const modal = document.querySelectorAll(".modal")

    if (e.target.className === "modal" || e.target.className === "cross"){
        document.body.classList.remove("open")
        for (const elem of modal) {
            elem.remove();
        }
    }
}