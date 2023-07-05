// html에서 일부기능을 가져와서 업데이트하는 게  document.querySelector
// 자바스크립트가 자원 가져와서 엑션 취하는 개념 

//1>버튼 클릭해서 event 작동하게 만드는거 (버튼에 클릭 이벤트 만들기) / 2>event를 이용하는데 query select 사용
// "console.log('hello');alert('world')" 이런식으로 넣지 않고 다른 곳에 function 사용해서동작하게 만들려고 하는것임
//버튼 외에도 태그 있으면 엑션 취하게 할 수 있다 
//원클릭 혹은 enter로 동작 
//리스트 없는 상태에서 go를 클릭하면 리스트가 나오게 하는 것 (화면 변경) 
//go 누르면 리스트 만들어주는 // tablelist(); 호출하면됨 
//onclick 하면 tablelist(); function 호출되어 동작되어 리스트 채워짐. 

//document.queryselect 하는이유가  window 에서 dom, bom, javascript로 나누어져있기때문에 dom에서 정보를 가져와야하기 때문
//onclick도 dom에서 javascript가 작용하는 방식 (파이프라인)

//사실 3가지. on change도 있다. 
// input tag 넣어서 글자 후 엔터 쳤을때 alert창 뜨게. -> 다른 fuction 지정. 


//input id에 event 건다고 선언 / event 동작했을때 사용되는 function올리기. 
//세가지 자원중에서 html은 doc 
//javascrit에서는 왠만하면 id로 연결 (class도 가능)
let keydownObject = document.querySelector("#keydownEnter") //id로 찍은 input을 전부 가져왔다는 얘기 

keydownObject.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        console.log(`key down : ${event.code} `)
    }
   
});
// (type: keyof ElementEventMap, listener: (this: Element, ev: Event) => any, options?: boolean | AddEventListenerOptions | undefined): void
//괄호안은 typescript //listener은 콜백 function. 
//typescript에서는 변수이름:변수타입.
//()에는 변수 지정. 여기서는 event라는 변수. 
//keydownObject의 keydown한 event에는 여러가지 정보가 들어가있다. 
//그중에서 event.code 사용 
