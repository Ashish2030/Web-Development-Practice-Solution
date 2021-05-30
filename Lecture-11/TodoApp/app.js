const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const list = document.getElementById('list')
const h2 = document.querySelector('h2');



btn.onclick = (e) => {
    
    let todoText= inp.value;
    let listItem = document.createElement('li');

    listItem.innerText = todoText;

    listItem.onclick = (e) => {
        e.target.remove();
    }

  
    list.append(listItem);
   
    inp.value = "";

}
