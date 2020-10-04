- Criar arquivos CSS
```
/assets
    /css
        /style.css
        /custom.css
        /responsive
```

- Instalar dependências iniciais
```
yarn add bootstrap axios jquery popper.js @popperjs/core sass sass-loader bootstrap-vue portal-vue vue-multiselect vue-sweetalert2 @fortawesome/fontawesome-free boxicons --save
```

- Configurar "main.js"
```
// Importar Biblioteca VueJS
import Vue from "vue"
// Componente pai da aplicação VueJS
import App from "./App.vue"
// VueRouter
import router from "./router"
// Vuex
import store from "./store"
// Bootstrap
import "bootstrap";
// PopperJS
import "popper.js";
// jQuery
import "jquery";
// BootstrapVue
import "bootstrap-vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// PortalVue
import PortalVue from "portal-vue";
// SweetAlert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
// BoxIcons
import "boxicons";
import "boxicons/css/boxicons.min.css";
// FontAwesome
import "@fortawesome/fontawesome-free";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome.min.js";
// Layout
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/responsive.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Install PortalVue
Vue.use(PortalVue);

// Production Mode
Vue.config.productionTip = false
// Vue.config.devtools = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
```

- Instalar Webpack (Opcinal)
```
npm install --save-dev webpack
```

- Implementação do Layout