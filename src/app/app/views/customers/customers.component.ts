import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customer: Customer;

  constructor() {
    this.customer = new Customer('', '', '', '','');
  }

  ngOnInit(): void {
  }

}
