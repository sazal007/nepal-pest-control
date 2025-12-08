export interface AppointmentReason {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  message: string | null;
  date: string | null;
  time: string | null;
  status: "pending" | "completed" | "cancelled";
  reason: AppointmentReason | null;
  created_at: string;
  updated_at: string;
}

export interface AppointmentFormData {
  full_name: string;
  email?: string;
  phone: string;
  reason_id: number;
  message?: string;
  date?: string;
  time?: string;
  status?: "pending" | "completed" | "cancelled";
}
