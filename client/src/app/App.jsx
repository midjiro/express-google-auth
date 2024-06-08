import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

function App() {
    return (
        <>
            <Header />
            <main className='px-4 md:px-16'>
                <Outlet />
            </main>
        </>
    );
}

export default App;
