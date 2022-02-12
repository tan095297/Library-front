import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private url = `${environment.serviceUrl}/borrow`
  constructor(private http : HttpClient) { }

  addBorrow(borrow: any){
    return this.http.post<any>(this.url, borrow)
      .pipe(map((res)=>{
        return res;
      }));
  }
}
