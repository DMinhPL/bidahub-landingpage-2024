import React from 'react';
import bidahubLogo from '../../assets/images/logo/logo-bidahub.png';
import dynaLogo from '../../assets/images/logo/logo-dyna.png';
import gabrielsLogo from '../../assets/images/logo/logo-gabriels.png';
import molinariLogo from '../../assets/images/logo/logo-molinari.png';
import vinabidaLogo from '../../assets/images/logo/logo-vinabida.png';
import tuongThanhLogo from '../../assets/images/logo/logo-tuongThanh.png';
import vectorLogo from '../../assets/images/logo/logo-vector.png';

import Image from 'next/image';
import Section from '../Section';

const logoList = [
    bidahubLogo,
    vinabidaLogo,
    molinariLogo,
    gabrielsLogo,
    dynaLogo,
    tuongThanhLogo,
    vectorLogo,
];

const Partners: React.FC<{
    lang?: string
}> = ({
    lang = '',
}) => {
    return (
        <Section title={lang === 'en' ? 'Partner & Sponsor' : 'Đối tác & Nhà tài trợ'} className='partners' id='partners'>
            <div className='logo-list flex flex-wrap justify-center lg:gap-4'>
                {logoList.map((logo, idx) => (
                    <div
                        className='logo-item w-1/2 p-2 lg:p-0 lg:w-auto'
                        key={`item-${idx.toString()}`}
                    >
                        <Image width={240} height={119} src={logo} alt='bidahub logo' />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Partners;
