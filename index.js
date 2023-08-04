// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const medianValue = (arr) => {
  const newArr = [...new Set(arr)];
  newArr.sort();
  const len = newArr.length;

  let median;

  if (len % 2 === 0) {
    const [mid1, mid2] = [newArr[len / 2 - 1], newArr[len / 2]];
    median = (mid1 + mid2) / 2;
  } else {
    median = newArr[Math.floor(len / 2)];
  }

  return median;
};

console.log(medianValue([0, 1, 2, 4, 6, 5, 3]));

function findMedian(arr) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  const n = arr.length;
  const medianIndex = Math.floor(n / 2);
  return arr[medianIndex];
}

// Test the function with the given sample input
const arr = [0, 1, 2, 4, 6, 5, 3];
console.log(findMedian(arr)); // Output: 3
