import Home from '../views/Home/home';
import Outside from '../views/Home/outside';
const prefix = '/index';

export const homeRouter = [
 { path: prefix + '/', component: Home, key: 'home', exact: true },
 { path: prefix + '/home', component: Home, key: 'home'},
 { path: prefix + '/outside', component: Outside, key: 'Outside' },
 //  { path: '/home', component: Home, key: 'home' },
];
