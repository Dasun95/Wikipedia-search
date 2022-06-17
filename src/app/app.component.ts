import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wikipedia: WikipediaService){}

  onTerm(term: any) {
    this.wikipedia.search(term).subscribe(response => {
      console.log(response);
    });
  }
}
