import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export default class AppService{
    constructor(private http:Http){
        console.log(http)
    }

    delete(){
        console.log('delete')
    }

    get(){
        console.log('get')
    }

    post(){
        console.log('post')
    }

    put(){
        console.log('put')
    }
}