'use strict';

const assert = require('assert');

/*function forEach(arr, callback) {
  // Your code here
}*/

function map(arr, callback) {
  // Your code here
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = callback(arr[i]);
    newArray.push(element);
  }
  return newArray;
}

/*function filter(arr, callback) {
  // Your code here
}

function some(arr, callback) {
  // Your code here
}

function every(arr, callback) {
  // Your code here
}*/

function reduce(arr, accumulator) {
  // Your code here
  accumulator = accumulator || 0;
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] == "number") {
      accumulator = accumulator + arr[index];
    } else if (typeof arr[index] == "object") {
      for (let i in arr[index]) {
        accumulator = accumulator + arr[index][i];
      }
    }
  }
  return accumulator;
}

function filter(arr, callback) {
  // Your code here
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

if (typeof describe === 'function') {

  /*describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });*/

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  /*describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });*/

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}
