import React from 'react';

 const Likes2 = ({fill} : {fill: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" stroke = '#000' strokeLinecap={'round'} strokeLinejoin={'round'} width='20px' height='20px' >
            <title>like-1</title>
            <path className="a"
                  d="M20,15.659h0a1.5,1.5,0,1,1,0,3H19a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,1-1.5,1H12.5c-2.851,0-3.5-.5-7-1v-8.5c2.45,0,6.5-4.5,6.5-8.5,0-1.581,2.189-2.17,3,.719.5,1.781-1,5.281-1,5.281h8a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,2-1.5,2H21a1.5,1.5,0,0,1,0,3H20"/>
            <rect className="a" x="0.5" y="10.159" width="5" height="12"/>
            <path d="M3.25,19.159a.75.75,0,1,0,.75.75.75.75,0,0,0-.75-.75Z"/>
        </svg>
    );
};

export default Likes2;
