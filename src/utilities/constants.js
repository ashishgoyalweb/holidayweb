const adminBaseRoute = "/radmin";

export const RouteConstants = {
  admin: adminBaseRoute,
  login: "/login",
  adminRoutes: {
    dashboard: `${adminBaseRoute}/`,
    holiday: `${adminBaseRoute}/holiday`,
    country: `${adminBaseRoute}/country`,
    package: `${adminBaseRoute}/package`,
    newbooking: `${adminBaseRoute}/newbooking`,
  },
};

export const bookingMenu = [
  {
    tabName: "Lead PAX",
    key: "LEAD",
  },
  {
    tabName: "Add Passengers",
    key: "APAS",
  },
  {
    tabName: "Flight",
    key: "FLIGHT",
  },
  {
    tabName: "Hotel",
    key: "HOTEL",
  },
  {
    tabName: "Car",
    key: "CAR",
  },
  {
    tabName: "Other",
    key: "OTHER",
  },
  {
    tabName: "Payment",
    key: "PAYMENT",
  },
  {
    tabName: "Conditions",
    key: "CONDITIONS",
  },
  {
    tabName: "Supplier",
    key: "SUPPLIER",
  },
  {
    tabName: "Profit",
    key: "PROFIT",
  },
  {
    tabName: "Notes",
    key: "NOTES",
  },
];

export const bannerChoice = [
  { text: "Image", value: "image" },
  { text: "Video", value: "video" },
];

export const errorMsg = [
  {
    holidayType:
      "Board Basis can't be leave blank & must be at least 5 characters long! ",
  },
];
