import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Blogs from './Pages/Blogs';

const AppRouter=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='explore' element={<Explore/>}/>
                </Route>
                <Route path='register' element={<Signup/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='blogs' element={<Blogs/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter