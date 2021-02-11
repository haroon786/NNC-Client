import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import  {Router} from '@angular/router';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fadraftingcompass = faDraftingCompass;
  submitted = false;
  constructor(private fb: FormBuilder,private route:Router,private accountService:AccountService) {}

  loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required],
  });

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {


    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.accountService.login(this.loginForm.value).subscribe(response=>
      {
        console.log(response);
        this.loginForm.reset();
      },error=>{
        console.log(error)
      }
      )
  }
}
