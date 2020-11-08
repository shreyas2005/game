class Form{
    constructor(){
        this.input=createElement('h2');
        this.button=createButton('Play');
                this.input=createInput('NAME');

    }
    display(){
        this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+100);
        data=this.input.value();
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            gameState=1;
           
            console.log(gameState);
        })
    }
    // hide(){
    //     this.input.hide();
    //     this.button.hide();
    // }
    unhide(){
        this.input=createElement('h2');
        this.button=createButton('Play');
                this.input=createInput('NAME');
                  this.input.position(displayWidth/2,displayHeight/2);
        this.button.position(displayWidth/2,displayHeight/2+100);
        data=this.input.value();
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            gameState=1;
           
            console.log(gameState);
        })

    }
} 