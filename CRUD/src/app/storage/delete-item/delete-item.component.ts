import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  itemId: string = '';

  constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.itemId = data.id;
    });

    if(this.itemId !== '') {
      this.storageService.deleteItem(this.itemId).subscribe(data => {
        this._snackBar.open("Account successfully deleted");
      }, err => {
        this._snackBar.open("Unable to delete account");
      })
    }
  }

}
