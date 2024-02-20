import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
@ViewChild('form') formElement!: NgForm;
success = false;
warning = false;
user = {email: '', level: '', password: ''};

onSubmit() {
console.log(this.formElement);
this.messageControl();
this.addElementUser();
this.formElement.reset();
}

addElementUser(){
  this.user.email = this.formElement.value.email;
  this.user.level = this.formElement.value.level;
  this.user.password = this.formElement.value.password;
}

messageControl(){
  if(this.formElement.valid){
    this.success = true
    this.warning = false
  }else  {
    this.warning = true
    this.success = false
  }
}

}