const LOOKER_STUDIO_EMBED_URL = "https://lookerstudio.google.com/embed/reporting/0a073b66-fe59-4ad1-beb6-5ae9381f87ab/page/kIV1C";

const embedEl = document.getElementById("analytics-embed");

if (embedEl && LOOKER_STUDIO_EMBED_URL.trim()) {
  embedEl.src = LOOKER_STUDIO_EMBED_URL.trim();
}
