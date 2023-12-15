let create_btn= document.getElementById("create_btn");
let create_iss_input= document.getElementById("create_iss_input");
const todo_container= document.getElementById("todo");




//          primary eventlistener task
create_btn.addEventListener("click", when_createBtn_clicked);
create_iss_input.addEventListener("keyup" , (event)=>{
    if(event.keyCode==13){
        const issue_content= event.target.value;
        if(issue_content){
            // console.log(issue_content);
            create_card(issue_content);
            create_iss_input.value="";
            create_btn.classList.remove("hide");
            create_iss_input.classList.add("hide");

        }else{
            alert("please create an issue first");
            return;
        }
    }
});

function when_createBtn_clicked(){
    // console.log("hello");
    create_iss_input.classList.remove("hide");
    create_iss_input.focus();
    create_btn.classList.add("hide");
}

function create_card(issue_content){
    // console.log(issue_content);
    let dynamic_issue_div= document.createElement("div");
    dynamic_issue_div.classList.add("dynamic_iss");
    dynamic_issue_div.setAttribute("draggable","true");
    dynamic_issue_div.setAttribute("dragging_element_container","todo")

    dynamic_issue_div.addEventListener("dragstart",when_drag_started);
    // dynamic_issue_div.addEventListener("dragend",()=>{
    //     console.log("dragging ended");
    // });
    
    
    dynamic_issue_div.innerHTML=`<p>${issue_content}</p><button class="material-icons delete_iss_btn" id="">delete</button>`
   
    todo_container.appendChild(dynamic_issue_div);

    let delete_btn= document.querySelectorAll(".delete_iss_btn");
    // console.log(delete_btn);
    delete_btn.forEach(each_btn=>{
        each_btn.addEventListener("click", deleteIssue);
    });
    
}  


function deleteIssue(event){
    // console.log(event.target);
    let parent= event.target.parentNode.remove();
}


