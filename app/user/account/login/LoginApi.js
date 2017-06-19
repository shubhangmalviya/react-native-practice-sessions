export function loginAPI() {
    return fetch('http://192.168.1.100:3001/sessions/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
        })
    }).then((response) => response.json());
}
