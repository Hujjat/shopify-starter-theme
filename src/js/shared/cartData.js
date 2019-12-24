// Shared data between cart and mini-cart


export const store = {

        state: {
            cartData:[]
        },

        getCart(){

            axios.get('/cart.js')
                    .then( response => {
                        
                        this.state.cartData.push(response.data);
                    })
                    .catch( error => {
                        new Noty({
                            type: 'error',
                            layout: 'topRight',
                            text: 'There was an error !!'
                        }).show();
                    });
        }

}