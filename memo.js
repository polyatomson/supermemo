// let colors = ["white", "yellow", "blue",
//           "green", "brown", "black", "red", "orange"];

// console.log(colors)
document.addEventListener('DOMContentLoaded', (event) => {

function handleDragStart(e) {
    console.log('event', e)
    console.log('this', this)
    dragSrcEl = this
    console.log('started dragging', this)
    if (this.classList[1] === undefined) {
        // console.log(this.classList)
        console.log("second class", this.classList[1]);
        // console.log("list of classes", this.classList[0]);
        console.log('new color');
        dragSrcEl.classList.add('dropped');
        dragSrcEl = dragSrcEl.outerHTML;
        e.dataTransfer.effectAllowed = 'copy';
        e.dataTransfer.setData('text/plain', this.outerHTML);
    }
    else {
        console.log('moving dropped', dragSrcEl.innerHTML)
        dragSrcEl = dragSrcEl.innerHTML;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', dragSrcEl);

    }
}

function handleDragEnd(e) {
    
  };

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
    console.log("New", dragSrcEl)
    dragSrcEl = this.children[1]
    console.log("Old", dragSrcEl)
    this.innerHTML = e.dataTransfer.getData('text/plain');
    this.classList.add('filled');

    return false;
  };
  
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
        position.addEventListener('dragstart', handleDragStart);
        position.addEventListener('dragover', handleDragOver);
        position.addEventListener('dragenter', handleDragEnter);
        position.addEventListener('dragleave', handleDragLeave);
        position.addEventListener('dragend', handleDragEnd);
        position.addEventListener('drop', handleDrop);
    });

});