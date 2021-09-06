import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: any;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    this.storageService.listItems().subscribe(data => {
      this.items = data
    }, err => {
      console.log(err);
    })
  }

  deleteItem() {
    console.log('deleted');
  }

}
