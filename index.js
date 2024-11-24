const bars = document.querySelectorAll("my-class");
const newArrayBtn = document.querySelector('.createArrBtn')
const sortBtn = document.querySelector('.sortBtn')
// const chartClass = document.querySelector('.my-class')


//create a random arr that contains different numbers from 70 - 300
function randomHeights(length) {
  let arr = [];
  for (let index = 0; index < length; index++) {
    val = Math.floor(Math.random() * (70, 301));
    let str = val.toString();
   
    arr.push(str);
  }
 
  return arr;
}

// create an element and put in into the graph
function createElement(arr) {
  let gridArray = [];
  let i = 0;
  while (i < arr.length) {
    const Div = document.createElement("div");
    Div.classList.add("my-class");
    Div.style.height = arr[i] + "px";
    newDiv.innerHTML = arr[i]
    const parentElement = document.getElementById("box");
    parentElement.appendChild(newDiv);
    gridArray.push(newDiv);
    i++;
  }
  return gridArray;
}







async function bubbleSort(arr, delay) {
    console.log(delay)
  let swapped;
  let count = arr.length - 1;
  do {
    swapped = false;
    for (let i = 0; i < count; i++) {
      arr[i].style.background = "green";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      if (arr[i].clientHeight > arr[i + 1].clientHeight) {
        // Swap elements

        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;

        changeColumns(arr);
        // arr[i].style.background = "blue"
      }
      arr[i].style.background = "blue";
    }
    arr[count].style.background = "green";
    count--;
  } while (swapped);
  
  //   arr[0].style.background = 'green'
  arr.forEach(element => {
    element.style.backgroundColor = "green";
  });
  return arr;
}



// bubbleSort(gridArray);
function changeColumns(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    arr[i].style.gridColumn = (i + 1).toString();
  }
}

let randomizedArr;

newArrayBtn.addEventListener('click', () =>{
    const arrLength = document.getElementById("input-length");
    
    
const val = arrLength.value;
console.log(val)
    let newArray = randomHeights(val);
    let addedElements = createElement(newArray)
    randomizedArr = addedElements
})


sortBtn.addEventListener('click', () =>{
    const speed = document.getElementById("input-multiplier");
    let multiplier = speed.value
    
     bubbleSort(randomizedArr, multiplier)
})

