function preview(event) {
    event.preventDefault()
    let previewForm = document.prev
    for (let previewFormElement of previewForm.elements) {
        if (previewFormElement.name !== "myButton" && (previewFormElement.value == null || previewFormElement.value === "")) {
            alert(`field ${previewFormElement.name} is empty`)
            return
        }
    }
    let preview = document.getElementById("preview")
    preview.replaceChildren()
    for (let previewFormElement of previewForm.elements) {
        let element = document.createElement("div")
        element.textContent = previewFormElement.value
        preview.appendChild(element)
        localStorage.setItem(previewFormElement.name, previewFormElement.value)
    }
}
let sendButton = document.prev.myButton;
sendButton.addEventListener("click", preview)