function load() {
    window.addEventListener('DOMContentLoaded', (event) => {
        time = (event.timeStamp / 1000).toPrecision(2)
        loadTime(time)
        currentLocation()
    })
}

// load time
function loadTime(time) {
    let element = document.createElement('time-on-load')
    document.body.appendChild(element)
    let tmp = document.createTextNode(`Page load time is ${time} seconds`)
    let div1 = document.createElement('div')
    div1.appendChild(tmp)
    lbl2 = document.createTextNode(`Page load time in JavaScript`)
    div2 = document.createElement('div')
    div2.setAttribute("style", "font-style:italic;font-size: 25px;");
    div1.setAttribute("style", "font-style:italic;font-size: 25px;");
    div2.appendChild(lbl2)
    element.appendChild(div2)
    element.appendChild(div1)
}

function currentLocation() {
    let curLocation = document.location.pathname
    let menu = document.getElementById('menu-content')
    let children = menu.children
    let arr = curLocation.split('/')
    let pageName = arr[arr.length - 1]
    if (pageName === 'index.html') {
        children[0].children[0].setAttribute("style", "width: 95%")
    }
    else if (pageName === 'shoes.html') {
        children[1].children[0].setAttribute("style", "width: 60%")
    }
}
