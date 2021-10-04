import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Pasang',
        email: 'pasang@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Nuru',
        email: 'nuru@example.com',
        password: bcrypt.hashSync('123456', 10),
    },

]

export default users