import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})


export class NotesComponent implements OnInit {
    @Input() notes: Note[];

    public displayedColumns: string[] = ['id', 'title', 'date'];
    public dataSource: MatTableDataSource<Note>;
    constructor() { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    public applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    public ngOnInit() {
        this.dataSource = new MatTableDataSource<Note>(this.notes);
    }

}
