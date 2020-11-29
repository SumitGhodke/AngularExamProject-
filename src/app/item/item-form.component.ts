import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  constructor(private iservice: ItemService) { }
  itemName: number
  quantity: number
  price: number
  description: string


  addItem() {
    let item = new Item(this.itemName, this.quantity, this.price, this.description)
    this.iservice.addItem(item)
    

  }

}
