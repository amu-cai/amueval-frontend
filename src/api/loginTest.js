const loginTest = () => {
    let data = {
        client_id: 'Id_of_your_client',
        username: 'test',
        password: 'test',
        grant_type: 'password'
    };

    fetch('http://0.0.0.0:8080/auth/realms/test/protocol/openid-connect/token', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => {
        console.log('Request complete! response:', res);
    });
};

export default loginTest;