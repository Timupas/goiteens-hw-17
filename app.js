const API_KEY = "54251374-33f104c965fd5fe2f8dc6164f";

let page = 1;
const per_page = 9;

fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=${per_page}`).then((res) => res.json()).then(console.log(res));

const listEl = document.querySelector(".list")
const btnEl = document.querySelector(".btn")
const hor = "horizontal"

// fetch(`https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${per_page}`).then(res => res.json()).then(res => console.log(res))

function getPictureApi() {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${per_page}&orientation=${hor}`).then(res => res.json())
}

getPictureApi().then(res => createImages(res.hits))

function createImages(array) {
    const item = array.map(({ largeImageURL, tags }) => {
        return `
    <li class="item">
        <img src="${largeImageURL}" alt="${tags}" class="img">
    </li>`
    }).join("")
    listEl.insertAdjacentHTML("beforeend", item)
}

btnEl.addEventListener("click", onClick)

function onClick() {
    page += 1
    getPictureApi().then(res => {
        if (res.hits.length === 0) {
            btnEl.disabled = true
            return
        }
        createImages(res.hits)
    })
}
