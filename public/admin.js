
const lista = document.getElementById('lista');

fetch('/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {

        lista.innerHTML = '';

        dados.forEach(pessoa => {

            lista.innerHTML += `
                <tr>
                    <td>${pessoa.id}</td>
                    <td>${pessoa.nome || ''}</td>
                    <td>${pessoa.sobrenome || ''}</td>
                    <td>${pessoa.cpf || ''}</td>
                    <td>${pessoa.email || ''}</td>
                    <td>${pessoa.rua || ''}</td>
                    <td>${pessoa.cep || ''}</td>
                    <td>${pessoa.cidade || ''}</td>
                    <td>${pessoa.estado || ''}</td>
                    <td>${pessoa.telefone || ''}</td>
                    <td>${pessoa.tipo || 'Usuário'}</td>

                    <td>
                        <a href="post.html?id=${pessoa.id}">Editar</a>
                        <a href="delete.html?id=${pessoa.id}">Excluir</a>
                    </td>
                </tr>
            `;

        });

        if (dados.length === 0) {
            lista.innerHTML = `
                <tr>
                    <td colspan="12">Nenhum cadastro encontrado.</td>
                </tr>
            `;
        }

    })
    .catch(erro => {
        lista.innerHTML = `
            <tr>
                <td colspan="12">Erro ao carregar cadastros.</td>
            </tr>
        `;
    });
