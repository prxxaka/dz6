const next = document.querySelector('.next')
const block = document.querySelector('.block')
const prev = document.querySelector('.prev')
let num = 1

function nextPrev () {
    next.onclick = () => {
        num++
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
            .then(response => response.json())
            .then(todoItem => {
                block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>
            `
            })
    }
    prev.onclick = () => {
        num--
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
            .then(response => response.json())
            .then(todoItem => {
                block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>
            `
            })
    }
}
nextPrev()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })