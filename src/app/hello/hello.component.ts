import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>Hello, {{ target | lowercase1 }}!</p>`,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  target: string;
  constructor() { 
  	this.target = "Andrew";
  }

  ngOnInit() {
  }

}
