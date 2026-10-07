const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector('.motion-toggle');
const motionLabel = document.querySelector('.motion-toggle__label');
const root = document.documentElement;
const body = document.body;
let treeFrame = 0;

const updateTreeProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  const clamp = (value) => Math.min(Math.max(value, 0), 1);
  const stagePosition = progress * 6;
  for (let index = 0; index < 7; index += 1) {
    const opacity = clamp(1 - Math.abs(stagePosition - index));
    root.style.setProperty(`--tree-state-${index + 1}`, opacity.toFixed(4));
  }
  treeFrame = 0;
};

const scheduleTreeProgress = () => {
  if (treeFrame || body.dataset.motion !== 'playing') return;
  treeFrame = window.requestAnimationFrame(updateTreeProgress);
};

const setMotionState = (state) => {
  const isPaused = state === 'paused' || prefersReducedMotion.matches;
  body.dataset.motion = isPaused ? 'paused' : 'playing';
  motionToggle.setAttribute('aria-pressed', String(isPaused));
  motionLabel.textContent = isPaused ? 'Play motion' : 'Pause motion';
  if (!isPaused) scheduleTreeProgress();
};

setMotionState(window.sessionStorage.getItem('aj-motion') || 'playing');

motionToggle.addEventListener('click', () => {
  const nextState = body.dataset.motion === 'playing' ? 'paused' : 'playing';
  window.sessionStorage.setItem('aj-motion', nextState);
  setMotionState(nextState);
});

prefersReducedMotion.addEventListener('change', () => {
  setMotionState(window.sessionStorage.getItem('aj-motion') || 'playing');
});

window.addEventListener('scroll', scheduleTreeProgress, { passive: true });
window.addEventListener('resize', scheduleTreeProgress, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionLinks = [...document.querySelectorAll('[data-section-link]')];
const pageSections = sectionLinks
  .map((link) => document.getElementById(link.dataset.sectionLink))
  .filter(Boolean);

const setCurrentSection = (id) => {
  sectionLinks.forEach((link) => {
    const isCurrent = link.dataset.sectionLink === id;
    link.classList.toggle('is-current', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

const sectionObserver = new IntersectionObserver((entries) => {
  const current = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (current) setCurrentSection(current.target.id);
}, { rootMargin: '-28% 0px -60% 0px', threshold: [0.01, 0.2, 0.45] });

pageSections.forEach((section) => sectionObserver.observe(section));
