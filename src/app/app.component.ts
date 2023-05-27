import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;
  student = { name: '', phone: '', email: '' };

  ngOnInit() {
    this.user = {
      name: '',
      email: '',
      address: {
        location: '',
        country: ''
      }
    };
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
