import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { TimerModule } from './timer-app-component/timer-app-component.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-list/product-view/product-view.component';
import { StartComponentComponent } from './start-component/start-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductViewComponent,
    StartComponentComponent
  ],
  imports: [
    BrowserModule,
    TimerModule,
    RouterModule.forRoot([
      { path: '', component: StartComponentComponent },
      { path: 'timer', loadChildren: ()=> import('./timer-app-component/timer-app-component.module').then(m => m.TimerModule)},
      { path: 'plp', component: ProductListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
