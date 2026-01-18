// ========== ОСНОВНОЙ ТЕСТ ДЛЯ ОПРЕДЕЛЕНИЯ ПРОФЕССИИ ==========

// Основной тест для определения будущей профессии
const mainSurveyData = [
  {
    question: "Какой тип деятельности вам ближе всего?",
    options: [
      "Работа с людьми (психология, педагогика, медицина)",
      "Анализ и исследования (наука, аналитика, программирование)",
      "Творчество и дизайн (дизайн, искусство, медиа)",
      "Техника и технологии (инженерия, IT, робототехника)",
      "Природа и животные (биология, экология, ветеринария)",
      "Бизнес и управление (менеджмент, маркетинг, финансы)",
    ],
  },
  {
    question: "Какой школьный предмет вам нравился больше всего?",
    options: [
      "Обществознание, литература, история",
      "Математика, информатика",
      "Искусство, технология, рисование",
      "Физика, химия",
      "Биология, география",
      "Экономика, право",
    ],
  },
  {
    question: "Что вы делаете с удовольствием в свободное время?",
    options: [
      "Общаюсь с друзьями, помогаю другим",
      "Решаю логические задачи, программирую",
      "Рисую, создаю что-то красивое",
      "Читаю технические статьи, изучаю технологии",
      "Гуляю на природе, изучаю животных",
      "Планирую проекты, изучаю бизнес",
    ],
  },
  {
    question: "Какая работа кажется вам наиболее привлекательной?",
    options: [
      "Учитель, психолог, врач",
      "Data Scientist, аналитик данных, программист",
      "Дизайнер, художник, иллюстратор",
      "Инженер-программист, системный администратор",
      "Ветеринар, эколог, биолог",
      "Предприниматель, маркетолог, менеджер",
    ],
  },
  {
    question: "Что для вас важнее в карьере?",
    options: [
      "Помогать людям, делать мир лучше",
      "Решать сложные интеллектуальные задачи",
      "Выражать себя творчески, создавать красоту",
      "Работать с передовыми технологиями",
      "Быть на свежем воздухе, работать с природой",
      "Зарабатывать, управлять, строить бизнес",
    ],
  },
  {
    question: "Как вы лучше усваиваете информацию?",
    options: [
      "Обсуждая с другими, работая в команде",
      "Через логику, схемы, алгоритмы",
      "Через рисунки, образы, визуализацию",
      "Через практику, код, эксперименты",
      "Через наблюдение, опыт, практику",
      "Через цели, результат, проекты",
    ],
  },
  {
    question: "Какой проект вы бы выбрали?",
    options: [
      "Организовать тренинг или консультацию",
      "Проанализировать большие данные",
      "Создать сайт, логотип или дизайн",
      "Собрать робота или программу",
      "Провести исследование экосистемы",
      "Запустить стартап или бизнес-проект",
    ],
  },
  {
    question: "Что вас мотивирует больше всего?",
    options: [
      "Признание и благодарность от людей",
      "Интеллектуальный вызов и открытия",
      "Эстетика, красота, творчество",
      "Эффективность, точность, технологии",
      "Гармония с природой, забота о животных",
      "Финансовая свобода, успех, признание",
    ],
  },
  {
    question: "Какой формат учёбы вам ближе?",
    options: [
      "Гуманитарный (психология, социология, педагогика)",
      "Технический с уклоном в IT (программирование, data science)",
      "Творческий (дизайн, медиа, искусство)",
      "Инженерный (строительство, механика, электроника)",
      "Биологический/медицинский (медицина, биология, ветеринария)",
      "Экономический/управленческий (бизнес, финансы, менеджмент)",
    ],
  },
  {
    question: "Где бы вы хотели работать?",
    options: [
      "В школе, больнице, социальной службе",
      "В IT-компании, стартапе, tech-компании",
      "В студии, агентстве, творческом пространстве",
      "На заводе, в лаборатории, на производстве",
      "В заповеднике, клинике, на природе",
      "В офисе, на своём деле, в корпорации",
    ],
  },
];

// Текстовые вопросы для более глубокого анализа
const textQuestions = [
  {
    question: "Опишите вашу идеальную рабочую среду. Где бы вы хотели работать?",
    placeholder: "Например: в офисе с командой, дома за компьютером, на природе..."
  },
  {
    question: "Какие ваши главные цели в карьере? Что для вас важно?",
    placeholder: "Например: помогать людям, зарабатывать хорошие деньги, создавать что-то новое..."
  },
  {
    question: "Расскажите о вашем опыте или увлечениях, которые могут быть связаны с будущей профессией.",
    placeholder: "Например: я люблю программировать, помогаю друзьям с проблемами, рисую..."
  }
];

