document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const cityInput = document.getElementById("city");
  const dreamInput = document.getElementById("dream");
  const aboutInput = document.getElementById("about");
  const interestsInput = document.getElementById("interests");
  const skillsInput = document.getElementById("skills");
  const projectsInput = document.getElementById("projects");
  const colorInput = document.getElementById("color");
  const strongSideInput = document.getElementById("strongSide");
  const photoInput = document.getElementById("photo");

  const demoBtn = document.getElementById("demoBtn");
  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");

  const previewFrame = document.getElementById("previewFrame");
  const codeOutput = document.getElementById("codeOutput");

  let uploadedPhotoData = "";

  photoInput.addEventListener("change", function () {
    const file = photoInput.files[0];

    if (!file) {
      uploadedPhotoData = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      uploadedPhotoData = event.target.result;
    };
    reader.readAsDataURL(file);
  });

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getFormData() {
    return {
      name: nameInput.value.trim() || "Софія",
      age: ageInput.value.trim() || "10",
      city: cityInput.value.trim() || "Київ",
      dream: dreamInput.value.trim() || "дизайнеркою ігор",
      about: aboutInput.value.trim() || "Я люблю творчі завдання, цікаві цифрові інструменти, придумувати власні ідеї та вивчати щось нове.",
      interests: interestsInput.value.trim() || "малювання, комікси, Canva, Minecraft, створення історій",
      skills: skillsInput.value.trim() || "придумувати сюжети, оформлювати слайди, створювати прості візуальні роботи, фантазувати",
      projects: projectsInput.value.trim() || "власний сайт, презентації, комікси, цифрові історії, мініігри",
      color: colorInput.value || "#ff8a65",
      strongSide: strongSideInput.value.trim() || "творче мислення",
      photo: uploadedPhotoData
    };
  }

  function getPhotoBlock(photo, name, color) {
    if (photo) {
      return `
        <div class="hero-photo-wrap">
          <img src="${photo}" alt="Фото ${name}" class="hero-photo">
        </div>
      `;
    }

    return `
      <div class="hero-photo-wrap">
        <div class="hero-photo hero-photo--placeholder" style="background: linear-gradient(135deg, ${color} 0%, #5aa9ff 100%);">
          ${name.charAt(0)}
        </div>
      </div>
    `;
  }

  function buildPortfolioHtml(data) {
    const safeName = escapeHtml(data.name);
    const safeAge = escapeHtml(data.age);
    const safeCity = escapeHtml(data.city);
    const safeDream = escapeHtml(data.dream);
    const safeAbout = escapeHtml(data.about);
    const safeInterests = escapeHtml(data.interests);
    const safeSkills = escapeHtml(data.skills);
    const safeProjects = escapeHtml(data.projects);
    const safeColor = escapeHtml(data.color);
    const safeStrongSide = escapeHtml(data.strongSide);
    const photoBlock = getPhotoBlock(data.photo, safeName, safeColor);

    return `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Портфоліо ${safeName}</title>
  <style>
    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      color: #223344;
      background:
        radial-gradient(circle at top left, ${safeColor}20 0%, transparent 28%),
        linear-gradient(180deg, #fffdfb 0%, #f3f8fd 100%);
    }

    .container {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #e5ebf3;
    }

    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      padding: 16px 0;
    }

    .logo {
      font-size: 22px;
      font-weight: bold;
      color: #111827;
    }

    .logo span {
      color: ${safeColor};
    }

    .menu {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }

    .menu a {
      text-decoration: none;
      color: #334155;
      font-weight: bold;
      transition: color 0.2s ease;
    }

    .menu a:hover {
      color: ${safeColor};
    }

    .hero {
      padding: 70px 0 50px;
    }

    .hero-box {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 24px;
      align-items: center;
      background: rgba(255, 255, 255, 0.94);
      border: 1px solid #e1e8f0;
      border-radius: 28px;
      padding: 34px;
      box-shadow: 0 20px 50px rgba(31, 41, 55, 0.08);
    }

    .hero-badge {
      display: inline-block;
      padding: 8px 14px;
      border-radius: 999px;
      background: ${safeColor};
      color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    .hero h1 {
      margin: 0 0 14px;
      font-size: 48px;
      line-height: 1.08;
      color: #111827;
    }

    .hero p {
      margin: 0 0 22px;
      font-size: 18px;
      line-height: 1.75;
      color: #4b5563;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .hero-actions a {
      display: inline-block;
      padding: 14px 20px;
      border-radius: 14px;
      text-decoration: none;
      font-weight: bold;
    }

    .btn-primary {
      background: linear-gradient(135deg, ${safeColor} 0%, #5aa9ff 100%);
      color: #ffffff;
      box-shadow: 0 12px 28px rgba(255, 138, 101, 0.20);
    }

    .btn-secondary {
      background: #f7f9fc;
      color: #374151;
      border: 1px solid #dce5f1;
    }

    .hero-card {
      background: linear-gradient(135deg, ${safeColor}16 0%, #ffffff 100%);
      border: 1px solid #dfe7f1;
      border-radius: 24px;
      padding: 24px;
    }

    .hero-card-top {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 18px;
      align-items: center;
      margin-bottom: 14px;
    }

    .hero-photo-wrap {
      width: 110px;
      height: 110px;
    }

    .hero-photo {
      width: 110px;
      height: 110px;
      border-radius: 22px;
      object-fit: cover;
      display: block;
      background: #fff4ef;
      border: 1px solid #eadfd7;
    }

    .hero-photo--placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      font-weight: bold;
      color: #ffffff;
    }

    .hero-card h3 {
      margin-top: 0;
      margin-bottom: 14px;
      font-size: 22px;
      color: #111827;
    }

    .hero-card-item {
      padding: 12px 0;
      border-bottom: 1px solid #e3eaf3;
      font-size: 16px;
      color: #475569;
    }

    .hero-card-item:last-child {
      border-bottom: none;
    }

    .section {
      padding: 18px 0 30px;
    }

    .section-title {
      margin: 0 0 18px;
      font-size: 32px;
      color: #111827;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .card {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid #e2e8f0;
      border-radius: 22px;
      padding: 22px;
      box-shadow: 0 14px 34px rgba(31, 41, 55, 0.06);
    }

    .card h3 {
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 22px;
      color: #111827;
    }

    .card p {
      margin: 0;
      color: #4b5563;
      line-height: 1.7;
      font-size: 17px;
      white-space: pre-wrap;
    }

    .wide-card {
      margin-top: 18px;
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 24px;
      box-shadow: 0 14px 34px rgba(31, 41, 55, 0.06);
    }

    .wide-card p {
      margin: 0;
      color: #4b5563;
      line-height: 1.8;
      font-size: 18px;
      white-space: pre-wrap;
    }

    .quote {
      margin-top: 18px;
      padding: 22px;
      border-left: 6px solid ${safeColor};
      border-radius: 20px;
      background: linear-gradient(135deg, ${safeColor}12 0%, #ffffff 100%);
      font-size: 20px;
      color: #334155;
      font-weight: bold;
      line-height: 1.7;
    }

    .site-footer {
      margin-top: 40px;
      padding: 26px 0 34px;
      border-top: 1px solid #dfe7f1;
      background: rgba(255, 255, 255, 0.75);
    }

    .footer-row {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
    }

    .footer-title {
      font-weight: bold;
      font-size: 18px;
      color: #111827;
    }

    .footer-text {
      color: #64748b;
      line-height: 1.6;
      font-size: 15px;
    }

    @media (max-width: 900px) {
      .hero-box {
        grid-template-columns: 1fr;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .hero h1 {
        font-size: 38px;
      }
    }

    @media (max-width: 640px) {
      .container {
        width: min(100% - 20px, 1120px);
      }

      .header-row {
        flex-direction: column;
        align-items: flex-start;
      }

      .menu {
        gap: 12px;
      }

      .hero {
        padding-top: 34px;
      }

      .hero-box {
        padding: 22px;
      }

      .hero h1 {
        font-size: 32px;
      }

      .hero-card-top {
        grid-template-columns: 1fr;
      }

      .hero-photo-wrap {
        width: 100%;
        height: auto;
      }

      .hero-photo,
      .hero-photo--placeholder {
        width: 100px;
        height: 100px;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container header-row">
      <div class="logo">${safeName}<span>.portfolio</span></div>

      <nav class="menu">
        <a href="#home">Головна</a>
        <a href="#about">Про мене</a>
        <a href="#skills">Навички</a>
        <a href="#dream">Моя мрія</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container hero-box">
        <div>
          <div class="hero-badge">Моє портфоліо</div>
          <h1>Привіт! Мене звати ${safeName}</h1>
          <p>
            Мені ${safeAge} років, я з ${safeCity}. Це моя особиста сторінка,
            де я розповідаю про себе, свої інтереси, сильні сторони, навички та мрію.
          </p>

          <div class="hero-actions">
            <a href="#about" class="btn-primary">Дізнатися про мене</a>
            <a href="#dream" class="btn-secondary">Подивитися мою мрію</a>
          </div>
        </div>

        <div class="hero-card">
          <div class="hero-card-top">
            ${photoBlock}
            <div>
              <h3>Швидко про мене</h3>
              <div class="hero-card-item"><strong>Вік:</strong> ${safeAge} років</div>
            </div>
          </div>
          <div class="hero-card-item"><strong>Місто:</strong> ${safeCity}</div>
          <div class="hero-card-item"><strong>Сильна сторона:</strong> ${safeStrongSide}</div>
          <div class="hero-card-item"><strong>Мрія:</strong> стати ${safeDream}</div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <h2 class="section-title">Про мене</h2>

        <div class="wide-card">
          <p>${safeAbout}</p>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="container">
        <h2 class="section-title">Мої інтереси та навички</h2>

        <div class="grid">
          <div class="card">
            <h3>Мої інтереси</h3>
            <p>${safeInterests}</p>
          </div>

          <div class="card">
            <h3>Що я вже вмію</h3>
            <p>${safeSkills}</p>
          </div>

          <div class="card">
            <h3>Які проєкти мені цікаві</h3>
            <p>${safeProjects}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="dream">
      <div class="container">
        <h2 class="section-title">Моя мрія</h2>

        <div class="wide-card">
          <p>
            Я мрію стати ${safeDream}. Мені цікаво розвиватися, пробувати нове,
            створювати власні проєкти та крок за кроком ставати кращою у тому, що мені подобається.
          </p>
        </div>

        <div class="quote">
          “Кожна велика мрія починається з маленького кроку, цікавості та бажання спробувати.”
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-row">
      <div>
        <div class="footer-title">${safeName}.portfolio</div>
        <div class="footer-text">Моє дитяче портфоліо та перша особиста сторінка</div>
      </div>

      <div class="footer-text">
        Цей сайт створено як приклад першого цифрового портфоліо дитини.
      </div>
    </div>
  </footer>
</body>
</html>`;
  }

  function renderPortfolio() {
    const data = getFormData();
    const htmlVersion = buildPortfolioHtml(data);

    codeOutput.textContent = htmlVersion;
    previewFrame.srcdoc = htmlVersion;
  }

  demoBtn.addEventListener("click", function () {
    nameInput.value = "Софія";
    ageInput.value = "10";
    cityInput.value = "Київ";
    dreamInput.value = "дизайнеркою ігор";
    aboutInput.value = "Я люблю творчі завдання, цікаві цифрові інструменти, придумувати власні ідеї та вивчати щось нове.";
    interestsInput.value = "малювання, комікси, Canva, Minecraft, створення історій";
    skillsInput.value = "придумувати сюжети, оформлювати слайди, створювати прості візуальні роботи, фантазувати";
    projectsInput.value = "власний сайт, презентації, комікси, цифрові історії, мініігри";
    colorInput.value = "#ff8a65";
    strongSideInput.value = "творче мислення";
    uploadedPhotoData = "";

    renderPortfolio();
  });

  generateBtn.addEventListener("click", function () {
    renderPortfolio();
  });

  copyBtn.addEventListener("click", async function () {
    const textToCopy = codeOutput.textContent.trim();

    if (!textToCopy || textToCopy.includes("Тут з’явиться HTML-код портфоліо")) {
      copyBtn.textContent = "Спочатку створіть портфоліо";
      setTimeout(function () {
        copyBtn.textContent = "Скопіювати код";
      }, 1800);
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      copyBtn.textContent = "Код скопійовано";
      setTimeout(function () {
        copyBtn.textContent = "Скопіювати код";
      }, 1800);
    } catch (error) {
      copyBtn.textContent = "Не вдалося скопіювати";
      setTimeout(function () {
        copyBtn.textContent = "Скопіювати код";
      }, 1800);
    }
  });

  renderPortfolio();
});