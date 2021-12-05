import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';

function App() {
    return (
        <Router basename='/food-project'>
            <Header />
            <main className='container content'>
                 <Switch>
                     <Route exact path='/'>
                         <Home/>
                     </Route>
                    <Route path='/about' component={About}>
                     </Route>
                    <Route path='/contact'
                        component={Contact}>
                     </Route>
                     <Route path='/category/:name'
                        component={Category}>
                    </Route>
                    <Route path='/meal/:id'
                        component={Recipe}>
                     </Route>
                     <Route
                        component={NotFound}>
                     </Route>
                 </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
