import React, { Component } from 'react'
import Client from 'shopify-buy'
const ShopContext = React.createContext()
const ShopConsumer = ShopContext.Consumer
const client = Client.buildClient({
    storefrontAccessToken: '1072b84acbcdcdb2799446648b0bf4d1-1596540529',
    domain: 'jonsnowwhite.myshopify.com',
})
 class shopContext extends Component {
state = {
    products:[],
    product:{},
    checkout:{},
    isCartOpen: false,
    test: 'test'
}

componentDidMount(){
    this.createCheckout()
}

createCheckout = async  () =>{
    const checkout = await client.checkout.create()
    console.log(checkout);

}
addtoCart = async () =>{

}
fetchAllProduct = async () => {

}
fetchProductWithId = async (id) =>{

}
closeCart = () =>{ }
openCart = () => { }
    render() {
        return (
            <ShopContext.Provider value={{...this.state}}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}
export {ShopConsumer, ShopContext}
export default shopContext;





