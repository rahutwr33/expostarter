import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ConfirmComponent } from './confirm.component';
import { DialogService } from "ng2-bootstrap-modal";
import { Router } from '@angular/router';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DialogService]
})

export class DashboardComponent implements OnInit  {
  userList;
  confirmResult:boolean = null;
  message;
  messageClass;
  constructor(
    private blog:BlogService,
    private dialogService:DialogService,
    private router: Router
  ) { }

   ngOnInit() {
     this.getAlluser();
   
 
  }

  getAlluser(){
    this.blog.getAlluser().subscribe(users => {
      this.userList = users.data; 
      
      });
  }


  deleteuser(id){
    this.blog.deleteSingleuser(id).subscribe(response=>{
      if(!response.success){
       this.messageClass = 'alert alert-danger'; // Set bootstrap error class
       this.message = response.message; // Set error message
     }else{
       this.getAlluser();
       }  
   })
  //  this.dialogService.addDialog(ConfirmComponent, {
  //     title:'Confirmation',
  //     message:'Are you want to delete this user?'})
  //     .subscribe((isConfirmed)=>{
  //       this.confirmResult = isConfirmed;
  //       if(this.confirmResult==true){
          
  //       }
  //   }); 
  }
  
}

