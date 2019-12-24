
import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;


let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import 'popper.js';

import 'bootstrap';

window.Noty = require('noty');


// Vue Components

require('./components/ProductForm.js');
require('./components/CartForm.js');
require('./components/MiniCart.js');


// javascript
require('./product.js');
require('./header.js');