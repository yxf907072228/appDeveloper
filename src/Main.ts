import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app/App'

import Page1 from './pages/Page1'
import Page1_1 from './pages/Page1_1'
import Page1_2 from './pages/Page1_2'


import Page2 from './pages/Page2'

import AppService from './services/AppService'

import Module2 from './module2/app.module2'

const routes: Routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: Page1 ,children:[
        {path: 'page1_1', component: Page1_1},
        {path: 'page1_2', component: Page1_2}
    ]},
    { path: 'page2', component: Page2 }
]
@NgModule({
    bootstrap: [
        App
    ],
    declarations: [
        App,
        Page1,
        Page1_1,
        Page1_2,
        Page2
    ],
    imports: [
        HttpModule,
        BrowserModule,
        RouterModule.forRoot(routes),
        Module2
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AppService
    ]
})
export class MainModule {

}


platformBrowserDynamic().bootstrapModule(MainModule)