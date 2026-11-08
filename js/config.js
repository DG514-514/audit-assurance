/*
 * Audit Assurance — site settings. Edit these values; no other file needs to change.
 *
 * formEndpoint: where quote requests are sent. The site has no backend, so use a form service:
 *   - Formspree:  create a form at formspree.io and paste its URL, e.g. "https://formspree.io/f/abcdwxyz"
 *   - Netlify:    leave empty and deploy on Netlify with forms enabled (see README)
 *   If left empty, the form opens the visitor's email app with the request pre-filled to `email` below.
 */
window.AA_CONFIG = {
  formEndpoint: '',
  email: 'info@auditassurance.ca',
  phone: '514 000-0000',
  phoneE164: '+15140000000'
};
