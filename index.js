"use strict";

//=============================================================================================

function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      ++this.length;
    }
    return this.length;
  };

  this.pop = function pop() {
    if (this.length <= 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return lastItem;
  };

  this.shift = function shift() {
    if (!this.length) {
      return;
    }
    let firstElem = this[0];
    delete this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    --this.length;
    return firstElem;
  };

  this.unshift = function unshift() {
    const res = new MyArray();
    for (let i = 0; i < arguments.length; i++) {
      res.push(arguments[i]);
      res.length++;
    }
    for (let i = 0; i < this.length; i++) {
      res.push(this[i]);
      res.length++;
    }
    this.length += res.length;
    for (let i = 0; i < this.length; i++) {
      this[i] = res[i];
    }
    return this.length;
  };

  this.concat = function concat(arr) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      res.push(this[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]);
    }
    return res;
  };

  this.reverse = function reverse() {
    const copy = new MyArray();
    for (let i = 0; i < this.length; i++) {
      copy.push(this[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this[i] = copy.pop();
    }
    return this;
  };

  this.forEach = function forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };

  this.map = function map(cb) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      res.push(cb(this[i], i, this));
    }
    return res;
  };

  this.some = function some(checkFunc) {
    for (let i = 0; i < this.length; i++) {
      if (chekFunc(this[i], i, this)) {
        return true;
      }
      return false;
    }
  };

  this.every = function every(checkFunc) {
    for (let i = 0; i < this.length; i++) {
      if (!chekFunc(this[i], i, this)) {
        return false;
      }
      return true;
    }
  };

  this.filter = function filter(chekFunc) {
    const res = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (chekFunc(this[i], i, this)) {
        res.push(this[i]);
      }
    }
    return res;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}


MyArray.prototype = new MyArrayProto();
const arr = new MyArray(1, 2, 3, 6, 7);

/*MyArray.isMyArray = function (obj) {
              return obj instanceof MyArray;
            };
            */
//const arr = new MyArray();
