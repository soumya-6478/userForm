import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('userForm') signupForm!: NgForm;
  // @ViewChild('data') status!: string;
  userModel: User[] = [];
  title = 'userForm';
  status = '';

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.status = form.value.email === 'abc@gmail.com' ? 'success' : 'failure';
    // console.log(status);
    this.userModel.push({ ...form.value, status: this.status }); // try retrieving the email field to a variable and then push the email and status only
    // this.userModel.push(form.value,  this.status );
    // console.log(this.userModel);
    form.reset();
  }
}
