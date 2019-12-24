import { store } from "./../shared/cartData.js";

if (document.querySelector('.mini-cart')) {


    let productForm = new Vue({
        el:".mini-cart",
        delimiters: ['${', '}'],

        data(){
            return{
                cartData: store.state.cartData,
            }
        },

        computed: {
            cart(){
                return this.cartData[0];
            }
        },

        created(){
            // mini cart is on every page, that's why, we cal it once here
            store.getCart();
        },

        methods:{

            // Remove item from cart
            remove(item){
                let found = this.cart.items.find(product => product.variant_id == item.variant_id);
                if(found){

                    console.log("Found : ", found);
                    this.$delete(this.cart.items, this.cart.items.indexOf(found));

                }
            },

            // Increment item by 1
            increment(item){
                
                let found = this.cart.items.find(product => product.variant_id == item.variant_id);
                if (found) {
                    item.quantity ++;
                }


            },

            // Decrement item by 1
            decrement(item){
                let found = this.cart.items.find(product => product.variant_id == item.variant_id);
                if (found) {
                    if (item.quantity < 2) {
                        this.remove(item);
                    }else{
                        item.quantity--;
                    }
                }

            },

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
               

            }

         

        },

       
    });



    
}