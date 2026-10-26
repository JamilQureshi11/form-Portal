
import { FileCheck2, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">
        <div className="brand-icon">
          <FileCheck2 size={28} />
        </div>

        <div>
          <h2>FormFlow</h2>
          <p>Application Approval System</p>
        </div>
      </div>

      <div className="header-security">
        <ShieldCheck size={18} />
        <span>Approval Workflow</span>
      </div>
    </header>
  );
}
