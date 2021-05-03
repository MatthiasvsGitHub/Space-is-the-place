import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/home'
import Planets from './components/Planets'
import Satellites from './components/Satellites'
import Moons from './components/Moons'
import Stars from './components/Stars'
import Team from './components/Team'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Routing() {
    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/home/:page?">
                    <Home />
                </Route>
                <Route exact path="/planets/:page?">
                    <Planets />
                </Route>
                <Route exact path="/satellites/:page?">
                    <Satellites />
                </Route>
                <Route exact path="/moons/:page?">
                    <Moons />
                </Route>
                <Route exact path="/stars/:page?">
                    <Stars />
                </Route>
                <Route exact path="/about">
                    <Team />
                </Route>
            </Switch>
        <Navbar />
        </>
    )
}

export default Routing
