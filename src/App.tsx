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
					<Route exact path="/" component={Home} />
					<Route exact path="/upskill" component={Upskill} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/post-job" component={PostJob} />
					<Route path="*" component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
