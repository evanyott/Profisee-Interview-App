import { Component, OnInit } from '@angular/core';
import {Salesperson} from "../../models/salesperson";

@Component({
  selector: 'app-salespersons',
  templateUrl: './salespersons.component.html',
  styleUrls: ['./salespersons.component.css']
})
export class SalespersonsComponent implements OnInit {

  public sp: Salesperson;

  constructor() {
  this.sp = new Salesperson('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

}
