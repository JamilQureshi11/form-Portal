
export default function RoleSelector({ role, onRoleChange }) {
  const roles = [
    { value: "applicant", label: "Applicant" },
    { value: "forwarder", label: "H-R Officer" },
    { value: "approver", label: "Approving Authority (Manager)" },
  ];

  return (
    <div className="role-selector">
      <label htmlFor="role-select">View Dashboard As:</label>

      <select
        id="role-select"
        value={role}
        onChange={(event) => onRoleChange(event.target.value)}
      >
        {roles.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
