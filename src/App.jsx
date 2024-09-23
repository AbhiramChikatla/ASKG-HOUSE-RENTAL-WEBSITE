
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import Listing from "./pages/Listing";
import ListingMap from "./components/ListingMap";
import PropertyDetails from "./pages/PropertyDetails";
import Agent from "./pages/Agent";
import AgentProfile from "./pages/AgentProfile";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import CreateAccount from "./pages/CreateAccount";
import Error from "./components/Error";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import License from "./pages/License";
import EnterOTP from "./pages/EnterOTP";
import AccountPage from "./pages/AccountPage";
import NewPassword from "./pages/NewPassword";
import { UserContextProvider } from "./context/userContext";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/aboutus",
            element: <AboutUs />,
        },
        {
            path: "/listing",
            element: <Listing />,
        },
        {
            path: "/listingmapview",
            element: <ListingMap />,
        },
        {
            path: "/propertydetails/:id",
            element: <PropertyDetails />,
        },

        {
            path: "/agents",
            element: <Agent />,
        },
        {
            path: "/agentprofile/:id",
            element: <AgentProfile />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/blogdetails/:id",
            element: <BlogDetails />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/reset",
            element: <Reset />,
        },
        {
            path: "/createaccount",
            element: <CreateAccount />,
        },
        {
            path: "/error",
            element: <Error />,
        },
        {
            path: "/faq",
            element: <FAQ />,
        },
        {
            path: "/privacypolicy",
            element: <PrivacyPolicy />,
        },
        {
            path: "/license",
            element: <License />,
        },
        {
            path: "/enterotp",
            element: <EnterOTP />,
        },
        {
            path: "/newpassword",
            element: <NewPassword />,
        },
        {
            path: "/account",
            element: <AccountPage />,
        },
    ]);

    return (
        <>
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </>
    );
}

export default App;
