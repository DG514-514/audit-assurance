(function () {
  'use strict';
  var cfg = window.AA_CONFIG || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Contact details from config ---------- */
  $$('[data-config="phone"]').forEach(function (el) { if (cfg.phone) el.textContent = cfg.phone; });
  $$('[data-config="email"]').forEach(function (el) { if (cfg.email) el.textContent = cfg.email; });
  $$('[data-config="phone-link"]').forEach(function (el) { if (cfg.phoneE164) el.href = 'tel:' + cfg.phoneE164; });
  $$('[data-config="email-link"]').forEach(function (el) { if (cfg.email) el.href = 'mailto:' + cfg.email; });
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Language (French is the page default) ---------- */
  var EN = {
    skip: 'Skip to content',
    topbar: 'A first in Quebec: insurance against tax audits',
    logoSub: 'a division of Fort Assurances',
    menu: 'Menu',
    navCoverage: 'Coverage', navPlans: 'Personal &amp; business', navHow: 'How it works', navFaq: 'FAQ', navQuote: 'Get a quote',
    heroEyebrow: 'First and only in Quebec',
    heroTitle: 'Audited by the CRA or Revenu Québec? <span class="hl">You\'re protected.</span>',
    heroLead: 'Audit Assurance covers the professional fees of the accountants and tax specialists who represent you during a tax audit — for individuals and businesses alike.',
    heroCta: 'Get my quote', heroCta2: 'See what\'s covered',
    heroP1: 'CRA and Revenu Québec audits', heroP2: 'Individuals, self-employed and businesses', heroP3: 'Free, no-obligation quote',
    letterTag: 'Audit notice', stamp: 'Protected', chipCovered: 'covered', chipCovered2: 'covered',
    s1a: '1<sup>st</sup>', s1b: 'tax audit insurance in Quebec',
    s2a: '2', s2b: 'authorities covered: CRA and Revenu Québec',
    s3a: '100%', s3b: 'Quebec-based, backed by Fort Assurances',
    whyKicker: 'Why it matters',
    whyTitle: 'An audit can be expensive — even when everything is in order.',
    whyP1: 'Every year, the Canada Revenue Agency and Revenu Québec review thousands of returns from individuals and businesses. A simple request for documents can turn into a full audit.',
    whyP2: 'Even with nothing to hide, responding properly takes time and professional help. Those fees are rarely budgeted for. Audit Assurance takes care of them, so you can defend yourself without hesitation.',
    covKicker: 'Coverage', covTitle: 'What your protection can cover',
    covLead: 'The fees of the professionals who support you from the first notice until your file is closed.',
    c1t: 'Income tax audits', c1d: 'Reviews and audits of your federal (CRA) and provincial (Revenu Québec) income tax returns.',
    c2t: 'GST/HST and QST', c2d: 'Sales tax audits, input tax credit claims and periodic returns.',
    c3t: 'Source deductions', c3d: 'Payroll audits, taxable benefits and employer contributions.',
    c4t: 'Professional representation', c4d: 'Fees of CPAs, tax specialists or lawyers to prepare documents, meet auditors and answer requests.',
    c5t: 'Notices of objection', c5d: 'Preparing and filing a notice of objection if you dispute a reassessment.',
    c6t: 'Information requests', c6d: 'Responding to document requests and preliminary reviews before they escalate.',
    covFine: 'Exact coverage, limits and exclusions are set out in your policy. Protection covers professional fees; it does not cover tax, interest or penalties assessed.',
    plansKicker: 'Who it\'s for', plansTitle: 'Protection for every taxpayer',
    p1badge: 'Personal', p1t: 'Individuals &amp; families',
    p1d: 'For employees, retirees, investors, rental property owners and the self-employed.',
    p1l1: 'Audits of your personal returns', p1l2: 'Credits, deductions and rental income', p1l3: 'Self-employment income', p1l4: 'Support from a professional',
    p1cta: 'Personal quote',
    p2badge: 'Business', p2t: 'SMEs &amp; businesses',
    p2d: 'For corporations, sole proprietorships, partnerships and non-profits.',
    p2l1: 'Corporate tax (CRA and Revenu Québec)', p2l2: 'GST/HST and QST', p2l3: 'Source deductions and payroll', p2l4: 'Optional coverage for shareholders',
    p2cta: 'Business quote',
    howKicker: 'How it works', howTitle: 'Simple, from start to finish',
    h1t: 'Request your quote', h1d: 'Fill out the form in a few minutes. Audit Assurance receives your request and checks that it\'s complete.',
    h2t: 'File review', h2d: 'Our underwriting team reviews your file and sets your premium.',
    h3t: 'Onboarding', h3d: 'An advisor presents the offer and guides you until your policy is issued.',
    h4t: 'Got a notice? Call us.', h4d: 'We open your file and covered representation fees are taken care of.',
    faqKicker: 'Frequently asked questions', faqTitle: 'Have questions?',
    q1: 'What is tax audit insurance?', a1: 'It\'s protection that pays the fees of the professionals (accountants, tax specialists, lawyers) who represent you when the CRA or Revenu Québec reviews or audits your returns.',
    q2: 'Is the tax owing covered?', a2: 'No. Protection covers representation and defence costs. Tax, interest and penalties assessed by the authorities remain your responsibility.',
    q3: 'Can I keep my current accountant?', a3: 'Yes. Depending on your policy, you can be represented by your own professional or by a member of our network.',
    q4: 'I\'ve been audited before. Can I still get coverage?', a4: 'Yes, in most cases. Mention it in your quote request — it helps us offer the right protection. An audit already under way when you sign up is generally not covered.',
    q5: 'How much does it cost?', a5: 'Your premium depends on your situation (individual or business, type of activity, revenue). Request a free, no-obligation quote.',
    q6: 'Who is behind Audit Assurance?', a6: 'Audit Assurance is a division of Fort Assurances, a Quebec insurance brokerage.',
    q7: 'What happens after I request a quote?', a7: 'Our team receives and reviews your request, then sets your premium. An advisor then presents the offer and guides you until your policy is issued.',
    qKicker: 'Free quote', qTitle: 'Get your quote',
    qLead: 'A few details are all we need. Our team reviews your request and an advisor contacts you, with no obligation.',
    qs1: 'Prompt review of your file', qs2: 'Service in French and English', qs3: 'Your information stays confidential',
    qPrefer: 'Prefer to talk to someone?',
    fType: '1. Type of coverage', fPersonal: 'Personal', fPersonalD: 'Individual or family', fBusiness: 'Business', fBusinessD: 'Corporation, SME, self-employed',
    eCoverage: 'Please choose a type of coverage.',
    fYou: '2. Your information', fFullName: 'Full name', fCompany: 'Company name', fIfApplicable: '(if applicable)',
    eRequired: 'This field is required.',
    fBizDetails: '3. Your business', fBizType: 'Type of business', fChoose: 'Choose…',
    b1: 'Construction &amp; renovation', b2: 'Retail', b3: 'Restaurants &amp; hospitality', b4: 'Professional services', b5: 'Health &amp; care',
    b6: 'Transportation &amp; trucking', b7: 'Real estate &amp; rentals', b8: 'Manufacturing', b9: 'Technology', b10: 'Agriculture', b11: 'Non-profit organization', b12: 'Other',
    fStructure: 'Legal structure', st1: 'Corporation (Inc.)', st2: 'Sole proprietorship', st3: 'Partnership', st4: 'Other',
    fBizOther: 'Please specify the type of business',
    fAddress: 'Address', fStreet: 'Street address', fCity: 'City', fProvince: 'Province', fPostal: 'Postal code',
    pNB: 'New Brunswick', pNS: 'Nova Scotia', pPE: 'Prince Edward Island', pNL: 'Newfoundland and Labrador', pBC: 'British Columbia', pNT: 'Northwest Territories',
    ePostal: 'Enter a valid postal code (e.g. H2X 1Y4).',
    fHistory: 'Tax profile', fRevenueBiz: 'Annual revenue', fRevenuePers: 'Annual income', fOptional: '(optional)',
    fPreferNot: 'Prefer not to say', r1: 'Under $100,000', r2: '$100,000 to $250,000', r3: '$250,000 to $500,000', r4: '$500,000 to $1M', r5: '$1M to $5M', r6: 'Over $5M',
    fAudited: 'Have you been audited by the CRA or Revenu Québec in the last 3 years?',
    yes: 'Yes', no: 'No', unsure: 'Not sure', eChoose: 'Please choose an option.',
    fByWhom: 'By which authority? <span class="opt">(optional)</span>', byCra: 'CRA',
    fContact: 'Contact details', fEmail: 'Email', eEmail: 'Enter a valid email address.', fPhone: 'Phone', ePhone: 'Enter a valid phone number.',
    fContactPref: 'Preferred contact method', cp1: 'Phone', cp2: 'Email',
    fContactTime: 'Best time to reach you', ct0: 'Any time', ct1: 'Morning', ct2: 'Afternoon', ct3: 'Evening',
    fMessage: 'Comments',
    fConsent: 'I agree that Audit Assurance may use this information to prepare my quote and contact me, in accordance with its privacy policy.',
    eConsent: 'Your consent is required to process the request.',
    fSubmit: 'Send my quote request',
    tTitle: 'Thank you! Your request has been received.', tBody: 'Our team is reviewing your request. An Audit Assurance advisor will contact you as soon as your offer is ready.', tAgain: 'New request',
    ctaTitle: 'Don\'t let an audit catch you off guard.', ctaBtn: 'Get a quote',
    footAbout: 'Protection against CRA and Revenu Québec tax audits for individuals and businesses.',
    footNav: 'Navigation', footContact: 'Contact us', footHours: 'Mon. to Fri., 9 a.m. to 5 p.m.', rights: 'All rights reserved.',
    legal: 'Coverage is subject to the terms, limits and exclusions of the policy issued. This site is not an insurance contract. Audit Assurance is not affiliated with the Canada Revenue Agency or Revenu Québec.'
  };
  var MSG = {
    fr: { sending: 'Envoi en cours…', fail: 'L\'envoi a échoué. Réessayez ou écrivez-nous à ', fix: 'Veuillez corriger les champs indiqués.', mail: 'Votre application de courriel s\'est ouverte avec la demande. Il ne reste qu\'à l\'envoyer.', title: 'Audit Assurance | Protection contre les vérifications de l\'ARC et de Revenu Québec' },
    en: { sending: 'Sending…', fail: 'Sending failed. Please try again or email us at ', fix: 'Please correct the highlighted fields.', mail: 'Your email app has opened with the request. Just press send.', title: 'Audit Assurance | Protection against CRA and Revenu Québec audits' }
  };

  var FR = {};
  var i18nEls = $$('[data-i18n]');
  i18nEls.forEach(function (el) { var k = el.getAttribute('data-i18n'); if (!(k in FR)) FR[k] = el.innerHTML; });

  var lang = 'fr';
  try { var saved = localStorage.getItem('aa-lang'); if (saved === 'en' || saved === 'fr') lang = saved; } catch (e) {}

  function setLang(l) {
    lang = l;
    var dict = l === 'en' ? EN : FR;
    i18nEls.forEach(function (el) { var k = el.getAttribute('data-i18n'); if (dict[k] != null) el.innerHTML = dict[k]; });
    document.documentElement.lang = l === 'en' ? 'en-CA' : 'fr-CA';
    document.title = MSG[l].title;
    var btn = $('#lang-toggle');
    btn.textContent = l === 'en' ? 'FR' : 'EN';
    btn.setAttribute('lang', l === 'en' ? 'fr' : 'en');
    btn.setAttribute('aria-label', l === 'en' ? 'Passer au français' : 'Switch to English');
    try { localStorage.setItem('aa-lang', l); } catch (e) {}
  }
  $('#lang-toggle').addEventListener('click', function () { setLang(lang === 'fr' ? 'en' : 'fr'); });
  if (lang !== 'fr') setLang(lang);

  /* ---------- Mobile nav ---------- */
  var nav = $('.nav'), toggle = $('.nav-toggle');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('.nav a').forEach(function (a) { a.addEventListener('click', function () { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }); });

  /* ---------- Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    $$('.card, .plan, .steps li, .section-head, .faq details').forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  /* ---------- Quote form ---------- */
  var form = $('#quote-form');
  var bizBlock = $('.biz-block'), otherType = $('.other-type'), auditDetail = $('.audit-detail');
  var company = $('#company'), bizType = $('#bizType'), bizOther = $('#bizTypeOther');

  function isBiz() { var c = form.querySelector('input[name=coverage]:checked'); return !!c && c.value === 'entreprise'; }

  function syncForm() {
    var biz = isBiz();
    form.classList.toggle('is-biz', biz);
    bizBlock.hidden = !biz;
    company.required = biz;
    bizType.required = biz;
    var showOther = biz && bizType.value === 'autre';
    otherType.hidden = !showOther;
    bizOther.required = showOther;
    var a = form.querySelector('input[name=audited]:checked');
    auditDetail.hidden = !(a && a.value === 'oui');
    var off = biz ? 1 : 0;
    $('.n-addr').textContent = 3 + off;
    $('.n-hist').textContent = 4 + off;
    $('.n-contact').textContent = 5 + off;
  }
  form.addEventListener('change', function (e) {
    syncForm();
    var f = e.target.closest('.field, .fs');
    if (f && f.classList.contains('invalid')) validateField(f);
  });
  syncForm();

  // Plan buttons preselect the coverage type
  $$('[data-quote]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var r = form.querySelector('input[name=coverage][value="' + btn.getAttribute('data-quote') + '"]');
      if (r) { r.checked = true; syncForm(); }
    });
  });

  var POSTAL = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function fieldValid(input) {
    if (input.closest('[hidden]')) return true;
    var v = (input.value || '').trim();
    if (input.type === 'checkbox') return !input.required || input.checked;
    if (input.required && !v) return false;
    if (!v) return true;
    if (input.id === 'postal') return POSTAL.test(v);
    if (input.id === 'email') return EMAIL.test(v);
    if (input.id === 'phone') return v.replace(/\D/g, '').length >= 10;
    return true;
  }

  function validateField(wrap) {
    var ok;
    var radios = $$('input[type=radio]', wrap);
    if (radios.length) {
      ok = !radios[0].required || radios.some(function (r) { return r.checked; });
    } else {
      ok = $$('input, select, textarea', wrap).every(fieldValid);
    }
    wrap.classList.toggle('invalid', !ok);
    return ok;
  }

  function validateAll() {
    var wraps = [$('.seg').closest('.fs'), $('.pills').closest('.field')].concat(
      $$('.field', form).filter(function (f) { return !f.querySelector('input[type=radio]') && f.querySelector('[required]'); })
    );
    var first = null;
    wraps.forEach(function (w) { if (!validateField(w) && !first) first = w; });
    return first;
  }

  form.addEventListener('input', function (e) {
    var f = e.target.closest('.field');
    if (f && f.classList.contains('invalid')) validateField(f);
    if (!$('.invalid', form)) { status.className = 'form-status'; status.textContent = ''; }
  });

  form.addEventListener('blur', function (e) {
    var f = e.target.closest && e.target.closest('.field');
    if (f && e.target.value) validateField(f);
  }, true);

  $('#postal').addEventListener('blur', function () {
    var v = this.value.replace(/\s+/g, '').toUpperCase();
    if (v.length === 6) this.value = v.slice(0, 3) + ' ' + v.slice(3);
  });

  function collect() {
    var fd = new FormData(form);
    var label = function (sel) { var el = $(sel); return el && el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : ''; };
    var biz = isBiz();
    return {
      'Type': biz ? 'Entreprise / Business' : 'Personnelle / Personal',
      'Nom complet / Full name': fd.get('fullName'),
      'Entreprise / Company': fd.get('company') || '—',
      'Type d\'entreprise / Business type': biz ? (bizType.value === 'autre' ? fd.get('bizTypeOther') : label('#bizType')) : '—',
      'Forme juridique / Structure': biz ? (label('#bizStructure') && $('#bizStructure').value ? label('#bizStructure') : '—') : '—',
      'Adresse / Address': [fd.get('street'), fd.get('city'), fd.get('province'), fd.get('postal')].join(', '),
      'Revenu annuel / Annual revenue': $('#revenue').value ? label('#revenue') : '—',
      'Vérifié (3 ans) / Audited (3 yrs)': fd.get('audited') + (fd.getAll('auditBy').length ? ' (' + fd.getAll('auditBy').join(', ') + ')' : ''),
      'Courriel / Email': fd.get('email'),
      'Téléphone / Phone': fd.get('phone'),
      'Contact préféré / Preferred contact': label('#contactPref') + ', ' + label('#contactTime'),
      'Langue / Language': lang === 'en' ? 'English' : 'Français',
      'Commentaires / Comments': fd.get('message') || '—',
      'Consentement / Consent': 'Oui / Yes'
    };
  }

  var status = $('.form-status');
  function showThanks() {
    form.hidden = true;
    var t = $('#thanks'); t.hidden = false; t.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.className = 'form-status'; status.textContent = '';
    if (form.website.value) return; // spam honeypot
    var bad = validateAll();
    if (bad) {
      status.className = 'form-status error';
      status.textContent = MSG[lang].fix;
      bad.scrollIntoView({ behavior: 'smooth', block: 'center' });
      var focusable = bad.querySelector('input, select, textarea'); if (focusable) focusable.focus({ preventScroll: true });
      return;
    }
    var data = collect();
    var subject = 'Demande de soumission / Quote request — ' + data['Nom complet / Full name'];

    if (cfg.formEndpoint) {
      var btn = form.querySelector('[type=submit]');
      btn.disabled = true; status.textContent = MSG[lang].sending;
      var payload = Object.assign({ _subject: subject, _replyto: data['Courriel / Email'] }, data);
      fetch(cfg.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        showThanks();
      }).catch(function () {
        status.className = 'form-status error';
        status.textContent = MSG[lang].fail + (cfg.email || '');
      }).then(function () { btn.disabled = false; });
      return;
    }

    // No form service configured: hand the request to the visitor's email app.
    var body = Object.keys(data).map(function (k) { return k + ': ' + data[k]; }).join('\n');
    window.location.href = 'mailto:' + encodeURIComponent(cfg.email || '') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.textContent = MSG[lang].mail;
    setTimeout(showThanks, 1200);
  });

  $('#new-quote').addEventListener('click', function () {
    form.reset(); syncForm();
    $$('.invalid', form).forEach(function (el) { el.classList.remove('invalid'); });
    status.textContent = '';
    $('#thanks').hidden = true; form.hidden = false;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
