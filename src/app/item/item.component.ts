import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  constructor(private iservice: ItemService) { }
  arr: Item[]
  ngOnInit() {
    this.arr=this.iservice.getAllItem()
      
  }
  flag=false
  displayForm(){
    this.flag=true
  }

}
