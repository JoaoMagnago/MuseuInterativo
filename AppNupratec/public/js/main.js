function buscarSala() {
    let busca = document.getElementById('busca').value;

    if (busca != '') {
      fetch('/salas/' + busca)
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => {
        document.getElementById('localTable').style = 'visibility:hidden;';
        document.getElementById('tabela').style = 'visibility:visible;';
        document.getElementById('id').innerText = res._id;
        document.getElementById('codigo').innerText = res.codigo;
        document.getElementById('nome').innerText = res.nome;
        document.getElementById('local').innerText = res.local;
        document.getElementById('porta').innerHTML = '<img src="data:image/jpeg;base64,' + res.porta + '" style="width: 27%; height: 10%"/>';
        if(res.sala !== ''){
         document.getElementById('sala').innerHTML = '<img src="data:image/jpeg;base64,' + res.sala + '" style="width: 27%; height: 10%"/>';
        }
        else{
          document.getElementById('sala').innerText = "Não possui foto";
        }
      })
      .catch(res => {
        alert('Sala não encontrada!');
      });
    }
    else {
      alert('Por favor digite um valor válido para a busca!');
    }
  }