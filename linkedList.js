/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tails = null;
  var list = null;

  var module = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }

  return module;

  function getHead(){
    if (head === null){
      return null;
    }
    return head;
  }

  function getTail(){
    if (tails === null) {
      return null;
    }
    return tails;
  }

  function add(value){
    var newNode = {
      value: value,
      next: null,
    }

    //handling an empty list
    if (head === null) {
      head = newNode;
      tails = newNode;
    }else {
      tails.next = newNode;
      tails = newNode;
    }

    return newNode;

  }

  function remove(x) {
    var previousNode = get(x-1);
    var currentNode = get(x);
    var nextNode = get(x+1);

    previousNode.next = nextNode;

    if (currentNode.next === null){
      tails = previousNode;
    }

    if (previousNode === false) {
      head = nextNode;
    }

    if (currentNode === false) {
      return false;
    }
  }

  function get(x){
    var currentNode = head;
    if (x < 0){
      return false;
    }
    for (var i = 0; i <= x; i++){
      if (currentNode === null || currentNode === undefined) {
        return false;
      }
      if (i === x) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  function insert(value, x){
    var newNode = {
      value: value,
      next: null,
    };
    var nextNode = get(x);
    var previousNode = get(x-1);

    if (x < 0){
      return false;
    }

    if (previousNode === false){
      head = newNode;
    }

    if (nextNode === false) {
      return false;
    }
    previousNode.next = newNode;
    newNode.next = nextNode;
  }
}
