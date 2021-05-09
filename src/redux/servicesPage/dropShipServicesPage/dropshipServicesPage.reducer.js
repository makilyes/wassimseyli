const INITIAL_STATE = {
    cards: [
        {
            cardsNumber: '1',
            title: 'Single point of contact',
            description: 'When searching for products, it is unlikely that you will find all the products you want from the same supplier. Indeed, depending on prices and delivery times, but also on customer reviews, a product may seem interesting from one supplier, while it may be better to use another supplier for a second product. Also, a supplier may not have all the products you need. As a result, you will have to work with several different suppliers and have several contacts depending on the products you choose. When working with us, you will no longer need multiple contacts. You will only have to deal with one: MAKRIA AGENCY. This will save you time and increase efficiency when dealing with any problems with parcels',
            img: '../../assests/phone-call.png'
        },
        {
            cardsNumber: '2',
            title: 'Negotiated downwards prices',
            description: 'As we are in direct contact with suppliers, it is easier for us to negotiate interesting rates for you. Of course, it is also possible to buy in bulk at the best price!',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '3',
            title: 'Storage in China and USA',
            description: 'We canstock your products in China as well as in the USA at unbeatable prices!',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '4',
            title: 'Product quality',
            description: 'With our services, you can be sure of the quality of the products you will offer in your store. Of course, it is necessary to place test orders so that you can have the products you sell in your hands. It is also important to make sure that all the products that are sent to your customers are of the same quality. Our teams on site will make sure that the quality of your products is consistent. We will choose suppliers known to us who offer quality products and will then make sure that there are no errors or problems in the manufacturing of your products.',
            img: '../../assests/shakeHandIcon.svg'
        },
    ]
}

const dropshipServicesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default dropshipServicesReducer;
