
const statusClasses = {
  Submitted: "submitted",
  Forwarded: "forwarded",
  Approved: "approved",
  Rejected: "rejected",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`status-badge ${statusClasses[status] || ""}`}
    >
      {status}
    </span>
  );
}
