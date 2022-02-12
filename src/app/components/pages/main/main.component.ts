import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/service/staff.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books:any;
  constructor(private service : StaffService , private router : Router) { }

  ngOnInit(): void {
    this.service.getBook().subscribe((res)=>{
      this.books=res.data;
    });
  }

}
