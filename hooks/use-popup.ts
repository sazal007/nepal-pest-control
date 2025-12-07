import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { popupService } from "@/services/popup.service";
import { PopUp, PopupFormData } from "@/types/popup";

export const useActivePopup = () => {
  return useQuery<PopUp | null>({
    queryKey: ["popup", "active"],
    queryFn: popupService.getActivePopUp,
    staleTime: 2 * 60 * 1000, // 2 minutes for active popup
    gcTime: 5 * 60 * 1000,
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
