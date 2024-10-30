'use client';
import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';

import useScrollLock from '@/hooks/useScrollLock';

Modal.setAppElement('main');

interface ModalProps {
    title?: string;
    id?: string;
    subTitle?: string;
    children: React.ReactNode;
    isOpen: boolean;
    onRequestClose: () => void;
    className?: string;
    isHideCloseBtn?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    modalFooter?: React.ReactNode;
    modalTop?: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
    title,
    subTitle,
    id,
    isOpen,
    onRequestClose,
    className = 'max-w-lg',
    isHideCloseBtn,
    children,
    shouldCloseOnOverlayClick,
    modalFooter,
    modalTop,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                onRequestClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onRequestClose]);

    useScrollLock(!!isOpen);

    return (
        <Modal
            id={id}
            closeTimeoutMS={200}
            isOpen={isOpen}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            onRequestClose={onRequestClose}
            portalClassName='o-popup_portal'
            ariaHideApp={false}
            className='o-popup_content fixed inset-0 p-4 overflow-auto no-scrollbar'
            overlayClassName='fixed inset-0 bg-gray-800 bg-opacity-50'
        >
            <div
                ref={modalRef}
                className={`relative mx-auto rounded-2xl w-full ${className}`}
            >
                <div className='bg-white rounded-2xl shadow-lg relative w-full'>
                    {!isHideCloseBtn && !modalTop && (
                        <button
                            onClick={onRequestClose}
                            className='absolute top-2 right-2 md:top-1 md:right-2 rounded-lg hover:bg-anti-flash-white2 transition ease-in-out duration-300 p-1'
                        >
                            {/* <FontAwesomeIcon size='2x' icon={'fa-solid fa-xmark' as any} /> */}
                        </button>
                    )}
                    {title && (
                        <div className='title px-6 md:px-7 py-6 pt-8 pb-3 border-b-1 border-silver-sand md:flex justify-center'>
                            <div>
                                <h2 className='text-3xl font-svnDay text-ua-blue text-center'>{title}</h2>
                                {subTitle && (
                                    <div className='subTitle mt-1'>
                                        <h3 className='text-lg font-medium'>{subTitle}</h3>
                                    </div>
                                )}
                            </div>
                            {modalTop}
                        </div>
                    )}
                    {children && (
                        <div className='o-modal__body px-6 md:px-7 pb-6 text-feldgrau'>
                            {children}
                        </div>
                    )}
                    {modalFooter && (
                        <>
                            <div className='submit pb-4 px-4 lg:px-6'>{modalFooter}</div>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default CustomModal;
