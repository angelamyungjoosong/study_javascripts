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


// 정보 데이터 포털 : 대구 의료기 판매 
function fetchDatagokr(){
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
// 로컬 호스트와 127.0.0.1:8080는 같다 
// 포스트맨 역할 

//자동차 정보 상세 
function fetchCarInforDetail(){
    let url = 'http://127.0.0.1:8080/selectDetail/CI002'; 
    let request = fetch(url)
        
    .then((response) => {
            return response.json();
        }) //이것도 function.response대신 다른 이름도 가능. 
        //스트링으로 일렬로 날아오기 때문에 값 value 값 value로 들어오는 json으로 받아야함. 
        
        .then((data) => {
            console.log(data);
        })
        
        .catch(errorMeg => {
            console.log(errorMeg);
        });
    }

    // 자동차 정보 수정
    function fetchCarInforUpdate(){
    // 192.168.0.57:8080/update
    // body - 
    // {
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR-02"
    // }
    // headers - 
    // Content-Type: application/json
    let url = 'http://127.0.0.1:8080/update'; 
    //postman의 Params, Authorization, Header, Body 그대로 쓰시고 hashmap(object type)으로 key,value로 넣어면 된다. 
    let option = {
        method : "PUT",
        headers : {"Content-Type": "application/json"},//여기는 스트링으로 넣어야함 // header가 key 뒤에가 value 
        body : JSON.stringify({
            "CAR_NAME": "요주랩",
            "CAR_INFOR_ID": "CI002"
        }) //괄호안에 hashmap 들어가 
    }// hash로 넣는 경우가 많음 
    // hashmap으로 네트웍으로 보낼 수 없어서 string으로 변환 필요 JSON.stringify라는 function통해서 (네트웍에서는 string으로만 가능 )
    
    let request = fetch(url, option)
    //option으로 내용을 바꿔야할때 사용. 
        
    .then((response) => {
            return response.json();
        }) //이것도 function.response대신 다른 이름도 가능. 
        //스트링으로 일렬로 날아오기 때문에 값 value 값 value로 들어오는 json으로 받아야함. 
        
        .then((data) => {
            console.log(data);
        })
        
        .catch(errorMeg => {
            console.log(errorMeg);
        });
    }


    //포스트멘에 먼저넣어보고 확인 후 포스트멘 역할을 js에 만들기 
    //5500에서 보내고 8080으로 받아. 5500에서 8080으로 받아.  정체규정에 어긋나서 해킹이라고 여김. 
    //WebMvcConfig