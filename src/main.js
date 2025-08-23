import './style.css'
import Router from './router.js'

//Initialise router and set up the application
async function initApp(){
  const router = new Router();
  await router.setupApp();
  router.init();
}

initApp();