import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    // Grabs all the fields and their values
    alert('Form Submitted!');
  }

}
