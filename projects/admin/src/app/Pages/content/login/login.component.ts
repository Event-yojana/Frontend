import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidators } from 'ngx-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public router: Router;
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  
  constructor(router:Router, fb:FormBuilder) { 
    this.router = router;
      this.form = fb.group({
          'email': ['', Validators.compose([Validators.required, EmailValidators.normal])],
          'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });

      this.email = this.form.controls['email'];
      this.password = this.form.controls['password'];
  }

  ngOnInit(): void {
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}
