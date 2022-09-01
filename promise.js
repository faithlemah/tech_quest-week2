let myPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(myValue => {
    let Output = myValue.map(user => `<li>${user.title}</li>`)

document.body.innerHTML = Output.join("")
})
console.log(myPromise)
; 