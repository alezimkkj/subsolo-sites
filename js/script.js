const ICONS = {
  home: '<path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  heart: '<path d="M12 21s-8-5.3-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.7-8 11-8 11z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l3 12h11l2-8H6"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  right: '<path d="M9 5l7 7-7 7"/>',
  down: '<path d="M5 9l7 7 7-7"/>',
  filter: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',
  refresh: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
  shirt: '<path d="M8 3l-5 4 3 3 2-1v12h8V9l2 1 3-3-5-4a4 4 0 0 1-8 0z"/>',
  money: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 10c0-1.5 5-1.5 5 0s-5 2-5 4 5 1.5 5 0"/>',
  pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  mail: '<path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 9l9 6 9-6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2-5.5-3-5.5 3 1-6.2L3 9.7l6.2-.9z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.3A8 8 0 1 1 21 12z"/>',
  swap: '<path d="M17 3l4 4-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4M21 13v2a2 2 0 0 1-2 2H3"/>',
  searchx: '<circle cx="10" cy="10" r="6"/><path d="M20 20l-5.7-5.7M8 8l4 4M12 8l-4 4"/>'
};

const FILLED_ICONS = {
  user: '<circle cx="12" cy="7.5" r="4.6"/><path d="M3.5 21c0-4.4 3.8-7 8.5-7s8.5 2.6 8.5 7z"/>',
  box: '<path d="M4 3.5h16a2 2 0 0 1 2 2v2.2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2z"/><path fill-rule="evenodd" d="M3.8 11h16.4v7.5a2.5 2.5 0 0 1-2.5 2.5H6.3a2.5 2.5 0 0 1-2.5-2.5zm5.2 2.4a1.1 1.1 0 0 0 0 2.2h6a1.1 1.1 0 0 0 0-2.2z"/>',
  pin: '<path fill-rule="evenodd" d="M12 22.2s7.2-6.4 7.2-12.6a7.2 7.2 0 0 0-14.4 0C4.8 15.8 12 22.2 12 22.2zM12 12.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>',
  card: '<path fill-rule="evenodd" d="M4.5 4.8h15A2.5 2.5 0 0 1 22 7.3v9.4a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.7V7.3a2.5 2.5 0 0 1 2.5-2.5zM2 9.1v1.9h20V9.1z"/>',
  shirt: '<path d="M8.3 2.8L1.8 6.9 4.5 11.3 7 10v11.2h10V10l2.5 1.3 2.7-4.4-6.5-4.1a4 4 0 0 1-7.4 0z"/>',
  money: '<circle cx="12" cy="5" r="3.4"/><path d="M2 14.2l4.6-1.2 5.3 1.3c1 .3 1.5 1.5.8 2.3l-.5.5H9.6l6.5 1.6 5.3-3.6c.8-.5 1.8-.3 2.3.5.4.7.2 1.6-.5 2.1l-6.2 4.4a4 4 0 0 1-3.3.6L6.4 21.3 2 21.5z"/>',
  heart: '<path d="M12 21.4S3 15.8 3 9.3a5 5 0 0 1 9-2.9 5 5 0 0 1 9 2.9c0 6.5-9 12.1-9 12.1z"/>',
  shield: '<path fill-rule="evenodd" d="M12 2.2l8.4 3.1v6.2c0 5.3-3.6 8.9-8.4 10.3-4.8-1.4-8.4-5-8.4-10.3V5.3zm0 2.2L5.7 6.7v4.8c0 4.1 2.6 7 6.3 8.3 3.7-1.3 6.3-4.2 6.3-8.3V6.7z"/><path d="M12 4.4L5.7 6.7v4.8c0 4.1 2.6 7 6.3 8.3z"/>',
  camera: '<path fill-rule="evenodd" d="M9 4L7.6 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.6L15 4zm3 5a3.8 3.8 0 1 1 0 7.6A3.8 3.8 0 0 1 12 9z"/>'
};

const THEME_KEY = 'subsolo-theme';
const CART_KEY = 'subsolo-cart';
const EXPRESS_FEE = 25.9;
const STANDARD_FEE = 19.9;
const FREE_SHIPPING_FROM = 499;
const PAY_METHODS = ['credit', 'debit', 'pix'];
const MAX_INSTALLMENTS = 12;
const MIN_INSTALLMENT = 30;
const ITEMS_PER_PAGE = 6;

const ANNOUNCE = '<div class="announce">Frete grátis para todo o Brasil em compras acima de R$ 499</div>';

let pendingCard = null;

function icon(name) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
}

function iconF(name) {
  if (!FILLED_ICONS[name]) {
    return '';
  }
  return '<svg class="if" viewBox="0 0 24 24" aria-hidden="true">' + FILLED_ICONS[name] + '</svg>';
}

function brl(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function isDesktop() {
  return window.matchMedia('(min-width:900px)').matches;
}

function closeOverlays() {
  document.querySelectorAll('.overlay.open').forEach((overlay) => {
    overlay.classList.remove('open');
  });
}

function getSavedTheme() {
  const fromUrl = new URLSearchParams(location.search).get('t');
  if (fromUrl === 'dark' || fromUrl === 'light') {
    return fromUrl;
  }

  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
      return saved;
    }
  } catch (error) {}

  const match = /subsolo-theme=(dark|light)/.exec(window.name || '');
  if (match) {
    return match[1];
  }

  return 'light';
}

