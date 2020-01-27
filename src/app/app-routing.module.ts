import { PaymentBlockComponent } from './pages/payment-block/payment-block.component';
import { OmComponent } from './pages/om/om.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'om', component: OmComponent },
  { path: 'payment', component: PaymentBlockComponent },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
