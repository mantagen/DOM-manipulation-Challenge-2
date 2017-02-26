var formList = {
  container: document.querySelector("#form-list-container"), // query dom for #form-list-container
  getValuesArray: function(){
    // write a function which returns input values as an array

  },
  sortByAlpha: function(array){
    // return a sorted copy of the array

  },
  generateUl: function(array){
    // write a function which returns a ul html element containing li's for
    // each array element

  },
  removeUl: function(){
    // write a function which removes the ul from the page

  },
  addUl: function(ul){
    // write a function which adds the
  }
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
    if(!formList.checkElements()){
      return console.error("App could not start");
    };
    // add a click listener to the save button, which adds the input values
    // as a ul on the page
    formList.saveButton.addEventListener("click", function(){
      formList.removeUl();
      var inputArray = formList.getValuesArray();
      var ul = formList.generateUl(inputArray);
      formList.container.appendChild(ul);
    });
    // add a click listener to the sort button, which sorts the input values
    // then adds them as a ul on the page
    formList.sortButton.addEventListener("click", function(){
      formList.removeUl();
      var inputArray = formList.getValuesArray();
      var sorted = formList.sortByAlpha(inputArray);
      var ul = formList.generateUl(sorted);
      formList.container.appendChild(ul);
    });
    // EXTENSION
    // Try adding another feature like a filter or another event listener
    // It's up to you!
  },
}
formList.init();
