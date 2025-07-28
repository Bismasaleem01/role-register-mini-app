import { Routes } from '@angular/router';
import { CreateRoleComponent } from '../Pages/create-role/create-role.component';
import { RegisterUserComponent } from '../Pages/register-user/register-user.component';
import { ViewAllRegisteredUsersComponent } from '../Pages/view-all-registered-users/view-all-registered-users.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'create-role',
        pathMatch:'full'
    },
    {
        path:'create-role',
        component: CreateRoleComponent
    },
    {
        path:'register-user',
        component:RegisterUserComponent
    },
    {
        path: 'view-all-registered-users',
        component: ViewAllRegisteredUsersComponent
}
];
