// if (){
// } else if () {
// } else {
// }

let first = 1;
let second = 4;

if (first < 10){
    console.log("Mano");
} else if (first > second){
    console.log('${first} > ${second}')
} else {
    console.log('second : ${second} ')
}

// == 변수의 값만 동일한지 비교 vs === 변수의 값과 데이터타입 둘다 동일한지 비교 

let third = '4';
first = 4;
//third == first
//true
//third ===first
//false


//삼항 연산자: 두개 이상 항목이 아니고 참 일때 하나의 항목이 실행되거나 거짓일때 하나의 항목이 실행될때만 씀. 
// if () {
// } else {
// }
// ? = ()?:;
// 변수 = (if 문)? 참일때 : 거짓일때;

let result = (third === first)? `true!`:`false!`
