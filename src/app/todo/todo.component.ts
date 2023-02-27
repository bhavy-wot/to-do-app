import { Component, OnInit, ElementRef, Input} from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  random_color:any = '';
  popup: boolean = false;
  inputValue: any;
  workspace:any;
  generatedColor:any;
  workspaceId : any = 1;


  constructor() { }

  ngOnInit() { }

  //Function to generate random color code 
  randomColor = () =>  {
    this.random_color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    // console.log(this.random_color);
  }

  //Function to create new list from popup
  createNewList(){
    this.inputValue = (<HTMLInputElement>document.getElementById("workspaceName")).value;
    this.workspace =  (<HTMLInputElement>document.getElementById("workspaceTitle"))
      
    if (this.inputValue != ""){
      console.log(this.inputValue)
      this.popup = false;  
      this.generatedColor = this.randomColor();
      // console.log(this.random_color)
     this.workspace.innerHTML += (`<div id="workspace_${this.workspaceId}" class="newWorkspace" style="background-color: ${this.random_color}; height: 150px; width: 150px; border-radius: 10px; padding-top:60px; text-align:center">${this.inputValue}</div>`);
      this.workspaceId++;
    }
    else{
      // console.log("Empty input")
      this.popup = true;
    }
    
  }
  

}

