import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user_id:any;
ProfileData:any;
  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.user_id=localStorage.getItem('UserId');
    console.log("this is userid data",this.user_id);
    this.service.UserData(this.user_id).subscribe((res:any)=>{
      this.ProfileData=res;
      console.log(this.ProfileData);
      
    });
    
  }

}
