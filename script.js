const iniciar = () => {
    let imagens = [
        'gatinho01.jpg',
        'gatinho03.jpg',
        'gatinho03.jpg',
        'gatinho04.jpg'
    ];
    let indiceAtual = 0;

    const clickTroca = (evento) => {
        evento.preventDefault();
        let imag2 = document.getElementById('gatinho');
        indiceAtual = (indiceAtual + 1) % imagens.length; 
        imag2.src = imagens[indiceAtual]; 
    };

    document.getElementById('troca').addEventListener('click', clickTroca);
};

document.addEventListener('DOMContentLoaded', iniciar);