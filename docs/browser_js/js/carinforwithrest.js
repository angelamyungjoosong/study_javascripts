// fuction화시켜서 밑에서 fuction을 call해서 동작하면 만들게 하기 

function tablelist() {


  let url = 'http://127.0.0.1:8080/selectAll/CI002';
  let request = fetch(url)

    .then((response) => {
      return response.json();
    }) //이것도 function.response대신 다른 이름도 가능. 
    //스트링으로 일렬로 날아오기 때문에 값 value 값 value로 들어오는 json으로 받아야함. 

    .then((data) => {
      let outHtml = `<table>`; //테이블열기
      for (let car_hashmap of data) {
        // 각 자동차의 정보를 콘솔에 출력(올바르게 액세스하고 있는지 확인용)
        console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
        // 동적으로 생성된 HTML 테이블 행을 추가
        outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
      }
      outHtml += `</table>`; //테이블 닫기 </table>태그
      // "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
      let carTableBody = document.querySelector('#list'); // list.html에서 이 id 넣음 <tbody id="carTableBody"> 
      carTableBody.innerHTML = outHtml; //outHtml 변수에 저장된 동적으로 생성된 HTML이 선택된 <tbody> 요소의 내부 HTML로 할당됨

      return outHtml;

    })

    .catch(errorMeg => {
      console.log(errorMeg);
    });





}

// tablelist();

// add keydown event  //id로 찍은 input을 전부 가져왔다는 얘기 
let keydownObject = document.querySelector("#keydownEnter");
//keydown / click 
keydownObject.addEventListener('keydown', (event) => {
  if (event.code == 'Enter') {
    console.log(`key down : ${event.code}`);

    tablelist();
  }

});


