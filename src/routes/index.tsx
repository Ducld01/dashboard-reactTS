import { ElementType, Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
//
import { LoadingScreen } from "../shared/components";
import { GuestLayout, MainLayout } from "../ui/layouts";

// eslint-disable-next-line
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export function Router() {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [],
    },
    //Guest routes
    {
      path: "*",
      element: <GuestLayout />,
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

const NotFound = Loadable(lazy(() => import("../ui/pages/not-found")));
