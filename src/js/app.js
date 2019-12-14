
import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;


let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import 'popper.js';

import 'bootstrap';


// Vue Components

require('./components/ProductForm.js');


// javascript
require('./product.js');
require('./header.js');