/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        console.log("Decoded User:", decodedUser);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error.message);
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="text-gray-600 font-semibold">Validating access...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (user.adminId) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoutes;

// /* eslint-disable react/prop-types */
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { useState, useEffect } from "react";

// const AdminRoutes = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");

//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         console.log("Decoded User:", decodedUser);

//         // Check token expiration
//         const currentTime = Date.now() / 1000; // current time in seconds
//         if (decodedUser.exp && decodedUser.exp < currentTime) {
//           console.warn("Token expired!");
//           localStorage.removeItem("accessToken");
//           navigate("/auth/sign-in", { replace: true });
//           return;
//         }

//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token:", error.message);
//         localStorage.removeItem("accessToken");
//         navigate("/auth/sign-in", { replace: true });
//         return;
//       }
//     } else {
//       navigate("/auth/sign-in", { replace: true });
//       return;
//     }

//     setLoading(false);
//   }, [navigate]);

//   if (loading) {
//     return (
//       <div className="h-screen w-full flex justify-center items-center">
//         <p className="text-gray-600 font-semibold">Validating access...</p>
//       </div>
//     );
//   }

//   // If user not found
//   if (!user) {
//     return <Navigate to="/auth/sign-in" state={{ from: location }} replace />;
//   }

//   // If not an admin, redirect
//   if (user.adminId) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default AdminRoutes;
