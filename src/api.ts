const conta = {
    email: 'test@example.com',
    password: 'password123',
    name: 'John Doe',
    balance: 1000.00,
    id: '5248'
}

export const api = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
});