// Переменные для состояния
let currentQuestion = 0;
let userAnswers = [];
let textAnswers = [];
let educationPath = "";
let selectedCity = "";
let showTextQuestions = false;

// Определяем путь обучения (9 или 11 класс)
function selectEducationPath(path) {
  educationPath = path;
  document.getElementById("education-path-selection").style.display = "none";
  initSurvey();
}

// Инициализация теста
function initSurvey() {
  const surveyContainer = document.getElementById("survey-questions");
  surveyContainer.style.display = "block";
  surveyContainer.innerHTML = `
    <div class="test-header">
      <h2>Тест на определение будущей профессии</h2>
      <p>Ответьте на вопросы, чтобы мы могли подобрать для вас подходящую профессию</p>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-fill"></div>
      </div>
    </div>
    <div id="questions-container"></div>
  `;

  const questionsContainer = document.getElementById("questions-container");

  mainSurveyData.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.style.display = index === 0 ? "block" : "none";
    questionElement.id = `question-${index}`;

    let optionsHTML = "";
    question.options.forEach((option, optIndex) => {
      optionsHTML += `
        <div class="option">
          <input type="radio" id="q${index}-opt${optIndex}" name="question-${index}" value="${optIndex}">
          <label for="q${index}-opt${optIndex}">
            <span class="option-number">${String.fromCharCode(65 + optIndex)}</span>
            <span class="option-text">${option}</span>
          </label>
        </div>
      `;
    });

    questionElement.innerHTML = `
      <div class="question-content">
        <h3><span class="question-number">${index + 1}.</span> ${question.question}</h3>
        <div class="options">
          ${optionsHTML}
        </div>
      </div>
    `;

    questionsContainer.appendChild(questionElement);
  });

  document.getElementById("survey-navigation").style.display = "flex";
  updateProgress();
  updateNavigation();
}

// Обновление прогресса
function updateProgress() {
  const progress = ((currentQuestion + 1) / mainSurveyData.length) * 100;
  const progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
}

// Обновление навигации
function updateNavigation() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  prevBtn.disabled = currentQuestion === 0;

  if (currentQuestion === mainSurveyData.length - 1) {
    nextBtn.innerHTML = '<i class="fas fa-check"></i> Завершить тест';
  } else {
    nextBtn.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
  }

  updateProgress();
}

// Следующий вопрос
function nextQuestion() {
  const currentQuestionElement = document.getElementById(`question-${currentQuestion}`);
  const selectedOption = currentQuestionElement.querySelector("input:checked");

  if (!selectedOption) {
    alert("Пожалуйста, выберите вариант ответа");
    return;
  }

  userAnswers[currentQuestion] = parseInt(selectedOption.value);

  if (currentQuestion < mainSurveyData.length - 1) {
    currentQuestionElement.style.display = "none";
    currentQuestion++;
    document.getElementById(`question-${currentQuestion}`).style.display = "block";
    updateNavigation();
  } else {
    // После последнего вопроса показываем текстовые вопросы
    showTextQuestions = true;
    showTextQuestionsSection();
  }
}

// Показать секцию с текстовыми вопросами
function showTextQuestionsSection() {
  const surveyContainer = document.querySelector(".survey-container");
  const questionsContainer = document.getElementById("questions-container");
  
  let textQuestionsHTML = `
    <div class="text-questions-section">
      <h3 style="margin-bottom: 20px; color: var(--text-dark);">
        <i class="fas fa-comment-alt"></i> Дополнительные вопросы
      </h3>
      <p style="color: var(--text-light); margin-bottom: 30px;">
        Ответьте на несколько открытых вопросов для более точного анализа вашей личности и интересов.
      </p>
  `;

  textQuestions.forEach((q, index) => {
    textQuestionsHTML += `
      <div class="text-question-item" style="margin-bottom: 25px;">
        <label style="display: block; margin-bottom: 10px; font-weight: 600; color: var(--text-dark);">
          ${index + 1}. ${q.question}
        </label>
        <textarea 
          id="text-answer-${index}" 
          class="text-answer-input"
          placeholder="${q.placeholder}"
          rows="4"
          style="width: 100%; padding: 15px; border: 1px solid var(--border-color); border-radius: 8px; font-family: inherit; font-size: 1rem; resize: vertical;"
        ></textarea>
      </div>
    `;
  });

  textQuestionsHTML += `
      <div class="text-questions-note" style="background: var(--light-gray); padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid var(--primary);">
        <p style="margin: 0; color: var(--text-light); font-size: 0.9rem;">
          <i class="fas fa-info-circle"></i> Эти ответы помогут AI лучше понять ваши интересы и дать более точные рекомендации.
        </p>
      </div>
    </div>
  `;

  questionsContainer.innerHTML += textQuestionsHTML;
  
  // Обновляем кнопку
  const nextBtn = document.getElementById("next-btn");
  nextBtn.innerHTML = '<i class="fas fa-check"></i> Завершить тест';
  nextBtn.onclick = finishTextQuestions;
}

