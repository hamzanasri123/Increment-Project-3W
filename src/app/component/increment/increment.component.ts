import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  constructor() { }
  
  // Variable Initialisation 
   counter: number = 0 
  
   
  ngOnInit(): void {
    // Calling the Rest function when the Component in-mount 
    this.reset()
  }


  //function for Increment 
  increment = ()=> this.counter ++
 
  
  // function for Decrement
  
  decrement = ()=> this.counter --

  
  // Function for Reset 
  reset = ()=> this.counter = 0 
}
