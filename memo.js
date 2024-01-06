document.addEventListener('DOMContentLoaded', (event) => {

function handleDragStart(e) {
    e.dataTransfer.items.add(e.target.classList, "text_class");
    console.log("moving from", this.id)
    e.dataTransfer.items.add(this.id, "text_id");
    
}

function handleDragEnd(e) {    
  };

  function handleDragOver(e) {
    e.preventDefault();
    this.classList.add('over');
    return false;
  }

function handleDragEnter(e) {
    // console.log(e);
    // this.classList.add('over');
  }

function handleDragLeave(e) {
    this.classList.remove('over');
  }

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    this.classList.remove('over');
    var new_class = e.dataTransfer.getData("text_class");
    var previous_id = e.dataTransfer.getData("text_id");
    console.log("previous_id", previous_id)
    if (e.target.classList[0] == "marble") {
        if (previous_id !== '') {
            var previous_cell = document.getElementById(previous_id)
            console.log("previous cell", previous_cell)
            previous_cell.children[0].classList = e.target.classList
         }
        e.target.classList = new_class;
        e.target.draggable = true;
    }
    else {
        if (previous_id !== '') {
            var previous_cell = document.getElementById(previous_id)
            console.log("previous cell", previous_cell)
            previous_cell.children[0].classList = e.target.children[0].classList
         }
        e.target.children[0].classList = new_class
        e.target.children[0].draggable = true;
    }
  };
  
let colors = document.querySelectorAll('.colors');
    console.log(colors)
    colors.forEach(function (color) {
        color.addEventListener('dragstart', handleDragStart);
        color.addEventListener('dragleave', handleDragLeave);
        color.addEventListener('dragend', handleDragEnd);
        
  });

  let positions = document.querySelectorAll('td.positions');
    console.log(positions)
    positions.forEach(function (position) {
        position.addEventListener('dragstart', handleDragStart);
        position.addEventListener('dragover', handleDragOver);
        position.addEventListener('dragenter', handleDragEnter);
        position.addEventListener('dragleave', handleDragLeave);
        position.addEventListener('dragend', handleDragEnd);
        position.addEventListener('drop', handleDrop);
    });

});