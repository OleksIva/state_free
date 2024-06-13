import { user } from "../data/user"

export async function registerUser(name, email, phone, password) {
    try {
        const response = await fetch('http://localhost:8000/user/register', {
            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify({ 
                name, 
                email,
                phone,
                password,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    } finally {
        return user
    }

}

