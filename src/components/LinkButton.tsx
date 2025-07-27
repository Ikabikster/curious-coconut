import React from 'react';

type LinkButtonProps = {
    target: string;
    text: string;
};

const LinkButton = ({target, text}: LinkButtonProps ) => {
    return (
        <a className ="submitButtonLink" href={target}>
            {text}
        </a>
    );
}

export default LinkButton;