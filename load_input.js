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
    marbles.forEach(marble => {
        // console.log(marble.classList[1])
        marble.draggable = false
        });
    var table = document.getElementById("guesses")
    var row_lengths = table.rows.length
    submitted_row.id = 0 + row_lengths
    var row = table.insertRow(-1)
    row.id = 'blank'
    row.innerHTML = `<td class="positions" id=1>
    <span class="marble">1</span>
    </td>
    <td id=2 class="positions">
    <span class="marble">2</span>
    </td>
    <td id=3 class="positions">
    <span class="marble">3</span>
    </td>
    <td id=4 class="positions">
    <span class="marble">4</span>
    </td>
    <td id=5 class="positions">
    <span class="marble">5</span>
    </td>`

    };


subm_button = document.getElementById("input_submit")
subm_button.addEventListener('click', check_row);
drag_and_drop()