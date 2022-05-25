import { useEffect, useState } from "react"

const useToken = user => {
    // console.log(user)
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside', data)
                    console.log(data);
                    const token = data.AccessToken;
                    console.log(token);
                    localStorage.setItem('AccessToken', token);
                    setToken(token);
                })
        }
    }, [user]);
    return [token];
}
export default useToken;