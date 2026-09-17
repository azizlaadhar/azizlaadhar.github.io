/* Renders the sidebar, bio and publication lists from data.js. */
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


  /* Research icons — 24x24, stroked, inherit currentColor. */
  var ICONS_RESEARCH = {
    /* screen with measurement bars: quantitative inference from video */
    measure: '<rect x="2.5" y="4" width="19" height="13.5" rx="2.2"/>' +
             '<path d="M7 14.2v-3.4M11.5 14.2V8M16 14.2v-2.2M8.5 20.5h7"/>',
    /* stacked planes: latent representation layers */
    layers:  '<path d="M12 2.8 2.8 7.6 12 12.4l9.2-4.8L12 2.8Z"/>' +
             '<path d="m2.8 12.2 9.2 4.8 9.2-4.8"/><path d="m2.8 16.4 9.2 4.8 9.2-4.8"/>',
    /* wavy strata: subsurface layers */
    strata:  '<path d="M2.8 7c3-2.1 6.1 2.1 9.2 0s6.2-2.1 9.2 0"/>' +
             '<path d="M2.8 12c3-2.1 6.1 2.1 9.2 0s6.2-2.1 9.2 0"/>' +
             '<path d="M2.8 17c3-2.1 6.1 2.1 9.2 0s6.2-2.1 9.2 0"/>',
    /* crossing supply and demand curves on an axis */
    curves:  '<path d="M3.5 3v17.5H21"/>' +
             '<path d="M6 18.2c4.2-.2 9-4.2 12.6-11.4"/>' +
             '<path d="M6 7.4c4.2.2 9 4.2 12.6 11.4"/>',
    /* connected nodes: graph policy over a route */
    graph:   '<circle cx="4.8" cy="17.8" r="2.3"/><circle cx="12" cy="5.6" r="2.3"/>' +
             '<circle cx="19.2" cy="15.4" r="2.3"/>' +
             '<path d="m6.4 15.9 4.1-8M13.6 7.3l4.3 6.1M7.1 17.2l9.8-1.4"/>',
    /* branching population: evolved prompt layers */
    branch:  '<circle cx="4.6" cy="12" r="2.1"/><circle cx="19.4" cy="5.8" r="2.1"/>' +
             '<circle cx="19.4" cy="18.2" r="2.1"/>' +
             '<path d="M6.7 12h4.1l6.6-5.4M10.8 12l6.6 5.4"/>',
    /* speech bubble: retrieval-augmented chat */
    chat:    '<path d="M21 11.6a8.3 8.3 0 0 1-8.9 8.4 9 9 0 0 1-3.7-.8L3.2 21l1.9-4.9A8.3 8.3 0 0 1 12.1 3.2 8.3 8.3 0 0 1 21 11.6Z"/>' +
             '<path d="M8.6 11.7h.01M12.1 11.7h.01M15.6 11.7h.01"/>',
    /* folded map: satellite road segmentation */
    map:     '<path d="m9 3.6-6 2.6v14.2l6-2.6 6 2.6 6-2.6V3.6l-6 2.6-6-2.6Z"/>' +
             '<path d="M9 3.6v14.2M15 6.2v14.2"/>'
  };

  function researchIcon(key) {
    var p = ICONS_RESEARCH[key] || ICONS_RESEARCH.layers;
    return '<span class="pub-icon" aria-hidden="true">' +
           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
           'stroke-linecap="round" stroke-linejoin="round">' + p + '</svg></span>';
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

  /* ---------- publications ---------- */

  function card(p) {
    var html = '<article class="pub has-icon">' + researchIcon(p.icon) + '<div class="pub-body">';

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

    return html + '</div></article>';
  }

  function tile(p) {
    var html = '<article class="pub tile">';

    html += '<div class="tile-head">' + researchIcon(p.icon);
    if (p.badges && p.badges.length) {
      html += '<div class="badges">' + p.badges.map(function (b) {
        return '<span class="badge' + (b.alt ? ' alt' : '') + '">' + b.text + '</span>';
      }).join('') + '</div>';
    }
    html += '</div>';

    html += '<h3>' + p.title + '</h3>';
    if (p.venue) html += '<p class="venue">' + p.venue + '</p>';
    if (p.blurb || p.abstract) html += '<p class="abstract">' + (p.blurb || p.abstract) + '</p>';

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
    sel.innerHTML = PUBLICATIONS.filter(function (p) { return p.selected; }).map(tile).join('');
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
