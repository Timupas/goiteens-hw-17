const listEl = document.querySelector(".list");
const btnEl = document.querySelector(".btn");

let page = 1;

const API_KEY = "54251374-33f104c965fd5fe2f8dc6164f";
const PER_PAGE = 9;



function getPictureApi() {
    return fetch(
        `https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${PER_PAGE}`
    ).then(res => res.json());
}
getPictureApi().then((res) => createImages(res.hits))


function createImages(arr) {
    const item = arr.map(({ largeImageURL, tags }) => {
        return `<li>
      <img src="${largeImageURL}" alt="${tags}" />
    </li>`}).join("");
    listEl.insertAdjacentHTML("beforeend", item);
}

btnEl.addEventListener("click", onClick)

function onClick() {
    page += 1;
    getPictureApi().then((res) => createImages(res.hits))
}
