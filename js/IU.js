export async function UI(response,listadoPeliculas,error) {

    const fragment = document.createDocumentFragment();

    if(response !== undefined)
    {
        response.forEach( item => {

            // imdbID
            listadoPeliculas.innerHTML = '';
    
            const col_3 = document.createElement('div');
            const card = document.createElement('div');
            const cardImg = document.createElement('div');
            const image = document.createElement('img');
            const cardBody = document.createElement('div');
            const cardTitle = document.createElement('p');
            const cardText = document.createElement('p');
    
            col_3.classList.add('col-sm-5','col-md-4','col-lg-3');
            card.classList.add('card');
            cardImg.classList.add('card__img');
            image.classList.add('img');
            cardBody.classList.add('card-body','text-whites');
            cardTitle.classList.add('card-title');
            cardText.classList.add('card-text');
            
            image.id = item.imdbID;
    
            image.src = item.Poster;
            cardTitle.textContent = item.Title;
            cardText.textContent = item.Plot;
            
            cardBody.appendChild(cardTitle);
            // cardBody.appendChild(cardText);
            cardImg.appendChild(image);
    
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            
    
            col_3.appendChild(card);
    
            fragment.appendChild(col_3)
    
        } )
    
        listadoPeliculas.appendChild(fragment)
    }
    else
    {
            error.innerHTML = ''
            const alert = document.createElement('div');
            alert.classList.add('alert','alert-danger');
            alert.textContent = 'Error de Busqueda';
    
            error.appendChild(alert);

            setTimeout( () => {
                error.innerHTML = '';
            },2000 )

    }

}

export function UIDetails(response,movie,contentList,error) {

    if(response !== undefined) {
        contentList.innerHTML = '';

        const col_3 = document.createElement('div'),
            img = document.createElement('img'),

            card = document.createElement('div'),
            col_9 = document.createElement('div'),
            cardBody = document.createElement('div'),

            title = document.createElement('h1'),
            subtitle = document.createElement('p'),
        
            genere = document.createElement('span'),
            type = document.createElement('span'),
            year = document.createElement('span'),
            country = document.createElement('span'),


            actors = document.createElement('p'),
            text = document.createElement('p'),
            regression = document.createElement('button');

        regression.classList.add('btn','border-none','col-md-1');
        regression.id = 'regression';
        col_3.classList.add('col-md-3','col-lg-4');
        img.classList.add('img');

        card.classList.add('card');
        col_9.classList.add('col-md-6','col-lg-5');
        cardBody.classList.add('card-body','text-whites');

        title.classList.add('card-title');

        subtitle.classList.add('text-muted','mb-1');
        genere.classList.add('h5','pr-1');
        type.classList.add('h5','pr-1');
        year.classList.add('h5','pr-1');
        country.classList.add('h5');

        actors.classList.add('card-text');

        text.classList.add('card-text');

// ---------------- contenido


        regression.innerHTML = '<svg viewBox="0 0 512 511"><path style="fill: white" d="m143.871094 512.484375c-10.398438 0-20.597656-4.0625-28.28125-11.734375l-97.960938-97.753906c-11.367187-11.34375-17.628906-26.433594-17.628906-42.492188s6.261719-31.152344 17.628906-42.496094l97.960938-97.753906c11.511718-11.492187 28.664062-14.886718 43.695312-8.652344 15.011719 6.226563 24.710938 20.742188 24.710938 36.976563v91.921875c158.804687 0 288.003906-129.199219 288.003906-288.003906v-31.996094c0-11.046875 8.953125-20 20-20s20 8.953125 20 20v31.996094c0 87.613281-34.117188 169.984375-96.070312 231.9375-61.953126 61.949218-144.320313 96.070312-231.933594 96.070312-22.058594 0-40.003906-17.945312-40.003906-40v-91.925781c0-.003906 0-.007813 0-.011719-.03125-.015625-.070313-.03125-.105469-.042968-.011719.015624-.027344.027343-.042969.042968l-97.960938 97.757813c-3.792968 3.785156-5.882812 8.820312-5.882812 14.179687s2.089844 10.394532 5.882812 14.179688l97.960938 97.753906.042969.042969c.035156-.011719.074219-.023438.105469-.039063 0-.003906 0-.007812 0-.015625v-21.921875c0-11.046875 8.957031-20 20.003906-20 11.042968 0 20 8.953125 20 20v21.921875c0 16.234375-9.699219 30.75-24.710938 36.976563-4.996094 2.074218-10.230468 3.082031-15.414062 3.082031zm0 0"/></svg>';
        img.src = response.Poster;

        title.textContent = response.Title;

        genere.textContent = `Genero: ${response.Genre}`;
        type.textContent = `Tipo: ${response.Type}`;
        year.textContent = `Año: ${response.Year}`;
        country.textContent = `Ciudad: ${response.Country}`;

        actors.textContent = `Actores: ${response.Actors}`;

        text.textContent = response.Plot;

// ----------------- contenedores

        col_3.appendChild(img);

        subtitle.appendChild(genere);
        subtitle.appendChild(type);
        subtitle.appendChild(year);
        subtitle.appendChild(country);

        cardBody.appendChild(title);
        cardBody.appendChild(subtitle);
        cardBody.appendChild(actors);
        cardBody.appendChild(text);

        card.appendChild(cardBody);

        col_9.appendChild(card);

        movie.appendChild(regression);
        movie.appendChild(col_3);
        movie.appendChild(col_9);
        

    }

}

/**
 * 
 *  <div class="conteiner">
        <div class="row">
            <div class="col-md-3 col-lg-4">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticpretty.files.wordpress.com%2F2013%2F11%2Fthe-mentalist.jpg&f=1&nofb=1" class="img">
            </div>
            <div class="col-md-9 col-lg-8">
                <div class="card">
                    <div class="card-body text-whites">
                        <h1 class="card-title">titulo</h1>
                        <p class="card-subtitle">
                            <span>Genero</span>
                            <span>Tipo</span>
                            <span>Año</span>
                            <span>Pais</span>
                    </p>
                        <p class="card-subtitle">actores</p>
                        <p class="card-text">texto</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
 * 
 */