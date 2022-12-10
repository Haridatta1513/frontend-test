import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http:HttpClient) { }
  UserData(id:any) {
    return this.http.get(`http://localhost:3000/api/profile/${id}`, id);
  }
}
