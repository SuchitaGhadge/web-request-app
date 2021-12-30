import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-request-app';
  user:any;

  constructor( private toastr: ToastrService, private userService: UserService){}

  ngOnInit(){
    this.userService.getUser().subscribe(
      (user:any) => {
        console.log("user...", user.results[0].name)
        this.user = user.results[0]
      },
      (err) => {
        this.toastr.error(err.status, "Error occured")
      }
    )
  }
}
