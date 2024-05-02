import { hydrate, prerender as ssr } from 'preact-iso';
import * as React from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import ErrorPage from "./error-page";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import './assets/main.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
]);

export function App() {
	return (
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
