/**Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes. */


const posts = [
    {
        fotoProfilo:'https://unsplash.it/300/300?image=15',
        autor: `Phil Magione`,
        time: `4 mesi fa`,
        immagine: 'https://unsplash.it/600/300?image=171',
        postTexr: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`, 
        likeCounter: `80`  
    },
    {
        fotoProfilo:'https://unsplash.it/300/300?image=17',
        autor: `Sofia Perlari`,
        time: `2 mesi fa`,
        immagine: 'https://unsplash.it/600/300?image=173',
        postTexr: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati dolores aut iure dolor mollitia, itaque tempore quasi. Voluptatem ratione libero blanditiis asperiores consequatur esse reiciendis reprehenderit molestias repudiandae iste?`, 
        likeCounter: `170`,  
    },
    {
        fotoProfilo:'https://unsplash.it/300/300?image=19',
        autor: `Martina Puleo`,
        time: `1 mese fa`,
        immagine: 'https://unsplash.it/600/300?image=174',
        postTexr: `Placeat Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quibusdam itaque eaque distinctio dolore reprehenderit iusto excepturi molestias velit molestiae veritatis explicabo vero id repudiandae unde doloribus, quo, consectetur vitae!`, 
        likeCounter: `250`,  
    }
]

console.log(posts);
console.table(posts);

const postContainer = document.querySelector('.posts-list');


function genPost(posts, postContainer){
    postContainer.innerHTML = '';

    for(let i = 0; i < posts.length; i++){
        const postItem = posts[i];
        console.log(postItem);
    
        postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts.fotoProfilo}" alt="${posts.autor}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts.autor}</div>
                        <div class="post-meta__time">${posts.time}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts.text}</div>
            <div class="post__image">
                <img src="${posts.immagine}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${posts.likeCounter}</b> persone
                    </div>
                </div> 
            </div>            
        </div>-->`
    }
}

genPost(posts, postContainer);