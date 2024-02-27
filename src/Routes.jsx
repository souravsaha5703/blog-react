import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Explore from './Pages/Explore';

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='explore' element={<Explore/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter