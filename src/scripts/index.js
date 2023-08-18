import { products, categories } from './productsData.js'

/* Desenvolva sua lógica aqui ... */

function createCard(product) {
    /* Trabalhe sua lógica aqui */

    const card = document.createElement("li")
    card.classList.add('card')

    const imageCard = document.createElement('img')
    imageCard.classList.add('image__card')
    imageCard.src = product.img
    imageCard.alt = product.title

    const informationProduct = document.createElement('p')
    informationProduct.classList.add('information__product')
    informationProduct.innerText = `${product.band}${product.year}`


    const titleProduct = document.createElement('h2')
    titleProduct.classList.add('title__product')
    titleProduct.innerText = product.title

    const spanCard = document.createElement('span')
    spanCard.classList.add('conteiner__control')

    const productPrice = document.createElement('p')
    productPrice.classList.add('text__price')
    productPrice.innerText = `R$${product.price.toFixed(2)}`

    const buttonCard = document.createElement('button')
    buttonCard.classList.add('conteiner__button')
    buttonCard.innerText = 'Comprar'

    spanCard.append(productPrice, buttonCard)
    card.append(imageCard, informationProduct, titleProduct, spanCard)
    return card
}

function rederButtons(array) {
    const controlConteiner = document.querySelector('.music__genres')

    array.forEach(element => {
        const conteiner = document.createElement("li")
        const buttonMusicGenres = document.createElement('button')
        buttonMusicGenres.classList.add('button__music--generes')
        buttonMusicGenres.innerText = element

        conteiner.appendChild(buttonMusicGenres)
        controlConteiner.appendChild(conteiner)
    });
    return controlConteiner
}

function rederCard(array) {
    const containerCard = document.querySelector('.container__card')
    containerCard.innerHTML = ""

    array.forEach(element => {
        const card = createCard(element)
        containerCard.appendChild(card)
    });
    return containerCard
}

function filteringCategory(products, categories) {

    const buttonMusicGenres = document.querySelectorAll('.button__music--generes')

    buttonMusicGenres.forEach(button => {
        button.addEventListener('click', (element) => {
            const travelingCategories = categories.findIndex(a => a === element.target.innerText)
            const filterCategories = products.filter(a => a.category === travelingCategories)

            if(travelingCategories === 0){
               return rederCard(products) 
            }else{
                return rederCard(filterCategories)
            }
        })
    });

}

function filterPrice(product){
    const inputFilter= document.querySelector('#rangeInput')

    inputFilter.addEventListener('input', () => {
        const paragraph = document.querySelector('.filter__paragraph')
        const productsFilter= product.filter((element) => element.price <= inputFilter.value)

        paragraph.innerText= `Até R$ ${inputFilter.value}`
        return rederCard(productsFilter)

    })

}

rederButtons(categories)
rederCard(products)
filteringCategory(products, categories)
filterPrice(products)