// Завершить текстовые вопросы
function finishTextQuestions() {
  textAnswers = [];
  textQuestions.forEach((q, index) => {
    const textarea = document.getElementById(`text-answer-${index}`);
    if (textarea && textarea.value.trim()) {
      textAnswers.push(textarea.value.trim());
    }
  });
  
  showResults();
}

// Предыдущий вопрос
function prevQuestion() {
  if (currentQuestion > 0) {
    document.getElementById(`question-${currentQuestion}`).style.display = "none";
    currentQuestion--;
    document.getElementById(`question-${currentQuestion}`).style.display = "block";
    updateNavigation();
  }
}

// Анализ результатов и определение профессии
function analyzeResults() {
  const skillScores = {
    "Коммуникативные навыки": 0,
    "Аналитическое мышление": 0,
    "Творческий подход": 0,
    "Технические навыки": 0,
    "Организационные способности": 0,
    "Работа в команде": 0,
    "Самостоятельность": 0,
    "Адаптивность": 0,
    "Управление проектами": 0,
    "Решение проблем": 0,
  };

  // Маппинг ответов на навыки
  userAnswers.forEach((answer) => {
    // Работа с людьми
        if (answer === 0) {
      skillScores["Коммуникативные навыки"] += 4;
      skillScores["Работа в команде"] += 3;
        }
    // Анализ и исследования
        if (answer === 1) {
      skillScores["Аналитическое мышление"] += 4;
      skillScores["Решение проблем"] += 3;
        }
    // Творчество
        if (answer === 2) {
      skillScores["Творческий подход"] += 4;
      skillScores["Адаптивность"] += 3;
        }
    // Техника
        if (answer === 3) {
      skillScores["Технические навыки"] += 4;
      skillScores["Решение проблем"] += 3;
        }
    // Природа
        if (answer === 4) {
      skillScores["Самостоятельность"] += 3;
      skillScores["Решение проблем"] += 2;
        }
    // Бизнес
        if (answer === 5) {
      skillScores["Организационные способности"] += 4;
      skillScores["Управление проектами"] += 3;
    }
  });

  // Нормализация баллов
  const maxPossibleScore = mainSurveyData.length * 4;
  const normalizedSkills = {};
  for (const skill in skillScores) {
    const score = Math.min(100, Math.max(0, (skillScores[skill] / maxPossibleScore) * 100));
    normalizedSkills[skill] = Math.round(score);
  }

  return normalizedSkills;
}

// Определение профессии на основе результатов (базовая логика)
function determineProfession(skillScores) {
  const sortedSkills = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
  const topSkills = sortedSkills.slice(0, 3).map(s => s[0]);

  // Логика определения профессии
  let profession = "Инженер-программист"; // по умолчанию

  if (topSkills.includes("Коммуникативные навыки") && topSkills.includes("Работа в команде")) {
    if (userAnswers.some(a => a === 0 || a === 4)) {
      profession = "Психолог";
    } else if (userAnswers.some(a => a === 0)) {
      profession = "Учитель";
    }
  } else if (topSkills.includes("Аналитическое мышление") && topSkills.includes("Технические навыки")) {
    if (userAnswers.some(a => a === 1)) {
      profession = "Data Scientist";
    } else {
      profession = "Инженер-программист";
    }
  } else if (topSkills.includes("Творческий подход")) {
    profession = "Веб-дизайнер";
  } else if (topSkills.includes("Технические навыки") && topSkills.includes("Решение проблем")) {
    if (userAnswers.some(a => a === 3)) {
      profession = "Инженер-робототехник";
    } else {
      profession = "Инженер-строитель";
    }
  } else if (topSkills.includes("Организационные способности") && topSkills.includes("Управление проектами")) {
    profession = "Менеджер по продажам";
  } else if (userAnswers.some(a => a === 4)) {
    profession = "Ветеринар";
  } else if (userAnswers.some(a => a === 5)) {
    profession = "Маркетолог";
  }

  return profession;
}

