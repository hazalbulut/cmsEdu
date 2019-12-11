// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';
// import { ContactmanagerAppComponent } from './contactmanager-app.component';
// import { ToolbarComponent } from './componenets/toolbar/toolbar.component';
// import { MainContentComponent } from './componenets/main-content/main-content.component';
// import { SidenavComponent } from './componenets/sidenav/sidenav.component';
// import { MaterialModule } from '../shared/material.module';
// import { FormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';


// const routes: Routes = [
//   {
//     path: '', component: ContactmanagerAppComponent,
//     children: [
//       { path: '', component: MainContentComponent }
//     ]
//   },
//   { path: '**', redirectTo: '' }
// ];

// @NgModule({
//   declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent],
//   imports: [
//     CommonModule,
//     MaterialModule,
//     FlexLayoutModule,
//     FormsModule,
//     RouterModule.forChild(routes)
//   ]
// })
// export class ContactmanagerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './componenets/toolbar/toolbar.component';
import { MainContentComponent } from './componenets/main-content/main-content.component';
import { SidenavComponent } from './componenets/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '', component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent
  ],
  entryComponents: [
  ]
})
export class ContactmanagerModule { }


