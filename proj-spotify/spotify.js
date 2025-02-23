document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: '/proj-spotify/img spot/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: '/proj-spotify/img spot/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: '/proj-spotify/img spot/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: '/proj-spotify/img spot/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: '/proj-spotify/img spot/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: '/proj-spotify/img spot/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: '/proj-spotify/img spot/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: '/proj-spotify/img spot/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: '/proj-spotify/img spot/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: '/proj-spotify/img spot/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: '/proj-spotify/img spot/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: '/proj-spotify/img spot/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.grid-artistas');
    const albumsGrid = document.querySelector('.grid-albuns');

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div> 
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
            
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div> 
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        
        `;

        albumsGrid.appendChild(albumCard);
    });

});






