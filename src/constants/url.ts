export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL = {
  Auth: {
    Login: "auth/login",
    ForgotPassword: "auth/forgot-password",
    ResetPassword: "auth/reset-password",
    ResendOtp: "auth/resend-otp",
    VerifyOtp: "auth/verify-otp",
  },
  Product: {
    GetAllProduct: "/product/new-arrivals",
    TeamMembers: "team/members",
  },
} as const;

// Construct the URL object
export const URL_KEYS: { [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string } } = Object.fromEntries(Object.entries(URL).map(([key, subKeys]) => [key, Object.fromEntries(Object.entries(subKeys).map(([subKey, path]) => [subKey, `${BASE_URL}${path}`]))])) as {
  [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string };
};
