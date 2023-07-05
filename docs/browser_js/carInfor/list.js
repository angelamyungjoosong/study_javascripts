//learning after object 
const list_obj = 
    [{YEAR:"2020",CAR_NAME:"소나타",CAR_INFOR_ID:"CI001",COMPANY_ID:"C001"},
    {YEAR:"2021",CAR_NAME:"코나",CAR_INFOR_ID:"CI002",COMPANY_ID:"C002"},
    {YEAR:"2019",CAR_NAME:"SM6",CAR_INFOR_ID:"CI003",COMPANY_ID:"C003"},
    {YEAR:"2022",CAR_NAME:"3 시리즈",CAR_INFOR_ID:"CI004",COMPANY_ID:"C004"},
    {YEAR:"2020",CAR_NAME:"캠리",CAR_INFOR_ID:"CI005",COMPANY_ID:"C005"}]
  ;

let outHtml =`<table>`;
  for (let list_hashmap of list_obj){

    outHtml = `${outHtml}<tr><td> ${list_hashmap[`YEAR`]}</td><td>${list_hashmap[`CAR_NAME`]}</td><td>${list_hashmap[`CAR_INFOR_ID`]}</td><td>${list_hashmap[`COMPANY_ID`]}</td></tr>`;
}
outHtml += `</table>`

/* <tr>
<td>Toyota Camry</td>
<td>123456</td>
<td>Toyota</td>
</tr> */



// browser 자원 중에 docs 다큐먼트-화면으로 보여지는거 (html,css,javascript갖고있음)
// querySelector: 특정한 걸 콕 집어서 그 안의 자원을 모두 다 가져와준다 (클래스,테그이름,아이디-자바스크립트에서는 아이디로 가져와)
// .클래스 / #아이디 
// commons의 loops를 리턴되는 걸 보기 위해 변수로 받아 
let list_source = document.querySelector(`#list`);  
//loops_source는 <div id="loops">inner text</div>의 내용을 담고 있다 
//원하는 항목을 html에 넣을때 사용 

//html로 포문 내용 만들기 -> 원하는 곳 설정 -> innerHTML로 이동시키기 
list_source.innerHTML = outHtml;

//가져와서 바꿔채기해서 다시 보내


// html 중 아이디 부분 (내용과 function)을 담아class화./ 그냥 리턴 되는건 string인데, document.querySelector사용하면 클래스로 리턴 
// list_source의 변수 innerHTML(지정된 변수의 이름)에 안에 들어간 값 / outHtml로 넣어주는 값을 바꾼다 