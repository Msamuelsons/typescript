const typeUser = {
    admin: 'Seja bem-vindo ADMIN',
    student: 'Seja bem-vindo STUDENT',
    viewer: 'Você pode visualizar'
}

function validadeUser(user:string) {
    console.log(typeUser[user as keyof typeof typeUser]);
}

const usuario = 'admin'
const usuario2 = 'student';
const usuario3 = 'viewer';

validadeUser(usuario);
validadeUser(usuario2);
validadeUser(usuario3);