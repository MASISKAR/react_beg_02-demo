import React from 'react';

class E extends React.Component {
    state = {
        fruits: [
            {
                name: 'banana',
                price: '1$',
                logo: '🍌'
            },
            {
                name: 'apple',
                price: '1.5$',
                logo: '🍏'
            },
            {
                name: 'orange',
                price: '2$',
                logo: '🍊'
            },
            {
                name: 'lemon',
                price: '1.8$',
                logo: '🍋'
            }
        ],
    };



    render() {
        /*         const fruitArr = [
                    <p key='1'>banana</p>,
                    <p key='2'>apple</p>,
                    <p key='3'>orange</p>,
                    <p key='4'>avocado</p>
                ]; */

        const fruitArr = this.state.fruits.map((el, i) => {
            return (
                <div key={i}>
                    <span>{el.logo} </span>
                    <span>{el.name} </span>
                    <span>{el.price}</span>
                </div>
            );
        });

        return (
            <div>
                {fruitArr}
            </div>
        );
    }
}

export default E;