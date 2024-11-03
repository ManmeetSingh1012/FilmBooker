import { lazy } from "react";

const Landing = lazy(() => import("./Pages/Landing/Landing"));
export const ticketBookingRoutes = [{ path: "/", element: <Landing /> }];
