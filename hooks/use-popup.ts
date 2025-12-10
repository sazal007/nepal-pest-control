import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { popupService } from "@/services/popup.service";
import { PopUp, PopupFormData } from "@/types/popup";

export const useActivePopup = () => {
  return useQuery<PopUp | null>({
    queryKey: ["popup", "active"],
    queryFn: popupService.getActivePopUp,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const usePopupSubmit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      popupId,
      formData,
    }: {
      popupId: number;
      formData: PopupFormData;
    }) => popupService.submitForm(popupId, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["popup-forms"] });
    },
  });
};
