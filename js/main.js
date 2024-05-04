let azkarAlsabah = document.getElementById('azkar');
let list = document.getElementById('list');
let title = document.getElementById('title');

let id = 0;
function alazkar(){
    fetch("./JSON/adhkar.json").then((res)=>res.json())
    .then(function(data){
        title.innerHTML = `
        <h1 class="text-center py-4 text-white" id="title">${data[0].category}</h1>
        
        `
        for(let i = 0; i < data.length;i++){
            list.innerHTML += `<li onclick="chooseZkr(${i})"><a style="direction: rtl;text-align: right;" class="dropdown-item azkar-title" href="#">${data[i].category}</a></li>`;
            
        }
        for(let i= 0; i< data[id].array.length; i++){
            azkarAlsabah.innerHTML +=` <div class="card" style="width: 300px;">
            <div class="card-body">
              <p class="fs-3">${data[id].array[i].text}</p>
            </div>
            <span class="text-center fs-2 bg-warning">${data[id].array[i].count}</span>
          </div>
          `;
        }
    })
}
alazkar();

// document.querySelectorAll(".azkar-title").forEach(function(zkr){
//     zkr.onclick
// })
function chooseZkr(elemid){
    
    fetch("./JSON/adhkar.json").then((res)=>res.json())
    .then(function(data){
        title.innerHTML = `
        <h1 class="text-center py-4 text-white" id="title">${data[elemid].category}</h1>
        
        `
        azkarAlsabah.innerHTML = ' ';
        for(let i= 0; i< data[elemid].array.length; i++){
            azkarAlsabah.innerHTML =` <div class="card" style="width: 300px;">
            <div class="card-body">
              <p class="fs-3">${data[elemid].array[i].text}</p>
            </div>
            <span class="text-center fs-2 bg-warning">${data[elemid].array[i].count}</span>
          </div>
          `;
        }
    })
}
