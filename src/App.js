import {
    Routes,
    Route
} from "react-router-dom";
import {Home} from "./pages/Home"
import {Profile} from "./pages/Profile";


function App() {
    return (
        <Routes>
            <Route path={'/randomworld/profile/:username'} element={ <Profile /> }/>
            <Route path={'/'} element={ <Home /> }/>
        </Routes>
    );
}

export default App;
