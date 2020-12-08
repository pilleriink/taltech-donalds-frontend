import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../user.service';
import {MessageService} from '../../message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  checkoutForm;

  constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private messageService: MessageService,
      private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(userPassword) {
    console.log(userPassword);
    this.userService.register(userPassword)
        .pipe(first())
        .subscribe(
            () => {
              this.messageService.add('Registration successful');
              this.router.navigate(['/login']);
            },
            error => {
              this.messageService.add('Registration unsuccessful');
              console.log(error);
            });
  }
}

