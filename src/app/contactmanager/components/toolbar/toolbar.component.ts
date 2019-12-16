import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    @Output() toggleSidenav = new EventEmitter<void>();
    @Output() toggleTheme = new EventEmitter<void>();
    @Output() toggleDir = new EventEmitter<void>();
    constructor(
        private diaolog: MatDialog,
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }

    public ngOnInit() {
    }
    public openAddContactDialog() {
        const dialogRef = this.diaolog.open(NewContactDialogComponent, { width: '450px' });

        dialogRef.afterClosed().subscribe(result => {
            console.log('the dialog was closed', result);

            if (result) {
                this.openSnackBar('Contact added', 'Navigate').onAction().subscribe(() => {
                    this.router.navigate(['contactmanager', result.id]);
                });
            }
        });
    }
    public openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, action, {
            duration: 5000,
        });
    }
}

