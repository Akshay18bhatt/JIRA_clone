let dragging_element_info={
    drag_source:null,
    drag_element:null
}




//       accessing continers and converting them into arrays --


let containers = document.getElementsByClassName("container");
// console.log(containers);
containers= Array.from(containers);
// console.log(containers.map(element=>element));
containers.forEach(element => {
    
    element.addEventListener("dragover", when_dragging_over_aContainer);
    element.addEventListener("drop", when_element_is_dropped);
});



function when_drag_started(event){
    // console.log("dragging");
    // console.log(event.target);
    let container_name= event.target.getAttribute("dragging_element_container");
    // console.log(container_name);

    dragging_element_info.drag_source= container_name;
    dragging_element_info.drag_element= event.target;
    // console.log(dragging_element_info);

}

function when_dragging_over_aContainer(event){
    // console.log("hovering");
    const hovering_container= event.currentTarget;
    // console.log(hovering_container);
    if(hovering_container.id=== dragging_element_info.drag_source){
        return;
    }
    event.preventDefault();
}

function when_element_is_dropped(event){

    const this_card_is_dragging= dragging_element_info.drag_element;
    const currentDroppingZone= event.currentTarget;

    this_card_is_dragging.setAttribute("dragging_element_container", currentDroppingZone.id);
    currentDroppingZone.appendChild(this_card_is_dragging);

}

