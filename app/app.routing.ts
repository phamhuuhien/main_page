import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }          from './mainpage/main.component';
import { PageNotFoundComponent }  from './notfound/page_not_found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {   path: '**',
        component: PageNotFoundComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);