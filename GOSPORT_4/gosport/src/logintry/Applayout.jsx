import React, { Suspense, lazy, useState, useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import PageLogin from './login';
import Home from './pages/home';
import About from './pages/about';
import Selfpage from '../selfpage/selfpage';
import Selset from '../selfalter/selfsettings'

// const PageHome = lazy(() => import('./pages/home'))
// const PageAbout = lazy(() => import('./pages/about'))

const AppLayout = () => {
    const [token, setToken] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        setToken(Cookies.get('token'))
    }, [])

    const saveToken = (token) => {
        // Login有
        Cookies.set(
            'token',//key
            token,//value
            {
                path:'/',
                expires: 7,//有效7天
                sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            }
        )

        setToken(token)
        console.log(token)

    }

    const saveid = (id) => {
        // Login有
        Cookies.set(
            'id',//key
            id,//value
            {
                path:'/',
                expires: 7,//有效7天
                sameSite: 'strict'//只有當前url與請求目標一致才會帶上cookie
            }
        )

    }

    const handleLogout = (e) => {
        e.preventDefault();

        Cookies.remove('token', {
            path: ''
        })

        setToken(null);

        Cookies.remove('id', {
            path: ''
        })

    }

    if (!token) {
        return <PageLogin saveToken={saveToken} saveId={saveid} />;
    }

    return (<>
            <div style={{zIndex:"1000"}}>1231241352</div>
        <HashRouter>
            <div style={{ position: "relative", top: '150px' }}>

                <nav >
                    <Link to="/">Home</Link> |
                    <Link to="/about">Abount</Link> |
                    <Link to="/self">Self</Link> |
                    <Link to="/selfset">Selfset</Link>
                </nav>
                {token ? <p>Welcome, {token}。<a href="##" onClick={handleLogout}>Logout</a></p> : ''}
            </div>
            <Switch>
                {/* <Route path="/" element={
                    // <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                    // </Suspense>
                } />
                <Route path="/about" element={
                    // <Suspense fallback={<div>Loading...</div>}>
                    <About />
                    // </Suspense>
                } /> */}
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/self" component={Selfpage} />
                <Route path="/selfset" component={Selset} />
            </Switch>
        </HashRouter>
                </>
    );
}

export default AppLayout;
