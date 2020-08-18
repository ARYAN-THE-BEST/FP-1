class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h2');
    
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("TIME TO SAVE THE WORLD");
      this.title.position(displayWidth/2 - 50, 0);
 
    }
  }
  