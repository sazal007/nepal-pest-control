"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

import { useCreateAppointment, useGetReasons } from "@/hooks/use-appointments";
import { Button } from "../ui/Button";

// Validation schema: require name, phone, and one reason; others optional
const appointmentSchema = z.object({
  full_name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(1, "Phone number is required"),
  date: z
    .string()
    .optional()
    .refine(
      (value) => !value || !Number.isNaN(new Date(value).getTime()),
      "Invalid date"
    ),
  message: z.string().optional(),
  reasonId: z.number().min(1, "Please select one feature"),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const AppointmentForm = () => {
  const { data: reasons } = useGetReasons();
  const { mutate: createAppointment, isPending } = useCreateAppointment();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      message: "",
      reasonId: 0,
      date: undefined,
    },
  });

  const selectedReasonId = useWatch({
    control,
    name: "reasonId",
  });

  const onSubmit = (data: AppointmentFormValues) => {
    const submissionData = {
      full_name: data.full_name.trim(),
      email: data.email?.trim() || undefined,
      phone: data.phone.trim(),
      message: data.message?.trim() || undefined,
      date: data.date ? format(new Date(data.date), "yyyy-MM-dd") : undefined,
      reason_id: data.reasonId,
      status: "pending" as const,
    };

    createAppointment(submissionData, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="w-full">
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("full_name")}
              placeholder="Full Name"
              className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-blue-600 text-sm bg-transparent transition-colors placeholder-gray-400"
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.full_name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone No."
              className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-blue-600 text-sm bg-transparent transition-colors placeholder-gray-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Your Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-blue-600 text-sm bg-transparent transition-colors placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              placeholder="Select Date"
              className="w-full px-0 py-3 border-b border-gray-200 focus:outline-none focus:border-blue-600 text-sm bg-transparent transition-colors placeholder-gray-400"
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
            )}
          </div>
        </div>

        {/* Features Checkboxes */}
        <div className="pt-8">
          <label className="block text-lg font-bold text-gray-900 mb-6">
            Features <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {reasons?.map((reason, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  value={reason.id}
                  className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                  {...register("reasonId", { valueAsNumber: true })}
                  checked={selectedReasonId === reason.id}
                  onChange={() =>
                    setValue("reasonId", reason.id, { shouldValidate: true })
                  }
                />
                <span className="text-sm text-gray-600 group-hover:text-blue-700 transition-colors">
                  {reason.name}
                </span>
              </label>
            ))}
          </div>
          {errors.reasonId && (
            <p className="text-red-500 text-xs mt-2">
              {errors.reasonId.message}
            </p>
          )}
        </div>

        {/* Requirements */}
        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Other Requirements
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us more about your project..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm bg-gray-50 resize-none transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Request"}
          </Button>
        </div>
      </form>
    </div>
  );
};
