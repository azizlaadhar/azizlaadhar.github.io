/* Renders the sidebar, bio, news and publication lists from data.js. */
(function () {
  'use strict';

  var ICONS = {
    email:    '<path d="M2 4h12v8H2z" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="m2.5 4.5 5.5 4 5.5-4" fill="none" stroke="currentColor" stroke-width="1.4"/>',
    github:   '<path fill="currentColor" d="M8 .2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.6 3.9.3.3.5.8.5 1.5v2.2c0 .2.2.5.6.4A8 8 0 0 0 8 .2Z"/>',
    linkedin: '<path fill="currentColor" d="M3.6 5.3H.8V15h2.8V5.3ZM2.2 1A1.6 1.6 0 1 0 2.2 4.3 1.6 1.6 0 0 0 2.2 1ZM15.2 15h-2.8V9.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1 0 .2-.1.5-.1.7V15H6.5s0-8.4 0-9.7h2.8v1.4a2.8 2.8 0 0 1 2.5-1.4c1.8 0 3.2 1.2 3.2 3.8V15Z"/>',
    cv:       '<path d="M4 1.5h5L12.5 5v9.5h-9z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 1.5V5h3.5M6 8.5h4M6 11h4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'
  };

  function icon(paths, label, href) {
    return '<a href="' + href + '" aria-label="' + label + '" title="' + label + '"' +
           (/^https?:/i.test(href) ? ' rel="noopener" target="_blank"' : '') +
           '><svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">' + paths + '</svg></a>';
  }

  /* ---------- sidebar ---------- */

  var side = document.getElementById('sidebar');
  if (side && typeof SITE !== 'undefined') {
    var links = [];
    if (SITE.email)    links.push(icon(ICONS.email,    'Email',    'mailto:' + SITE.email));
    if (SITE.github)   links.push(icon(ICONS.github,   'GitHub',   SITE.github));
    if (SITE.linkedin) links.push(icon(ICONS.linkedin, 'LinkedIn', SITE.linkedin));
    if (SITE.cv)       links.push(icon(ICONS.cv,       'CV',       SITE.cv));

    side.innerHTML =
      (SITE.photo ? '<img class="portrait" src="' + SITE.photo + '" alt="' + SITE.name + '" width="260" height="347">' : '') +
      '<div class="sidebar-text">' +
        '<h1>' + SITE.name + '</h1>' +
        '<p class="role">' + (SITE.role || '') + '</p>' +
        '<div class="iconrow">' + links.join('') + '</div>' +
      '</div>';
  }

  document.querySelectorAll('[data-brand]').forEach(function (el) {
    if (typeof SITE !== 'undefined' && SITE.name) el.textContent = SITE.name;
  });

  /* ---------- bio ---------- */

  var bio = document.getElementById('bio');
  if (bio && typeof BIO !== 'undefined') {
    bio.innerHTML = BIO.map(function (p) { return '<p>' + p + '</p>'; }).join('');
  }

  /* ---------- news ---------- */

  var news = document.getElementById('news');
  if (news && typeof NEWS !== 'undefined') {
    news.innerHTML = NEWS.map(function (n) {
      return '<div class="news-item' + (n.extra ? ' extra' : '') + '">' +
               '<div class="news-date">' + n.date + '</div>' +
               '<div class="news-body">' + n.body + '</div>' +
             '</div>';
    }).join('');

    var hidden = news.querySelectorAll('.news-item.extra');
    var btn = document.getElementById('news-more');
    if (btn) {
      if (!hidden.length) {
        btn.remove();
      } else {
        btn.textContent = 'Show ' + hidden.length + ' more';
        btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', function () {
          var open = btn.getAttribute('aria-expanded') === 'true';
          hidden.forEach(function (el) { el.classList.toggle('show', !open); });
          btn.setAttribute('aria-expanded', String(!open));
          btn.textContent = open ? 'Show ' + hidden.length + ' more' : 'Show less';
        });
      }
    }
  }

  /* ---------- publications ---------- */

  function card(p) {
    var html = '<article class="pub">';

    if (p.badges && p.badges.length) {
      html += '<div class="badges">' + p.badges.map(function (b) {
        return '<span class="badge' + (b.alt ? ' alt' : '') + '">' + b.text + '</span>';
      }).join('') + '</div>';
    }

    html += '<h3>' + p.title + '</h3>';
    if (p.authors)  html += '<p class="authors">' + p.authors + '</p>';
    if (p.venue)    html += '<p class="venue">' + p.venue + '</p>';
    if (p.abstract) html += '<p class="abstract">' + p.abstract + '</p>';

    var bits = (p.links || []).map(function (l) {
      return '<a href="' + l.href + '"' +
             (/^https?:/i.test(l.href) ? ' rel="noopener" target="_blank"' : '') +
             '>' + l.label + '</a>';
    });
    if (p.note) bits.push('<span>' + p.note + '</span>');
    if (bits.length) html += '<div class="linkrow">' + bits.join('') + '</div>';

    return html + '</article>';
  }

  var sel = document.getElementById('selected-pubs');
  if (sel && typeof PUBLICATIONS !== 'undefined') {
    sel.innerHTML = PUBLICATIONS.filter(function (p) { return p.selected; }).map(card).join('');
  }

  var all = document.getElementById('all-pubs');
  if (all && typeof PUBLICATIONS !== 'undefined') {
    var years = [];
    PUBLICATIONS.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });
    years.sort(function (a, b) { return b - a; });

    all.innerHTML = years.map(function (y) {
      return '<h3 class="year-head">' + y + '</h3>' +
             '<div class="pubs">' +
               PUBLICATIONS.filter(function (p) { return p.year === y; }).map(card).join('') +
             '</div>';
    }).join('');
  }
})();
