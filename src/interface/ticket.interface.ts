export interface TicketInterface {
  assigned_to: null | string;
  report_to: null | string;
  created_by: {
    name: string;
    uid: string;
    employee_id: string;
  };
  attachments: Array<string>;
  title: string;
  department: {
    name: string;
    id: string;
  };
  description: string;
  priority: "low" | "high" | "medium";
  type: "purchase" | "issue";
  status: "pending" | "processing" | "completed";
  created_at: Date;
  resolved_at: Date;
}
