import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable()
export class ItemService {
     addItem(item: Item) {
       this.itemList.push(item)
     }
     getAllItem():Item[] {
       return this.itemList
     }

  
     itemList=[
      new Item(11,42,4592,'Piston'),
      new Item(12,4,4572,'Shaft'),
      new Item(13,2,4526,'washing machine'),
      new Item(14,7,4522,'bell'),
      new Item(15,8,4152,'pen'),
       new Item(10,100,100,'Mirror')
  ]
  
}
