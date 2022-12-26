async function createTable() {
    let json
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments')
        json = await response.json()
    } catch (ex) {
        let preloaderBox = document.getElementById("box")
        preloaderBox.replaceChildren()
        let el = document.createElement("div")
        el.textContent = "Loading failed"
        preloaderBox.appendChild(el)
        return
    }
    let preloaderBox = document.getElementById("box")
    preloaderBox.style.display = "none"
    let table = document.getElementById("table")
    let caption = document.createElement("caption")
    caption.textContent = "Comments"
    table.appendChild(caption)
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    let ar = ["postId","id", "name", "email", "body"]
    for (let el of ar) {
        let th = document.createElement("th")
        th.textContent = el
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    let tbody = document.createElement("tbody")
    const generateArray = (length, max) => (
        [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    );
    let ids = generateArray(100, 200)
    json.forEach(todo => {
        if (ids.includes(todo["id"])) {
            let tr1 = document.createElement("tr")
            for (let el in todo) {
                let td = document.createElement("td")
                td.textContent = todo[el]
                tr1.appendChild(td)
            }
            tbody.appendChild(tr1)
        }
    })
    table.appendChild(tbody)
}