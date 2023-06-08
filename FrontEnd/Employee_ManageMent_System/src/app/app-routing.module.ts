import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './auth/component/default/default.component';
import { EditComponent } from './auth/component/edit/edit.component';
import { FormComponent } from './auth/component/form/form.component';
import { HomeComponent } from './auth/component/home/home.component';
import { LoginComponent } from './auth/component/login/login.component';
import { SampleComponent } from './auth/component/sample/sample.component';
import { TemplateComponent } from './auth/component/template/template.component';
import { UserComponent } from './auth/component/user/user.component';
import { ViewComponent } from './auth/component/view/view.component';


const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: '/login' },
  {path: 'user', component:UserComponent },
  
  {path: 'login', component:LoginComponent },
  {
    path: 'home', // child route path
    component: HomeComponent, // child route component that the router renders
  },
  {
    path: 'default',
    component: DefaultComponent,
  
  children: [
    {
      path: 'home', // child route path
      component: HomeComponent, // child route component that the router renders
    },
    {
      path: 'form',
      component: FormComponent,
    },
    {
      path: 'view', // child route path
      component: ViewComponent, 
    },
    {
      path: 'template',
      component: TemplateComponent,
    },
    {
      path: 'sample',
      component: SampleComponent,
    },
    {
      path: 'edit',
      component: EditComponent,
    },
    
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [UserComponent, LoginComponent,ViewComponent];