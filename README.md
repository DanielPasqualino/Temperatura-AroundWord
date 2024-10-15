# Temperatura-AroundWord

# Temperatura AroundWorld

Este projeto é uma aplicação web que permite ao usuário pesquisar o clima atual de qualquer cidade ao redor do mundo. A aplicação faz uso da API OpenWeatherMap para buscar as informações de clima, como temperatura, descrição do tempo, umidade e velocidade do vento, e exibe essas informações para o usuário de forma visualmente agradável.

## Funcionalidades

- Pesquisa de clima em tempo real para qualquer cidade do mundo.
- Exibição de temperatura, descrição do clima, umidade e velocidade do vento.
- Ícones dinâmicos que representam as condições climáticas atuais.
- Interface simples e amigável.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API: [OpenWeatherMap](https://openweathermap.org/)

## Como Usar

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Navegue até a pasta do projeto:**

   ```bash
   cd seu-repositorio
   ```

3. **Abra o arquivo `index.html` em um navegador web.**

4. **Insira o nome da cidade no campo de pesquisa e clique no botão "Pesquisar".**

   - Exemplo de cidades: `São Paulo`, `New York`, `Tokyo`.

## Estrutura do Projeto

- `index.html`: Estrutura HTML da aplicação.
- `styles.css`: Estilos CSS que definem a aparência da aplicação.
- `scripts.js`: Lógica em JavaScript responsável por fazer a requisição à API e exibir as informações.

### Arquivo HTML (index.html)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clima</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <section>
        <div>
            <h1>Temperatura AroundWorld</h1>
            <input type="text" id="cidade" name="cidade" placeholder="Nome da cidade">
            <button onclick="buscarCLima()">Pesquisar</button>
            <div id="resultado"></div>
        </div>
    </section>
    <script src="./scripts.js"></script>
</body>
</html>
```

### Arquivo CSS (styles.css)

O arquivo de estilo define a aparência da aplicação, com um layout centralizado e botões estilizados.

### Arquivo JavaScript (scripts.js)

O arquivo `scripts.js` contém a lógica para buscar as informações de clima usando a API OpenWeatherMap.

```javascript
async function buscarCLima() {
    const cidade = document.getElementById('cidade').value;

    if (!cidade) {
        alert('Entre com uma cidade');
        return;
    }

    try {
        const URL_API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=160452e889d35855a40caee4a8394842&units=metric&lang=pt_br`);

        if (!URL_API.ok) {
            throw new Error('Cidade não encontrada');
        }

        const clima = await URL_API.json();
        mostrarClima(clima);
    } catch (error) {
        console.log(error);
        alert('Erro ao buscar a cidade. Tente novamente.');
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
    `;
}
```

## Personalização

Você pode facilmente modificar o projeto para incluir novas funcionalidades, como:
- Exibir mais informações sobre o clima.
- Permitir a pesquisa por coordenadas (latitude e longitude).
- Melhorar a interface com mais animações e responsividade.

## API Key

Certifique-se de que você possui uma chave válida da API OpenWeatherMap. Se você não tiver, registre-se [aqui](https://home.openweathermap.org/users/sign_up) para obter uma chave gratuita.
