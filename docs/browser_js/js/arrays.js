let init_array = new Array(); // []  값이 없는 초기화할때 두가지방법있음 

let fruits = ["apple", "banana", "orange", "mellon"]; // 값을 넣은 초기화 

//fruits
// (4) ['apple', 'banana', 'orange', 'mellon']
// fruits.length
// 4
// fruits.push('grape')
// 5
// fruits.indexOf('banana')
// 1
// fruits.join(' and ')
// 'apple and banana and orange and mellon and grape'


//list와 list를 붙이는 방법 
let fruits_second = ["berry", "strawberry"]

//fruits.concat(fruits_second); //이렇게하면 표현만 붙은 걸로되고 실제 사용할때는 안붙은채로 나옴 
let fruits_concat = fruits.concat(fruits_second); 