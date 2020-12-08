import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../authentication.service';
import {MessageService} from '../../message.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private messageService: MessageService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(userPassword) {
    console.log(userPassword);

    this.authenticationService.login(userPassword)
        .pipe(first())
        .subscribe(
            (user) => {
              this.messageService.add('Login successful');
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.messageService.add('Login unsuccessful');
              console.log(error);
            });
  }

}

