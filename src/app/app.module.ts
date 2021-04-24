import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminModule } from './layouts/admin/admin.module';
import { HomeModule } from './layouts/home/home.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductcategoryComponent } from './components/product/productcategory/productcategory.component';
import { CommentproductComponent } from './components/product/commentproduct/commentproduct.component';
import { PublicityComponent } from './components/publicity/publicity/publicity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductComponent,
    ProductcategoryComponent,
    CommentproductComponent,
    PublicityComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
