import { Component, OnInit } from '@angular/core';
import {Sale} from "../../models/sale";

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public sale: Sale;

  constructor() {
    this.sale = new Sale('', '', '', '');
  }

  ngOnInit(): void {
  }

}
