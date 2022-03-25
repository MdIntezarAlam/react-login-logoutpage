
import { BrowserRouter, Routes, Router, Route, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Dashboard from './containers/Dashboard';
import { PAGE_PATHS } from './utils/constants';
import User from './containers/User';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path={PAGE_PATHS.root} element={<Register />} />
                    <Route path={PAGE_PATHS.register} element={<Register />} />
                    <Route path={PAGE_PATHS.login} element={<Login />} />
                    <Route path={PAGE_PATHS.dashboard} element={<Dashboard />} />
                    <Route path={PAGE_PATHS.user} element={<User />} />
                </Routes>
            </BrowserRouter>
    )
}
export default App;