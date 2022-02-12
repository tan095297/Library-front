import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getBook() {
    throw new Error('Method not implemented.');
  }
  //http://
  private url = `${environment.serviceUrl}/product`
  constructor(private http : HttpClient) { }

  //Get all Product
  getProduct(): any{
    return this.http.get<any>(this.url);
  }

  //Get By Id
  getProductById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }


  // add Product
  addProduct(product: any){
    return this.http.post<any>(this.url, product)
      .pipe(map((res)=>{
        return res;
      }));
  }

  

  //Update  Product
  updateProduct(product: any ,id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl, product)
      .pipe(map((res)=>{
        return res;
      }));
  }

  //Delete
  deleteProduct(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl) ;
  }


  reviewProduct(idReview :  any ,review: any){
    let getUrl = `${this.url}/${idReview}`;
    return this.http.patch<any>(getUrl, review)
      .pipe(map((res)=>{
        return res;
      }));
  }
}
