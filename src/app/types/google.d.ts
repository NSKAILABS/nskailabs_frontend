// Google Sign-In types
export interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

export interface GoogleButtonOptions {
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  size?: 'small' | 'medium' | 'large';
  width?: number;
  text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
  shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  logo_alignment?: 'left' | 'center';
  type?: 'standard' | 'icon';
}

export interface GoogleInitializeConfig {
  client_id: string;
  callback: (response: GoogleCredentialResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
}

export interface GoogleAccountsId {
  initialize: (config: GoogleInitializeConfig) => void;
  renderButton: (element: HTMLElement | null, options: GoogleButtonOptions) => void;
  prompt: (callback?: (notification: { isNotDisplayed: () => boolean; isSkippedMoment: () => boolean }) => void) => void;
  disableAutoSelect: () => void;
}

export interface GoogleAccounts {
  id: GoogleAccountsId;
}

// Extend the global Window interface
declare global {
  interface Window {
    google?: {
      accounts: GoogleAccounts;
    };
  }
}

export {};