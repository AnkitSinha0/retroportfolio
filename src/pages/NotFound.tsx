
import { useLocation, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-16 pb-16">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-6xl font-bold mb-6">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Oops! Page not found
          </p>
          <div className="space-y-4">
            <Link 
              to="/" 
              className="block w-full bg-primary text-white py-3 px-6 rounded hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="block w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-3 px-6 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
