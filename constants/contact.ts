export const nepalpestcontrolAddress = "Basundhra Kathmandu, Nepal";
export const nepalpestcontrolEmail = "sales.obpl@gmail.com";

// Regular phone numbers
export const nepalpestcontrolPhone = ["+977 9851210566", "+977 9818679752"];

// Hotline numbers
export const nepalpestcontrolHotline = [
  "+977 9843141616",
  "+977 9843141614",
  "+977 9810306060",
];

// Combined display string for backward compatibility
export const nepalpestcontrolPhoneDisplay = [
  ...nepalpestcontrolPhone,
  ...nepalpestcontrolHotline.map((num) => `${num} (Hotline)`),
].join(", ");

export const nepalpestcontrolFullAddress = "Basundhra Kathmandu, Nepal";
