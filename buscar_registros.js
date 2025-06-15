function searchData() {
      const filtro = document.getElementById('pesquisar').value.toLowerCase();
      document.querySelectorAll('#corpo-tabela tr').forEach(tr => {
        const nome = tr.cells[1].textContent.toLowerCase();
        tr.style.display = nome.includes(filtro) ? '' : 'none';
      });
    }

    document.getElementById('pesquisar')
      .addEventListener('keydown', e => { if (e.key === 'Enter') searchData(); });

    

//Pertence ao  arquivo manutencao.html , código em javascript

//BUSCA OS REGISTROS PELO NOME
