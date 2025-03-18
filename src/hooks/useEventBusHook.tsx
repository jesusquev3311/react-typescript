/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useRef, ReactNode } from "react";

// Define event handlers storage
type EventHandler = (data?: unknown) => void;
type EventMap = Record<string, EventHandler[]>;

const EventBusContext = createContext<{
  emit: (event: string, data?: unknown) => void;
  subscribe: (event: string, handler: EventHandler) => void;
  unSubscribe: (event: string, handler: EventHandler) => void;
} | null>(null);

// Provider Component
export function EventBusProvider({ children }: { children: ReactNode }) {
  const eventsRef = useRef<EventMap>({});

  const emit = (event: string, data?: unknown) => {
    eventsRef.current[event]?.forEach((handler) => handler(data));
  };

  const subscribe = (event: string, handler: EventHandler) => {
    if (!eventsRef.current[event]) {
      eventsRef.current[event] = [];
    }
    eventsRef.current[event].push(handler);
  };

  const unSubscribe = (event: string, handler: EventHandler) => {
    if (eventsRef.current[event]) {
      eventsRef.current[event] = eventsRef.current[event].filter(
        (h) => h !== handler
      );
    }
  };

  return (
    <EventBusContext.Provider value={{ emit, subscribe, unSubscribe }}>
      {children}
    </EventBusContext.Provider>
  );
}

// Custom Hook to use Event Bus
export function useEventBus() {
  const context = useContext(EventBusContext);
  if (!context) {
    throw new Error("useEventBus must be used within an EventBusProvider");
  }
  return context;
}
