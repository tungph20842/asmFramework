import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NewProductPageComponent } from './admin/new-product-page/new-product-page.component';
import { ProductListPageComponent } from './admin/product-list-page/product-list-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UpdateProductPageComponent } from './admin/update-product-page/update-product-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UpdateProductPageComponent,
    LayoutAdminComponent,
    NewProductPageComponent,
    PageNotFoundComponent,
    ProductListPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
