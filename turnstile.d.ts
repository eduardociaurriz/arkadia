// turnstile.d.ts
export {};

declare global {
  interface Window {
    turnstile?: {
      reset: () => void;
      render: (
        container: HTMLElement | string,
        options?: {
          sitekey?: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark";
          // añade más opciones según doc oficial si quieres
        }
      ) => void;
    };
  }
}