// Улучшенное определение профессии с AI
async function determineProfessionWithAI(skillScores) {
  try {
    const aiRecommendation = await aiService.getEnhancedProfessionRecommendation(
      skillScores, 
      userAnswers, 
      textAnswers
    );
    
    // Парсим ответ AI (формат: "Профессия. Обоснование")
    const parts = aiRecommendation.split('.');
    if (parts.length > 0) {
      const profession = parts[0].trim();
      // Проверяем, есть ли такая профессия в нашем списке
      if (professions[profession]) {
        return { profession, reasoning: parts.slice(1).join('.').trim() };
      }
    }
  } catch (error) {
    console.error('AI recommendation error:', error);
  }
  
  // Fallback на базовую логику
  const profession = determineProfession(skillScores);
  return { profession, reasoning: null };
}

// Получение сильных и слабых сторон
function getStrengthsAndWeaknesses(skillScores) {
  const sortedSkills = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
  const strengths = sortedSkills.slice(0, 5).map(([skill, score]) => ({
    skill,
    score,
    level: score >= 70 ? "strong" : score >= 40 ? "medium" : "weak",
  }));
  const weaknesses = sortedSkills
    .slice(-5)
    .map(([skill, score]) => ({
      skill,
      score,
      level: score >= 70 ? "strong" : score >= 40 ? "medium" : "weak",
    }))
    .reverse();
  return { strengths, weaknesses };
}

// Создание плавной диаграммы навыков
function createSkillDiagram(skillScores) {
  const skillsArray = Object.entries(skillScores).sort((a, b) => b[1] - a[1]);
  const maxScore = Math.max(...skillsArray.map(s => s[1]));
  
  let diagramHTML = `
    <div class="skills-diagram">
      <h3 style="margin-bottom: 30px; text-align: center; color: var(--text-dark);">
        <i class="fas fa-chart-pie"></i> Диаграмма ваших навыков
      </h3>
      <div class="diagram-container">
  `;

  skillsArray.forEach(([skill, score], index) => {
    const percentage = (score / maxScore) * 100;
    const angle = (index / skillsArray.length) * 360;
    const level = score >= 70 ? "strong" : score >= 40 ? "medium" : "weak";
    
    diagramHTML += `
      <div class="diagram-item" style="animation-delay: ${index * 0.1}s">
        <div class="diagram-bar-container">
          <div class="diagram-bar ${level}" style="width: ${percentage}%"></div>
        </div>
        <div class="diagram-label">
          <span class="diagram-skill-name">${skill}</span>
          <span class="diagram-skill-score ${level}">${score}%</span>
        </div>
      </div>
    `;
  });

  diagramHTML += `
      </div>
    </div>
  `;

  return diagramHTML;
}

