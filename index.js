function addingEventListener() {
    const button = document.querySelector('#button');
  
    button.addEventListener('click', function() {
      console.log('Button clicked');
    });
  
    return true;
  }
  
  addingEventListener();