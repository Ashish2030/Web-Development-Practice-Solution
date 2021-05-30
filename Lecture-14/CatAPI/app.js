
const cats = document.getElementById('cats');


fetch('https://cat-fact.herokuapp.com/facts')
    .then((res) => {
        console.log("Done!!");
        // console.log(res);
        return res.json();
    })
    .then((res) => {
       
        for (let cat of res) {
            const li = document.createElement('li');
            li.append(cat.text)
            cats.append(li);
            // console.log(cat.text);
        }


    })
    .catch((e) => {
        console.log("Error");
    })
  