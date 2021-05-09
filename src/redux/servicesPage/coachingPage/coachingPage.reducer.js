const INITIAL_STATE = {
    cards: [
        {
            cardsNumber: '1',
            title: 'MODULE 1 - Forging a Winning Mindset',
            description: 'After completing this module :\n' +
                'You have built an unshakeable e-merchant Mindset that gives you infinite resilience to failure and allows you to take full advantage of the lessons learned in this course.',
            img: '../../assests/brandYourStore.jpg'
        },
        {
            cardsNumber: '2',
            title: 'MODULE 2 - Produit Research and Product Marketing',
            description: 'After completing this module :\n' +
                'You also have a clear and precise system to find winners continuously and easily directly on Instagram or Facebook and even directly from AliExpress.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '3',
            title: 'MODULE 3 - Website creation that converts\n',
            description: 'After completing this module :\n' +
                'You have a professional and optimized store, approved by Wassim and his team.You can now make your first sales.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '4',
            title: 'MODULE 4 - Advertising: Influencer Ads\n',
            description: 'After completing this module :\n' +
                'You know how to choose the best Influencers to work with, how to contact and negotiate with them and how to get a positive answer.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '5',
            title: 'MODULE 5 - Advertising: Facebook Ads\n',
            description: 'After completing this module : You\'ll be mastering Facebook advertising perfectly to create and launch profitable campaigns quickly and explode your figures thanks to Facebook in 2021.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '6',
            title: 'MODULE 6 - Advertising: Snapchat Ads\n',
            description: 'After completing this module : You know how to create, launch and scale profitable campaigns on Snapchat which can be an extremely powerful tool for physical products when used properly.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '7',
            title: 'MODULE 7 - Advertising: Google Ads\n',
            description: 'After completing this module : You are proficient with Google advertising and know how to create, launch and scale profitable campaigns on YouTube and Google.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '8',
            title: 'MODULE 8 - Advertising : Email Marketing\n',
            description: 'After completing this module : You have the keys to email marketing to increase your sales by 20 to 40%. You know how to take advantage of it to boost the profitability of your websites.',
            img: '../../assests/shakeHandIcon.svg'
        },
        {
            cardsNumber: '9',
            title: 'MODULE 9 - Brand Creation\n',
            description: 'After completing this module : You know how to sell quality products, achieve 24 hour delivery times, get your own packaging, have satisfied customers, promote your brand in the long term and sell it!',
            img: '../../assests/shakeHandIcon.svg'
        },
    ]
}

const coachingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default coachingReducer;
