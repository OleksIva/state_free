export async function registerUser(name, email, phone, password) {
    return fetch('http://localhost:8000/user/register', {
        method: 'POST',
        body: JSON.stringify({ 
            name, 
            email,
            phone,
            password 
        })
    })
}


