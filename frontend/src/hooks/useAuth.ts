import { getTokenAPI, getUserInfoAPI, oauthAPI } from '@/apis/AuthAPI';
import useSocketStore from '@/stores/socketStore';
import { useTokenStore } from '@/stores/tokenStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useAuth = () => {
    const [isLogin, setLogin] = useState<boolean>(false);
    const { accessToken } = useTokenStore();
    const connect = useSocketStore((state) => state.connect);

    const { data, isSuccess, isError } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => getUserInfoAPI(accessToken),
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 20,
        enabled: !!accessToken,
    });

    useEffect(() => {
        if (accessToken && isSuccess) {
            setLogin(true);
            connect(accessToken);
        }
    }, [isSuccess]);

    return { userInfo: data, isSuccess, isError, isLogin, setLogin };
};

export const useOauth = () => {
    const [oauthToken, setOauthToken] = useState<string>('');
    const { setAccessToken } = useTokenStore();

    const handleLogin = () => {
        oauthAPI();
    };

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const data = e.data;
            setOauthToken(data.code);
        };

        window.addEventListener('message', messageHandler);

        return () => {
            window.removeEventListener('message', messageHandler);
        };
    }, []);

    useEffect(() => {
        if (oauthToken) {
            const fetchToken = async () => {
                const data = await getTokenAPI(oauthToken);

                setAccessToken(data.accessToken);
            };

            fetchToken();
        }
    }, [oauthToken, setAccessToken]);

    return { handleLogin };
};
