const API_KEY = "54251374-33f104c965fd5fe2f8dc6164f";

let page = 1;
const per_page = 9;

fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=${per_page}`).then((res) => res.json()).then(console.log(res));


