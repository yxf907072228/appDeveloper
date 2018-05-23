import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import Page3  from './Page3'

const routes: Routes = [
    
    { path: 'page3', component: Page3 }
]

@NgModule({
    declarations: [
        Page3
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [],
    providers: [

    ]
})
export default class Module2{

}