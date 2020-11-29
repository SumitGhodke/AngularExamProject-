import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

import { ItemService } from './item.service';
import { FormsModule } from '@angular/forms';
import { ItemFormComponent } from './item/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
