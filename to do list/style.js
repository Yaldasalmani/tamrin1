let list = JSON.parse(localStorage.getItem('tasklist')) || [];
let listTag = document.getElementById("list");
let input = document.getElementById("input");
let create = document.getElementById("create");

const deleteTasks=(index) =>{
    console.log("deleteTasks",index)
    list.splice(index,1);
    localStorage.setItem("tasklist",JSON.stringify(list));
    renderTasks(list);
}

const renderTasks = (myarray) => {
    listTag.innerHTML = "";
   list.map((task,index) => {
        listTag.innerHTML += `
       <li>
            <input type="checkbox">
            <span>${task}</span>

            <button class="edit-btn">
                <i class="fa-solid fa-pen"></i>
            </button>

            <button class="delete-btn "  onclick="deleteTasks(${index})">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </li>

`
  } )
}
create.addEventListener("click" , e =>
{
let value=input.value;
list.push(value);
localStorage.setItem("tasklist" , JSON.stringify(list));
input.value="";
renderTasks(list);
})
renderTasks(list);