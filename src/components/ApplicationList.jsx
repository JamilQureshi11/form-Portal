
import StatusBadge from "./StatusBadge";

export default function ApplicationList({
  applications,
  showDetails = true,
  onSelect,
}) {
  if (!applications || applications.length === 0) {
    return <p>No applications found.</p>;
  }

  return (
    <div className="application-list">
      {applications.map((application) => (
        <div className="application-card" key={application.id}>
          <h3>{application.title}</h3>

          <p>
            <strong>Status:</strong>{" "}
            <StatusBadge status={application.status} />
          </p>

          {showDetails && (
            <>
              <p>
                <strong>Applicant:</strong>{" "}
                {application.fullName || application.applicantName}
              </p>

              <p>
                <strong>Email:</strong> {application.email}
              </p>

              <p>
                <strong>Applicant Type:</strong>{" "}
                {application.applicantType}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {application.description}
              </p>
            </>
          )}

          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(application)}
            >
              View Application
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
