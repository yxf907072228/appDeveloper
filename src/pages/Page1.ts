import {Component} from '@angular/core'

@Component({
    selector:'page1',
    template:`
        <div>page1<div>
        <a [routerLink]="['/page1/page1_1']" >page1_1</a>
        <a [routerLink]="['/page1/page1_2']" >page1_2</a>
        <a [routerLink]="['/page3']" >page3</a>
        
        </div>
        <router-outlet></router-outlet></div>    
    `
})
export default class Page1{

}