// for the Window object, finding the umami instance in browser
interface Window {
  umami: {
    track: (name: string) => void;
  };
}
