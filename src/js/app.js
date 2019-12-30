

// Lazy loading
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;


let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import 'popper.js';

import 'bootstrap';

window.Noty = require('noty');


// Vue custom filter
require('./filters/money.js');


// Vue Components

require('./components/ProductForm.js');
require('./components/CartForm.js');
require('./components/MiniCart.js');


// javascript
require('./product.js');
require('./header.js');

