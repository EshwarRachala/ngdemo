import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { ItemsService } from '../../services/items.service';
import { AppStore } from '../../models/appstore.model';
import { Item } from '../../models/item.model';
import { ItemsList } from '../items-list/items-list.component';
import { ItemDetail } from '../item-detail/item-detail.component'

@Component({
  selector: 'items',
  templateUrl: './items.componentn.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemsService]
})
export class Items {
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService,
    private store: Store<AppStore>) {
    this.items = itemsService.items;
    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));

    itemsService.loadItems();
  }

  resetItem() {
    let emptyItem: Item = { id: null, title: '', description: '' };
    this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
  }

  selectItem(item: Item) {
    this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
    this.resetItem();
  }
}
