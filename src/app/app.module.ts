import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/product-list/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/contact/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/contact/dialog/dialog.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartitemComponent } from './components/cart/cartitem/cartitem.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ConfirmationDialogComponent } from './components/cart/confirmation-dialog/confirmation-dialog.component';
import { FinalizeDialogComponent } from './components/cart/finalize-dialog/finalize-dialog.component';
import { SuccessDialogComponent } from './components/cart/success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    CardComponent,
    HomeComponent,
    FormComponent,
    DialogComponent,
    ProductListComponent,
    CartComponent,
    CartitemComponent,
    ProductDetailsComponent,
    ConfirmationDialogComponent,
    FinalizeDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
