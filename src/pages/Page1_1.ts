import {Component} from '@angular/core'
import AppService from '../services/AppService'
@Component({
    selector:'page1_1',
    template:`
        <div>page1_1
        
        </div>    
    `
})
export default class Page1_1{
    constructor(appService:AppService){
        console.log(appService)
    }
}