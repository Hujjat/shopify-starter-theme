import { store } from "./../shared/cartData.js";

if (document.querySelector('.cart-form')) {


    let productForm = new Vue({
        el:".cart-form",
        delimiters: ['${', '}'],

        data(){
            return{
                cartData: store.state.cartData,
            }
        },

        computed:{
            cart_total_price(){
                let total = 0;
                
                this.cartData[0].items.forEach(item => {
                    total += item.quantity*item.price;
                });

                return total;
            },
            cart(){
                return this.cartData[0]
            }
        },

        methods:{

            total_price(item){
                return item.price * item.quantity;
            },

            updateCart(){

                let result = this.cart.items.reduce(
                     (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
                {});

                console.log(result);


                axios.post('/cart/update.js', {updates : result} )
                    .then( (response) => {
                        
                        store.state.cartData[0] = response.data;

                        new Noty({
                            type: 'success',
                            timeout: 3000,
                            layout: 'topRight',
                            text: 'Your cart items updated'
                        }).show();

                    })
                    .catch(function (error) {
                        new Noty({
                            type: 'error',
                            layout: 'topRight',
                            text: 'There was something wrong!!'
                        }).show();
                    });
               

            },

            getCart(){
                axios.get('/cart.js')
                        .then( response => {
                            this.cart = response.data;
                        })
                        .catch( error => {
                            new Noty({
                                type: 'error',
                                layout: 'topRight',
                                text: 'There was an error !!'
                            }).show();
                        });
            },

            addToCart(){
                axios.post('/cart/add.js', this.form )
                    .then(function (response) {
                        
                        new Noty({
                            type: 'success',
                            timeout: 3000,
                            layout: 'topRight',
                            text: 'Product added to cart!'
                        }).show();

                    })
                    .catch(function (error) {
                        new Noty({
                            type: 'error',
                            layout: 'topRight',
                            text: 'Some notification text'
                        }).show();
                    });
            }

        }
    });



    
}