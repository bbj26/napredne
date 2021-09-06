import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItemForm: FormGroup = new FormGroup({});

  constructor(private storageService: StorageService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'imageUrl': new FormControl('', [Validators.required]),
      'quantity': new FormControl('', [Validators.required]),
    })
  }

  addItem() {
    this.storageService.addItem(this.addItemForm.value).subscribe(data => {
      this._snackBar.open("Succesfully added new item");
    }, err => {
      this._snackBar.open("Something went wrong. Unable to add new item");
      console.log(err);
    })
  }

}
