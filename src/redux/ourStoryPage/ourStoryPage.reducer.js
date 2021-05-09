const INITIAL_STATE = {
    blocks: [
        {
            title: 'Early Life',
            description: 'I was dreaming of fulfillment, wealth and freedom. Seeing Amazon\'s success at the time, I told myself\n' +
                '                    that I too should embark on this adventure! My first wish was to create the Algerian Amazon in my\n' +
                '                    home country... Unfortunately, the financial and technical obstacles quickly hindered this dream.\n' +
                '                    During this same time period, some e-commerce entrepreneurs, especially in this new business model,\n' +
                '                    "dropshipping", inspired me to try the adventure aswell! So I got into dropshipping in 2019, with a\n' +
                '                    first generalist store in France wishing to imitate Amazon once again.\n' +
                '                    After spending more than 600€ in advertising, I was able to make just a single sale, but this sale\n' +
                '                    made me believe in dropshipping even more! I was admittedly in loss of 590€, but this one filled me\n' +
                '                    with joy and self-confidence!\n' +
                '                    After this first failure, I quickly understood that a generalist website was complex to run with my\n' +
                '                    knowledge at the time. So I tried my first website in the following niche: Babies!My first success,\n' +
                '                    I started making several sales and reached my first 300,000€!',
        },
        {
            title: 'The Pain',
            description: 'Unfortunately for me, during my launch in 2019, Facebook undertook a "Big Cleanup" following numerous\n' +
                '                    abuses and a scandal that broke out in the USA. The Facebook bot is cracking down and systematically\n' +
                '                    closing accounts that break (or not) the rules.\n' +
                '                    And it was bound to happen: It was my turn to suffer the bot\'s wrath and have my first advertising\n' +
                '                    account closed. An account on which I had spent more than 100,000€, without ever having faced the\n' +
                '                    slightest problem before...\n' +
                '                    Beside that, competition was becoming more and more common and aggressive...\n' +
                '                    I was helplessly witnessing the destruction of my own business...',
        },
        {
            title: 'The Launch',
            description: 'Then began a new phase for me.\n' +
                '                    I learn from the world\'s best marketers. I spend tens of thousands of euros to carry out tests on my\n' +
                '                    own stores. Little by little I start to see new results, I understand Facebook\'s hidden codes to\n' +
                '                    make my ads blow up again, I find new ways to get ahead of the competition, I massively hire and\n' +
                '                    organize my teams.\n' +
                '                    Then in a few months I managed to achieve results that completely changed my life.\n' +
                '                    From all this experience, I have learned lessons, skills and knowledge that allow me to progress\n' +
                '                    today in serenity while gaining freedom.\n' +
                '                    And most of all, to realize my dream of living in Dubai and travelling!\n' +
                '                    My goal?\n' +
                '                    To pass on this knowledge to you so that you can scale your business up to 10K of revenue/day while\n' +
                '                    gaining temporal, financial and geographical freedom. It all started a few years ago during my\n' +
                '                    engineering studies.',
        }
    ],
}

const ourStoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ourStoryReducer;
