import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() { 
    console.log('contructor ran...');
  }


  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.age = 50;
    this.address = {
      street: '123 Main Street',
      city: 'Chicago',
      state: 'IL'
    }
    this.hobbies = ['write code', 'watch movies', 'listen to music'];
  }
}


interface Address {
  street: string,
  city: string,
  state: string
}