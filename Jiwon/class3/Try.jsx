import React, {PureComponent, memo, useState} from 'react';

const Try = memo(({ tryInfo }) => { // tryInfo or props.tryInfo
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
});

{/*
const Try = ({ tryInfo }) => { // tryInfo or props.tryInfo
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    )
};

*/}
export default Try;