function withTheme(href) {
  if (!href) {
    return href;
  }
  if (/^(#|mailto:|tel:|javascript:|[a-z]+:\/\/)/i.test(href)) {
    return href;
  }
  if (!/\.html/i.test(href)) {
    return href;
  }

  const theme = document.documentElement.getAttribute('data-theme');

  try {
    const url = new URL(href, location.href);
    url.searchParams.set('t', theme === 'dark' ? 'dark' : 'light');
    url.searchParams.set('c', encodeCart(readState()));
    return url.href;
  } catch (error) {
    return href;
  }
}

function decorateLinks() {
  document.querySelectorAll('a[href]').forEach((link) => {
    const original = link.getAttribute('data-raw-href') || link.getAttribute('href');

    if (!/\.html/i.test(original) || /^[a-z]+:\/\//i.test(original)) {
      return;
    }

    link.setAttribute('data-raw-href', original);
    link.setAttribute('href', withTheme(original));
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {}

  window.name = (window.name || '').replace(/subsolo-theme=\w+;?/, '') + 'subsolo-theme=' + theme + ';';

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
  });

  decorateLinks();

  try {
    const url = new URL(location.href);
    url.searchParams.set('t', theme);
    history.replaceState(null, '', url.href);
  } catch (error) {}
}

window.addEventListener('storage', (event) => {
  if (event.key === THEME_KEY && event.newValue) {
    applyTheme(event.newValue);
  }
});

document.addEventListener('click', (event) => {
  const link = event.target.closest ? event.target.closest('a[href]') : null;
  if (!link) {
    return;
  }

  const original = link.getAttribute('data-raw-href') || link.getAttribute('href');
  if (/\.html/i.test(original)) {
    link.setAttribute('href', withTheme(original));
  }
}, true);

document.documentElement.setAttribute('data-theme', getSavedTheme());

function navClass(active, name) {
  return active === name ? ' class="on"' : '';
}

function deskHeader(active) {
  if (!active) {
    active = 'home';
  }

  return `<header class="dheader">
      <a href="home.html" class="logo"><img src="img/logo.png" alt="Subsolo"></a>
      <nav class="dnav">
        <a href="home.html"${navClass(active, 'home')}>Início</a>
        <a href="marcas.html"${navClass(active, 'marcas')}>Marcas</a>
        <a href="favoritos.html"${navClass(active, 'favoritos')}>Favoritos</a>
        <a href="central-ajuda.html"${navClass(active, 'ajuda')}>Ajuda</a>
      </nav>
      <form class="dsearch" data-search>
        <label>${icon('search')}<input name="q" type="search" placeholder="Buscar produtos, marcas..."></label>
      </form>
      <div class="dicons">
        <a href="carrinho.html" aria-label="Carrinho">${icon('cart')}</a>
        <a href="perfil.html" aria-label="Perfil">${icon('user')}</a>
      </div>
    </header>`;
}

const COMPONENTS = {
  topbar: (el) => {
    if (el.dataset.deskOnly !== undefined) {
      let announce = '';
      if (el.dataset.ann !== undefined) {
        announce = ANNOUNCE.replace('class="announce"', 'class="announce dxb"');
      }
      return announce + deskHeader(el.dataset.nav);
    }

    const hasDesktopHeader = el.dataset.desk !== undefined;
    let announce = ANNOUNCE;
    if (el.dataset.noann !== undefined) {
      announce = ANNOUNCE.replace('class="announce"', 'class="announce d-hide"');
    }

    let mobileClass = 'header';
    let desktopHeader = '';
    if (hasDesktopHeader) {
      mobileClass = 'header m-only';
      desktopHeader = deskHeader(el.dataset.nav);
    }

    return `${announce}
    <header class="${mobileClass}">
      <a href="home.html" class="logo"><img src="img/logo.png" alt="Subsolo"></a>
      <a href="carrinho.html" aria-label="Carrinho">${icon('cart')}</a>
    </header>${desktopHeader}`;
  },

  searchbar: (el) => {
    const hasDesktopHeader = el.dataset.desk !== undefined;
    let formClass = 'searchbar';
    let desktopHeader = '';
    if (hasDesktopHeader) {
      formClass = 'searchbar m-only';
      desktopHeader = deskHeader(el.dataset.nav);
    }

    return `${ANNOUNCE}
    <form class="${formClass}" data-search>
      <label>${icon('search')}<input name="q" type="search" placeholder="Buscar produtos e marcas" value="${el.dataset.q || ''}"></label>
      <a href="carrinho.html" aria-label="Carrinho">${icon('cart')}</a>
    </form>${desktopHeader}`;
  },

  newsletter: (el) => {
    let emailInput = '';
    let deskEmailInput = '';
    let text = '';
    let deskText = '';

    if (el.dataset.email !== undefined) {
      emailInput = '<input type="email" placeholder="Seu melhor e-mail">';
    }
    if (el.dataset.deskEmail !== undefined) {
      deskEmailInput = '<input class="d-email" type="email" placeholder="Seu melhor e-mail">';
    }
    if (el.dataset.text !== undefined) {
      text = '<p class="promo-text mx">Cadastre seu e-mail para receber avisos antecipados sobre lançamentos exclusivos.</p>';
    }
    if (el.dataset.deskText !== undefined) {
      deskText = '<p class="promo-text dx">Cadastre seu e-mail para receber avisos antecipados sobre lançamentos limitados e colaborações exclusivas da SUBSOLO.</p>';
    }

    return `<section class="promo">
      <small>Exclusive access</small>
      <h2>Receba drops exclusivos</h2>
      ${emailInput}
      ${deskEmailInput}
      ${text}
      ${deskText}
      <button class="btn" data-newsletter>Fazer parte da lista</button>
    </section>`;
  },

  footer: (el) => {
    let footerClass = 'footer';
    if (el.dataset.deskOnly !== undefined) {
      footerClass = 'footer desk-only-el';
    }

    return `<footer class="${footerClass}">
      <a href="home.html" class="logo"><img src="img/logo.png" alt="Subsolo"></a>
      <p>Temos roupas que combinam com seu estilo e que você terá orgulho de usar. Da academia ao street, estamos com você.</p>
      <div class="social">
        <a href="#" aria-label="Instagram"><img class="gl" src="img/ic-instagram.png" alt="Instagram"></a>
        <a href="#" aria-label="TikTok"><img class="gl" src="img/ic-tiktok.png" alt="TikTok"></a>
        <a href="#" aria-label="WhatsApp"><img class="gl" src="img/ic-whatsapp.png" alt="WhatsApp"></a>
        <a href="#" aria-label="Facebook"><img class="gl" src="img/ic-facebook.png" alt="Facebook"></a>
      </div>
      <div class="cols">
        <div>
          <h4>EMPRESA</h4>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Sustentabilidade</a></li>
            <li class="dx"><a href="#">Imprensa</a></li>
          </ul>
        </div>
        <div>
          <h4>AJUDA</h4>
          <ul>
            <li><a href="central-ajuda.html">Suporte<span class="dx"> ao Cliente</span></a></li>
            <li><a href="trocas.html">Trocas<span class="dx"> e Devoluções</span></a></li>
            <li class="dx"><a href="politicas-faq.html">Termos e Condições</a></li>
            <li><a href="privacidade.html"><span class="mx">Privacidade</span><span class="dx">Política de Privacidade</span></a></li>
          </ul>
        </div>
        <div>
          <h4>FAQ</h4>
          <ul>
            <li><a href="politicas-faq.html">Rastrear<span class="dx"> Pedido</span></a></li>
            <li><a href="politicas-faq.html"><span class="dx">Gerenciar </span>Entregas</a></li>
            <li><a href="politicas-faq.html">Pagamentos</a></li>
            <li class="dx"><a href="politicas-faq.html">Envios</a></li>
          </ul>
        </div>
        <div>
          <h4>APP</h4>
          <a class="store" href="#"><img src="img/ic-store-apple.png" alt="">App Store</a>
          <a class="store" href="#"><img src="img/ic-store-google.png" alt="">Google Play</a>
        </div>
      </div>
      <div class="pay">
        <span class="copy">SUBSOLO © 2024 — TODOS OS DIREITOS RESERVADOS</span>
        <span class="pays">
          <img class="gl" src="img/ic-visa.png" alt="Visa">
          <img class="gl" src="img/ic-mastercard.png" alt="Mastercard">
          <img class="gl" src="img/ic-applepay.png" alt="Apple Pay">
          <img class="gl" src="img/ic-pix.png" alt="Pix">
        </span>
      </div>
    </footer>`;
  },

  accnav: (el) => {
    const items = [
      { key: 'info', icon: 'user', label: 'Informações pessoais', href: 'editar-informacoes.html', extra: '' },
      { key: 'orders', icon: 'box', label: 'Meus pedidos', href: 'meus-pedidos.html', extra: '<span class="badge-count">2</span>' },
      { key: 'addr', icon: 'pin', label: 'Endereços', href: 'enderecos.html', extra: '' },
      { key: 'pay', icon: 'card', label: 'Métodos de pagamento', href: 'metodos-pagamento.html', extra: '' },
      { key: 'favs', icon: 'heart', label: 'Favoritos', href: 'favoritos.html', extra: '' },
      { key: 'priv', icon: 'shield', label: 'Privacidade e conta', href: 'privacidade.html', extra: '' }
    ];

    let links = '';
    items.forEach((item) => {
      let linkClass = 'an-i';
      if (el.dataset.active === item.key) {
        linkClass = 'an-i on';
      }

      links += `<a class="${linkClass}" href="${item.href}">
        <span class="an-ic">${iconF(item.icon)}</span>
        <span class="an-t">${item.label}${item.extra}</span>
        <span class="an-chev">${icon('right')}</span>
      </a>`;
    });

    return `<aside class="accnav">
      <nav>${links}</nav>
      <a class="an-out" href="index.html">Sair da conta</a>
    </aside>`;
  },

  tabbar: (el) => {
    const tabs = [
      { name: 'home', href: 'home.html' },
      { name: 'search', href: 'buscar.html' },
      { name: 'heart', href: 'favoritos.html' },
      { name: 'user', href: 'perfil.html' }
    ];

    let links = '';
    tabs.forEach((tab) => {
      let linkClass = '';
      if (el.dataset.active === tab.name) {
        linkClass = 'on';
      }
      links += `<a href="${tab.href}" class="${linkClass}">${icon(tab.name)}</a>`;
    });

    return `<nav class="tabbar">${links}</nav>`;
  }
};

function fillIcons(root) {
  if (!root) {
    root = document;
  }

  root.querySelectorAll('[data-icon]').forEach((el) => {
    let html = icon(el.dataset.icon);
    if (el.hasAttribute('data-icon-f')) {
      html += iconF(el.dataset.icon);
    }
    el.innerHTML = html;
  });
}

function renderComponents() {
  document.querySelectorAll('[data-include]').forEach((el) => {
    el.outerHTML = COMPONENTS[el.dataset.include](el);
  });
  fillIcons();
}

function initTheme() {
  applyTheme(getSavedTheme());

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
}

function goToSearch(term) {
  let found = /camiseta|moletom|cal[cç]a|t[eê]nis|jaqueta|oversized|cargo/i.test(term);
  if (/neon/i.test(term)) {
    found = false;
  }

  const page = found ? 'busca.html' : 'busca-vazio.html';
  location.href = withTheme(page + '?q=' + encodeURIComponent(term));
}

function initSearch() {
  const query = new URLSearchParams(location.search).get('q');

  document.querySelectorAll('[data-q-text]').forEach((el) => {
    if (query) {
      el.textContent = query;
    }
  });

  const input = document.querySelector('.searchbar input');
  if (input && query) {
    input.value = query;
  }

  document.querySelectorAll('[data-search]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const term = form.q.value.trim();
      if (term) {
        goToSearch(term);
      }
    });
  });

  document.querySelectorAll('[data-term]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      goToSearch(el.dataset.term);
    });
  });

  document.querySelectorAll('[data-recent-remove]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      button.closest('.recent').remove();
    });
  });

  const clearRecents = document.querySelector('[data-clear-recents]');
  if (clearRecents) {
    clearRecents.addEventListener('click', () => {
      document.querySelectorAll('.recent').forEach((el) => el.remove());
    });
  }

  document.querySelectorAll('[data-clear-search]').forEach((button) => {
    button.addEventListener('click', () => {
      location.href = withTheme('busca.html');
    });
  });
}

