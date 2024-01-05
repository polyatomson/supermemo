// let colors = ["white", "yellow", "blue",
//           "green", "brown", "black", "red", "orange"];

// console.log(colors)
document.addEventListener('DOMContentLoaded', (event) => {

function handleDragStart(e) {
    dragSrcEl = this.outerHTML;
    // dragSrcEl.classList.add('dropped');
    console.log('dragSrcEl', dragSrcEl)
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', this.outerHTML);
    // console.log('in transfer', this)
}

function handleDragStartMove(e) {
    dragSrcEl = this.outerHTML;
    // dragSrcEl.classList.add('dropped');
    console.log('dragSrcEl', dragSrcEl)
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
    // console.log('in transfer', this)
}

// function handleDragStartMove(e) {
//     dragSrcEl = this.outerHTML;
//     // console.log('dragSrcEl', this)
//     e.dataTransfer.effectAllowed = 'move';
// }
  
function handleDragEnd(e) {
    
  }

  function handleDragOver(e) {
    e.preventDefault();
    return false;
  }

function handleDragEnter(e) {
    // console.log(this);
    // this.classList.add('over');
  }

function handleDragLeave(e) {
    // this.classList.remove('over');
  }

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    console.log("dragSrcEl", dragSrcEl)
    console.log("this", this)

    if (this.classList[1] !== 'filled')  {
        // console.log("class_list", this.classList)
        console.log("copying")
        // this.innerHTML = dragSrcEl;
        // dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.classList.add('filled');
        // console.log("dragSrcEL.innerHTML", dragSrcEl);
        // console.log("in transfer", e.dataTransfer.getData('text/html'));
    }
    else {
        console.log("trying to replace")
        console.log("recieved data", e.dataTransfer.getData('text/html'))
        // dragSrcEl = this.innerHTML
        this.innerHTML = e.dataTransfer.getData('text/html');

    }
    // console.log(this);

    return false;
  }
  
let colors = document.querySelectorAll('.col img.colors');
    console.log(colors)
    colors.forEach(function (color) {
        
        color.addEventListener('dragstart', handleDragStart);
        color.addEventListener('dragleave', handleDragLeave);
        color.addEventListener('dragend', handleDragEnd);
        
  });

  let positions = document.querySelectorAll('td.positions');
    positions.forEach(function(el) {
        // console.log(el.classList[1])
    });
    positions.forEach(function (position) {
        position.addEventListener('dragstart', handleDragStartMove);
        position.addEventListener('dragover', handleDragOver);
        position.addEventListener('dragenter', handleDragEnter);
        position.addEventListener('dragleave', handleDragLeave);
        position.addEventListener('dragend', handleDragEnd);
        position.addEventListener('drop', handleDrop);
    });

});