



<script>
    function searchData() {
          const filtro = document.getElementById('pesquisar').value.toLowerCase();
          const linhas = document.querySelectorAll('#corpo-tabela tr');
          const linhaMensagem = document.getElementById('linha-vazia');
          if (linhaMensagem) linhaMensagem.remove();
    
          let encontrou = false;
    
          linhas.forEach(tr => {
            const id = tr.cells[0].textContent.toLowerCase();
            const nomeUsuario = tr.cells[1].textContent.toLowerCase();
            const corresponde = id.includes(filtro) || nomeUsuario.includes(filtro)    ;
            tr.style.display = corresponde ? '' : 'none';
            if (corresponde) encontrou = true;
          });
    
          if (!encontrou) {
            const tbody = document.getElementById('corpo-tabela');
            const tr = document.createElement('tr');
            tr.id = 'linha-vazia';
            tr.classList.add('mensagem-vazia');
            tr.innerHTML = `<td colspan="6">Nenhum registro encontrado.</td>`;
            tbody.appendChild(tr);
          }
        }
    
    
    
        document.getElementById('pesquisar')
          .addEventListener('keydown', e => { if (e.key === 'Enter') searchData(); });

</script>
