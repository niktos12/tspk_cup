interface Env {
    REACT_APP_BACKEND_URL?: string;
}

declare global {
    interface Window {
        env: Env;
    }
}

export {}