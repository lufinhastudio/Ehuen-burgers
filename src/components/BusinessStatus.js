import { getBusinessStatus } from "@/lib/order";
import { business } from "@/data/business";

export default function BusinessStatus({ variant = "" }) {
  const status = getBusinessStatus();

  return (
    <p className={`business-status ${variant}`}>
      <span className={status.isOpen ? "status-open" : "status-closed"}>
        {status.isOpen ? "ABIERTO" : "CERRADO"}
      </span>
      {status.isOpen ? ` · ${business.hoursText}` : null}
    </p>
  );
}
