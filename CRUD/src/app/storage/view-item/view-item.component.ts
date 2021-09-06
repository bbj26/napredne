import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  itemId: string = "";
  itemData: any;
  constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.itemId = data.id;
    });

    this.storageService.viewItem(this.itemId).subscribe(data => {
      this.itemData = data;
    }, err => {
      console.log(err)
    })
    
  }

  

}
