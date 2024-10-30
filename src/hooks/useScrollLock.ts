import { useEffect } from 'react';

/**
 * useScrollLock
 *
 * Locks the scroll bar to prevent scrolling the body of the page.
 * @param {boolean} isLocked If true, the scroll bar is locked.
 */

const useScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [isLocked]);
};

export default useScrollLock;
