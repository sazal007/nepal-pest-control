import { useMutation } from "@tanstack/react-query";
import { CreateNewsletterRequest } from "@/types/newsletter";
import { toast } from "sonner";
import { createNewsletter } from "@/services/newsletter.service";
import { NormalizedError } from "@/api/axios";

export const useNewsletter = () => {
  return useMutation({
    mutationFn: (email: string) => {
      const newsletterData: CreateNewsletterRequest = {
        email,
        is_subscribed: true,
      };
      return createNewsletter(newsletterData);
    },
    onSuccess: () => {
      toast.success("Subscribed to newsletter successfully");
    },
    onError: (error: NormalizedError) => {
      console.error("Failed to subscribe:", error);

      // Show field-specific error if available (e.g., email validation)
      if (error.fieldErrors?.email) {
        toast.error(error.fieldErrors.email);
        return;
      }

      // Otherwise show the general message
      toast.error(error.message);
    },
  });
};
