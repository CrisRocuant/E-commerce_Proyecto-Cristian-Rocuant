const input = document.querySelector('#searchInput')
const userList = document.querySelector('#users')

window.addEventListener('DOMContentLoaded', async () => {
    const data = await loadUsers()
    renderUsers(data.data)

})

async function loadUsers(){
    const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=100')
    return await response.json()
}

input.addEventListener('keyup', e => {
    console.log(input.value)
})
                                                     //revisar esta Linia//
const createUserItems = users => users.map(users => `<li>hola</>`).join('')

function renderUsers(users) {
    const itemsString = createUserItems(users)
    userList.innerHTML = itemsString
}
    