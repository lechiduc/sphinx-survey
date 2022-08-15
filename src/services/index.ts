import HttpClient from 'utils/HttpClient';

interface Response {
  result: 'success' | 'error';
}
const submitFormToGoogleSheet = async (params: FormData) => {
  return HttpClient.post<FormData, Response>(
    '/macros/s/AKfycbzg0LQCEM5IfC6knVhHDha3uztsVWFDZZ4TlJ2rBIBKVdUQwSVNkGSSfDn6_lDZ2GV0Gg/exec',
    params,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
};

export { submitFormToGoogleSheet };
