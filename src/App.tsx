
import React, { FC} from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import HomePage from './pages/Hompage';
// import DaoTools from './pages/DaoTools';
// import Staking from './pages/Staking';
// import Markets from './pages/Markets';

// require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/*' element={<HomePage />}></Route>
                    {/* <Route path='/daotools' element={<DaoTools />}></Route>
                    <Route path='/staking' element={<Staking />}></Route>
                    <Route path='/markets' element={<Markets />}></Route> */}
                </Routes>
            </Layout>
        </Router>
    );
};
export default App;

// const Context: FC<{ children: ReactNode }> = ({ children }) => {
//     const network = WalletAdapterNetwork.Devnet;

//     const endpoint = useMemo(() => clusterApiUrl(network), [network]);

//     const wallets = useMemo(
//         () => [
//             new UnsafeBurnerWalletAdapter(),
//         ],
//         [network]
//     );

//     return (
//         <ConnectionProvider endpoint={endpoint}>
//             <WalletProvider wallets={wallets} autoConnect>
//                 <WalletModalProvider>{children}</WalletModalProvider>
//             </WalletProvider>
//         </ConnectionProvider>
//     );
// };

