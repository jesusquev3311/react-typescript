import { useState, createContext, useContext, ReactNode } from "react";

// Define event handlers storage
type EventHandler<T = unknown> = (data?: T) => void;
type EventMap = Record<string, EventHandler[]>;

const EventBusContext = createContext<{
  emit: (event: string, data?: unknown) => void;
  on: (event: string, handler: EventHandler) => void;
  off: (event: string, handler: EventHandler) => void;
}>({
  emit: () => {},
  on: () => {},
  off: () => {},
});

// Provider Component
export const EventBusProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<EventMap>({});

  const emit = (event: string, data?: unknown) => {
    if (events[event]) {
      events[event].forEach((handler) => handler(data));
    }
  };

  const on = (event: string, handler: EventHandler) => {
    setEvents((prev) => ({
      ...prev,
      [event]: [...(prev[event] || []), handler],
    }));
  };

  const off = (event: string, handler: EventHandler) => {
    setEvents((prev) => ({
      ...prev,
      [event]: prev[event]?.filter((h) => h !== handler) || [],
    }));
  };

  return (
    <EventBusContext.Provider value={{ emit, on, off }}>
      {children}
    </EventBusContext.Provider>
  );
};

// Custom Hook to use Event Bus
const useEventBus = () => useContext(EventBusContext);

// eslint-disable-next-line react-refresh/only-export-components
export default useEventBus;
