import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="text-2xl mt-4">Page Not Found</p>
          <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
          <div className="mt-6">
            <Link to="/" className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-slate-200">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
