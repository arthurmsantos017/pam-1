
const estilo = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e1b4b);
    color: #ffffff;
    min-height: 100vh;
    padding: 30px 20px;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    font-size: 38px;
    margin-bottom: 15px;
    color: #60a5fa;
}

p {
    text-align: center;
    color: #cbd5e1;
    margin-bottom: 30px;
}

.search-box {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 35px;
    flex-wrap: wrap;
}

.search-box input {
    width: 70%;
    max-width: 450px;
    padding: 15px;
    border: 2px solid #3b82f6;
    border-radius: 12px;
    background: #1e293b;
    color: white;
    font-size: 16px;
    outline: none;
}

.search-box input:focus {
    border-color: #a78bfa;
    box-shadow: 0 0 12px #6366f1;
}

.search-box button {
    padding: 15px 25px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

.search-box button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px #6366f180;
}

#resultados,
.resultados {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
}

.card {
    background: rgba(30, 41, 59, 0.95);
    border: 1px solid #334155;
    border-radius: 18px;
    padding: 22px;
    text-align: center;
    transition: 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.card:hover {
    transform: translateY(-7px);
    border-color: #60a5fa;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.card img {
    width: 100%;
    max-width: 150px;
    height: 95px;
    object-fit: contain;
    margin-bottom: 15px;
    border-radius: 8px;
}

.card h2 {
    color: #60a5fa;
    font-size: 22px;
    margin-bottom: 12px;
}

.card p {
    color: #cbd5e1;
    font-size: 14px;
    margin-bottom: 8px;
}

.erro {
    color: #f87171;
    text-align: center;
    font-size: 18px;
    grid-column: 1 / -1;
}

button {
    font-family: inherit;
}

@media (max-width: 600px) {
    h1 {
        font-size: 28px;
    }

    .search-box input {
        width: 100%;
    }

    .search-box button {
        width: 100%;
    }

    body {
        padding: 20px 12px;
    }
}
`;

module.exports = estilo;
