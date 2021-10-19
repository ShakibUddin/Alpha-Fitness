import React from 'react';

const Included = (props) => {
    const { title, detail } = props.data;
    return (
        <p className="text-xl py-3 text-black p-3"><span className="font-extrabold">{title} </span> {detail}</p>
    );
};

export default Included;