function initClicks() {
  document.addEventListener('click', (event) => {
    const target = event.target;

    const heart = target.closest('.heart');
    if (heart) {
      event.preventDefault();
      heart.classList.toggle('on');
      return;
    }

    const toggle = target.closest('[data-toggle]');
    if (toggle) {
      toggle.classList.toggle('on');
      return;
    }

    const group = target.closest('[data-single]');
    const picked = target.closest('button, .swatch, .thumbs div');
    if (group && picked && !target.closest('.off')) {
      group.querySelectorAll('.on').forEach((el) => el.classList.remove('on'));
      picked.classList.add('on');

      const mainImage = document.querySelector('[data-main]');
      if (mainImage && picked.dataset.full) {
        mainImage.src = picked.dataset.full;
      }
      return;
    }

    const accordionHead = target.closest('.acc-head');
    if (accordionHead) {
      accordionHead.parentElement.classList.toggle('open');
      return;
    }

    const openButton = target.closest('[data-open]');
    if (openButton) {
      if (openButton.dataset.target) {
        pendingCard = openButton.closest(openButton.dataset.target);
      }
      document.getElementById(openButton.dataset.open).classList.add('open');
      return;
    }

    if (target.closest('[data-close]') || target.classList.contains('overlay')) {
      closeOverlays();
    }

    const feedback = target.closest('[data-feedback]');
    if (feedback) {
      const originalText = feedback.textContent;
      feedback.textContent = feedback.dataset.feedback;

      if (feedback.hasAttribute('data-keep')) {
        feedback.dataset.feedback = originalText;
      } else {
        setTimeout(() => {
          feedback.textContent = originalText;
        }, 1500);
      }
    }

    if (target.closest('[data-newsletter]')) {
      alert('Você entrou para a lista!');
    }

    const defaultButton = target.closest('[data-default]');
    if (defaultButton) {
      setDefaultAddress(defaultButton.closest('.addr'));
    }
  });
}

function initAddresses() {
  const confirmButton = document.querySelector('[data-confirm-delete]');
  if (!confirmButton) {
    return;
  }

  confirmButton.addEventListener('click', () => {
    if (pendingCard) {
      pendingCard.remove();
    }
    pendingCard = null;

    if (!document.querySelector('.addr')) {
      document.querySelector('[data-addr-list]').hidden = true;
      document.querySelector('[data-addr-empty]').hidden = false;
    }

    closeOverlays();
  });
}

