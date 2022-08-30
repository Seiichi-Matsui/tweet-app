import { Component, OnInit } from '@angular/core';
import { SharDateService } from '../sharDate/sharDate.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  coments: any

  constructor(private sharDateService: SharDateService) { }

  ngOnInit(): void {
    const comentsObsevable = this.sharDateService.getComent()
    comentsObsevable.subscribe(
      (date) => {
        this.coments = date
        console.log(date);
        
      },
      (err) => {},
      () => {}
    )
  }

}
