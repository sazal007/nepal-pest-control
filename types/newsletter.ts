export interface Newsletter {
  id: number;
  email: string;
  is_subscribed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateNewsletterRequest {
  email: string;
  is_subscribed?: boolean;
}
