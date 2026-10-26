
import ApplicationList from "../components/ApplicationList";

export default function ForwardingDashboard({
  applications,
  onForward,
}) {
  const pendingApplications = applications.filter(
    (application) => application.status === "Submitted"
  );

  const forwardedApplications = applications.filter(
    (application) => application.status === "Forwarded"
  );

  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <h2>Forwarding Officer Dashboard</h2>
        <p>
          Review submitted requests and forward them to the
          Approving Authority.
        </p>
      </section>

      <section className="dashboard-section">
        <h3>Pending Applications</h3>

        {pendingApplications.length === 0 ? (
          <p>No pending applications to forward.</p>
        ) : (
          pendingApplications.map((application) => (
            <div className="application-card" key={application.id}>
              <h3>{application.title}</h3>
              <p>Application ID: {application.id}</p>
              <p>Status: {application.status}</p>

              <button
                type="button"
                onClick={() => onForward(application.id)}
              >
                Forward to Sir
              </button>
            </div>
          ))
        )}
      </section>

      <section className="dashboard-section">
        <h3>Already Forwarded</h3>

        {forwardedApplications.length === 0 ? (
          <p>No applications have been forwarded yet.</p>
        ) : (
          <ApplicationList
            applications={forwardedApplications}
            showDetails={false}
            onSelect={() => {}}
          />
        )}
      </section>
    </div>
  );
}
