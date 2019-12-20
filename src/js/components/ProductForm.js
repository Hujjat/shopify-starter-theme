
if (document.querySelector('.shopify-product-form')) {

    let productForm = new Vue({
        el:".shopify-product-form",

        data(){
            return{
                form:{
                    id: document.getElementById('variant_id').value ,
                    quantity: 1,
                }

            }
        },

        methods:{

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