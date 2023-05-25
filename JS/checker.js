const chekboxs=document.getElementById("checkboxsdiv");
const sbmtbutton=document.getElementById("submitbtn");
const tablecheck=document.getElementById("table1");

const n=8;
let kod='';

for (let i = 0; i < n; i++) {
    kod+=`<input type="checkbox" id="check${i}">`;
}
chekboxs.innerHTML = kod;

kod='';
for (let i = 0; i < n; i++) {
        kod+=`<td id="${i}"></td>`;
}
tablecheck.innerHTML=kod;



function checkedChance()
{
    kod= '';
    for (let i = 0; i < n; i++) {
        let checkbox=document.getElementById("check"+i);
        if(checkbox.checked){
            kod+=`<td class="bgblack" id="${i}" ></td>`;
        }
        else {
            kod+=`<td></td>`;
        }
    }
    tablecheck.innerHTML=kod;
}