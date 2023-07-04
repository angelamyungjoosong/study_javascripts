//string - String
//숫자 - Number
//ArrayList = Array []
//HashMap = Object {}

//arraylist
//이거 선언을 하는 순간에 class(여기서는 object)가 됨. length사용. 
let animals = ["dog", "cat", "bird", "fish", "lizard"]

console.log(`Done`);

//for문 
for (let i=0; i<animals.length; i=i+1){
    console.log(`${i+1} : ${animals[i]}`);
}

//for each문 
//for (String animal : animals)
for (let animal of animals){
    console.log(`${animal}`);
}

//learning after object 
const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];

let outHtml =``;
  for (let animal_hashmap of animals_obj){
    console.log(`name : ${animal_hashmap.name}, species :${animal_hashmap[`species`]}` );
    outHtml = `${outHtml}<div>name : ${animal_hashmap.name}, species :${animal_hashmap[`species`]}</div>`;
}


console.log(outHtml);

// browser 자원 중에 docs 다큐먼트-화면으로 보여지는거 (html,css,javascript갖고있음)
// querySelector: 특정한 걸 콕 집어서 그 안의 자원을 모두 다 가져와준다 (클래스,테그이름,아이디-자바스크립트에서는 아이디로 가져와)
// .클래스 / #아이디 
// commons의 loops를 리턴되는 걸 보기 위해 변수로 받아 
let loops_source = document.querySelector(`#loops`);  

//loops_source는 <div id="loops">inner text</div>의 내용을 담고 있다 
//원하는 항목을 html에 넣을때 사용 

//html로 포문 내용 만들기 -> 원하는 곳 설정 -> innerHTML로 이동시키기 