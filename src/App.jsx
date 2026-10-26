
import { useState } from "react";
import Header from "./components/Header";
import RoleSelector from "./components/RoleSelector";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import ForwardingDashboard from "./pages/ForwardingDashboard";
import ApproverDashboard from "./pages/ApproverDashboard";

export default function App() {
  const [role, setRole] = useState("applicant");
  const [applications, setApplications] = useState([]);
  const [selectedApplicationId, setSelectedApplicationId] =
    useState(null);

  function handleSubmit(formData) {
    const newApplication = {
      id: crypto.randomUUID(),
      ...formData,
      applicantName: formData.fullName,
      status: "Submitted",
      decisionMessage: "",
      createdAt: new Date().toISOString(),
    };

    setApplications((current) => [newApplication, ...current]);
    setSelectedApplicationId(newApplication.id);
  }

  function handleForward(id) {
    setApplications((current) =>
      current.map((application) =>
        application.id === id &&
        application.status === "Submitted"
          ? { ...application, status: "Forwarded" }
          : application
      )
    );
  }

  function handleDecision(id, status) {
    if (!["Approved", "Rejected"].includes(status)) return;

    setApplications((current) =>
      current.map((application) =>
        application.id === id &&
        application.status === "Forwarded"
          ? {
              ...application,
              status,
              decisionMessage:
                status === "Approved"
                  ? "Your application has been approved."
                  : "Your application has been rejected.",
            }
          : application
      )
    );
  }

  return (
    <div className="app-shell">
      <Header />

      <main className="main-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">WORKFLOW MANAGEMENT</p>
            <h1>Application Portal</h1>
          </div>
        </div>

        <RoleSelector
          role={role}
          onRoleChange={setRole}
        />

        {role === "applicant" && (
          <ApplicantDashboard
            applications={applications}
            onSubmit={handleSubmit}
            onSelect={(application) =>
              setSelectedApplicationId(application.id)
            }
          />
        )}

        {role === "forwarder" && (
          <ForwardingDashboard
            applications={applications}
            onForward={handleForward}
          />
        )}

        {role === "approver" && (
          <ApproverDashboard
            applications={applications}
            onDecision={handleDecision}
          />
        )}

        {role === "applicant" && selectedApplicationId && (
          <p className="muted">
            Your latest request ID: {selectedApplicationId}
          </p>
        )}
      </main>

      <footer className="footer">
        FormFlow · Application Approval System
      </footer>
    </div>
  );
}
