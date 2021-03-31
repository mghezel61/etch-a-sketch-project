const container = document.querySelector('.grid-container');
const selectedColor = document.getElementsByName('colorPicker');
const gridSize = document.getElementById('grid-size');

window.addEventListener('DOMContentLoaded', function () {
    let divNumbers = gridSize.value;
    addElement(divNumbers);
    gridMouseOver();
    gridSize.addEventListener('change', function () {
        addElement(gridSize.value);
        gridMouseOver();
    });

});


// add new Div to grid container;
function addElement(number) {
    container.innerHTML = '';
    for (let i = 0; i < number ** 2; i++) {
        // create a new div element
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', "grid-item");
        // add the text node to the newly created div
        container.appendChild(newDiv);

        // let size = gridSize.value;
        // console.log(container.style.gridTemplateColumns);
        let gridTemplateCol = '';
        for (let i = 0; i < number; i++) {
            gridTemplateCol += 'auto ';
        }
        container.style.gridTemplateColumns = gridTemplateCol;
    }
}

// grid Mouse over
const gridMouseOver = function () {
    let grid = document.querySelectorAll('.grid-item');
    grid.forEach(element => {
        element.addEventListener('mouseover', function (param) {
            let newColor = colorPicker();
            console.log(newColor);
            param.currentTarget.style.backgroundColor = colorPicker();
        });
    });
}


// color picker
function colorPicker() {
    selectedColor.forEach(color => {
        if (color.checked == true) {
            if (color.id == "rainbow") {
                crl =  randomColor();
            } else {
                crl =  color.id;
            }
        }
    });
    return crl;
};

//create a random color
const randomColor = function () {
    let cols = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 16);
        color += cols[index];
    }
    return color;
};

// 