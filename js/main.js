/**
 * Fouria Official Website - Main JavaScript
 * ========================================================
 * サイトのインタラクション、ナビゲーション、データ描画、Lightboxを制御します。
 * データは js/data.js から読み込まれます。
 * ========================================================
 */

(function () {
  "use strict";

  // --- SVG Icons Definition (Clean, accessible, standard vectors) ---
  const ICONS = {
    x: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    tiktok: `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
    appleMusic: `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.43-.57.66-1.06 1.73-.93 2.76 1.08.08 2.1-1.01 2.71-1.32z"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    play: `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><polygon fill="currentColor" points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    external: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
  };

  // --- Initialize when DOM is ready ---
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderScroll();
    initMobileNav();

    // 1. Render contents based on active page FIRST
    const pageType = document.body.dataset.page;
    if (pageType === "home") {
      renderHomeNews();
      renderHomeLive();
      renderHomeMembers();
    } else if (pageType === "music") {
      renderMusicPage();
    } else if (pageType === "live") {
      renderLivePage();
    } else if (pageType === "photo") {
      renderPhotoPage();
    }

    // 2. Initialize Scroll Reveal AFTER dynamic elements are rendered
    initScrollReveal();

    // 3. Initialize global Lightbox for photo viewing
    initLightbox();
  });

  // --- 01. Header Scroll Effect ---
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // --- 02. Mobile Navigation Menu ---
  function initMobileNav() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    if (!toggleBtn || !mobileNav) return;

    const toggleMenu = () => {
      const isOpen = toggleBtn.classList.toggle("is-active");
      mobileNav.classList.toggle("is-open", isOpen);
      toggleBtn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    toggleBtn.addEventListener("click", toggleMenu);

    // Close on navigation link click
    const navLinks = mobileNav.querySelectorAll(".mobile-nav__link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileNav.classList.contains("is-open")) {
          toggleMenu();
        }
      });
    });

    // Close on Escape key
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        toggleMenu();
      }
    });
  }

  // --- 03. Scroll Reveal Animation ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) return;

    // Immediately reveal elements already near or within viewport
    const checkInitialVisibility = () => {
      const windowH = window.innerHeight || document.documentElement.clientHeight;
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowH * 1.15) {
          el.classList.add("is-visible");
        }
      });
    };

    checkInitialVisibility();

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px 80px 0px", threshold: 0.02 }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    });
  }

  // --- 04. HOME: Render News Section ---
  function renderHomeNews() {
    const newsContainer = document.getElementById("home-news-list");
    if (!newsContainer || !window.FOURIA_DATA) return;

    const newsData = window.FOURIA_DATA.news || [];
    if (newsData.length === 0) {
      newsContainer.innerHTML = `<div style="padding: 2rem 0; color: var(--color-text-muted);">現在お知らせはありません。</div>`;
      return;
    }

    let html = "";
    newsData.slice(0, 4).forEach((item) => {
      const targetAttr = item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";
      html += `
        <a href="${item.url}" class="news-item" ${targetAttr}>
          <div class="news-item__meta">
            <span class="news-item__date">${item.date}</span>
            <span class="news-item__badge">${item.category}</span>
          </div>
          <div class="news-item__title">${item.title}</div>
          <div class="news-item__arrow" aria-hidden="true">${ICONS.arrowRight}</div>
        </a>
      `;
    });

    newsContainer.innerHTML = html;
  }

  // --- 05. HOME: Render Next Live Section ---
  function renderHomeLive() {
    const liveContainer = document.getElementById("home-live-container");
    if (!liveContainer || !window.FOURIA_DATA) return;

    const liveData = window.FOURIA_DATA.live || [];
    const upcomingLives = liveData.filter((l) => l.status === "upcoming");

    if (upcomingLives.length === 0) {
      // COMING SOON 表示
      liveContainer.innerHTML = `
        <div class="live-coming-card reveal">
          <span class="live-coming__label">NEXT LIVE</span>
          <h3 class="live-coming__title">COMING SOON</h3>
          <p class="live-coming__desc">
            次回ライブ情報は決定次第、当サイトおよび公式SNS（X・Instagram）にて発表いたします。
          </p>
          <div class="live-coming__actions">
            <a href="live.html" class="btn btn-outline">LIVE INFO</a>
            <a href="${window.FOURIA_DATA.band.sns.x.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              FOLLOW ON X
            </a>
          </div>
        </div>
      `;
    } else {
      // 登録されている最新ライブを表示
      const nextLive = upcomingLives[0];
      liveContainer.innerHTML = `
        <div class="live-card reveal">
          <div class="live-card__date-box">
            <div class="live-card__date">${nextLive.date}</div>
            <div class="live-card__day">${nextLive.dayOfWeek || ""}</div>
          </div>
          <div class="live-card__body">
            <h3 class="live-card__title">${nextLive.title}</h3>
            <div class="live-card__venue">
              <span>${nextLive.venue}</span>
              ${nextLive.openTime ? `<span class="live-card__time">OPEN ${nextLive.openTime} / START ${nextLive.startTime}</span>` : ""}
            </div>
            ${nextLive.details ? `<div style="font-size: 0.8125rem; color: var(--color-text-muted); margin-top: 0.25rem;">${nextLive.details}</div>` : ""}
          </div>
          <div class="live-card__action">
            ${
              nextLive.ticketUrl
                ? `<a href="${nextLive.ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">TICKET</a>`
                : `<a href="live.html" class="btn btn-outline">DETAILS</a>`
            }
          </div>
        </div>
      `;
    }
  }

  // --- 06. HOME: Render Member Section ---
  function renderHomeMembers() {
    const memberContainer = document.getElementById("home-member-grid");
    if (!memberContainer || !window.FOURIA_DATA) return;

    const members = window.FOURIA_DATA.members || [];
    let html = "";

    members.forEach((m, idx) => {
      // SNSリンク生成
      let snsHtml = "";
      if (m.sns) {
        if (m.sns.x) {
          snsHtml += `<a href="${m.sns.x}" target="_blank" rel="noopener noreferrer" class="member-sns-link" title="${m.name} on X" aria-label="${m.name} X">${ICONS.x}</a>`;
        }
        if (m.sns.instagram) {
          snsHtml += `<a href="${m.sns.instagram}" target="_blank" rel="noopener noreferrer" class="member-sns-link" title="${m.name} on Instagram" aria-label="${m.name} Instagram">${ICONS.instagram}</a>`;
        }
        if (m.sns.tiktok) {
          snsHtml += `<a href="${m.sns.tiktok}" target="_blank" rel="noopener noreferrer" class="member-sns-link" title="${m.name} on TikTok" aria-label="${m.name} TikTok">${ICONS.tiktok}</a>`;
        }
      }

      html += `
        <div class="member-card reveal reveal-delay-${(idx % 4) + 1}">
          <div class="member-card__photo-wrap">
            <img src="${m.image}" alt="Fouria ${m.name} (${m.part})" class="member-card__img" loading="lazy" />
          </div>
          <div class="member-card__body">
            <span class="member-card__part">${m.part}</span>
            <h3 class="member-card__name">${m.name}</h3>
            <span class="member-card__name-en">${m.nameEn || ""}</span>
            <div class="member-card__sns">
              ${snsHtml}
            </div>
          </div>
        </div>
      `;
    });

    memberContainer.innerHTML = html;
  }

  // --- 07. MUSIC PAGE: Render All Tracks ---
  function renderMusicPage() {
    const musicGrid = document.getElementById("discography-grid");
    if (!musicGrid || !window.FOURIA_DATA) return;

    const musicList = window.FOURIA_DATA.music || [];
    let html = "";

    musicList.forEach((item, idx) => {
      html += `
        <div class="disc-card reveal reveal-delay-${(idx % 3) + 1}">
          <a href="${item.appleMusic}" target="_blank" rel="noopener noreferrer" class="disc-card__artwork-link" aria-label="${item.title} on Apple Music">
            <img src="${item.jacket}" alt="Fouria - ${item.title}" class="disc-card__img" loading="lazy" />
            <div class="disc-card__overlay">
              <div class="play-circle">${ICONS.play}</div>
              <span class="play-text">LISTEN ON APPLE MUSIC</span>
            </div>
          </a>
          <div class="disc-card__body">
            <div class="disc-card__meta-row">
              <span class="disc-card__type">${item.type}</span>
              ${item.status ? `<span class="disc-card__badge">${item.status}</span>` : ""}
            </div>
            <h2 class="disc-card__title">${item.title}</h2>
            <div class="disc-card__footer">
              <a href="${item.appleMusic}" target="_blank" rel="noopener noreferrer" class="btn-applemusic" style="width: 100%; justify-content: center;">
                ${ICONS.appleMusic}
                <span>Apple Musicで聴く</span>
              </a>
            </div>
          </div>
        </div>
      `;
    });

    musicGrid.innerHTML = html;
  }

  // --- 08. LIVE PAGE: Render Upcoming & Past Lives ---
  function renderLivePage() {
    const upcomingContainer = document.getElementById("live-upcoming-container");
    const pastContainer = document.getElementById("live-past-container");
    const pastBlock = document.getElementById("live-past-block");

    if (!upcomingContainer || !window.FOURIA_DATA) return;

    const lives = window.FOURIA_DATA.live || [];
    const upcoming = lives.filter((l) => l.status === "upcoming");
    const past = lives.filter((l) => l.status === "past");

    // Upcoming Live Render
    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = `
        <div class="live-coming-card reveal">
          <span class="live-coming__label">SCHEDULE</span>
          <h2 class="live-coming__title">NEXT LIVE COMING SOON</h2>
          <p class="live-coming__desc">
            現在決定しているライブ情報はございません。<br>
            最新のライブ・イベント出演情報は決定次第、公式Webサイトおよび各公式SNSにて最速で発表いたします。
          </p>
          <div class="live-coming__actions">
            <a href="${window.FOURIA_DATA.band.sns.x.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              X をフォローして待つ
            </a>
            <a href="${window.FOURIA_DATA.band.sns.instagram.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              INSTAGRAM をフォロー
            </a>
          </div>
        </div>
      `;
    } else {
      let upcomingHtml = `<div class="live-grid">`;
      upcoming.forEach((item) => {
        upcomingHtml += `
          <div class="live-card reveal">
            <div class="live-card__date-box">
              <div class="live-card__date">${item.date}</div>
              <div class="live-card__day">${item.dayOfWeek || ""}</div>
            </div>
            <div class="live-card__body">
              <h3 class="live-card__title">${item.title}</h3>
              <div class="live-card__venue">
                <span>会場: ${item.venue}</span>
                ${item.openTime ? `<span class="live-card__time">開場 ${item.openTime} / 開演 ${item.startTime}</span>` : ""}
              </div>
              ${item.ticketInfo ? `<div style="font-size: 0.875rem; color: var(--color-text-secondary); margin-top: 0.35rem;">チケット: ${item.ticketInfo}</div>` : ""}
              ${item.details ? `<div style="font-size: 0.8125rem; color: var(--color-text-muted); margin-top: 0.25rem;">${item.details}</div>` : ""}
            </div>
            <div class="live-card__action">
              ${
                item.ticketUrl
                  ? `<a href="${item.ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">TICKET</a>`
                  : `<span class="btn btn-outline" style="opacity: 0.6; cursor: default;">TBA</span>`
              }
            </div>
          </div>
        `;
      });
      upcomingHtml += `</div>`;
      upcomingContainer.innerHTML = upcomingHtml;
    }

    // Past Live Archive Render
    if (pastBlock && pastContainer) {
      if (past.length === 0) {
        pastBlock.style.display = "none";
      } else {
        pastBlock.style.display = "block";
        let pastHtml = `<div class="archive-list">`;
        past.forEach((item) => {
          pastHtml += `
            <div class="archive-item">
              <span class="archive-item__date">${item.date}</span>
              <span class="archive-item__title">${item.title}</span>
              <span class="archive-item__venue">${item.venue}</span>
            </div>
          `;
        });
        pastHtml += `</div>`;
        pastContainer.innerHTML = pastHtml;
      }
    }
  }

  // --- 09. PHOTO PAGE: Render Photo Gallery ---
  function renderPhotoPage() {
    const photoGrid = document.getElementById("photo-gallery-grid");
    if (!photoGrid || !window.FOURIA_DATA) return;

    const photos = window.FOURIA_DATA.photos || [];
    let html = "";

    photos.forEach((photo, idx) => {
      const sizeClass = photo.size ? `gallery-item--${photo.size}` : "gallery-item--normal";
      html += `
        <div class="gallery-item ${sizeClass} reveal reveal-delay-${(idx % 3) + 1}" data-index="${idx}" role="button" tabindex="0" aria-label="${photo.title || '写真を表示'}">
          <img src="${photo.src}" alt="${photo.alt || 'Fouria Photo'}" class="gallery-item__img" loading="lazy" />
          <div class="gallery-item__overlay">
            <span class="gallery-item__tag">${photo.tag || "PHOTO"}</span>
            <div class="gallery-item__caption">${photo.title || ""}</div>
          </div>
        </div>
      `;
    });

    photoGrid.innerHTML = html;
  }

  // --- 10. LIGHTBOX FUNCTIONALITY ---
  function initLightbox() {
    const lightbox = document.getElementById("global-lightbox");
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector(".lightbox__img");
    const lightboxCaption = lightbox.querySelector(".lightbox__caption");
    const closeBtn = lightbox.querySelector(".lightbox__close");
    const prevBtn = lightbox.querySelector(".lightbox__prev");
    const nextBtn = lightbox.querySelector(".lightbox__next");

    let currentIndex = 0;
    let currentPhotos = [];

    const openLightbox = (index, photos) => {
      currentPhotos = photos;
      currentIndex = index;
      updateLightboxContent();
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    const updateLightboxContent = () => {
      if (!currentPhotos[currentIndex]) return;
      const photo = currentPhotos[currentIndex];
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.alt || "Fouria Photo";
      lightboxCaption.textContent = photo.title || photo.caption || "";
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + currentPhotos.length) % currentPhotos.length;
      updateLightboxContent();
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % currentPhotos.length;
      updateLightboxContent();
    };

    // Close handlers
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    });

    // Delegate click events on gallery items
    document.addEventListener("click", (e) => {
      const item = e.target.closest(".gallery-item");
      if (item && window.FOURIA_DATA && window.FOURIA_DATA.photos) {
        const idx = parseInt(item.dataset.index, 10);
        if (!isNaN(idx)) {
          openLightbox(idx, window.FOURIA_DATA.photos);
        }
      }
    });

    // Keyboard Enter / Space on gallery item
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const item = document.activeElement.closest(".gallery-item");
        if (item && window.FOURIA_DATA && window.FOURIA_DATA.photos) {
          e.preventDefault();
          const idx = parseInt(item.dataset.index, 10);
          if (!isNaN(idx)) {
            openLightbox(idx, window.FOURIA_DATA.photos);
          }
        }
      }
    });
  }

})();
