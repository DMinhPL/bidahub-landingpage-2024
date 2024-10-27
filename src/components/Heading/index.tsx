import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
    return (
        <h2 className='font-svnDay text-white text-3xl md:text-[50px] xl:text-[64px] text-center mb-6 md:mb-8 xl:mb-16'>
            {children}
        </h2>
    );
};

export default Heading;
