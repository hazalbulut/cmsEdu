import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-new-contact-dialog',
    templateUrl: './new-contact-dialog.component.html',
    styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
    public avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
    public name = new FormControl('', [Validators.required]);
    public user: User;
    constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>, private userService: UserService) { }

    public ngOnInit() {
        this.user = new User();
    }

    getErrorMessage() {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    }
    public save() {
        this.userService.addUser(this.user).then(user => {
            this.dialogRef.close(user);
        });
        this.dialogRef.close(this.user);


    }
    public dismiss() {
        this.dialogRef.close();

    }
}
