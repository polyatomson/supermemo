function check_row() {
    submitted_row = document.getElementById("blank")
    marbles = submitted_row.querySelectorAll('.marble')
    var picked_colors = Array()
    marbles.forEach(marble => {
        console.log(marble.classList[1])
        if (marble.classList[1] !== undefined) {
            picked_colors.push(marble.classList[1])
        }});
    if (picked_colors.length == 5) {
        console.log('good to go')
    }
    else {
        alert('All positions should be filled')
        return false
    }
    
    cells = submitted_row.querySelectorAll('td.positions')
    cells.forEach(cell => {
        // console.log(marble.classList[1])
        cell.removeAttribute('id')
        cell.removeEventListener('dragstart', handleDragStart);
        cell.removeEventListener('drop', handleDrop)
        cell.removeEventListener('dragover', handleDragOver)
        cell.removeEventListener('dragenter', handleDragEnter)
        cell.removeEventListener('dragend', handleDragEnd)
        cell.removeEventListener('dragleave', handleDragLeave)
        cell.children[0].draggable = false
        // marble.draggable = false
        });
    var table = document.getElementById("guesses")
    var row_lengths = table.rows.length
    submitted_row.id = 0 + row_lengths
    var row = table.insertRow(-1)
    row.id = 'blank'
    row.innerHTML = `<td class="positions" id='input1'>
    <span class="marble">1</span>
    </td>
    <td id='input2' class="positions">
    <span class="marble">2</span>
    </td>
    <td id='input3' class="positions">
    <span class="marble">3</span>
    </td>
    <td id='input4' class="positions">
    <span class="marble">4</span>
    </td>
    <td id='input5' class="positions">
    <span class="marble">5</span>
    </td>`
    let positions = document.querySelectorAll('#blank td.positions')
    console.log(positions)
        positions.forEach(function (position) {
            position.addEventListener('dragstart', handleDragStart);
            position.addEventListener('dragstart', handleDragStart);
            position.addEventListener('dragover', handleDragOver);
            position.addEventListener('dragenter', handleDragEnter);
            position.addEventListener('dragleave', handleDragLeave);
            position.addEventListener('dragend', handleDragEnd);
            position.addEventListener('drop', handleDrop);
        });
    let input_colors = JSON.stringify(picked_colors)
    return input_colors
    };


subm_button = document.getElementById("input_submit")
subm_button.addEventListener('click', check_row);
// drag_and_drop()