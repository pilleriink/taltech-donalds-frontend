import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../authentication.service';
import {UserService} from '../../user.service';
import {User} from '../../user';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-userprofile',
    styleUrls: ['profile.component.scss'],
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    profileImage: any = '../../../assets/images/person_edit.png';

    user: User;
    passwordVisible = false;

    constructor(private authService: AuthenticationService,
                private userService: UserService) {
    }

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource: PeriodicElement[] = [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    toggleShowPassword() {
        this.passwordVisible = !this.passwordVisible;
    }

    ngOnInit() {
        const userId = this.authService.currentUserSubject.getValue().id;
        this.userService.getUserById(userId).subscribe(data => this.user = data);
    }
}