function setDefaultAddress(card) {
  const currentTag = document.querySelector('.addr .tags b');
  if (!currentTag || !card) {
    return;
  }

  const oldCard = currentTag.closest('.addr');
  const defaultLink = '<a class="default-btn" href="#" data-default>Definir como padrão</a>';

  currentTag.remove();
  oldCard.insertAdjacentHTML('beforeend', defaultLink);

  card.querySelector('.default-btn').remove();
  card.querySelector('.tags').insertAdjacentHTML('afterbegin', '<b>Padrão</b>');
  card.parentElement.prepend(card);
}

function defaultState() {
  return { items: [], ship: 'std', pay: { m: 'credit', n: 1 }, last: null };
}

function encodeCart(state) {
  let pay = 'credit~1';
  if (state.pay) {
    pay = state.pay.m + '~' + (state.pay.n || 1);
  }

  const parts = [];
  state.items.forEach((item) => {
    parts.push([item.id, item.size, item.ci || 0, item.qty].join('~'));
  });

  return parts.join('.') + '!' + (state.ship || 'std') + '!' + pay;
}

function decodeCart(text) {
  const sections = text.split('!');
  const listText = sections[0];
  const shipText = sections[1];
  const payText = sections[2] || 'credit~1';

  const payParts = payText.split('~');
  let method = payParts[0];
  if (!PAY_METHODS.includes(method)) {
    method = 'credit';
  }
  const installments = Math.max(1, Number(payParts[1]) || 1);

  const items = [];
  const entries = listText ? listText.split('.') : [];

  entries.forEach((entry) => {
    const fields = entry.split('~');
    const id = fields[0];
    const size = fields[1];
    const colorIndex = Number(fields[2]) || 0;
    const qty = Math.max(1, Number(fields[3]) || 1);

    if (typeof productById !== 'function') {
      return;
    }
    const product = productById(id);
    if (!product) {
      return;
    }

    const color = product.colors[colorIndex] || product.colors[0];

    items.push({
      key: product.id + '|' + size + '|' + color.name,
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      color: color.name,
      ci: colorIndex,
      image: color.image || product.images[0],
      qty: qty
    });
  });

  return {
    items: items,
    ship: shipText === 'exp' ? 'exp' : 'std',
    pay: { m: method, n: installments },
    last: null
  };
}

function storedState() {
  let raw = null;

  try {
    raw = localStorage.getItem(CART_KEY);
  } catch (error) {}

  if (!raw) {
    const match = /subsolo-cart=([^;]*);/.exec(window.name || '');
    if (match) {
      raw = decodeURIComponent(match[1]);
    }
  }

  try {
    const state = JSON.parse(raw);
    if (state && Array.isArray(state.items)) {
      return state;
    }
  } catch (error) {}

  return null;
}

function readState() {
  const params = new URLSearchParams(location.search);

  if (params.has('c')) {
    try {
      const state = decodeCart(params.get('c'));
      const stored = storedState();
      state.last = stored && stored.last ? stored.last : null;
      return state;
    } catch (error) {}
  }

  return storedState() || defaultState();
}

function writeState(state) {
  const raw = JSON.stringify(state);

  try {
    localStorage.setItem(CART_KEY, raw);
  } catch (error) {}

  window.name = (window.name || '').replace(/subsolo-cart=[^;]*;?/, '') + 'subsolo-cart=' + encodeURIComponent(raw) + ';';

  try {
    const url = new URL(location.href);
    url.searchParams.set('c', encodeCart(state));
    history.replaceState(null, '', url.href);
  } catch (error) {}

  decorateLinks();
}

const Cart = {
  items() {
    return readState().items;
  },

  count() {
    let total = 0;
    this.items().forEach((item) => {
      total += item.qty;
    });
    return total;
  },

  subtotal() {
    let total = 0;
    this.items().forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  },

  ship() {
    return readState().ship || 'std';
  },

  shipFee() {
    if (this.ship() === 'exp') {
      return EXPRESS_FEE;
    }
    if (this.subtotal() >= FREE_SHIPPING_FROM) {
      return 0;
    }
    return STANDARD_FEE;
  },

  total() {
    return this.subtotal() + this.shipFee();
  },

  add(line) {
    const state = readState();
    let found = null;

    state.items.forEach((item) => {
      if (item.key === line.key) {
        found = item;
      }
    });

    if (found) {
      found.qty += 1;
    } else {
      const newItem = Object.assign({}, line, { qty: 1 });
      state.items.push(newItem);
    }

    writeState(state);
  },

  setQty(key, qty) {
    const state = readState();
    let found = null;

    state.items.forEach((item) => {
      if (item.key === key) {
        found = item;
      }
    });

    if (!found) {
      return;
    }

    if (qty <= 0) {
      state.items = state.items.filter((item) => item.key !== key);
    } else {
      found.qty = qty;
    }

    writeState(state);
  },

  maxInstallments() {
    const possible = Math.floor(this.total() / MIN_INSTALLMENT);
    return Math.max(1, Math.min(MAX_INSTALLMENTS, possible));
  },

  pay() {
    const saved = readState().pay || {};

    let method = saved.m;
    if (!PAY_METHODS.includes(method)) {
      method = 'credit';
    }

    let installments = 1;
    if (method === 'credit') {
      installments = Math.max(1, Number(saved.n) || 1);
      installments = Math.min(installments, this.maxInstallments());
    }

    return { m: method, n: installments };
  },

  setPay(method, installments) {
    const state = readState();
    state.pay = { m: method, n: method === 'credit' ? installments : 1 };
    writeState(state);
  },

  setShip(ship) {
    const state = readState();
    state.ship = ship;
    writeState(state);
  },

  finish() {
    const state = readState();

    if (state.items.length > 0) {
      state.last = {
        total: this.total(),
        count: this.count(),
        pay: this.pay(),
        items: state.items.map((item) => Object.assign({}, item)),
        id: String(10000 + Math.floor(Math.random() * 89999)),
        date: new Date().toLocaleDateString('pt-BR')
      };

      state.items = [];
      state.ship = 'std';
      state.pay = { m: 'credit', n: 1 };
      writeState(state);
    }

    return state.last;
  }
};

function refreshCartBadge() {
  const count = Cart.count();

  document.querySelectorAll('a[data-raw-href^="carrinho.html"], a[href^="carrinho.html"]').forEach((link) => {
    if (link.closest('.tabbar')) {
      return;
    }

    link.classList.add('has-badge');

    let badge = link.querySelector('.cart-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'cart-badge';
      link.appendChild(badge);
    }

    badge.textContent = count > 99 ? '99+' : count;
    badge.hidden = count === 0;
  });
}

