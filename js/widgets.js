/**
 * Putdownd's Blog — 趣味交互小组件
 * 1. 迷你终端模拟器
 * 2. Tab 标题动态替换
 * 3. AOS 滚动渐入
 */
(() => {
  // ==========================================================
  // 1. 迷你终端模拟器
  // ==========================================================
  const COMMANDS = {
    help: () => [
      'Available commands:',
      '  help       Show this message',
      '  whoami     Who are you?',
      '  ls         List blog categories',
      '  date       Show current time',
      '  neofetch   System information',
      '  clear      Clear the screen',
      '  curl       Make a request',
      '  ping       Test connectivity',
      '  banner     Show banner',
    ].join('\n'),
    whoami: () => 'visitor@putdown.blog',
    date: () => new Date().toString(),
    ls: () => [
      'Kubernetes安全/  Vulnhub靶机/  Web安全/',
      '云安全/        护网-CTF/     渗透测试/',
      '运维开发/       博客相关/',
    ].join('\n'),
    neofetch: () => [
      '    __  ___     __',
      '   / / / /_  __/ /',
      '  / / / __ \\/ __ /',
      ' / /_/ / / / /_/ /',
      ' \\____/_/ /_\\__/',
      '',
      'OS: Hexo 8.1.2',
      'Theme: Butterfly 5.5.5',
      'Since: 2020',
      'Posts: 128',
      'Tags: 47',
    ].join('\n'),
    ping: () => 'PING blog.putdown.top (185.199.108.153): 56 data bytes\n64 bytes from 185.199.108.153: icmp_seq=0 ttl=47 time=12.8 ms\n64 bytes from 185.199.108.153: icmp_seq=1 ttl=47 time=11.3 ms\n--- blog.putdown.top ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss',
    curl: () => 'HTTP/1.1 200 OK\nServer: GitHub Pages\nContent-Type: text/html; charset=utf-8\nLast-Modified: ' + new Date().toUTCString(),
    clear: '__CLEAR__',
    banner: () => [
      '┌──────────────────────┐',
      '│  Putdownd\'s Blog    │',
      '│  blog.putdown.top   │',
      '└──────────────────────┘',
      'Type "help" for commands.',
    ].join('\n'),
    sudo: () => 'Permission denied. This incident will be reported.',
    su: () => 'Password:\nPermission denied.',
  };

  function createTerminal() {
    // Find sidebar card-widget area
    const aside = document.querySelector('#aside-content .card-widget:first-child');
    const container = document.createElement('div');
    container.className = 'card-widget';
    container.id = 'mini-terminal';
    container.innerHTML = `
      <div class="terminal-header">
        <span class="terminal-dot red"></span>
        <span class="terminal-dot yellow"></span>
        <span class="terminal-dot green"></span>
        <span class="terminal-title">visitor@blog ~ bash</span>
      </div>
      <div class="terminal-body" id="terminal-body">
        <div class="line">${COMMANDS.banner()}</div>
        <div class="line">---</div>
        <div class="terminal-input-line">
          <span class="terminal-prompt">visitor@blog:~$ </span>
          <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
        </div>
      </div>
    `;

    const asideContent = document.getElementById('aside-content');
    if (asideContent) {
      asideContent.insertBefore(container, asideContent.firstChild);
    }

    bindTerminal();
  }

  function bindTerminal() {
    const input = document.getElementById('terminal-input');
    const body = document.getElementById('terminal-body');
    if (!input || !body) return;

    const history = [];
    let historyIdx = -1;

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        e.preventDefault();

        // Add input line to display
        appendLine(body, `visitor@blog:~$ ${input.value}`, 'input');
        history.push(input.value);
        historyIdx = history.length;
        input.value = '';

        handleCommand(cmd, body);
        body.scrollTop = body.scrollHeight;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIdx > 0) {
          historyIdx--;
          input.value = history[historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIdx < history.length - 1) {
          historyIdx++;
          input.value = history[historyIdx];
        } else {
          historyIdx = history.length;
          input.value = '';
        }
      }
    });

    // Focus input when clicking anywhere in terminal
    document.getElementById('mini-terminal').addEventListener('click', () => {
      input.focus();
    });
  }

  function handleCommand(cmd, body) {
    if (!cmd) return;
    const handler = COMMANDS[cmd];
    if (!handler) {
      appendLine(body, `zsh: command not found: ${cmd}`);
      return;
    }
    const result = handler();
    if (result === '__CLEAR__') {
      body.innerHTML = '';
      body.appendChild(createInputLine());
      bindTerminal();
    } else {
      appendLine(body, result);
    }
  }

  function appendLine(body, text, cls) {
    const div = document.createElement('div');
    div.className = cls ? 'line ' + cls : 'line';
    div.textContent = text;
    // Insert before the last input line
    const lastInput = body.querySelector('.terminal-input-line');
    body.insertBefore(div, lastInput);
  }

  function createInputLine() {
    const div = document.createElement('div');
    div.className = 'terminal-input-line';
    div.innerHTML = `
      <span class="terminal-prompt">visitor@blog:~$ </span>
      <input type="text" class="terminal-input" id="terminal-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
    `;
    return div;
  }

  // ==========================================================
  // 2. Tab 标题动态替换
  // ==========================================================
  (function initTabTitle() {
    const original = document.title;
    const awayMessages = [
      '⚠️ Security Breach Detected',
      '🔓 Session hijacked?',
      '[ALERT] Unauthorized access',
      'Come back! The blog is on fire.',
      '👀 I see you left...',
    ];

    let awayIndex = 0;
    let awayInterval = null;
    let isAway = false;

    function startAwayMode() {
      if (isAway) return;
      isAway = true;
      awayIndex = 0;
      document.title = awayMessages[0];
      awayInterval = setInterval(() => {
        awayIndex = (awayIndex + 1) % awayMessages.length;
        document.title = awayMessages[awayIndex];
      }, 3000);
    }

    function stopAwayMode() {
      if (!isAway) return;
      isAway = false;
      clearInterval(awayInterval);
      document.title = original;
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Delay slightly — only trigger if actually tabbing away (not rapid switches)
        setTimeout(() => { if (document.hidden) startAwayMode(); }, 500);
      } else {
        stopAwayMode();
      }
    });

    // Also react to blur/focus (covers some edge cases)
    window.addEventListener('blur', () => startAwayMode());
    window.addEventListener('focus', () => stopAwayMode());
  })();

  // ==========================================================
  // 3. AOS 滚动渐入动画
  // ==========================================================
  (function initAOS() {
    // Only on article pages
    const article = document.getElementById('article-container');
    const targets = [];

    if (article) {
      // Add aos classes to images
      article.querySelectorAll('img').forEach((img, i) => {
        img.classList.add('aos-fade-up');
        img.style.transitionDelay = (i % 3) * 0.1 + 's';
        targets.push(img);
      });

      // Add aos classes to code blocks
      article.querySelectorAll('figure.highlight').forEach((fig, i) => {
        fig.classList.add('aos-slide-right');
        fig.style.transitionDelay = (i % 5) * 0.08 + 's';
        targets.push(fig);
      });

      // Add aos classes to blockquotes
      article.querySelectorAll('blockquote').forEach((el, i) => {
        el.classList.add('aos-hidden');
        el.style.transitionDelay = (i % 3) * 0.1 + 's';
        targets.push(el);
      });
    }

    if (targets.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    });

    targets.forEach((el) => observer.observe(el));
  })();

  // Start terminal when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTerminal);
  } else {
    createTerminal();
  }
})();
