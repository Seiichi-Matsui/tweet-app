import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    test : Date = new Date();
    focus: any;
    focus1: any;
    constructor() { }

    ngOnInit() {}
}
