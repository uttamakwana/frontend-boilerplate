// react-router-dom
import { useNavigate } from "react-router-dom";

// component
export default function NotFound() {
  // navigate
  const navigate = useNavigate();

  return (
    <main className="not-found-page | min-h-100 flex-col-center gap-8 text-center">
      {/* Heading */}
      <h1 className="| fs-heading fw-800">
        <span className="| text-danger">404</span> Page Not Found
      </h1>
      {/* Paragraph */}
      <p className="| fs-medium fw-500">
        Check your <span className="text-warning">URL</span> or click the below
        link to go to homepage.
      </p>
      {/* Button */}
      <button
        className="btn oval bg-info text-white-900 shadow-small fs-button"
        onClick={() => navigate("/", { replace: true })}
      >
        Click Here
      </button>
    </main>
  );
}
