
let submit = document.getElementById("submit");
let val = document.getElementById("ip");
console.log(val.value);

submit.addEventListener('click', ()=>{
    console.log(val.value);
    let list = document.createElement('li');
    list.textContent = val.value;

    document.getElementById("items").append(list);

    // console.log(val.value);
    // let li = document.createElement('li');
    // li.textContent = val.value;

    // let ul = document.getElementById('myList');
    // ul.appendChild(li);
})