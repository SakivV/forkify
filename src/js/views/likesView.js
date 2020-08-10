import { elements } from './base';

export const toggleLikesButton = (isLiked) => {

const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';

document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);

}

export const toggleLikedMenu = numLikes => {

    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
}


export const renderLikesList = like => {

    const markUp = `
                <li>
                    <a class="likes__link" href="#${like.id}">
                        <figure class="likes__fig">
                            <img src="${like.img}" alt="${like.title}">
                        </figure>
                        <div class="likes__data">
                            <h4 class="likes__name">${like.title}</h4>
                            <p class="likes__author">${like.author}</p>
                        </div>
                    </a>
                </li>

                `
    elements.likesList.insertAdjacentHTML('beforeend', markUp);

}

export const deleteLiked = id => {

    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;

    if(el) el.parentElement.removeChild(el);
}