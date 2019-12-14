

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
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


    }
});