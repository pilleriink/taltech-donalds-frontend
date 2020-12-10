import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {UserService} from '../../user.service';
import {User} from '../../user';
import {OrderService} from '../../order.service';

@Component({
    selector: 'app-userprofile',
    styleUrls: ['profile.component.scss'],
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    profileImage: any = '../../../assets/images/person_edit.png';

    user: User;
    passwordVisible = false;
    dataSource;
    displayedColumns: string[] = ['position', 'price', 'orderProducts', 'location'];

    constructor(private authService: AuthenticationService,
                private userService: UserService,
                public orderService: OrderService) {
    }

    toggleShowPassword() {
        this.passwordVisible = !this.passwordVisible;
    }

    ngOnInit() {
        const userId = this.authService.currentUserSubject.getValue().id;
        this.userService.getUserById(userId).subscribe(data => this.user = data);
        this.orderService.getOrderByUser(userId).subscribe(data => this.dataSource = data);
    }
}
