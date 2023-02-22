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


  constructor() { }

  ngOnInit() { }

  //Function to generate random color code 
  randomColor = () =>  {
    this.random_color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    console.log(this.random_color);

  }

  //Function to create new list from popup
  createNewList(){
    this.inputValue = (<HTMLInputElement>document.getElementById("workspaceName")).value;
      
    if (this.inputValue != ""){
      console.log(this.inputValue)
      this.popup = false;  
      this.randomColor();
    }
    else{
      // console.log("Empty input")
      this.popup = true;
    }
    
  }
  

}

