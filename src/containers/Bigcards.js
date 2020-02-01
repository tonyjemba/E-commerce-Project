import React from 'react';
import BigCard from '../components/BigCard';
import '../css/bigcards.css'
import '../media/bigcard_media.css'

const BigCards = () => {
    return(
        //props from database
        <div className="advert spacing">
            <BigCard title="NEW NEW!!" body="THE FIRST GREGORIAN SUIT EVER"/>
            <BigCard title="NEED TO CHECK" body="BEST GANGNAM STYLE SUITS SOO CHEAP!"/>
        </div>
    )
}

export default BigCards;