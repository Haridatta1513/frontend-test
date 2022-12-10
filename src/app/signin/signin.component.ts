import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AbstractControl,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { SiginService } from './sigin.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signinData:FormGroup;
id:any;
  constructor(private build: FormBuilder,private router:Router,private service:SiginService) {
    {
    this.signinData = this.build.group({
        mobile: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
   }
signinsubmit(){
  this.signinData.value;
  this.service.signinData(this.signinData.value).subscribe((res:any)=>{
    console.log("hello Response",res);
    this.id=res._id;
    localStorage.setItem('UserId',this.id);
      console.log("hello Response",this.id);
      if(this.id != null && this.id != 'undefined'){
        this.router.navigateByUrl('/profile');
      }
      else{
        this.router.navigateByUrl('/signin');
      }
    
  });
}
  ngOnInit(): void {
  }

}
