
document.getElementById('formLogin').addEventListener('submit', async (e) => {

    e.preventDefault();

    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    try {

        const resposta = await fetch('/pessoas');

        if (!resposta.ok) {
            throw new Error('Erro ao buscar usuários.');
        }

        const pessoas = await resposta.json();

        const usuario = pessoas.find(pessoa =>
            String(pessoa.cpf).trim() === cpf &&
            String(pessoa.senha).trim() === senha
        );

        if (usuario) {

            console.log('Usuário encontrado:', usuario);
            console.log('Tipo:', usuario.tipo);

            if (usuario.tipo && usuario.tipo.trim().toLowerCase() === 'admin') {

                window.location.assign('./bemvindo2.html');

            } else {

                window.location.assign('./bemvindo.html');

            }

        } else {

            mensagem.innerText = 'CPF ou senha incorretos.';

        }

    } catch (erro) {

        mensagem.innerText = 'Erro ao conectar com o servidor.';
        console.error(erro);

    }

});
