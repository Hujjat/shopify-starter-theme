
if (document.querySelector('.cart-form')) {

    let productForm = new Vue({
        el:".cart-form",
        delimiters: ['${', '}'],

        data(){
            return{
                cart:null,
            }
        },

        created(){

            this.getCart();

        },

        methods:{

            updateCart(){

                let result = this.cart.items.reduce(
                     (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
                {});


                console.log(result);


                axios.post('/cart/update.js', {updates : result} )
                    .then( (response) => {
                        

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
                            console.log(response);

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