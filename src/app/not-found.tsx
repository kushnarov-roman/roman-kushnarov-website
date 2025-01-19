export const metadata = {
  title: "404 | This page could not be found",
  description: null,
};

const NotFound = () => (
  <div className="w-screen h-screen">
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-grey">
      404 | This page could not be found.
    </div>
  </div>
);

export default NotFound;
