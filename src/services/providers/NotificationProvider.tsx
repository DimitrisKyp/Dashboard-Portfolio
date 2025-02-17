import { useEffect, useState, ReactNode } from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../../utils/translator";
import { RootState } from "../../store/store";
import { NotificationContext } from "../notificationContext";
import { setNotificationHandler } from "../notificationUtils";

// Type definition for a notification
interface Notification {
  id: number;
  message: string;
  type: "success" | "error" | "warning";
}

// Props type for NotificationBar
interface NotificationBarProps {
  message: string;
  type: "success" | "error" | "warning";
  onRemove: () => void;
}

// NotificationBar Component
const NotificationBar: React.FC<NotificationBarProps> = ({ message, type, onRemove }) => {
  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onRemove]);

  return (
    <div
      className={`notification-item border-1 w-full max-w-[250px] rounded-md p-4 text-lg shadow-lg max-md:text-base ${bgColor[type]} text-center text-tooltip`}
    >
      {message}
    </div>
  );
};

// Props type for NotificationProvider
interface NotificationProviderProps {
  children: ReactNode;
}

// NotificationProvider Component
export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const language = useSelector((state: RootState) => state.preferences.language);

  const translation = (message: string) => {
    return getTranslation("notifications", message, language);
  };

  const addNotificationToState = (message: string, type: "success" | "error" | "warning") => {
    const id = Math.floor(Math.random() * 1000);
    setNotifications(prev => [...prev, { id, message, type }]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    setNotificationHandler(addNotificationToState);
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification: addNotificationToState }}>
      <div className="notification-container fixed bottom-2 left-0 flex w-full flex-col items-center">
        {notifications.map(item => (
          <NotificationBar
            key={item.id}
            message={translation(item.message)}
            type={item.type}
            onRemove={() => removeNotification(item.id)}
          />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};
