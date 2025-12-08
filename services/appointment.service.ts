import apiClient from "@/api/axios";
import { AppointmentFormData, AppointmentReason } from "@/types/appointment";

export const appointmentService = {
  createAppointment: async (data: AppointmentFormData) => {
    const response = await apiClient.post("/api/appointments/", data);
    return response.data;
  },
  getReasons: async (): Promise<AppointmentReason[]> => {
    const response = await apiClient.get("/api/appointment-reasons/");
    return response.data;
  },
};
