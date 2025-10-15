import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { HomePage, SeriesAdminPage } from '../pages';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouting = () => {
    return (
        <BrowserRouter>

            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Hjem</Link></li>
                        <li><Link to="series-admin">Serieadmin</Link></li>
                        <li><Link to="abc">Funker ikke</Link></li>
                    </ul>                    
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='series-admin' element={<SeriesAdminPage/>}></Route>
                    <Route path='*' element={<NotFoundPage/>}></Route>
                </Routes>
            </main>

            <footer></footer>

        </BrowserRouter>
    )
}

export default AppRouting;