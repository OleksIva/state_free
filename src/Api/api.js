const BASE_URL = 'http://localhost:8000'; 

export async function registerUser(name, email, password, ort) {
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
                ort, 
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

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email, 
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