function renderCartPage() {
  const list = document.querySelector('[data-cart-list]');
  if (!list) {
    return;
  }

  const items = Cart.items();
  document.querySelector('[data-cart-empty]').hidden = items.length > 0;
  document.querySelector('[data-cart-summary]').hidden = items.length === 0;

  let html = '';
  items.forEach((item) => {
    let sizeText = '';
    if (item.size && item.size !== 'Único') {
      sizeText = '<small>Tamanho: ' + item.size + '</small>';
    }

    let colorText = '';
    if (item.color) {
      colorText = '<small>Cor: ' + item.color + '</small>';
    }

    const minusLabel = item.qty === 1 ? 'Remover' : 'Diminuir';

    html += `
    <div class="card cart-item" data-key="${item.key}">
      <a class="thumb" href="produto.html?id=${item.id}"><img src="img/${item.image}" alt="" loading="lazy"></a>
      <div style="flex:1">
        <h3>${item.name}</h3>
        ${sizeText}${colorText}
        <div class="bottom">
          <strong style="font-size:18px;font-weight:900">${brl(item.price * item.qty)}</strong>
          <div class="qty">
            <button data-step="1" aria-label="Aumentar">+</button>
            <span class="n">${item.qty}</span>
            <button data-step="-1" aria-label="${minusLabel}">-</button>
          </div>
        </div>
      </div>
    </div>`;
  });
  list.innerHTML = html;

  const subtotal = Cart.subtotal();
  const fee = Cart.shipFee();

  document.querySelectorAll('[data-cart-subtotal]').forEach((el) => {
    el.textContent = brl(subtotal);
  });
  document.querySelectorAll('[data-cart-total]').forEach((el) => {
    el.textContent = brl(subtotal + fee);
  });

  const shipping = document.querySelector('[data-cart-frete]');
  if (shipping) {
    shipping.textContent = fee ? brl(fee) : 'Grátis';
    shipping.classList.toggle('green', !fee);
  }

  const hint = document.querySelector('[data-free-hint]');
  if (hint) {
    const missing = FREE_SHIPPING_FROM - subtotal;
    hint.hidden = missing <= 0;
    hint.textContent = 'Faltam ' + brl(Math.max(missing, 0)) + ' para frete grátis.';
  }

  refreshCartBadge();
}

function initCart() {
  const list = document.querySelector('[data-cart-list]');
  if (!list) {
    return;
  }

  renderCartPage();

  list.addEventListener('click', (event) => {
    const button = event.target.closest('[data-step]');
    if (!button) {
      return;
    }

    const cartItem = button.closest('.cart-item');
    let current = null;
    Cart.items().forEach((item) => {
      if (item.key === cartItem.dataset.key) {
        current = item;
      }
    });

    if (!current) {
      return;
    }

    Cart.setQty(cartItem.dataset.key, current.qty + Number(button.dataset.step));
    renderCartPage();
  });
}

function priceHTML(product) {
  let html = brl(product.price);
  if (product.oldPrice) {
    html += ' <s>' + brl(product.oldPrice) + '</s>';
  }
  return html;
}

function productCard(product) {
  let badge = '';
  if (product.badge) {
    const badgeClass = product.badgeIsHot ? 'tag hot' : 'tag';
    badge = '<span class="' + badgeClass + '">' + product.badge + '</span>';
  }

  return `<a class="product" href="produto.html?id=${product.id}">
    <div class="thumb">
      <img src="img/${product.images[0]}" alt="" loading="lazy">
      ${badge}
      <span class="heart" role="button" data-icon="heart"></span>
    </div>
    <p class="brand">${product.brand}</p>
    <p class="name">${product.name}</p>
    <p class="price">${priceHTML(product)}</p>
  </a>`;
}

function initProductList() {
  const grid = document.querySelector('[data-l-grid]');
  if (!grid) {
    return;
  }

  const category = new URLSearchParams(location.search).get('cat');
  const title = CATEGORIES[category] || 'Todos os produtos';

  let baseList = PRODUCTS;
  if (category && CATEGORIES[category]) {
    baseList = PRODUCTS.filter((product) => product.category === category);
  }

  const pager = document.querySelector('[data-l-pager]');
  const countText = document.querySelector('[data-l-count]');
  const minInput = document.querySelector('[data-pmin]');
  const maxInput = document.querySelector('[data-pmax]');

  const filters = { sort: '', page: 1, min: 0, max: Infinity };

  document.querySelector('[data-l-title]').textContent = title;
  document.querySelector('[data-l-crumb]').textContent = title;
  document.title = title + ' – Subsolo';

  function drawList() {
    const list = baseList.filter((product) => {
      return product.price >= filters.min && product.price <= filters.max;
    });

    if (filters.sort === 'asc') {
      list.sort((a, b) => a.price - b.price);
    }
    if (filters.sort === 'desc') {
      list.sort((a, b) => b.price - a.price);
    }

    let perPage = Math.max(list.length, 1);
    if (isDesktop()) {
      perPage = ITEMS_PER_PAGE;
    }

    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    filters.page = Math.min(filters.page, totalPages);

    countText.textContent = list.length + (list.length === 1 ? ' produto' : ' produtos');

    const start = (filters.page - 1) * perPage;
    const pageItems = list.slice(start, start + perPage);

    let cards = '';
    pageItems.forEach((product) => {
      cards += productCard(product);
    });
    grid.innerHTML = cards;

    if (pager) {
      pager.hidden = totalPages < 2;

      let buttons = '';
      buttons += '<button data-pg="prev"' + (filters.page === 1 ? ' disabled' : '') + '>Anterior</button>';
      for (let number = 1; number <= totalPages; number++) {
        const buttonClass = filters.page === number ? 'on' : '';
        buttons += '<button class="' + buttonClass + '" data-pg="' + number + '">' + number + '</button>';
      }
      buttons += '<button data-pg="next"' + (filters.page === totalPages ? ' disabled' : '') + '>Próximo</button>';
      pager.innerHTML = buttons;
    }

    fillIcons(grid);
    decorateLinks();
  }

  document.querySelector('[data-l-sort]').addEventListener('change', (event) => {
    filters.sort = event.target.value;
    filters.page = 1;
    drawList();
  });

  if (pager) {
    pager.addEventListener('click', (event) => {
      const button = event.target.closest('[data-pg]');
      if (!button || button.disabled) {
        return;
      }

      const value = button.dataset.pg;
      if (value === 'prev') {
        filters.page = filters.page - 1;
      } else if (value === 'next') {
        filters.page = filters.page + 1;
      } else {
        filters.page = Number(value);
      }
      drawList();
    });
  }

  if (minInput && maxInput) {
    const minLabel = document.querySelector('[data-pmin-label]');
    const maxLabel = document.querySelector('[data-pmax-label]');
    const track = document.querySelector('[data-range]');

    function updateRange(event) {
      if (Number(minInput.value) > Number(maxInput.value)) {
        if (event && event.target === minInput) {
          minInput.value = maxInput.value;
        } else {
          maxInput.value = minInput.value;
        }
      }

      minLabel.textContent = 'R$ ' + minInput.value;
      maxLabel.textContent = 'R$ ' + maxInput.value;

      const low = Number(minInput.min);
      const high = Number(minInput.max);
      const startPercent = ((minInput.value - low) / (high - low)) * 100;
      const endPercent = ((maxInput.value - low) / (high - low)) * 100;
      track.style.setProperty('--a', startPercent + '%');
      track.style.setProperty('--b', endPercent + '%');
    }

    minInput.addEventListener('input', updateRange);
    maxInput.addEventListener('input', updateRange);
    updateRange();

    document.querySelector('[data-apply-filters]').addEventListener('click', () => {
      filters.min = Number(minInput.value);

      if (Number(maxInput.value) >= Number(maxInput.max)) {
        filters.max = Infinity;
      } else {
        filters.max = Number(maxInput.value);
      }

      filters.page = 1;
      drawList();
    });
  }

  let wasDesktop = isDesktop();
  window.addEventListener('resize', () => {
    if (wasDesktop !== isDesktop()) {
      wasDesktop = isDesktop();
      drawList();
    }
  });

  drawList();
}

