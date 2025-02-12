import { createContext } from "react";

// Define the shape of the notification context
export interface NotificationContextType {
  addNotification: (
    message: string,
    type: "success" | "error" | "warning"
  ) => void;
}

// Create the NotificationContext
export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);
