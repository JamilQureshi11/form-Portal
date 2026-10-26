
export default function NotificationPanel({ applications }) {
  const decidedApplications = applications.filter(
    (application) =>
      application.status === "Approved" ||
      application.status === "Rejected"
  );

  return (
    <div className="notification-panel">
      <h2>My Notifications</h2>

      {decidedApplications.length === 0 ? (
        <p>
          No notifications yet. Your application decision will
          appear here.
        </p>
      ) : (
        decidedApplications.map((application) => (
          <div
            className="notification-card"
            key={application.id}
          >
            <h3>
              {application.status === "Approved"
                ? "Application Approved"
                : "Application Rejected"}
            </h3>

            <p>
              <strong>Application:</strong> {application.title}
            </p>

            <p>
              {application.decisionMessage}
            </p>

            <p>
              <strong>Status:</strong> {application.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
