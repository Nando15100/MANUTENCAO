async function carregarDados() {
      try {
        const resposta = await fetch('/registros');
        const dados = await resposta.json();
        const corpo = document.getElementById('corpo-tabela');
        corpo.innerHTML = '';

        dados.forEach(item => {
          const tr = document.createElement('tr');
          const criadoEm = new Date(item.createdAt).toLocaleString('pt-BR');
          tr.innerHTML = `
            <td>${item.customId}</td>
            <td>${item.NOME_INPUT1}</td>
            <td>${item.NOME_INPUT2}</td>
            <td>${item.NOME_INPUT3}</td>
            <td>${criadoEm}</td>
            <td>
              <span class="icon" onclick="iniciarEdicao(this, ${item.customId})">✏️</span>
              <span class="icon" onclick="excluirRegistro(${item.customId})">🗑️</span>
            </td>
          `;
          corpo.appendChild(tr);
        });
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    }

carregarDados();
