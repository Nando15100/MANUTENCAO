async function salvarEdicao(id) {
      const NOME_INPUT1 = document.getElementById(`edit-NOME_INPUT1-${id}`).value;
      const NOME_INPUT2 = parseFloat(document.getElementById(`edit-NOME_INPUT2-${id}`).value);
      const NOME_INPUT3 = parseFloat(document.getElementById(`edit-NOME_INPUT3-${id}`).value);

      
      // Enviar para o backend
      const res = await fetch(`/atualizar/${id}`, {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ NOME_INPUT1, NOME_INPUT2, NOME_INPUT3})  // inclui resultado
      });

      if (res.ok) carregarDados();
      else alert('Erro ao salvar edição');

}


//SALVA OS DADOS (ATUALIZA OS DADOS) DEPOIS DE EDITADOS
//Pertence ao  arquivo manutencao.html , código em javascript
