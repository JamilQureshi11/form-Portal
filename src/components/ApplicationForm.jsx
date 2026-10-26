
import { useState } from "react";

export default function ApplicationForm({ onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [applicantType, setApplicantType] = useState("Internship Student");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      fullName,
      email,
      gender,
      applicantType,
      title: purpose,
      description,
    });

    setFullName("");
    setEmail("");
    setGender("");
    setApplicantType("Internship Student");
    setPurpose("");
    setDescription("");
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <h2>Application Form</h2>
      <p>Please enter your information below.</p>

      <label>Full Name *</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter your full name"
        required
      />

      <label>Email Address *</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        required
      />

      <label>Gender</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Prefer not to say</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>Applicant Type *</label>
      <select
        value={applicantType}
        onChange={(e) => setApplicantType(e.target.value)}
        required
      >
        <option value="Internship Student">Internship Student</option>
        <option value="University Student">University Student</option>
        <option value="Client">Client</option>
        <option value="Customer">Customer</option>
        <option value="Employee">Employee</option>
        <option value="Other">Other</option>
      </select>

      <label>Application Purpose *</label>
      <input
        type="text"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="e.g. Internship approval"
        required
      />

      <label>Application Details *</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Explain your application..."
        rows="5"
        required
      />

      <button type="submit">Submit Application</button>
    </form>
  );
}
