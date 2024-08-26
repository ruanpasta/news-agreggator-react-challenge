export const getApiUrl = () =>  ({
  newsApiUrl: import.meta.env.VITE_NEWS_API_URL,
  newsApiKey: import.meta.env.VITE_NEWS_API_KEY,
  theGuardianApiUrl: import.meta.env.VITE_THE_GUARDIAN_API_URL,
  theGuardianApiKey: import.meta.env.VITE_THE_GUARDIAN_API_KEY,
  newYorkTimesApiUrl: import.meta.env.VITE_NEW_YORK_TIMES_API_URL,
  newYorkTimesApiKey: import.meta.env.VITE_NEW_YORK_TIMES_API_KEY
})