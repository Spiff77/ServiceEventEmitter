import { Component, OnInit } from '@angular/core';
import {Panda, PandaService} from '../panda.service';

@Component({
  selector: 'app-pandas',
  templateUrl: './pandas.component.html',
  styleUrls: ['./pandas.component.css']
})
export class PandasComponent implements OnInit {
  pandas: Panda[] = [];

  constructor(private pService: PandaService) { }

  ngOnInit(): void {
    this.fetchAllPandas();
    this.pService.message.subscribe(evt => {
      console.log('RETRIEVE MESSAGE');
      this.fetchAllPandas();
    });
  }
  private fetchAllPandas(): void {
    this.pService.getAll().subscribe( p => this.pandas = p);
  }
}
