import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-container',
  templateUrl: './comp-container.component.html',
  styleUrls: ['./comp-container.component.css']
})
export class CompContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSomething(event){
    console.warn(event.value.name)
  }
}