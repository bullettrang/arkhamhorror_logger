import React from 'react';
import Aux from './Aux.js';
import Header from '../Header/Header';
const layout = (props)=>(
    <Aux>
        <Header/>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;