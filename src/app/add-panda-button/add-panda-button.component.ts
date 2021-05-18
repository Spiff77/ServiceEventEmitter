import { Component, OnInit } from '@angular/core';
import {PandaService} from '../panda.service';

@Component({
  selector: 'app-add-panda-button',
  templateUrl: './add-panda-button.component.html',
  styleUrls: ['./add-panda-button.component.css']
})
export class AddPandaButtonComponent implements OnInit {

  constructor(private pandaService: PandaService) { }

  ngOnInit(): void {
  }

  addPanda(): void {
    this.pandaService.addPanda({id: 4, name: 'Eude', speciality: 'Coffee maker'});
  }
}
