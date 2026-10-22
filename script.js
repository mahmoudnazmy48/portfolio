(() => {
  'use strict';
  const D = window.PORTFOLIO || {};
  const S = D.site || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const ini = n => (n || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase() || '•';
  const ext = (href, label, cls = 'btn ghost') => href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
  const tags = list => (list && list.length) ? `<div class="tags">${list.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>` : '';
  const drop = id => { $('#' + id)?.remove(); $(`#navLinks a[href="#${id}"]`)?.remove(); };

  /* ---------- Brand + document ---------- */
  $('#brand').innerHTML = `${esc(ini(S.name))}<span>.</span>`;

  /* ---------- Hero ---------- */
  const soc = S.socials || {};
  const socLabels = { github: 'GitHub', linkedin: 'LinkedIn', x: 'X / Twitter', medium: 'Medium', behance: 'Behance' };
  $('#heroRoot').innerHTML = `
    <div class="reveal">
      ${S.availability ? `<p class="badge"><span class="dot"></span>${esc(S.availability)}</p>` : ''}
      <h1>Hi, I'm <span class="grad">${esc(S.name)}</span></h1>
      <p class="role">${esc(S.role)}</p>
      <p class="lead">${esc(S.tagline)}</p>
      <div class="actions">
        <a class="btn primary" href="#projects">View my work →</a>
        ${S.cv ? `<a class="btn ghost" href="${esc(S.cv)}" target="_blank" rel="noopener" download>Download CV</a>` : ''}
        <a class="btn ghost" href="#contact">Contact me</a>
      </div>
      <div class="socials">${Object.keys(socLabels).filter(k => soc[k]).map(k => `<a href="${esc(soc[k])}" target="_blank" rel="noopener noreferrer">${socLabels[k]} ↗</a>`).join('')}</div>
    </div>
    <div class="photo reveal" id="photo"><div class="ini" aria-hidden="true">${esc(ini(S.name))}</div></div>`;
  if (S.avatar) {
    const img = new Image();
    img.alt = `Portrait of ${S.name}`; img.decoding = 'async';
    img.onload = () => $('#photo').replaceChildren(img);
    img.src = S.avatar;
  }

  /* ---------- Metrics ---------- */
  if ((D.metrics || []).length) {
    $('#metricsRoot').innerHTML = D.metrics.map(m => `<div class="metric reveal"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join('');
  } else $('#metrics').remove();

  /* ---------- About ---------- */
  const facts = [['Location', S.location], ['Email', S.email && `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`, true],
    ['Phone', S.phone && `<a href="tel:${esc(S.phone.replace(/\s/g, ''))}">${esc(S.phone)}</a>`, true], ['Languages', S.languages]];
  $('#aboutRoot').innerHTML = `
    <div class="reveal">${(S.bio || []).map(p => `<p>${esc(p)}</p>`).join('')}</div>
    <dl class="facts reveal">${facts.filter(f => f[1]).map(([k, v, raw]) => `<div><dt>${k}</dt><dd>${raw ? v : esc(v)}</dd></div>`).join('')}</dl>`;

  /* ---------- Experience ---------- */
  if ((D.experience || []).length) {
    $('#expRoot').innerHTML = D.experience.map(e => `
      <article class="card t-item reveal${e.current ? ' current' : ''}">
        <div class="t-top"><div><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p></div>
          <p class="meta">${esc(e.period)}${e.current ? ' · Current' : ''}<br>${esc(e.location)}</p></div>
        ${(e.bullets || []).length ? `<ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
        ${tags(e.tags)}
      </article>`).join('');
  } else drop('experience');

  /* ---------- Projects + modal ---------- */
  const P = D.projects || [];
  if (P.length) {
    const cats = ['All', ...new Set(P.flatMap(p => p.categories || []))];
    $('#filters').innerHTML = cats.length > 2 ? cats.map((c, i) => `<button class="fbtn${i ? '' : ' active'}" data-f="${esc(c)}">${esc(c)}</button>`).join('') : '';
    $('#projectGrid').innerHTML = P.map((p, i) => `
      <article class="card project reveal" data-i="${i}" data-cats="${esc((p.categories || []).join('|'))}" tabindex="0" role="button" aria-label="Open case study: ${esc(p.title)}">
        <div class="p-cover">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy" />` : esc(p.icon || '📁')}${p.badge ? `<span class="p-badge">${esc(p.badge)}</span>` : ''}</div>
        <div class="p-body"><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>${tags((p.tags || []).slice(0, 4))}<span class="p-more">Read case study →</span></div>
      </article>`).join('');

    $('#filters').addEventListener('click', e => {
      const b = e.target.closest('.fbtn'); if (!b) return;
      $$('.fbtn').forEach(x => x.classList.toggle('active', x === b));
      $$('.project').forEach(c => { c.hidden = b.dataset.f !== 'All' && !c.dataset.cats.split('|').includes(b.dataset.f); });
    });

    const modal = $('#modal');
    const open = i => {
      const p = P[i];
      const sec = (h, body) => body ? `<div class="m-sec"><h4>${h}</h4>${body}</div>` : '';
      modal.innerHTML = `<div class="m-in">
        <div class="m-top"><div>${p.badge ? `<span class="chip">${esc(p.badge)}</span>` : ''}<h3 id="mTitle">${esc(p.title)}</h3></div>
          <button class="icon-btn" data-close aria-label="Close">✕</button></div>
        <p class="sub" style="margin:10px 0 0">${esc(p.summary)}</p>${tags(p.tags)}
        ${sec('The problem', p.problem && `<p>${esc(p.problem)}</p>`)}
        ${sec('The solution', p.solution && `<p>${esc(p.solution)}</p>`)}
        ${sec('Key features', (p.features || []).length ? `<ul>${p.features.map(f => `<li>${esc(f)}</li>`).join('')}</ul>` : '')}
        ${sec('Results & impact', p.results && `<p>${esc(p.results)}</p>`)}
        <div class="m-foot">${ext(p.live, 'Live demo', 'btn primary')}${ext(p.github, 'Source code')}</div></div>`;
      modal.showModal();
    };
    $('#projectGrid').addEventListener('click', e => { const c = e.target.closest('.project'); if (c) open(+c.dataset.i); });
    $('#projectGrid').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const c = e.target.closest('.project'); if (c) { e.preventDefault(); open(+c.dataset.i); } } });
    modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('[data-close]')) modal.close(); });
  } else drop('projects');

  /* ---------- Skills ---------- */
  if ((D.skills || []).length) {
    $('#skillsRoot').innerHTML = D.skills.map(g => `<div class="card reveal"><h3>${esc(g.title)}</h3>${tags(g.items)}</div>`).join('');
  } else drop('skills');

  /* ---------- Education + certifications ---------- */
  const E = D.education || [], C = D.certifications || [];
  if (E.length || C.length) {
    $('#eduRoot').innerHTML = E.map(e => `<article class="card edu reveal"><span class="chip">${esc(e.period)}${e.current ? ' · In progress' : ''}</span>
      <h3 style="margin-top:12px">${esc(e.degree)}</h3><span class="org">${esc(e.school)}</span>${e.note ? `<p>${esc(e.note)}</p>` : ''}</article>`).join('');
    $('#certRoot').innerHTML = C.map(c => {
      const inner = `<div>${esc(c.title)}<small>${esc(c.issuer)}</small></div><small>${esc(c.date)}</small>`;
      return c.url ? `<a class="cert reveal" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<div class="cert reveal">${inner}</div>`;
    }).join('');
  } else drop('education');

  /* ---------- Contact + footer ---------- */
  $('#contactRoot').innerHTML = `
    <p class="eyebrow">Contact</p><h2>Let's work together</h2>
    <p>I'm open to full-time roles, freelance projects and collaborations. The fastest way to reach me is by email.</p>
    <div class="actions">
      <a class="btn primary" href="mailto:${esc(S.email)}">Send an email</a>
      <button class="btn ghost" id="copyBtn">Copy email</button>
      ${ext(soc.linkedin, 'LinkedIn')}${ext(soc.github, 'GitHub')}
    </div>`;
  $('#copyBtn').addEventListener('click', async e => {
    const b = e.currentTarget;
    try { await navigator.clipboard.writeText(S.email); b.textContent = 'Copied ✓'; } catch { b.textContent = S.email; }
    setTimeout(() => (b.textContent = 'Copy email'), 2000);
  });
  $('#footRoot').innerHTML = `<span>© ${new Date().getFullYear()} ${esc(S.name)}</span><span>${esc(S.role)}</span>`;

  /* ---------- Structured data (SEO) ---------- */
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Person', name: S.name, jobTitle: S.role, email: S.email,
    url: S.siteUrl, image: S.avatar, address: S.location, sameAs: Object.values(soc).filter(Boolean)
  });
  document.head.appendChild(ld);

  /* ---------- Nav: theme, mobile menu, scroll-spy, back-to-top ---------- */
  $('#themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  });
  const menuBtn = $('#menuBtn'), links = $('#navLinks');
  menuBtn.addEventListener('click', () => menuBtn.setAttribute('aria-expanded', links.classList.toggle('open')));
  links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); } });

  const spy = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) $$('#navLinks a').forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  const top = $('#toTop');
  addEventListener('scroll', () => { top.hidden = scrollY < 600; }, { passive: true });
  top.addEventListener('click', () => scrollTo({ top: 0 }));

  /* ---------- Reveal on scroll ---------- */
  const rv = new IntersectionObserver((es, o) => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); } }), { threshold: .08 });
  $$('.reveal').forEach(el => rv.observe(el));
})();
