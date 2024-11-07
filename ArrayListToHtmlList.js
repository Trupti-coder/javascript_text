/*const arrayToHtmlList = (arr, listID) => {
    const listElement = document.querySelector(`#${listID}`);
    listElement.innerHTML = ''; // Clear any existing content
  
    for (let i = 0; i < arr.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = arr[i];
      listElement.appendChild(listItem);
    }
  };
  
  // Example usage:
  arrayToHtmlList(['Item 1', 'Item 2', 'Item 3'], 'myListID');*/

  




  function arraytolist(arr,List1){
    const listElement=document.querySelector(`#${List1}`);
     listElement.innerHTML='';
    for(i=0;i<arr.length;i++){
        const listItem=document.createElement("li");
        listItem.textContent=arr[i];
        listElement.appendChild(listItem);
    }
    return List1;

  }
  arraytolist(["hii","byy","hii"]);