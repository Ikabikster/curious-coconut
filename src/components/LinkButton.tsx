import React from 'react';

type LinkButtonProps = {
    target: string;
};

const LinkButton = ({target}: LinkButtonProps ) => {
    return (
        <a className ="submitButton" href={target}>
            About me
        </a>
    );
}

export default LinkButton;