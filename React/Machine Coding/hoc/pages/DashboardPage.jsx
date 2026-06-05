import React from "react";
import Dashboard from "../components/Dashboard";
import withAuth from "../hocs/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;

// If we add more HOCs (when the app grows) like withLogger, withFeatureFlag, withTheme then it becomes wrapper hell
// export default withAuth(
//     withLogger(
//         withFeatureFlag(
//             withTheme(
//                 Dashboard
//             )
//         )
//     )
// ) 

// Solution for the above wrapper hell problem is -> Custom Hooks

// hocs/ → reusable wrappers
// ✔ But:
// Multiple HOCs → ⛔ wrapper hell
// Custom hooks → ✅ cleaner approach