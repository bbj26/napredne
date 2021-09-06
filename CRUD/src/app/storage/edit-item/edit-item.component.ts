import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  itemId: string = '';
  itemDetails: any;
  editItemForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private storageService: StorageService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.itemId = data.id
    })

    if (this.itemId !== '') {
      //View item details
      this.storageService.viewItem(this.itemId)
        .toPromise()
        .then(data => {
          this.itemDetails = data;

          //Build edit form
          this.editItemForm = this.formBuilder.group({
            'name': new FormControl(this.itemDetails.name, [Validators.required, Validators.minLength(3)]),
            'description': new FormControl(this.itemDetails.description, [Validators.required, Validators.minLength(10)]),
            'imageUrl': new FormControl(this.itemDetails.imageUrl, [Validators.required]),
            'quantity': new FormControl(this.itemDetails.quantity, [Validators.required]),
          })
          this.dataLoaded = true;
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  updateItem() {
    this.storageService.updateItem(this.itemId, this.editItemForm.value).subscribe(data => {
      this._snackBar.open("Item updated successfully");
    }, err => {
      this._snackBar.open("Something went wrong. Failed to update item");
    })
  }

}
