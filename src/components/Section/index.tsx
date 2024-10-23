import React from 'react';
import Heading from '../Heading';

interface Props {
    className?: string;
    id?: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({ className, id, title, children }) => {
    return (
        <div
            id={id}
            className={`${className ? `${className} ` : ''
                }container mx-auto padding-section`}
        >
            <Heading>{title}</Heading>
            {children}
        </div>
    );
};

export default Section;
