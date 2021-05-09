const INITIAL_STATE = {
    sections: [
        {
            title: 'Design and Packaging Services',
            description: 'As the first contact between the product and the customer, the packaging must be attractive but also meaningful. It carries the values of your brand and addresses consumers on your behalf.',
            img: '../../assests/sectionDesignPackaging.png',
            btnText: 'Learn more'
        },
        {
            title: 'Droshipping Services',
            description: 'The choice of suppliers is very important to maintain a stable business, it is sometimes even risky. We help you to find suppliers directly in China, follow up production, ensure quality and shipping fulfillment!',
            img: "../../assests/logistic.png",
            btnText: 'Learn more'

        },
        {
            title: 'E-commerce coaching',
            description: 'We help people to create financial freedom through building ambitious e-commerce businesses. You will be able to create processes and delegate in order to become free as I am today!',
            img: "../../assests/sectionEcommercePackaging.jpeg",
            btnText: 'Learn more'

        },
        {
            title: 'Who I am ?',
            description: 'I\'m Wassim, e-commerce expert & mentor. Today I have already generated more than 2 million sales through my stores during my School Days. I\'m now free and able to travel anywhere with my different brands...',
            img: "../../assests/ilyes.png",
            btnText: 'Learn more'


        }
    ]
}

const homePageDescriptionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default homePageDescriptionReducer;
