import React from 'react';
import CoverDisplay from './CoverDisplay'
import '../css/cover.css';
import '../media/cover_media.css';

const Cover = () => {
    return(
        <div className="height ma0 bg-dark-green ">
             <CoverDisplay/>
        </div>
    )
}

export default Cover;