import React, { createContext, useState } from 'react';

interface GlobalContextProps {
    verifierAddress: string;
    setVerifierAddress: React.Dispatch<React.SetStateAction<string>>;
    strategyAddress: string;
    setStrategyAddress: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
    verifierAddress: '',
    setVerifierAddress: () => {},
    strategyAddress: '',
    setStrategyAddress: () => {},
});

export const GlobalProvider = ({ children }:{children:any}) => {
    const [verifierAddress, setVerifierAddress] = useState('');
    const [strategyAddress, setStrategyAddress] = useState('');

    return (
        <GlobalContext.Provider value={{ verifierAddress, setVerifierAddress, strategyAddress, setStrategyAddress }}>
            {children}
        </GlobalContext.Provider>
    );
};