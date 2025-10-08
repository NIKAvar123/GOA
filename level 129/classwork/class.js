const render = (person) => {
    document.body.innerHTML += `
    <h1>${person.title}</h1>
    <p>${person.body}</p>
    <button>${person.id}</button>
    `
}

fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then((res) => {
    render(res)
}
).catch(err => console.error(err))




async function myFetch() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        render(data)
    } catch (err) {
        console.error(err)
    }
}