import Buttonupdate from './Buttonupdate'
import Userinfo from './Userinfo'

export default function App() {
  return (
    <div className="container mt-5">

      {/* Title */}
      <h1 className="text-center mb-4 text-primary fw-bold">
        Welcome to the App
      </h1>

      {/* User Card */}
      <div className="card p-4 mb-4 shadow-lg border-0 rounded-4">
        <Userinfo />
      </div>

      {/* Buttons Section */}
      <div className="d-flex gap-3 justify-content-center">
        <Buttonupdate />
      </div>

    </div>
  );
}
