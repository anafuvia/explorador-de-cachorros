fetch('https://dog.ceo/api/breeds/image/random')

.then(resposta =>resposta.json())

.then(dados =>{
    
    console.log("✅  dados completos da API:",dados);

    console.log("🗺️ URL da imagem", dados.message);
})


async function testarAPI(){ 

    const resposta = await fetch ('https://dog.ceo/api/breeds/image/random')

    const dados = await resposta.json();

    console.log('📦 Resposta da API', dados);
    console.log("🐶 Imagem do cachorro", dados.message);
    
}


testarAPI();