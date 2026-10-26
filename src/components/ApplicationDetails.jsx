
import StatusBadge from "./StatusBadge";

export default function ApplicationDetails({
  application,
  onDecision,
}) {
  if (!application) {
    return (
      <div className="application-details">
        <h2>Application Details</h2>
        <p>
          Please select an application above to see its details.
        </p>
      </div>
    );
  }

  return (
    <div className="application-details">
      <h2>Applicant Information</h2>

      <p>
        <strong>Full Name:</strong> {application.fullName}
      </p>

      <p>
        <strong>Email:</strong> {application.email}
      </p>

      <p>
        <strong>Gender:</strong>{" "}
        {application.gender || "Not provided"}
      </p>

      <p>
        <strong>Applicant Type:</strong> {application.applicantType}
      </p>

      <hr />

      <h3>Application Details</h3>

      <p>
        <strong>Purpose:</strong> {application.title}
      </p>

      <p>
        <strong>Description:</strong>
      </p>

      <p>{application.description}</p>

      <p>
        <strong>Submitted:</strong>{" "}
        {new Date(application.createdAt).toLocaleString()}
      </p>

      <p>
        <strong>Status:</strong>
      </p>

      <StatusBadge status={application.status} />

      {application.status === "Forwarded" && (
        <div className="decision-buttons">
          <button
            type="button"
            onClick={() =>
              onDecision(application.id, "Approved")
            }
          >
            Approve Application
          </button>

          <button
            type="button"
            onClick={() =>
              onDecision(application.id, "Rejected")
            }
          >
            Reject Application
          </button>
        </div>
      )}

      {application.decisionMessage && (
        <div className="decision-message">
          <h3>Decision Message</h3>
          <p>{application.decisionMessage}</p>
        </div>
      )}
    </div>
  );
}
