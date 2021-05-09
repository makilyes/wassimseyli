const INITIAL_STATE = {
    sections: [
        {
            title: 'Product packaging',
            description: 'It is first and foremost the packaging of your product. It must meet its requirements and be ergonomic to optimize the user experience. Then, the packaging design plays a seductive role to grab the attention of your target audience and trigger the purchasing decision.',
            img: '../../assests/img1-packaging.png'
        },
        {
            title: 'Product label creation',
            description: 'Creating a stunning label is like a great book cover - informative, compelling and engaging. Plus, it encourages customers to say "yes" to your product. Launch a Design Contest and our designers will create custom labels that you\'ll love, guaranteed.',
            img: '../../assests/img2-packaging.png'
        },
        {
            title: '1. What elements to gather beforehand ?',
            description: 'Different factors will influence the design of your packaging. First of all, the packaging characteristics and requirements imposed by your product. Then, it is essential to know the profile and preferences of your customers in order to adapt the design.',
            img: ''
        },
        {
            title: '2. Why choose MAKRIA AGENCY ?',
            description: 'We are leaders in the online graphic design field. Thanks to our expertise, we help you build a custom and attractive packaging, adapted to the current requirements of your industry and of your customers. Moreover, we offer unlimited modifications until you get the perfect design!',
            img: ''
        }
    ],
    cards: [
        {
            title: 'Get Your Design',
            description: 'You have an idea of a design, or you just want to get propositions, we are here to sublimate your product !',
            img: "../../assests/packaging-hero.jpg"
        },
        {
            title: 'DropShipping Service',
            description: 'One contact ! We take care of everything for you.',
            img: "../../assests/Dropshipping.jpg"
        },
        {
            title: 'MAK Formula',
            description: 'The ONLY Coaching and Training Program to Become Totally Free through E-commerce.',
            img: "../../assests/packaging-hero.jpg"

        }
    ],
}

const designPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default designPageReducer;
