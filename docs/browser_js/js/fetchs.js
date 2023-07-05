// 공명 / 싱크: 내가 때리면 바로 응답오는것 - 대답을 기다리지 않는다 -기본적으로 컴퓨터는 싱크. 일하고 리턴값 받고 일하고 리턴값 받고...이 순서대로 움직인다. 
// 어싱크: 내가 때리면 내일 그사람이 날 때리러 온다. - 기다리다가 온다 - 원래 위-아래 순서에 따라가지 않고, 중간에 동작이 들어감. 순서적으로되다가 어싱크로 선언된 부분은 그냥 남겨두고(일을 시켜서 동작하게 냅두고) 흘러가게 된다. 그리고 일이 끝나면 리턴값을 밑에 던져주도록 한다. (답변 오면 그때 동작하게 한다.)
// go나 enter 누르면 하드코딩한 내용이 뜨게 만들었었다 
// restfull 방식으로 go나 enter 누르면 catch (어싱크) 동작해서 레스풀방식의 백엔드로 신호를 보내....
// 날라온 url로 뒤져서 데이터 뽑아져 나와서 fetch로 호출했던 화면으로 보내준다. 화면 받아서 html의 테그와 연결해서 html에 뿌려준다. 
// 여기서 데이터를 받아야하기 때문에 fetch를 사용한다. 


//fetch는 어싱크를 동작시키는 네트워크 function 
//fetch는 어싱크로 동작한다. 
// fetch에 네트웍을 실어서  어떤 값의  url에 신호를 보내는것 
// get : url에 어떤 특정 변수 값을 실어보내는것 
//fection도 fuction이니까 리턴값이 존재 -> request라는 변수에 담김 
//네트웍 타고 들어오니까 리턴값 바로 알 수 없다. (결과를 받을지 안받을지 모름)
// . then 사용: fetch 실행되고 나면 변수를 바로 내보내지 말고 그 변수를 확인하자 (error면 error리턴, 정상값이면 정상값 리턴 )
// fetch 끝나고 네트웍에서 에러나지 않았으면 then이 실행됨 
// 네트웍에서 날아온 결과값을 (보낼때 그렇게 보냇으면 hashmap 뭉치) response로(상대가 보내준 데이터 형식 묶음) 받음 
// .json 사용: hashmap뭉치에서 데이터 묶음으로 변한다. (header빠지고 등등) 네트웍으로 오니까 json으로 받음 
//fetch가 리턴한 값이 파라미터로 받기 위하여 response로 들어가 ... the
// =>로 된 fuction이라 response대신 result 등 다른 이름 가능.
//네트웍에서 날아온 스트링이 json으로 바뀐게 return 됨(fuction)
// jason으로 받은 걸 data로 받고 그 data를 출력하면 json이 나옴.

function fetchDatgokr(){
let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=v9nQhJoXl4wY6sr2aLQYKMdNKR0lxjG7kl1dC%2FJrqcuVLuUBk7f3AkJEMJI9yKry0NP%2FlEqJFSJcQ9K8LkOsiA%3D%3D&currentPage=1&perPage=10&SN=1'; 
let request = fetch(url)
    .then((response) => {
        response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(errorMeg => {
        console.log(errorMeg);
    });
}

// 파라미터 => 문법
// 실행되는내용이 하나면 이렇게 쓸 수 있다 (function) 