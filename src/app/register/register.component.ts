import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';

import { ServiceService } from './service.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData:FormGroup
  constructor(private build: FormBuilder,private service:ServiceService,private router:Router) { 

       {
      this.registerData = this.build.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        password: ['', Validators.required],
        address: ['', Validators.required]
      });
    }
  }
 
    registersubmit(){
    this.service.registerData(this.registerData.value).subscribe((res:any)=>{
      console.log(res.message);
        if(res.message == "success"){
          this.router.navigateByUrl('/signin');
    }
    else{
       this.router.navigateByUrl('/');
    }
    });
  
      console.log("register data------------>",  this.registerData.value);
      

    }
  ngOnInit(): void {
  }

}
