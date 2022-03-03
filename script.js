const inputbox =document.querySelector(".task_input input")
const addbtn =document.querySelector(".task_input button")
const display_task =document.querySelector(".display_task ul")
const clear_all=document.querySelector(".footer2 #clearbtn")
// const Select_all=document.querySelector(".footer2 #selectbtn")
// const check_task=document.querySelector(".display_task .btn")

inputbox.onkeyup = ()=>{
    let userdata = inputbox.value;
    if(userdata.trim() != 0){
        addbtn.classList.add("active");
    }
    else{
        addbtn.classList.remove("active");
    }
}
 
displaytask();

addbtn.onclick = ()=>{
    let userdata = inputbox.value;
    let getlocalstorage = localStorage.getItem("New Tasks");
    if(getlocalstorage == null){
        tasklist=[];
    }
    else{
        tasklist=JSON.parse(getlocalstorage);
    }
    tasklist.push(userdata);
    localStorage.setItem("New Tasks", JSON.stringify(tasklist));
    displaytask();
}

// check_task.onclick = ()=>{
//     let getlocalstorage = localStorage.getItem("New Tasks");
//     tasklist=JSON.parse(getlocalstorage);
//     tasklist.getElementById('btn').style.background = 'green';

//     localStorage.setItem("New Tasks", JSON.stringify(tasklist));
//     displaytask();
// }

function displaytask(){
    let getlocalstorage = localStorage.getItem("New Tasks");
    if(getlocalstorage == null){
        tasklist=[];
    }
    else{
        tasklist=JSON.parse(getlocalstorage);
    }
    const pendingtask = document.querySelector(".pendingtask");
    pendingtask.textContent = tasklist.length;
    if(tasklist.length > 0){
        clear_all.classList.add("active");
    }
    else{
        clear_all.classList.remove("active");
    }
    let newtask= '';
    tasklist.forEach((element, index) => {
        newtask+= `<li> ${element} <span><img src="/level1/icons/delete.png" onclick="delete_task(${index})" id="Delete" alt="Delete"></span></li>`;
    });
    display_task.innerHTML=newtask;
    inputbox.value='';
}

function delete_task(index){
    let getlocalstorage = localStorage.getItem("New Tasks");
    tasklist=JSON.parse(getlocalstorage);
    tasklist.splice(index, 1);

    localStorage.setItem("New Tasks", JSON.stringify(tasklist));
    displaytask();
}

// function complete_task(index){
//     let getlocalstorage = localStorage.getItem("New Tasks");
//     tasklist=JSON.parse(getlocalstorage);
//     tasklist.getElementById('check').style.background = 'green';

//     localStorage.setItem("New Tasks", JSON.stringify(tasklist));
//     displaytask();
// }

// Select_all.onclick = () =>{
//     let getlocalstorage = localStorage.getItem("New Tasks");
//     tasklist=JSON.parse(getlocalstorage);
//     tasklist.getElementById('selectbtn').style.background = 'green';

//     localStorage.setItem("New Tasks", JSON.stringify(tasklist));
//     displaytask();
// }

clear_all.onclick = () =>{
    tasklist=[];

    localStorage.setItem("New Tasks", JSON.stringify(tasklist));
    displaytask();
}

// {/* <button class="btn"></button>  */}
// /* <input type="checkbox" onclick="document.getElementById('check').style.background = 'green'" name="check" id="check"></input> *//