interface Window {
  umami: {
    trackEvent: (eventName: string, eventType: string) => void;
  };
}
