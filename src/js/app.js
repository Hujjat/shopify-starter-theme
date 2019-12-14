
import Vue from "vue";
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;

let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

import 'popper.js';

import 'bootstrap';


// javascript
require('./product.js');
require('./header.js');