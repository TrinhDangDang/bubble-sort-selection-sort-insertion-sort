const sortButton = document.getElementById("sort");
const sortingType = document.getElementById("sorting-type");
const alertDiv = document.getElementById('alert');

const sortInputArray = (event) => {
  event.preventDefault();

  alertDiv.innerHTML ='';
  alertDiv.classList.remove('alert');

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value)); //array of values from dropdown
  
  let sortedValues;
  if (sortingType.value === 'bubble-sort') {
    sortedValues = bubbleSort(inputValues);
  } else if (sortingType.value === 'insertion-sort') {
    sortedValues = insertionSort(inputValues);
  } else if (sortingType.value === 'selection-sort'){
    sortedValues = selectionSort(inputValues);
  } else {
    alert('Please select a sorting algorithm.');
    alertDiv.innerHTML = '<p>Please select a sorting algorithm.</p>'
    alertDiv.classList.add('alert');
    return;
  }
  


  updateUI(sortedValues);
}

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;  //set the text of output container
  })
}

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
}

sortButton.addEventListener("click", sortInputArray);
