//표준 fuction 


// let 변수 넣듯이 function 함수이름 쓴다 -> fuction 선언방식 
// html 내부에서 부르려고/ method 만들어서 call하는 방식  
// 파라미터 변수에 datatype 넣을 필요없다 / 값 입력할때 결정 
// html안에서 작동하기 때문에 자바 콜과 달리 인스턴스할 필요없다

//여기는 완전한 하나의 fuction 
function calculateSumFirst(first, second){
    return first + second ;
} // ;안찍어 

let third = calculateSumFirst(4,6);

// console에서 이름만 불러도 가져올 수 있다 
// calculateSumFirst 
// ƒ calculateSumFirst(first, second){
//    return first + second ;
// }


//변수에 function 할당
//function선언을 앞이 아니라 뒤에, 1회성으로 사용하고 싶을때? fuction안에 fuction넣을떄? 
// fuction을 담았으니 fuction이 된거 
let calculateMinusSecond = (first, second) => {
    return first - second; 
};
//calculateSumSecond(2,1)
//1

// 변수식으로 fuction 담아놓는 이유는 여러군데에서 같은 기능의 fuction사용할 수 있게 하기 위하여 

//let calculateSumThird = calculateSumSecond // calculateSumThird도 function. 
//calculateSumThird
//(first, second) => {
//  return first + second; 
//}


//callback function  (function이 function을 호출)
//call을 back해서 fuction한다 / 사용자가 호출한 fuction이 자동으로 다른 fuction을 호출하게 하는 방식 
// calculateSumForth를 호출하면 calculatesecond를 쓸 수 있게 만드는것 / 상황에 따라 두가지 
// calculatesumsecond를 parameter로 넣어줌 
//funcName이 들어오는 fuction 안에 parameter 두개 들어가게 함 
function calculateForth(funcName, param1, param2){
    let result = funcName(param1, param2);
    result = result + 10;
    return result;
}
//calculateSumForth를 call 하면 여기 들어간 parameter에 의해서 변수로 넘어감. 

// calculateForth
// ƒ calculateForth(funcName, param1, param2){
//     let result = funcName(param1, param2);
//     result = result + 10;
//     return result;
// }
// calculateForth(calculateSumFirst, 5, 2)
// 17
// calculateForth(calculateMinusSecond, 5, 2)
// 13