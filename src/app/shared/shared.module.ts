import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './ngmaterial/ngmaterial.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterLink

    ],
    exports: [
        MaterialModule,
        SidebarComponent,
    ],
})
export class SharedModule { }
