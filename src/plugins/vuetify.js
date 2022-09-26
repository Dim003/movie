import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../services/api"

Vue.use(Vuetify);

Vue.prototype.$http = api;

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa'
  }
});
