import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();  //to sent info to child to parent
  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {
    // console.log('SearchBarComp')
    // console.log(event);
    event.preventDefault();              //prevent default submission by browser when press the enter. we have own submitting method
    this.submitted.emit(this.term);     //to sent info to child to parent
  }

}
