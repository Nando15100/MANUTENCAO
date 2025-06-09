function iniciarEdicao(el, id) {
      const tr = el.closest('tr');
      const cells = tr.querySelectorAll('td');
      ['NOME_INPUT1', 'NOME_INPUT2', 'NOME_INPUT3'].forEach((field, idx) => {
        const td = cells[idx + 1];
        const valor = td.textContent;
        td.innerHTML = `<input class="edit-field" id="edit-${field}-${id}" value="${valor}">`;
      });
      el.textContent = '💾';
      el.onclick = () => salvarEdicao(id);
    }

//Torna os dados de forma que se torne manipulavel para editar
//Pertence ao  arquivo manutencao.html , código em javascript
