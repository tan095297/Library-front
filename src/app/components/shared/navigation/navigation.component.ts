import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: any ;
  isLoggedIn = false ;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    // !! ถ้าไม่ไช่ค่า null จะ false
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
        this.currentUser = this.tokenStorage.getUser();
        console.log(this.currentUser);
    }
  }

  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
