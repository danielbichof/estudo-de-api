async function getContent(){
    try {
        const response = await fetch(`http://localhost:2000/`)
        const data = await response.json()
        show(data)
    } catch (error) {
        console.error(error)
    }
}
getContent()
function show(users){
    let output = ''
    for( let user of users ) {
        output += `<div>${user.name}<br/>${user.email}<hr></div>`
    }
    document.querySelector('main').innerHTML = output
}