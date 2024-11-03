import React from 'react';
import CustomModal from '../Modal';
import RegistrationForm, { FormValues } from '../RegistrationForm';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (data: FormValues) => void;
    isLoading?: boolean;
    error?: string;
    lang?: string;
}

const EditPopup: React.FC<Props> = ({ open, setOpen, onSubmit, error, isLoading, lang }) => {
    return (
        <CustomModal
            isHideCloseBtn
            title={lang === 'en' ? 'Edit registration information' : 'Thay đổi thông tin đăng ký'}
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            className='max-w-[888px]'
        >
            <RegistrationForm lang={lang} isEdit onSubmit={onSubmit} isLoading={isLoading} error={error} />
        </CustomModal>
    );
};

export default EditPopup;
