import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
// import { ProductComponent } from './components/pages/product/product.component';
// import { NewProductComponent } from './components/pages/new-product/new-product.component';
// import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
// import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { ShowBookComponent } from './components/pages/show-book/show-book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { MemberComponent } from './components/pages/member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    LoginComponent,
    AddBookComponent,
    ShowBookComponent,
    EditBookComponent,
    BorrowComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
