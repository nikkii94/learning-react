import React from 'react';
import './card-list.styles.css';

import {Card} from '../card/card.component';

export const CardList = (props) => {

    console.log(props);

    // return <div className='card-list'>{props.children}</div>

    return (
        <div className='card-list'>
            {props.monsters.length 

                ? props.monsters.map((monster) => {
                    return <Card key={monster.id} monster={monster} />
                })

                : <p>No data! :(</p>
            }
        </div>
    );
};