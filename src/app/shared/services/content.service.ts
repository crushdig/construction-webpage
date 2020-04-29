import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public pageObjects = {
    home : {title: 'Home', subtitle: 'Welcome Home!', content: 'Insert home content', image: 'assets/downtown-city-skyline.jpg'},
    about: {title: 'About', subtitle: 'About Us', content: 'Insert content here'},
    contact: {title: 'Contact', subtitle: 'Contact Us', content: 'Insert content here'},
  };

  constructor() { }
}
