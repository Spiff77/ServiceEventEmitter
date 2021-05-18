import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panda',
  templateUrl: './panda.component.html',
  styleUrls: ['./panda.component.css']
})
export class PandaComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('p') panda;

  constructor() { }

  ngOnInit(): void {
  }

}
