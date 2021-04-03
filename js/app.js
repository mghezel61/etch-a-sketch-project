const container = document.querySelector('.grid-container');
const selectedColor = document.getElementsByName('colorPicker');
const gridSize = document.getElementById('grid-size');
const reset = document.getElementById('reset')
const labelOfColors = document.querySelectorAll('.label-of-colors');
var counter = [];


window.addEventListener('DOMContentLoaded', function () {
    let divNumbers = gridSize.value;
    addElement(divNumbers);
    document.getElementById("grayLabel").style.backgroundColor = "rgb(51, 224, 224)";
    gridMouseOver();

    gridSize.addEventListener('change', function () {
        let gridNumbers = gridSize.value;
        if (gridNumbers > 50 || gridNumbers < 2) return;
        addElement(gridSize.value);
        resetCounter();
        gridMouseOver();
    });

    // change the background color of selected color 
    labelOfColors.forEach(item => {
        item.addEventListener('click', function (e) {
            labelOfColors.forEach(item => {
                item.style.backgroundColor = "darkcyan"
            });
            e.currentTarget.style.backgroundColor = "rgb(51, 224, 224)";
        });
    });
    // reset the background of the current grid
    reset.addEventListener('click', function () {
        let currentGrid = document.querySelectorAll('.grid-item');
        currentGrid.forEach(elem => {
            elem.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            elem.style.borderColor = "#000";
        })
    });

});


// add new Div to grid container;
function addElement(number) {
    // let counter = [];
    container.innerHTML = '';
    for (let i = 0; i < number ** 2; i++) {
        counter.push([0, {
            r: 250,
            g: 250,
            b: 250
        }]);
        // create a new div element
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', "grid-item");
        newDiv.setAttribute('id', `${i}`);

        // add the text node to the newly created div
        container.appendChild(newDiv);

        // add the grid-template-columns to the divs.
        let gridTemplateCol = '';
        for (let i = 0; i < number; i++) {
            gridTemplateCol += 'auto ';
        }
        container.style.gridTemplateColumns = gridTemplateCol;
    }

}

// grid Mouse over
const gridMouseOver = function () {
    let grids = document.querySelectorAll('.grid-item');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function (e) {

            if (colorPicker() === "black" || colorPicker() === "#000000") {
                grid.style.border = "1px solid #fff";
                grid.style.backgroundColor = colorPicker();
            } else if (colorPicker() === "grayScale") {

                grayScale(grid);
            } else {
                grid.style.border = "1px solid #000";
                grid.style.backgroundColor = colorPicker();
            }
        });
    });
}


// color picker
function colorPicker() {
    selectedColor.forEach(color => {
        if (color.checked == true) {
            color.style.backgroundColor = "rgb(51, 224, 224)";
            if (color.id == "rainbow") {
                resetCounter();
                crl = randomColor();
            } else if (color.id == 'eraser') {
                resetCounter();
                crl = "rgba(255, 255, 255, 0.8)";
            } else if (color.id === "pickYourColor") {
                resetCounter();
                crl = document.getElementById('yourColor').value;
            } else if (color.id === "grayScale") {
                crl = "grayScale";
            } else {
                resetCounter();
                crl = color.id;
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



// refresh the counter
function resetCounter() {
    counter = [];
    for (let i = 0; i < gridSize.value ** 2; i++) {
        counter.push([0, {
            r: 250,
            g: 250,
            b: 250
        }]);
    }
    return counter;
}
// grayScale
const grayScale = function (grid) {
    let i = counter[grid.id][0];
    let = blackColor = counter[grid.id][1];
    let r = counter[grid.id][1].r,
        g = counter[grid.id][1].g,
        b = counter[grid.id][1].b;
    let subtract = 50
    if (i <= 10) {
        let bgColor = grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        console.log(bgColor);
        i++;
        counter[grid.id][0] = i;
        counter[grid.id][1].r = r - subtract;
        counter[grid.id][1].g = g - subtract;
        counter[grid.id][1].b = b - subtract;

    }

    // console.log(counter);
};