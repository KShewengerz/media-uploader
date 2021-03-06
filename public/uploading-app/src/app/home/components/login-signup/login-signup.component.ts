import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormComponent } from '@app/shared/components/form/form.component';

import { Credentials } from '@app/shared/interfaces/credentials.interface';

import { tabs, Tab } from '@app/home/components/login-signup/login-signup.data';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  
  @ViewChild(FormComponent) formComponent: FormComponent;
  
  tabs: Tab[] = tabs;
  
  constructor(private router: Router) { }

  ngOnInit() {}
  
  selectTab(index: number): void {
    this.formComponent.form.reset();
  }
  
  onSubmittedForm(credentials: Credentials): void {
    console.log('login-signup', credentials);
    
    this.router.navigate(['upload']);
  }

}