function initCarousels() {
  document.querySelectorAll('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const track = document.querySelector(button.dataset.target);
      if (track) {
        track.scrollBy({ left: Number(button.dataset.scroll) * track.clientWidth, behavior: 'smooth' });
      }
    });
  });
}

function initProductPage() {
  if (!document.querySelector('[data-p-name]')) {
    return;
  }

  function find(selector) {
    return document.querySelector(selector);
  }

  const id = new URLSearchParams(location.search).get('id');
  const product = productById(id) || productById('calca-shadow');

  document.title = product.name + ' – Subsolo';
  find('[data-p-brand-crumb]').textContent = product.brand.toUpperCase();
  find('[data-p-brand]').textContent = product.brand;
  find('[data-p-name]').textContent = product.name;
  find('[data-p-price]').innerHTML = priceHTML(product);
  find('[data-p-desc]').textContent = product.description;
  find('[data-p-mat]').textContent = product.material;

  const mainImage = find('[data-main]');
  mainImage.src = 'img/' + product.images[0];
  mainImage.alt = product.name;

  const thumbs = find('[data-p-thumbs]');
  if (product.images.length > 1) {
    let thumbsHtml = '';
    product.images.forEach((image, index) => {
      const thumbClass = index === 0 ? 'on' : '';
      thumbsHtml += `<div class="${thumbClass}" data-full="img/${image}"><img src="img/${image}" alt="Vista ${index + 1} do produto" loading="lazy"></div>`;
    });
    thumbs.innerHTML = thumbsHtml;
  } else {
    thumbs.hidden = true;
  }

  const colorLabel = find('[data-p-color-label]');
  const swatches = find('[data-p-swatches]');

  let swatchesHtml = '';
  product.colors.forEach((color, index) => {
    const swatchClass = index === 0 ? 'swatch on' : 'swatch';
    swatchesHtml += `<div class="${swatchClass}" data-color="${index}" title="${color.name}" style="background:${color.hex}"></div>`;
  });
  swatches.innerHTML = swatchesHtml;
  colorLabel.textContent = 'Cor: ' + product.colors[0].name;

  swatches.addEventListener('click', (event) => {
    const swatch = event.target.closest('.swatch');
    if (!swatch) {
      return;
    }

    const color = product.colors[Number(swatch.dataset.color)];
    colorLabel.textContent = 'Cor: ' + color.name;

    if (color.image) {
      mainImage.src = 'img/' + color.image;
      thumbs.querySelectorAll('.on').forEach((thumb) => thumb.classList.remove('on'));
    }
  });

  let firstAvailable = -1;
  product.sizes.forEach((size, index) => {
    if (firstAvailable === -1 && !size.soldOut) {
      firstAvailable = index;
    }
  });

  let sizesHtml = '';
  product.sizes.forEach((size, index) => {
    let sizeClass = '';
    if (size.soldOut) {
      sizeClass += 'off';
    }
    if (index === firstAvailable) {
      sizeClass += ' on';
    }
    sizesHtml += `<button class="${sizeClass}" data-size="${size.label}">${size.label}</button>`;
  });
  find('[data-p-sizes]').innerHTML = sizesHtml;

  find('[data-add-cart]').addEventListener('click', () => {
    let size = product.sizes[0].label;
    const selectedSize = find('[data-p-sizes] .on');
    if (selectedSize) {
      size = selectedSize.dataset.size;
    }

    let colorIndex = 0;
    const selectedSwatch = find('.swatch.on');
    if (selectedSwatch) {
      colorIndex = Number(selectedSwatch.dataset.color);
    }
    const color = product.colors[colorIndex];

    Cart.add({
      key: product.id + '|' + size + '|' + color.name,
      ci: colorIndex,
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      color: color.name,
      image: color.image || product.images[0]
    });

    location.href = withTheme('carrinho.html');
  });

  const others = PRODUCTS.filter((item) => item.id !== product.id);
  others.sort((a, b) => {
    const aSame = a.category === product.category ? 1 : 0;
    const bSame = b.category === product.category ? 1 : 0;
    return bSame - aSame;
  });

  let relatedHtml = '';
  others.slice(0, 4).forEach((item) => {
    let badge = '';
    if (item.badge) {
      badge = '<span class="tag">' + item.badge + '</span>';
    }

    relatedHtml += `<a class="product" href="produto.html?id=${item.id}">
      <div class="thumb"><img src="img/${item.images[0]}" alt="" loading="lazy">${badge}</div>
      <p class="brand">${item.brand}</p>
      <p class="name">${item.name}</p>
      <p class="price" style="font-size:14px;font-weight:500">${brl(item.price)}</p>
    </a>`;
  });
  find('[data-p-related]').innerHTML = relatedHtml;
}

function initForms() {
  document.querySelectorAll('form[data-next]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (form.dataset.msg) {
        alert(form.dataset.msg);
      }
      location.href = withTheme(form.dataset.next);
    });
  });

  const filter = document.querySelector('[data-filter]');
  if (filter) {
    filter.addEventListener('input', () => {
      const term = filter.value.toLowerCase();

      document.querySelectorAll('.faq .acc').forEach((accordion) => {
        const text = accordion.textContent.toLowerCase();
        accordion.style.display = text.includes(term) ? '' : 'none';
      });
    });
  }
}

function setFieldError(field, message) {
  const group = field.closest('.group');
  group.classList.toggle('invalid', Boolean(message));

  const errorText = group.querySelector('.err');
  if (errorText && message) {
    errorText.textContent = message;
  }
}

function bindPasswordToggle(form) {
  const button = form.querySelector('[data-show-password]');

  button.addEventListener('click', () => {
    const isVisible = form.password.type === 'text';

    if (isVisible) {
      form.password.type = 'password';
      button.textContent = 'Mostrar';
    } else {
      form.password.type = 'text';
      button.textContent = 'Ocultar';
    }
  });
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email.trim());
}

