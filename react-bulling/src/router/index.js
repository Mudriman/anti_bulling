import Children from '../pages/children/Children';
import About from '../pages/about/About';
import Parents from '../pages/parents/Parents';
import Teachers from '../pages/teachers/Teachers';

export const privateRoutes = [
    {path: '/', component: About, exact: true},
    {path: '/parents', component: Parents, exact: true},
    {path: '/teachers', component:Teachers, exact: true},
    {path: '/children', component: Children, exact: true},
]