const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
    //작은 모듈( 같은 이름 충돌하지 않게?) 만드는 법은 유튜브 클론코딩

const TODOS_LS = "toDos";//로컬 스토리지

function filterFn(toDo){
    return toDo.id === 1
}


let toDos = [];//let과 const의 차이는?? 오류남ㅠㅠ 변수 어쩌구

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //console.log(event.target.parentNode); //console.dir하면 쓰이는 태그들? 볼 수 있음
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
    
}//filter와 forEach가 핵심

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //JSON(다 대문자).stringify는 자바스크립트  object를 string으로 바꿔준다
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo );
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id : newId  //toDos의 길이는 0일테니까 +1을 더해서 숫자로 만들어 줌 
    };
    toDos.push(toDoObj);
    saveToDos();
    /*local storage에는 자바스크립트의 data를 저장할 수 없다
    only string 만 저장할 수 있다 */
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function something(toDo){
    console.log(toDo.text);
};
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //JSON=javascript Object Notation
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {//배열에 담긴것들을 하나씩 함수로 실행함
            paintToDo(toDo.text);
        });
        

    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();