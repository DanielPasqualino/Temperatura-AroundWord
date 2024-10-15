async function buscarCLima() {
    const cidade = document.getElementById('cidade').value

    if(!cidade){
        alert('entre com uma cidade')
    }

    try {
        const URL_API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=160452e889d35855a40caee4a8394842&units=metric&lang=pt_br`)

        if(!URL_API.ok){
            throw new Error('Cidade não encontrada')
        }

        const clima = await URL_API.json();

        
        mostrarClima(clima)
    } catch (error) {
        console.log(error);
        alert('erro ao buscar a cidade, entre com outra cidade')
    }
}

function mostrarClima(clima) {
    
    const resultadoDiv = document.getElementById('resultado');
    const icone = clima.weather[0].icon;
    const iconeURL = `http://openweathermap.org/img/wn/${icone}@2x.png`;

    resultadoDiv.innerHTML = `
        <h2>Clima em ${clima.name}</h2>
        <img src="${iconeURL}" alt="Icone do clima">
        <p><strong>Temperatura:</strong> ${clima.main.temp}°C</p>
        <p><strong>Descrição:</strong> ${clima.weather[0].description}</p>
        <p><strong>Humidade:</strong> ${clima.main.humidity}%</p>
        <p><strong>Velocidade do Vento:</strong> ${clima.wind.speed} m/s</p>
    `
} 
