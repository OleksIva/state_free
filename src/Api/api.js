import { user } from "../data/user";

const BASE_URL = 'https://statefree-redilab.onrender.com';

export async function registerUser(name, email, phone, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name, 
                email,
                phone,
                password
            })
        });

        if (!response.ok) {
            const errorInfo = await response.json();
            throw new Error(errorInfo.detail || "Registration failed.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}


export async function loginUser(name, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name, 
                password,
            })
        });

        if (!response.ok) {
            const errorInfo = await response.json();
            throw new Error(errorInfo.detail || "Login failed.");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}





// import { user } from "../data/user";

// const BASE_URL = 'https://statefree-redilab.onrender.com';

// export async function registerUser(name, email, phone, password) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/register`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ 
//                 name, 
//                 email,
//                 phone,
//                 password,
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`Server error: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Registration error:', error);
//         throw error;
//     }
// }


// export async function loginUser(name, password) {
//     try {
//         const response = await fetch(`${BASE_URL}/user/login`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ 
//                 name, 
//                 password,
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`Server error: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Login error:', error);
//         throw error;
//     }
// }

