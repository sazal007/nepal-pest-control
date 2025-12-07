import { PopUp, PopupFormData } from "@/types/popup";
import { apiClient } from "@/api/axios";

export const popupService = {
  getActivePopUp: async (): Promise<PopUp | null> => {
    const response = await apiClient.get("/api/popup/?is_active=true");
    // API returns an array, extract first element or return null
    const data = response.data;
    if (Array.isArray(data) && data.length > 0) {
      return data[0];
    }
    return null;
  },
  submitForm: async (
    popupId: number,
    formData: PopupFormData
  ): Promise<{ success: boolean; message: string }> => {
    const response = await apiClient.post("/api/popup-form/", {
      popup: popupId,
      ...formData,
    });
    return response.data;
  },
};
