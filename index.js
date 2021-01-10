"use strict";
function MyArrayProto() {

  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = argument[i];
      return this.length;
    }
  },

    this.pop = function pop() {
      if (this.length < 0) {
        return;
      }
      const lastItem = this[this.length - 1];
      delete this[this.length - 1];
      return lastItem;
    },

    this.shift = function shift() {
      if (!this.length) {
        return;
      }
      firstElelement = this[0];
      delete this[0];
      this.length -= 1;
      return firstElelement;
    },

    this.unshift = function unshift() {
      const temp = [];
      for (let i = 0; i < arguments.length; i++) {
        temp[i] = arguments[i];
      }
      for (let i = 0; i < this.length; i++) {
        temp[arguments.length + i] = this[i];
      }
      for (let i = 0; i < temp.length; i++) {
        this[i] = temp[i];
      }
      return this.length;
    },

    this.concat = function concat(arr1,arr2) {
      const temp = [];
      for (let i = 0; i < arr1.length; i++) {
        temp[i] = arr1[i];
      }
      for (let i = 0; i < arr2.length; i++) {
        temp[arr1.length + i] = arr2[i];
      }
      for (let i = 0; i < temp.length; i++) {
        this[i] = temp[i];
      }
      return this.length;
    },

    this.reverse = function reverse() {
      const temp = [];
      for (let i = 0; i < this.length; i++) {
        temp[this.length - 1 - i] = this[i];
      }
      for (let i = 0; i < this.length; i++) {
        this[i] = temp[i];
      }
      return this;
      }
   
}

const myArray=[1,2,3,4,5,6,7]; 
myArray.prototype=MyArrayProto;
