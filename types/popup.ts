export interface PopUp {
  id?: number;
  title: string;
  image?: File | string | null;
  disclaimer: string;
  enabled_fields: string[];
  is_active: boolean;
}

export interface PopupFormData {
  [key: string]: string;
}
