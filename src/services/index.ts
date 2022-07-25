import HttpClient from 'utils/HttpClient';

const submitFormToGoogleSheet = async (params: FormData) => {
  return HttpClient.post<FormData, any>(
    '/macros/library/d/1brIl4mbLdxMSs6AmM2HX67RI-jYirND3W2DPquS9men0BeH5mTsd9z1q/1',
    params,
    { headers: { 'Content-Type': 'multipart/form-data', mode: 'no-cors' } }
  );
};

export { submitFormToGoogleSheet };
