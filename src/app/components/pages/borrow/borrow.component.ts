import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BorrowService } from 'src/app/service/borrow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  borrowForm! : FormGroup;

  constructor(private service : BorrowService , private router : Router) { }

  ngOnInit(): void {
    this.borrowForm = new FormGroup({
      borrower : new FormControl(),
      book : new FormControl(),
      dateborrow : new FormControl(),
      limit : new FormControl(),
      lender : new FormControl(),
      
    })

  }

  addBorrow(){
    let borrow = {
      borrower: this.borrowForm.value.borrower,
      book : this.borrowForm.value.book,
      dateborrow : this.borrowForm.value.dateborrow,
      limit :this.borrowForm.value.limit,
      lender :this.borrowForm.value.lender,
    
      // std:this.bookForm.value.std,
      // teacher:this.bookForm.value.teacher
    };

    this.service.addBorrow(borrow).subscribe(res=>{
      console.log(res);
      if(res.msg="Add Complete"){
        window.alert("Add Complete");
        this.router.navigate(["/book"])
      }else{
        window.alert("Not Success");
        this.router.navigate(["/book/borrow"])
      }
      
    })
  }



}
