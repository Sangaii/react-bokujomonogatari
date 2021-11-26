import StartMenu from '../views/StartMenu/StartMenu'
import Home from '../views/Home/Home'

export const routes = [
  {path:'/',component:StartMenu,key:'startmenu',exact:true},
  {path:'/home',component:Home,key:'home'}
]