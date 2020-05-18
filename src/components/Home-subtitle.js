import React from 'react'
import { useHistory } from "react-router-dom"
import { Icon } from '@iconify/react';
import chevronCompactDown from '@iconify/icons-bi/chevron-compact-down';


const HomeSubtitle = () => {

    let history = useHistory()

    return <>
        <div className="home__subtitle">

            <h2>Have a look</h2>
            <h2>into my</h2>
            <h2 onClick={() => history.push('/projects/1')}>projects</h2>
            <Icon className="arrow" 
                icon={chevronCompactDown} 
                width={50} 
                onClick={() => history.push('/projects/1')} 
            />
            
        </div>

    </>
}

export default HomeSubtitle