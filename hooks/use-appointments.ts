import {
  Appointment,
  AppointmentFormData,
  AppointmentReason,
} from "@/types/appointment";
import { appointmentService } from "@/services/appointment.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetReasons = () => {
  return useQuery<AppointmentReason[]>({
    queryKey: ["reasons"],
    queryFn: () => appointmentService.getReasons(),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useCreateAppointment = () => {
  return useMutation<Appointment, Error, AppointmentFormData>({
    mutationFn: (data: AppointmentFormData) =>
      appointmentService.createAppointment(data),
    onSuccess: () => {
      toast.success("Appointment created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
