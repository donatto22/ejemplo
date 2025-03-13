const API = 'https://dummyjson.com/auth/login'

const verificarLogin = () => {
    const usuario = localStorage.getItem('usuario')

    if (usuario) {
        window.location.href = '../index.html'
    }
}

verificarLogin()


document.getElementById('loginButton').addEventListener('click', async (e) => {
    e.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    if(user.length != 0 && password.length != 0) {
        try {
            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    password: password
                })
            })

            if(!response.ok) {
                console.log(data.message)
                alert(`${data.message}`)
            } else {
                const data = await response.json()
        
                // guardando en el localstorage
                localStorage.setItem('usuario', JSON.stringify(data))
        
                // ya inició sesión, debería ir a la página principal
                window.location.href = '../index.html'
            }
    
        } catch {
            alert("Hubo un error")
        }
    }
})