function initLogin() {
  const form = document.querySelector('[data-login]');
  if (!form) {
    return;
  }

  bindPasswordToggle(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailOk = isValidEmail(form.email.value);
    const passwordOk = form.password.value.length >= 8;

    setFieldError(form.email, emailOk ? '' : 'Este email não está cadastrado.');
    setFieldError(form.password, passwordOk ? '' : 'Senha incorreta.');

    if (emailOk && passwordOk) {
      location.href = withTheme('home.html');
    }
  });
}

function initSignup() {
  const form = document.querySelector('[data-signup]');
  if (!form) {
    return;
  }

  bindPasswordToggle(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = form.password.value;
    const nameOk = form.nome.value.trim().length > 2;
    const emailOk = isValidEmail(form.email.value);
    const passwordOk = password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);

    setFieldError(form.nome, nameOk ? '' : 'Informe seu nome completo.');
    setFieldError(form.email, emailOk ? '' : 'Email inválido.');
    setFieldError(form.password, passwordOk ? '' : 'Senha inválida.');

    if (!form.terms.checked) {
      alert('Aceite os Termos de Uso e a Política de Privacidade para continuar.');
    }

    if (nameOk && emailOk && passwordOk && form.terms.checked) {
      location.href = withTheme('confirmar-email.html');
    }
  });
}

function initRating() {
  const box = document.querySelector('[data-rating]');
  if (!box) {
    return;
  }

  const stars = box.querySelectorAll('button');

  box.addEventListener('click', (event) => {
    const clicked = event.target.closest('button');
    if (!clicked) {
      return;
    }

    stars.forEach((star) => {
      star.classList.toggle('on', Number(star.dataset.value) <= Number(clicked.dataset.value));
    });
  });

  const photos = document.querySelector('[data-photos]');
  photos.addEventListener('change', () => {
    const amount = photos.files.length;
    const label = photos.parentElement.querySelector('span');

    if (amount) {
      label.textContent = amount + ' foto(s) selecionada(s)';
    } else {
      label.textContent = 'Adicionar fotos';
    }
  });
}

function getVariantText(item) {
  const parts = [];
  if (item.size !== 'Único') {
    parts.push(item.size);
  }
  if (item.color) {
    parts.push(item.color);
  }
  return parts.join(' · ');
}

function getBrand(id) {
  if (typeof productById !== 'function') {
    return '';
  }
  const product = productById(id);
  if (product && product.brand) {
    return product.brand;
  }
  return '';
}

function getPayText(pay) {
  if (pay.m === 'pix') {
    return 'Pix';
  }
  if (pay.m === 'debit') {
    return 'Cartão de débito';
  }
  return 'Cartão de crédito · ' + pay.n + 'x';
}

function showConfirmedOrder(confirmedTotal) {
  const last = Cart.finish() || readState().last;
  refreshCartBadge();

  if (!last) {
    return;
  }

  confirmedTotal.textContent = brl(last.total);

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text) {
      el.textContent = text;
    }
  }

  setText('[data-order-id]', last.id ? '#' + last.id : '');
  setText('[data-order-date]', last.date);
  setText('[data-order-pay]', getPayText(last.pay || { m: 'credit', n: 1 }));

  const list = document.querySelector('[data-order-items]');
  if (list && last.items) {
    let html = '';
    last.items.forEach((item) => {
      html += `<div class="order-item">
        <div class="thumb"><img src="img/${item.image}" alt="" loading="lazy"></div>
        <div>
          <b>${item.name}</b><br>
          <span class="label" style="font-size:10px">${getBrand(item.id)}</span><br>
          <small class="muted">${getVariantText(item)}</small>
          <div class="sum-line">
            <small class="muted">Qtd: ${item.qty}</small>
            <b>${brl(item.price * item.qty)}</b>
          </div>
        </div>
      </div>`;
    });
    list.innerHTML = html;
  }
}

