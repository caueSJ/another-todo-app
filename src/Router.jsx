import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutPage />} />
            </Route>
        </Routes>
    )
}