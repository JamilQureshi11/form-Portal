
import ApplicationForm from "../components/ApplicationForm";
import ApplicationList from "../components/ApplicationList";
import NotificationPanel from "../components/NotificationPanel";

export default function ApplicantDashboard({
  applications,
  onSubmit,
  onSelect,
}) {
  return (
    <div className="dashboard">
      <section className="dashboard-section">
        <ApplicationForm onSubmit={onSubmit} />
      </section>

      <section className="dashboard-section">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p>You have not submitted any applications yet.</p>
        ) : (
          <ApplicationList
            applications={applications}
            showDetails={true}
            onSelect={onSelect}
          />
        )}
      </section>

      <section className="dashboard-section">
        <NotificationPanel applications={applications} />
      </section>
    </div>
  );
}
