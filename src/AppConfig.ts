interface AppConfig {
  OWM_API_KEY: string;
}

const appConfig: AppConfig = {
  OWM_API_KEY: process.env.REACT_APP_OWM_API_KEY || '',
};

export default appConfig;
