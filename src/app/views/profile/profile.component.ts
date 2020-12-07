import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {UserService} from '../../user.service';
import {User} from '../../user';

@Component({
    selector: 'app-friends-userprofile',
    styleUrls: ['profile.component.scss'],
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

    profileImage: any = '../../../assets/images/person_edit.png';

    user: User;
    constructor(private authService: AuthenticationService,
                private userService: UserService) {
    }

    ngOnInit() {
        const userId = this.authService.currentUserSubject.getValue().id;
        this.userService.getUserById(userId).subscribe( data => this.user = data);
    }
}
