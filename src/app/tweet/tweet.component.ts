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
  name = localStorage.getItem('username')

  constructor(
    private sharDateService: SharDateService,

    ) { }
      
  ngOnInit(): void {
    this.change()
    const _this = this
    function reload() {
      _this.change()
    }
    setInterval(reload, 2000);
  }

  reload() {
    this.change()
  }

  change() {
    const comentsObsevable = this.sharDateService.getComent()
    comentsObsevable.subscribe(
      (date) => {
        this.coments = date.reverse().slice()
        
        
      },
      (err) => {},
      () => {}
    )
  }

  comentDelate($event: any) {
    return this.sharDateService.comentDelate($event).subscribe(
        (result) => {
        },
        (err: HttpErrorResponse) => {
            this.errors = err.error.errors
        }
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

  clearButton() {
    const form: HTMLInputElement =<HTMLInputElement>document.getElementById('inputSuccess1')
    form.value = ''
  }
}
