const form = document.getElementById('form');
const showList = document.getElementById('show-list');


const getShows = (searchTerm) => {
    axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then(res => {
            console.log(res.data);
            
            for (let item of res.data) {

                if (item.show.image) {
                    // console.log(item.show.image.medium);

                    const img = document.createElement('img');
                    img.src = item.show.image.medium;
                    img.setAttribute('class', 'img-thumbnail');
                    img.style.margin = '20px';
                    showList.append(img);

                } 
            }
    })
    .catch(e => {
        console.log("Error");
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.dir(form);
    const searchTerm=form.elements[0].value
    getShows(searchTerm);
    form.elements[0].value = "";
})