function initCheckout() {
  const summary = document.querySelector('[data-subtotal]');
  const review = document.querySelector('[data-review-items]');
  const confirmedTotal = document.querySelector('[data-order-total]');

  if (confirmedTotal) {
    showConfirmedOrder(confirmedTotal);
    return;
  }

  if ((summary || review) && Cart.count() === 0) {
    location.replace(withTheme('carrinho.html'));
    return;
  }

  const summaryItems = document.querySelector('[data-sum-items]');
  if (summaryItems) {
    let html = '';
    Cart.items().forEach((item) => {
      html += `<div class="sum-item">
        <div class="thumb"><img src="img/${item.image}" alt="" loading="lazy"></div>
        <div class="si-info">
          <b>${item.name}</b>
          <small class="muted">${getVariantText(item)}</small>
          <small class="muted">Qtd: ${item.qty}</small>
        </div>
        <b class="si-price">${brl(item.price * item.qty)}</b>
      </div>`;
    });
    summaryItems.innerHTML = html;
  }

  if (review) {
    let html = '';
    Cart.items().forEach((item) => {
      html += `<div class="card">
        <div class="order-item" style="border:0;padding:0">
          <div class="thumb" style="width:80px"><img src="img/${item.image}" alt="" loading="lazy"></div>
          <div>
            <b class="rv-name">${item.name}</b><br>
            <span class="rv-brand">${getBrand(item.id)}</span>
            <small class="muted rv-var">${getVariantText(item)}</small>
            <div class="sum-line">
              <small class="muted"><span class="q-s">Qtd: ${item.qty}</span><span class="q-l">Quantidade: ${item.qty}</span></small>
              <b>${brl(item.price * item.qty)}</b>
            </div>
          </div>
        </div>
      </div>`;
    });
    review.innerHTML = html;
  }

  const standardRadio = document.querySelector('[data-ship-std]');
  if (standardRadio) {
    const standardFee = Cart.subtotal() >= FREE_SHIPPING_FROM ? 0 : STANDARD_FEE;
    const standardLabel = document.querySelector('[data-ship-std-label]');
    standardLabel.textContent = standardFee ? brl(standardFee) : 'Grátis';
    standardLabel.classList.toggle('green', !standardFee);

    const isExpress = Cart.ship() === 'exp';
    document.querySelector('[data-ship-exp]').checked = isExpress;
    standardRadio.checked = !isExpress;
  }

  function refreshTotals() {
    const subtotal = Cart.subtotal();
    const fee = Cart.shipFee();
    const count = Cart.count();
    const isExpress = Cart.ship() === 'exp';

    document.querySelectorAll('[data-sub-label]').forEach((el) => {
      el.textContent = 'Subtotal (' + count + (count === 1 ? ' item)' : ' itens)');
    });
    document.querySelectorAll('[data-subtotal]').forEach((el) => {
      el.textContent = brl(subtotal);
    });
    document.querySelectorAll('[data-frete]').forEach((el) => {
      el.textContent = fee ? brl(fee) : 'Grátis';
      el.classList.toggle('green', !fee);
    });
    document.querySelectorAll('[data-total]').forEach((el) => {
      el.textContent = brl(subtotal + fee);
    });
    document.querySelectorAll('[data-total-text]').forEach((el) => {
      el.textContent = brl(subtotal + fee);
    });
    document.querySelectorAll('[data-ship-name]').forEach((el) => {
      el.textContent = isExpress ? 'Entrega Expressa' : 'Entrega Padrão';
    });
    document.querySelectorAll('[data-ship-eta]').forEach((el) => {
      el.textContent = isExpress ? 'Previsão: 1 a 2 dias úteis' : 'Previsão: 4 a 7 dias úteis';
    });
  }

  const installmentsSelect = document.querySelector('[data-par]');

  function fillInstallments() {
    if (!installmentsSelect) {
      return;
    }

    const total = Cart.total();
    const max = Cart.maxInstallments();
    const current = Cart.pay().n;

    let html = '';
    for (let number = 1; number <= max; number++) {
      const selected = number === current ? ' selected' : '';
      const suffix = number > 1 ? 'sem juros' : 'à vista';
      html += '<option value="' + number + '"' + selected + '>' + number + 'x de ' + brl(total / number) + ' ' + suffix + '</option>';
    }
    installmentsSelect.innerHTML = html;
  }

  function getPayLabel() {
    const pay = Cart.pay();
    const total = Cart.total();

    if (pay.m === 'pix') {
      return { title: 'Pix', line: 'À vista de ' + brl(total) };
    }
    if (pay.m === 'debit') {
      return { title: 'Cartão de débito', line: 'À vista de ' + brl(total) };
    }

    const suffix = pay.n > 1 ? 'sem juros' : 'à vista';
    return { title: 'Cartão de crédito', line: pay.n + 'x de ' + brl(total / pay.n) + ' ' + suffix };
  }

  function showPayment() {
    const method = Cart.pay().m;

    document.querySelectorAll('[data-pay]').forEach((radio) => {
      radio.checked = radio.value === method;
    });

    const cardBox = document.querySelector('[data-pay-card]');
    const pixBox = document.querySelector('[data-pay-pix]');
    const installmentsGroup = document.querySelector('[data-par-group]');
    const debitNote = document.querySelector('[data-debit-note]');

    if (cardBox) {
      cardBox.hidden = method === 'pix';
    }
    if (pixBox) {
      pixBox.hidden = method !== 'pix';
    }
    if (installmentsGroup) {
      installmentsGroup.hidden = method !== 'credit';
    }
    if (debitNote) {
      debitNote.hidden = method !== 'debit';
    }

    const label = getPayLabel();
    document.querySelectorAll('[data-pay-title]').forEach((el) => {
      el.textContent = label.title;
    });
    document.querySelectorAll('[data-pay-line]').forEach((el) => {
      el.textContent = label.line;
    });
    document.querySelectorAll('[data-pay-mc]').forEach((el) => {
      el.hidden = method === 'pix';
    });
  }

  function refreshAll() {
    refreshTotals();
    fillInstallments();
    showPayment();
  }

  refreshAll();

  document.querySelectorAll('[data-pay]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const installments = installmentsSelect ? Number(installmentsSelect.value) : 1;
      Cart.setPay(radio.value, installments || 1);
      showPayment();
    });
  });

  if (installmentsSelect) {
    installmentsSelect.addEventListener('change', () => {
      Cart.setPay('credit', Number(installmentsSelect.value));
      showPayment();
    });
  }

  document.querySelectorAll('[data-ship]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (standardRadio) {
        const expressRadio = document.querySelector('[data-ship-exp]');
        Cart.setShip(expressRadio.checked ? 'exp' : 'std');
      }
      refreshAll();
    });
  });
}

function initProfileEdit() {
  const form = document.querySelector('[data-profile-form]');
  if (!form) {
    return;
  }

  const avatar = document.querySelector('[data-avatar]');

  form.querySelector('[data-photo-input]').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    avatar.style.backgroundImage = 'url(' + URL.createObjectURL(file) + ')';
    avatar.classList.add('has-photo');
  });

  function lockEmail() {
    form.mail.readOnly = isDesktop();
  }
  lockEmail();
  window.matchMedia('(min-width:900px)').addEventListener('change', lockEmail);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let phone = form.telefone;
    if (isDesktop() && form.celular) {
      phone = form.celular;
    }

    const digits = phone.value.replace(/\D/g, '');
    const valid = digits.length === 11;

    setFieldError(phone, valid ? '' : 'Por favor, insira um número válido com DDD.');

    if (valid) {
      alert('Alterações salvas!');
      location.href = withTheme('perfil.html');
    }
  });
}

function initEmailConfirm() {
  const editButton = document.querySelector('[data-edit-email]');
  if (!editButton) {
    return;
  }

  editButton.addEventListener('click', () => {
    const emailText = document.querySelector('[data-email-text]');
    const newEmail = prompt('Informe o e-mail correto:', emailText.textContent);

    if (newEmail && isValidEmail(newEmail)) {
      emailText.textContent = newEmail.trim();
    }
  });
}

function initFavorites() {
  const grid = document.querySelector('[data-favs]');
  if (!grid) {
    return;
  }

  const counter = document.querySelector('[data-fav-count]');

  function updateCounter() {
    counter.textContent = grid.children.length + ' itens salvos';
  }

  grid.addEventListener('click', (event) => {
    const heart = event.target.closest('.heart');
    if (!heart) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    heart.closest('.product').remove();
    updateCounter();
  });

  document.querySelector('[data-clear-favs]').addEventListener('click', () => {
    grid.innerHTML = '';
    updateCounter();
  });
}

function initOrders() {
  const tabs = document.querySelectorAll('[data-filter-status]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((item) => item.classList.remove('on'));
      tab.classList.add('on');

      const wanted = tab.dataset.filterStatus;
      document.querySelectorAll('[data-status]').forEach((card) => {
        const show = wanted === 'todos' || card.dataset.status === wanted;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

function initBrandSearch() {
  const input = document.querySelector('[data-brand-search]');
  if (!input) {
    return;
  }

  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();

    document.querySelectorAll('[data-brand]').forEach((el) => {
      const show = el.dataset.brand.includes(term);
      el.style.display = show ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderComponents();
  initProductList();
  initProductPage();
  initCarousels();
  fillIcons();
  refreshCartBadge();
  initTheme();
  initSearch();
  initClicks();
  initAddresses();
  initCart();
  initForms();
  initLogin();
  initSignup();
  initRating();
  initCheckout();
  initProfileEdit();
  initEmailConfirm();
  initFavorites();
  initOrders();
  initBrandSearch();
});