// Показать результаты
async function showResults() {
  // Показываем индикатор загрузки
  let surveyContainer = document.querySelector(".survey-container");
  surveyContainer.innerHTML = `
    <div class="loading-results" style="text-align: center; padding: 60px 20px;">
      <div class="loading-spinner" style="width: 60px; height: 60px; border: 4px solid var(--border-color); border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
      <h3 style="color: var(--text-dark); margin-bottom: 10px;">Анализируем ваши ответы...</h3>
      <p style="color: var(--text-light);">AI обрабатывает данные и готовит персональные рекомендации</p>
    </div>
  `;
  
  // Добавляем анимацию спиннера
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  const skillScores = analyzeResults();
  const { strengths, weaknesses } = getStrengthsAndWeaknesses(skillScores);
  
  // Используем AI для улучшенных рекомендаций
  let professionResult;
  try {
    professionResult = await determineProfessionWithAI(skillScores);
  } catch (error) {
    console.error('Profession determination error:', error);
    professionResult = { profession: determineProfession(skillScores), reasoning: null };
  }
  
  const recommendedProfession = professionResult.profession;
  const aiReasoning = professionResult.reasoning;
  const professionData = professions[recommendedProfession] || professions["Инженер-программист"];
  
  // Получаем персонализированные советы по навыкам
  let skillAdvice = "";
  try {
    skillAdvice = await aiService.getPersonalizedSkillAdvice(skillScores, weaknesses);
  } catch (error) {
    console.error('Skill advice error:', error);
  }
  
  // Анализируем текстовые ответы если есть
  let textAnalysis = null;
  if (textAnswers.length > 0) {
    try {
      textAnalysis = await aiService.analyzeTextAnswers(textAnswers);
    } catch (error) {
      console.error('Text analysis error:', error);
    }
  }

  surveyContainer = document.querySelector(".survey-container");
  surveyContainer.innerHTML = `
    <div class="result-container">
      <div class="result-header">
        <div class="result-title">
          <i class="fas fa-graduation-cap"></i>
          Результаты теста
        </div>
        <div class="test-completion">
          <p>На основе ваших ответов мы определили вашу будущую профессию и проанализировали ваши навыки.</p>
          <p class="test-stats"><i class="fas fa-chart-line"></i> Вы ответили на ${mainSurveyData.length} вопросов</p>
        </div>
      </div>

      <div class="profession-result">
        <h2 class="profession-name">${recommendedProfession}</h2>
        <p class="profession-description">${professionData.description}</p>
        ${aiReasoning ? `
          <div class="ai-reasoning" style="margin-top: 20px; padding: 15px; background: var(--light-gray); border-radius: 8px; border-left: 4px solid var(--primary);">
            <p style="margin: 0; color: var(--text-dark); font-style: italic;">
              <i class="fas fa-robot" style="color: var(--primary); margin-right: 8px;"></i>
              <strong>AI-анализ:</strong> ${aiReasoning}
            </p>
          </div>
        ` : ""}
        ${textAnalysis ? `
          <div class="text-analysis" style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(156, 39, 176, 0.1)); border-radius: 8px; border-left: 4px solid var(--primary);">
            <h4 style="margin: 0 0 10px 0; color: var(--text-dark);">
              <i class="fas fa-brain" style="color: var(--primary); margin-right: 8px;"></i>
              Анализ ваших ответов:
            </h4>
            <p style="margin: 0; color: var(--text-dark); white-space: pre-line; line-height: 1.6;">
              ${textAnalysis}
            </p>
          </div>
        ` : ""}
      </div>

      <div class="analysis-section">
        <h2 class="section-heading">
          <i class="fas fa-chart-bar"></i>
          Анализ ваших навыков
        </h2>
        ${createSkillDiagram(skillScores)}
        
        <div class="skills-analysis">
          <div class="skills-card result-item">
            <div class="card-header">
              <h3><i class="fas fa-trophy"></i> Ваши сильные стороны</h3>
              <span class="card-subtitle">Топ-5 наиболее развитых навыков</span>
            </div>
            <div class="strengths-list">
              ${strengths.map((item, index) => `
                <div class="strength-item">
                  <div class="strength-rank">${index + 1}</div>
                  <div class="strength-content">
                    <div class="strength-name">${item.skill}</div>
                    <div class="strength-progress">
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: ${item.score}%"></div>
                      </div>
                      <span class="strength-score">${item.score}%</span>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
          
          <div class="skills-card result-item">
            <div class="card-header">
              <h3><i class="fas fa-exclamation-triangle"></i> Зоны для развития</h3>
              <span class="card-subtitle">Навыки, требующие внимания</span>
            </div>
            <div class="weaknesses-list">
              ${weaknesses.map((item) => `
                <div class="weakness-item">
                  <div class="weakness-icon">
                    <i class="fas fa-star"></i>
                  </div>
                  <div class="weakness-content">
                    <div class="weakness-name">${item.skill}</div>
                    <div class="weakness-desc">Важный навык для карьерного роста</div>
                  </div>
                  <div class="weakness-score ${item.level}">${item.score}%</div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      ${skillAdvice ? `
        <div class="skill-advice-section result-item">
          <h3><i class="fas fa-lightbulb"></i> Персонализированные советы по развитию навыков</h3>
          <div class="skill-advice-content" style="background: var(--white); padding: 20px; border-radius: 12px; margin-top: 15px; border: 1px solid var(--border-color);">
            <p style="color: var(--text-dark); white-space: pre-line; line-height: 1.8;">
              ${skillAdvice}
            </p>
          </div>
        </div>
      ` : ""}

      <div class="exam-info result-item">
        <h3><i class="fas fa-graduation-cap"></i> Информация для поступления</h3>
        <p><strong>${educationPath === "9" ? "Профили для поступления в колледж:" : "Необходимые профили:"}</strong></p>
        <ul>
          ${professionData.subjects.map((subject) => `<li>${subject}</li>`).join("")}
        </ul>
        <p style="margin-top: 15px;">
          <strong>Средний ${educationPath === "9" ? "балл аттестата" : "проходной балл"}:</strong>
          <span style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">
            ${educationPath === "9" 
                ? professionData.avgScore > 10
                  ? (professionData.avgScore / 17).toFixed(1).replace(".", ",")
                  : professionData.avgScore.toFixed(1).replace(".", ",")
              : professionData.avgScore}${educationPath === "9" ? "" : " баллов"}
          </span>
        </p>
      </div>

      <div class="city-selection result-item">
        <h3><i class="fas fa-map-marker-alt"></i> Выберите город для поступления:</h3>
        <div class="city-grid" id="city-options">
          ${Object.keys(educationInstitutions).map((city) =>
            `<div class="city-option" onclick="selectCity('${city}', '${recommendedProfession}')">${city}</div>`
          ).join("")}
        </div>
        <div id="institutions-list" class="universities-list"></div>
      </div>

      <div id="courses-section" class="courses-section result-item" style="display: none;">
        <h3><i class="fas fa-book"></i> Рекомендуемые курсы</h3>
        <div id="courses-content"></div>
      </div>

      <div class="chatbot-section result-item" style="margin-top: 40px;">
        <h3><i class="fas fa-comments"></i> Чат-бот консультант</h3>
        <p style="color: var(--text-light); margin-bottom: 15px;">
          Задайте любой вопрос о карьере, профессии или развитии навыков
        </p>
        
        <!-- Примеры вопросов -->
        <div id="chatbot-examples" class="chatbot-examples">
          <div class="examples-header">
            <h4 style="color: var(--text-dark); margin-bottom: 15px; font-size: 1rem;">
              <i class="fas fa-lightbulb"></i> Популярные вопросы:
            </h4>
            <div class="examples-categories">
              ${chatbotExampleQuestions.map(category => `
                <div class="example-category">
                  <h5 style="color: var(--primary); font-size: 0.9rem; margin-bottom: 10px; font-weight: 600;">
                    ${category.category}
                  </h5>
                  <div class="example-questions">
                    ${category.questions.slice(0, 3).map(question => `
                      <button 
                        class="example-question-btn" 
                        onclick="askExampleQuestion('${question.replace(/'/g, "\\'")}')"
                        title="${question}"
                      >
                        ${question.length > 50 ? question.substring(0, 50) + '...' : question}
                      </button>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        
        <div id="chatbot-container" class="chatbot-container">
          <div id="chatbot-messages" class="chatbot-messages">
            <div class="chatbot-welcome-message">
              <p style="color: var(--text-light); text-align: center; padding: 20px;">
                <i class="fas fa-robot" style="font-size: 2rem; color: var(--primary); margin-bottom: 10px; display: block;"></i>
                Привет! Я ваш карьерный консультант. Задайте мне любой вопрос о профессиях, навыках или карьере.
                <br><br>
                <small>Выберите вопрос из примеров выше или напишите свой</small>
              </p>
            </div>
          </div>
          <div class="chatbot-input-container">
            <input 
              type="text" 
              id="chatbot-input" 
              class="chatbot-input"
              placeholder="Например: Как развить аналитическое мышление?"
              onkeypress="if(event.key === 'Enter') sendChatMessage()"
            />
            <button class="chatbot-send-btn" onclick="sendChatMessage()">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="next-steps">
        <button class="next-button" onclick="restartSurvey()">
          <i class="fas fa-redo"></i>
          Пройти тест заново
        </button>
      </div>
    </div>
  `;
}

// Выбор города
function selectCity(city, profession) {
  selectedCity = city;
  const cityOptions = document.querySelectorAll(".city-option");
  cityOptions.forEach((option) => option.classList.remove("selected"));
  event.target.classList.add("selected");

  const institutionsList = document.getElementById("institutions-list");
  const cityData = educationInstitutions[city];

  if (!cityData) {
    institutionsList.innerHTML = `<p style="color: var(--text-light); text-align: center;">Нет данных об учебных заведениях в этом городе</p>`;
    return;
  }

  const institutions = educationPath === "9" ? cityData.colleges : cityData.universities;

  if (!institutions || institutions.length === 0) {
    institutionsList.innerHTML = `<p style="color: var(--text-light); text-align: center;">Нет данных об учебных заведениях</p>`;
    return;
  }

  institutionsList.innerHTML = `
    <h4 style="margin: 20px 0 15px 0; color: var(--text-dark);">
      <i class="fas fa-university"></i> ${educationPath === "9" ? "Колледжи" : "Вузы"} в ${city}:
    </h4>
    <ul style="list-style-type: none; padding: 0; margin: 0;">
      ${institutions.map((inst) => `
        <li style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
          <strong style="color: var(--text-dark);">${inst.name}</strong>
          <p style="color: var(--text-light); margin: 5px 0; font-size: 0.9rem;">${inst.specialty}</p>
          <span style="color: var(--text-muted); font-size: 0.85rem;">Средний балл: ${inst.score}</span>
        </li>
      `).join("")}
    </ul>
  `;

  // Показываем курсы
  showCourses(profession);
}

// Показать курсы
function showCourses(profession) {
  const coursesSection = document.getElementById("courses-section");
  const coursesContent = document.getElementById("courses-content");
  
  if (!coursesSection || !coursesContent) return;

  const professionCourseData = professionCourses[profession] || professionCourses["default"];

  // Если это профессия по умолчанию, показываем специальное сообщение
  if (!professionCourses[profession]) {
    coursesContent.innerHTML = `
      <div class="courses-info-box" style="background: var(--light-gray); padding: 20px; border-radius: 10px; border-left: 4px solid var(--black);">
        <p style="color: var(--text-dark); font-size: 1.1rem; line-height: 1.6; margin: 0;">
          <i class="fas fa-info-circle" style="color: var(--primary); margin-right: 10px;"></i>
          Для профессии <strong>${profession}</strong> требуется обучение в ${educationPath === "9" ? "колледже или техникуме" : "университете или институте"}. 
          Выберите город выше, чтобы увидеть список учебных заведений, где можно получить эту специальность.
        </p>
      </div>
    `;
  } else {
    coursesContent.innerHTML = `
      <div class="courses-free">
        <h4 style="color: var(--text-dark); margin-bottom: 15px;">
          <i class="fas fa-gift"></i> 🔹 Бесплатные курсы
        </h4>
        <ul style="list-style-type: none; padding: 0;">
          ${professionCourseData.free.map(course => `
            <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
              <a href="${course.url}" target="_blank" style="color: var(--primary); text-decoration: none; font-weight: 500;">
                ${course.name}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
      ${professionCourseData.paid.length > 0 ? `
        <div class="courses-paid" style="margin-top: 30px;">
          <h4 style="color: var(--text-dark); margin-bottom: 15px;">
            <i class="fas fa-credit-card"></i> 💰 Платные курсы
          </h4>
          <ul style="list-style-type: none; padding: 0;">
            ${professionCourseData.paid.map(course => `
              <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
                <a href="${course.url}" target="_blank" style="color: var(--primary); text-decoration: none; font-weight: 500;">
                  ${course.name}
                </a>
              </li>
            `).join("")}
          </ul>
        </div>
      ` : ""}
    `;
  }

  coursesSection.style.display = "block";
}

// Чат-бот функции
let chatHistory = [];

// Функция для выбора примера вопроса
function askExampleQuestion(question) {
  const input = document.getElementById("chatbot-input");
  if (input) {
    input.value = question;
    input.focus();
    // Автоматически отправляем вопрос
    setTimeout(() => {
      sendChatMessage();
    }, 100);
  }
}

async function sendChatMessage() {
  const input = document.getElementById("chatbot-input");
  const message = input.value.trim();
  
  if (!message) return;
  
  // Скрываем примеры вопросов после первого сообщения
  const examplesContainer = document.getElementById("chatbot-examples");
  if (examplesContainer) {
    examplesContainer.style.display = "none";
  }
  
  // Удаляем приветственное сообщение если есть
  const welcomeMessage = document.querySelector(".chatbot-welcome-message");
  if (welcomeMessage) {
    welcomeMessage.remove();
  }
  
  // Добавляем сообщение пользователя
  addChatMessage(message, "user");
  input.value = "";
  
  // Показываем индикатор загрузки
  const loadingId = addChatMessage("Думаю...", "bot", true);
  
  try {
    console.log('=== Chat Bot Debug ===');
    console.log('Sending message to AI:', message);
    console.log('Chat history length:', chatHistory.length);
    console.log('API Key exists:', !!aiService.apiKey);
    console.log('API Key valid:', aiService.apiKey && aiService.apiKey.startsWith('sk-'));
    
    // Получаем ответ от AI (с автоматическим fallback)
    const response = await aiService.chatWithBot(message, chatHistory);
    
    console.log('AI Response received:', response);
    console.log('Response length:', response.length);
    console.log('=== End Debug ===');
    
    // Удаляем индикатор загрузки
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) loadingElement.remove();
    
    // Проверяем, что ответ не пустой и не является fallback сообщением
    if (!response || response.trim() === "") {
      throw new Error("Пустой ответ от AI");
    }
    
    // Проверяем, не является ли это общим fallback сообщением
    const fallbackPhrases = [
      "Я могу помочь вам с вопросами",
      "Извините, AI-сервис временно недоступен",
      "Для развития навыков рекомендую: практиковаться регулярно"
    ];
    
    const isFallback = fallbackPhrases.some(phrase => response.includes(phrase));
    if (isFallback && chatHistory.length === 0) {
      console.warn('Detected fallback response, but this might be expected');
    }
    
    // Добавляем ответ бота
    addChatMessage(response, "bot");
    
    // Обновляем историю
    chatHistory.push(
      { role: "user", content: message },
      { role: "assistant", content: response }
    );
    
    // Ограничиваем историю последними 10 сообщениями
    if (chatHistory.length > 20) {
      chatHistory = chatHistory.slice(-20);
    }
  } catch (error) {
    console.error("Chat error:", error);
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) loadingElement.remove();
    
    // Более информативное сообщение об ошибке
    let errorMessage = "Извините, произошла ошибка при обработке запроса. ";
    
    // Проверяем тип ошибки
    if (error.message && error.message.includes("API")) {
      errorMessage += "Проблема с подключением к AI-сервису. Используется локальная логика.";
    } else if (error.message && error.message.includes("401") || error.message.includes("403")) {
      errorMessage += "Проблема с авторизацией API. Проверьте API ключ.";
    } else {
      errorMessage += "Попробуйте переформулировать вопрос или попробуйте позже.";
    }
    
    // Пытаемся дать ответ через локальную логику
    try {
      const fallbackResponse = aiService.fallbackResponse([
        { role: "user", content: message }
      ]);
      if (fallbackResponse && fallbackResponse !== "Извините, AI-сервис временно недоступен...") {
        addChatMessage(fallbackResponse, "bot");
        return;
      }
    } catch (fallbackError) {
      console.error("Fallback error:", fallbackError);
    }
    
    addChatMessage(errorMessage, "bot");
  }
}

function addChatMessage(message, sender, isLoading = false) {
  const messagesContainer = document.getElementById("chatbot-messages");
  if (!messagesContainer) return;
  
  const messageId = "msg-" + Date.now();
  const messageDiv = document.createElement("div");
  messageDiv.id = messageId;
  messageDiv.className = `chatbot-message chatbot-message-${sender}`;
  messageDiv.innerHTML = `
    <div class="chatbot-message-content">
      ${isLoading ? '<div class="chatbot-typing"><span></span><span></span><span></span></div>' : message}
    </div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  return messageId;
}

// Перезапуск опроса
function restartSurvey() {
  currentQuestion = 0;
  userAnswers = [];
  textAnswers = [];
  educationPath = "";
  selectedCity = "";
  showTextQuestions = false;
  chatHistory = [];

  const surveyContainer = document.querySelector(".survey-container");
  surveyContainer.innerHTML = `
    <div id="education-path-selection">
      <h2>Выберите ваш образовательный путь</h2>
      <p>Это поможет нам подобрать подходящие варианты для вашего поступления</p>
      <div class="path-selection">
        <div class="path-option" onclick="selectEducationPath('9')">
          <h3>После 9 класса</h3>
          <p>Поступление в колледж или техникум</p>
          <p><small>На основе ОГЭ</small></p>
        </div>
        <div class="path-option" onclick="selectEducationPath('11')">
          <h3>После 11 класса</h3>
          <p>Поступление в университет или институт</p>
          <p><small>На основе ЕГЭ</small></p>
        </div>
      </div>
    </div>
    <div id="survey-questions" style="display: none;"></div>
    <div class="survey-nav" id="survey-navigation" style="display: none;">
      <button class="survey-button" id="prev-btn" onclick="prevQuestion()">Назад</button>
      <button class="survey-button" id="next-btn" onclick="nextQuestion()">Далее</button>
    </div>
  `;
}

// Показать страницу
function showPage(pageId) {
  document.getElementById("home-page").style.display = pageId === "home" ? "flex" : "none";
  document.getElementById("survey-page").style.display = pageId === "survey" ? "block" : "none";
  if (pageId === "survey") {
    restartSurvey();
    setTimeout(() => {
      document.getElementById("survey-page").scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    window.scrollTo(0, 0);
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent = new Date().getFullYear();

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Параллакс и хедер
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const header = document.getElementById("header");
    if (header) {
      if (scrolled > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});
