import { getTokenService } from '@/api/vietqr';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type TokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
};

const useAuthToken = () => {
    const [token, setToken] = useState<string | null>(null);

    const fetchToken = async () => {
        try {
            const response = await getTokenService();
            handleTokenResponse(response);
        } catch (error) {
            toast.error('Payment services are not available! Please try again!');
            console.error(error);
        }
    };

    const handleTokenResponse = (data: TokenResponse) => {
        console.log('Token refreshed!');
        setToken(data.access_token);
        // const expiration = data.expires_in * 1000;
    };


    useEffect(() => {
        fetchToken(); // Initial token fetch

        const intervalId = setInterval(() => {
            console.log('Checking if token refresh is needed...');
            fetchToken();
        }, 300000); // Check every 5 seconds

        return () => clearInterval(intervalId); // Clean up on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only depend on refreshTokenIfNeeded

    return token;
};

export default useAuthToken;
