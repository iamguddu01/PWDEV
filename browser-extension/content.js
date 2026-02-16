const BLOCK_KEY = "blockedsitekey";
const BLOCKER_ENABLED_KEY = "blockerEnabled";

class PageBlocker {
  async init() {
    try {
      const data = await chrome.storage.local.get([BLOCK_KEY, BLOCKER_ENABLED_KEY]);
      const list = data[BLOCK_KEY] ?? [];
      const enabled = data[BLOCKER_ENABLED_KEY] ?? true;

      if (!enabled || !list.length) {
        return;
      }

      const currentHost = location.hostname;
      const isBlocked = list.some((site) => {
        return currentHost.includes(site) || site.includes(currentHost);
      });

      if (isBlocked) {
        this.renderBlockedPage();
      }
    } catch (error) {
      console.error("Failed to check blocklist", error);
    }
  }

  renderBlockedPage() {
    document.documentElement.innerHTML = "";
    const body = document.createElement("body");
    body.style.margin = "0";
    body.style.padding = "0";
    body.style.height = "100vh";
    body.style.overflow = "hidden";

    const blockedDiv = document.createElement("div");
    blockedDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0a0e1a 100%);
      color: #e2e8f0;
      text-align: center;
      padding: 40px 20px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      overflow: hidden;
    `;

    // Animated background elements
    const bgElements = document.createElement("div");
    bgElements.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 0;
      pointer-events: none;
    `;
    
    for(let i = 0; i < 5; i++){
      const circle = document.createElement("div");
      circle.style.cssText = `
        position: absolute;
        width: ${200 + i * 100}px;
        height: ${200 + i * 100}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(139,92,246,${0.1 - i * 0.02}), transparent);
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float ${10 + i * 2}s ease-in-out infinite;
        animation-delay: ${i * 0.5}s;
      `;
      bgElements.appendChild(circle);
    }

    const content = document.createElement("div");
    content.style.cssText = `
      position: relative;
      z-index: 1;
      max-width: 600px;
      animation: fadeInUp 0.6s ease-out;
    `;

    const icon = document.createElement("div");
    icon.style.cssText = `
      font-size: 80px;
      margin-bottom: 24px;
      animation: pulse 2s ease-in-out infinite;
      filter: drop-shadow(0 8px 16px rgba(239,68,68,0.3));
    `;
    icon.textContent = "🚫";

    const title = document.createElement("h1");
    title.style.cssText = `
      font-size: 42px;
      font-weight: 700;
      margin: 0 0 16px;
      background: linear-gradient(135deg, #f87171, #ef4444);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -1px;
    `;
    title.textContent = "Site Blocked";

    const subtitle = document.createElement("p");
    subtitle.style.cssText = `
      font-size: 20px;
      color: #cbd5e1;
      margin: 0 0 12px;
      font-weight: 500;
    `;
    subtitle.textContent = "This site has been blocked by your Productivity Dashboard";

    const message = document.createElement("p");
    message.style.cssText = `
      font-size: 16px;
      color: #94a3b8;
      margin: 24px 0 0;
      line-height: 1.6;
      max-width: 500px;
    `;
    message.textContent = "Stay focused on what really matters. Your future self will thank you! 💪";

    const badge = document.createElement("div");
    badge.style.cssText = `
      display: inline-block;
      margin-top: 32px;
      padding: 12px 24px;
      background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(16,185,129,0.2));
      border: 1px solid rgba(139,92,246,0.3);
      border-radius: 12px;
      font-size: 14px;
      color: #e2e8f0;
      font-weight: 600;
      letter-spacing: 0.5px;
    `;
    badge.textContent = "✨ Stay Productive ✨";

    // Add CSS animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
        }
        33% {
          transform: translate(30px, -30px) rotate(120deg);
        }
        66% {
          transform: translate(-20px, 20px) rotate(240deg);
        }
      }
    `;
    document.head.appendChild(style);

    content.appendChild(icon);
    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(message);
    content.appendChild(badge);

    blockedDiv.appendChild(bgElements);
    blockedDiv.appendChild(content);
    body.appendChild(blockedDiv);
    document.documentElement.appendChild(body);
  }
}

new PageBlocker().init();
