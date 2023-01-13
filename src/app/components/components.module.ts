import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GButtonComponent } from './g-button/g-button.component';
import { GContainerComponent } from './g-container/g-container.component';
import { GFilterComponent } from './g-filter/g-filter.component';
import { GInputComponent } from './g-input/g-input.component';
import { GTableComponent } from './g-table/g-table.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    GButtonComponent,
    GContainerComponent,
    GFilterComponent,
    GInputComponent,
    GTableComponent,
    NavigationBarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ], exports: [
    GButtonComponent,
    GContainerComponent,
    GFilterComponent,
    GInputComponent,
    GTableComponent,
    NavigationBarComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class ComponentsModule { }
