import StartMenu from '../views/StartMenu/StartMenu'
import index from '../views/Home/index'

export const routes = [
 { path: '/', component: StartMenu, key: 'startmenu', exact: true },
 { path: '/index', component: index, key: 'index' },
];