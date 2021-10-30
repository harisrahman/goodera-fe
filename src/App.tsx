import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "features/navigation/Header";
import Login from "features/auth/Login";
import PostJob from "features/post-job";
import Home from "features/home";
import Upskill from "features/upskill";
import NotFound from "features/errors/404";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" render={Home} />
					<Route exact path="/upskill" render={Upskill} />
					<Route exact path="/login" render={Login} />
					<Route exact path="/post-job" render={PostJob} />
					<Route path="*" render={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
