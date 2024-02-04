export function close(e) {
    const modal = document.querySelectorAll(".modal")
    if (e.target.className === "modal" || e.target.className.baseVal === "cross" || e.target.ownerSVGElement.className.baseVal === "cross"){
        document.body.classList.remove("open")
        for (const elem of modal) {
            elem.remove();
        }
    }
}