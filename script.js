const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-results');
const showMoreBtn = document.getElementById('show-more-btn');

// RiPTE3JdhLZo1E9fx_N2N-jMWw6vLDz4lvz8nm4hw5U

let keyword = "";
let page = 1;
const accessKey = "RiPTE3JdhLZo1E9fx_N2N-jMWw6vLDz4lvz8nm4hw5U";

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement('a');
        imageLink.href = result.links.download;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block";
}


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener('click', function () {
    page++;
    searchImage();
})