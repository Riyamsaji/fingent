import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
heading="Welcome to the Application! "
image="assets/images/image1.jpg"
registerform=this.fb.group({
  firstname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],email:['',[Validators.required,Validators.pattern('[a-z0-9@.]*')]],phone:['',[Validators.required]]})
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
submit(){
  if(this.registerform.valid){
    alert("Successfully Validated")
    this.router.navigateByUrl('users')
    
  }
  else{
    alert("Operation Denied")
  }
}
}
