import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharDateService } from '../sharDate/sharDate.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  errors:any = []
  coments:any
  userName:any

  constructor(
    private sharDateService: SharDateService
    ) { }
      
  ngOnInit(): void {
    this.change()
  }

  reload() {
    this.change()
  }
  
  change() {
    const comentsObsevable = this.sharDateService.getComent()
    comentsObsevable.subscribe(
      (date) => {
        this.coments = date
      },
      (err) => {},
      () => {}
    )
  }


  coment(comentForm: any) {
    
      this.sharDateService.addComent(comentForm.value.userComent).subscribe(
        
          (result) => {
              this.change()
              
          },
          (err: HttpErrorResponse) => {
              this.errors = err.error.errors
          }
      )
  }

}
