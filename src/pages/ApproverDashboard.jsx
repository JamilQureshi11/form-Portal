
import { useState } from "react";
import ApplicationDetails from "../components/ApplicationDetails";

export default function ApproverDashboard({
  applications,
  onDecision,
}) {
  const [selectedId, setSelectedId] = useState(null);

  const forwardedApplications = applications.filter(
    (application) => application.status === "Forwarded"
  );

  const selectedApplication = applications.find(
    (application) => application.id === selectedId
  );

  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <h2>Approving Authority Dashboard</h2>
        <p>
          Review applications forwarded by the Forwarding Officer.
        </p>
      </section>

      <section className="dashboard-section">
        <h3>Waiting for Your Decision</h3>

        {forwardedApplications.length === 0 ? (
          <p>No applications are waiting for approval.</p>
        ) : (
          forwardedApplications.map((application) => (
            <button
              type="button"
              className="application-card"
              key={application.id}
              onClick={() => setSelectedId(application.id)}
            >
              <strong>{application.title}</strong>
              <span>Applicant: {application.fullName}</span>
              <span>Email: {application.email}</span>
              <span>Type: {application.applicantType}</span>
              <span>Status: {application.status}</span>
              <span>Click to review</span>
            </button>
          ))
        )}
      </section>

      <section className="dashboard-section">
        <ApplicationDetails
          application={selectedApplication}
          onDecision={(id, status) => {
            onDecision(id, status);
            setSelectedId(null);
          }}
        />
      </section>

      <section className="dashboard-section">
        <h3>Decision History</h3>

        {applications.filter(
          (application) =>
            application.status === "Approved" ||
            application.status === "Rejected"
        ).length === 0 ? (
          <p>No decisions have been made yet.</p>
        ) : (
          applications
            .filter(
              (application) =>
                application.status === "Approved" ||
                application.status === "Rejected"
            )
            .map((application) => (
              <div className="application-card" key={application.id}>
                <strong>{application.title}</strong>
                <p>Applicant: {application.fullName}</p>
                <p>Email: {application.email}</p>
                <p>Decision: {application.status}</p>
                <p>{application.decisionMessage}</p>
              </div>
            ))
        )}
      </section>
    </div>
  );
}
