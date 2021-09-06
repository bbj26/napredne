import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private baseUrl = 'http://localhost:3000/api/items/';

  constructor(private http: HttpClient) { }
  
  listItems() {
    return this.http.get(this.baseUrl);
  }

  viewItem(itemId: string) {
    return this.http.get(this.baseUrl + itemId);
  }

  addItem(itemObj: any) {
    return this.http.post(this.baseUrl + 'add', itemObj);
  }

  updateItem(itemId: string, itemObj: any) {
    return this.http.put(this.baseUrl + itemId, itemObj);
  }

  deleteItem(itemId: string) {
    return this.http.delete(this.baseUrl + itemId);
  }
}
