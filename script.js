function buscar(){
    const apiKey = '790af7bc';
    const tituloFilme = document.getElementById('tituloFilme').value;

    if(!tituloFilme){
        alert('Insira o título do filme');
        return;
    }
    
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${tituloFilme}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na solicitação. Código de status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === 'True') {
                document.getElementById('error').src =data.Poster;
                document.getElementById('titulo').textContent =data.Title;
                document.getElementById('sinopse').textContent =data.Plot;
                document.getElementById('genero').textContent =data.Genre;
                document.getElementById('duracao').textContent =data.Runtime;
                document.getElementById('lancamento').textContent =data.Year;
            } else {
                document.getElementById('error').src = 'imagem_triste-removebg-preview.png'
                document.getElementById('titulo').textContent = 'Filme não encontrado!'
                document.getElementById('sinopse').textContent ='';
                document.getElementById('genero').textContent = '';
                document.getElementById('lancamento').textContent ='';
                document.getElementById('duracao').textContent ='';
            }
        })
        .catch(error => console.error (`Erro na solicitação: ${error.message}`));


}