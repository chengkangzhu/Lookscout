import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

//page
import Landing from "./pages/Landing";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import HelpAndSupport from "./pages/HelpAndSupport";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

//commponents
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//logo

function App() {
	return (
		<Router >
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/about" element={<About />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/helpAndSupport" element={<HelpAndSupport />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/forgotPassword" element={<ForgotPassword />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
