var formList = {
  container: document.querySelector("#form-list-container"), // query dom for #form-list-container
  getValuesArray: function(){
    // write a function which returns input values as an array
    return Array.prototype.slice
      .call(formList.container.querySelectorAll("input"))
      .map(function(input){
        return input.value;
      })
      .filter(function(value){
        return value;
      });
  },
  sortByAlpha: function(array){
    // return a sorted copy of the array
    return array.concat().sort();
  },
  generateUl: function(array){
    // write a function which returns a ul html element containing li's for
    // each array element
    var ulNode = document.createElement("ul");
    var liNode;
    var textNode;
    array.forEach(function(elem){
      if(typeof elem === "string" || typeof elem === "integer");
      liNode = document.createElement("li");
      textNode = document.createTextNode(elem);
      liNode.appendChild(textNode);
      ulNode.appendChild(liNode);
    });
    return ulNode;
  },
  removeUl: function(){
    // write a function which removes the ul from the page
    var ul = formList.container.querySelector("ul");
    if(ul){
      formList.container.removeChild(ul);
    }
  },
  checkElements: function(){
    if(!formList.container){
      return console.error("No form container found");
    }
    formList.saveButton = formList.container.querySelector(".save-button");
    if(!formList.saveButton){
      return console.error("No save button element found");
    }
    formList.sortButton = formList.container.querySelector(".sort-button");
    if(!formList.sortButton){
      return console.error("No sort button element found");
    }
    return true;
  },
  init: function(){
    formList.checkElements();
    // add a click listener to the save button, which adds the input values
    // as a ul on the page
    formList.saveButton.addEventListener("click", function(){
      formList.removeUl();
      var inputArray = formList.getValuesArray();
      var ul = formList.generateUl(inputArray);
      formList.container.appendChild(ul);
    });
    // sort & save
    formList.sortButton.addEventListener("click", function(){
      formList.removeUl();
      var inputArray = formList.getValuesArray();
      var sorted = formList.sortByAlpha(inputArray);
      var ul = formList.generateUl(sorted);
      formList.container.appendChild(ul);
    });
  },
}
formList.init();
