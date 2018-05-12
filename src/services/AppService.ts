import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export default class AppService{
    constructor(http:Http){
        debugger
        console.log(http)
    }


}