import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { MainComponent } from './components/pages/main/main.component';
// import { NewProductComponent } from './components/pages/new-product/new-product.component';
// import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
// import { ProductComponent } from './components/pages/product/product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { AddBookComponent } from './components/pages/add-book/add-book.component';
import { ShowBookComponent } from './components/pages/show-book/show-book.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { MemberComponent } from './components/pages/member/member.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    // { path: "product",  component: ProductComponent ,canActivate : [AuthGuard] },
    // { path: "product/detail/:id", component: ProductDetailComponent ,canActivate : [AuthGuard]},
    // { path: "product/new", component: NewProductComponent ,canActivate : [AuthGuard]},
    // { path: "product/edit/:id", component: EditProductComponent ,canActivate : [AuthGuard]},
    { path: "login", component: LoginComponent },
    { path: "book/new", component: AddBookComponent ,canActivate : [AuthGuard]},
    { path: "book", component:  ShowBookComponent,canActivate : [AuthGuard]},
    { path: "book/edit/:id", component: EditBookComponent ,canActivate : [AuthGuard]},
    { path: "book/borrow", component: BorrowComponent ,canActivate : [AuthGuard]},
    { path: "member", component: MemberComponent ,canActivate : [AuthGuard]},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
