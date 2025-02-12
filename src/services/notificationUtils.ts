// External notification handler variable
let notificationHandler:
  | ((message: string, type: "success" | "error" | "warning") => void)
  | null = null;

// Function to set an external handler
export const setNotificationHandler = (
  handler: (message: string, type: "success" | "error" | "warning") => void
) => {
  notificationHandler = handler;
};

// Function to trigger a notification externally
export const addNotification = (
  message: string,
  type: "success" | "error" | "warning"
) => {
  if (notificationHandler) {
    notificationHandler(message, type);
  }
};
