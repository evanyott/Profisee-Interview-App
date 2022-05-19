import { OnInit } from "@angular/core";
import {Salesperson} from "../models/salesperson";

export class SalespersonController implements OnInit {
  public salesperson = new Salesperson('chris', 'black', '123address', '678-904-3873', '1/23', 'joe');


  constructor() {
  }



  ngOnInit(): void {
  }

}
