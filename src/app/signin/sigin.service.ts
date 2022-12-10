import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SiginService {

constructor(private http:HttpClient) { }
signinData(urlencoded: any) {
    return this.http.post(`http://localhost:3000/api/login`, urlencoded);
  }
}
