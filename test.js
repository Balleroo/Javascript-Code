const p = document.querySelector('.evenList');

let evenList = [];
let html = '';

let loopprint = function(){
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            html += `<li style="color: red">${i}</li>`;
        };
    };
};

console.log("test")
loopprint();
p.innerHTML = html;