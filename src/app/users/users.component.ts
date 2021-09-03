import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


users:any
count:number=7
page:number=1

columns=["id","login","node_id","avatar_url","gravatar_id","url","html_url","followers_url","following_url","gists_url","starred_url","subscriptions_url","organizations_url","repos_url","events_url","received_events_url","type","site_admin"]
  constructor(private ds:DatabaseService) { 

  }

  ngOnInit(): void {
    
    this.ds.getUsers()
    .subscribe(data=>{
      
      console.log(data);
      this.users=data
     
 
     
    
      
    })
  }

  
  sortBy(field:string) {
  
  console.log(field)

    this.users.sort((a:any, b:any) => a[field] == b[field] ? 0: a[field] > b[field]? 1:-1);
  
  
  }

  

   


  }
 


