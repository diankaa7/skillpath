// Данные о курсах для различных профессий
const professionCourses = {
  "Психолог": {
    free: [
      { name: "Coursera – The Science of Well-Being (Yale)", url: "https://www.coursera.org" },
      { name: "Coursera – Social Psychology (Wesleyan)", url: "https://www.coursera.org" },
      { name: "edX – Introduction to Psychology (Harvard)", url: "https://www.edx.org" },
      { name: "edX – Sociology: Understanding and Changing the Social World", url: "https://www.edx.org" },
      { name: "Khan Academy – Биологические основы поведения, нейронаука", url: "https://www.khanacademy.org" },
      { name: "Открытое образование – Социология (МГУ, ВШЭ)", url: "https://openedu.ru" },
      { name: "Открытое образование – Психология общения (МГУ, ВШЭ)", url: "https://openedu.ru" },
      { name: "Лекториум – Лекции по социологии, психологии личности", url: "https://lektorium.tv" }
    ],
    paid: [
      { name: "Udemy – Когнитивно-поведенческая терапия", url: "https://www.udemy.com" },
      { name: "Udemy – Эмоциональный интеллект", url: "https://www.udemy.com" },
      { name: "Netology – Психология коммуникаций", url: "https://netology.ru" },
      { name: "GeekBrains – Психология личности", url: "https://geekbrains.ru" },
      { name: "GeekBrains – Психология в IT", url: "https://geekbrains.ru" }
    ]
  },
  "Социолог": {
    free: [
      { name: "Coursera – The Science of Well-Being (Yale)", url: "https://www.coursera.org" },
      { name: "Coursera – Social Psychology (Wesleyan)", url: "https://www.coursera.org" },
      { name: "edX – Introduction to Psychology (Harvard)", url: "https://www.edx.org" },
      { name: "edX – Sociology: Understanding and Changing the Social World", url: "https://www.edx.org" },
      { name: "Открытое образование – Социология (МГУ, ВШЭ)", url: "https://openedu.ru" },
      { name: "Лекториум – Лекции по социологии", url: "https://lektorium.tv" }
    ],
    paid: [
      { name: "Udemy – Когнитивно-поведенческая терапия", url: "https://www.udemy.com" },
      { name: "Netology – Психология коммуникаций", url: "https://netology.ru" }
    ]
  },
  "Психиатр": {
    free: [
      { name: "Coursera – Medical Neuroscience", url: "https://www.coursera.org" },
      { name: "edX – Clinical Psychology", url: "https://www.edx.org" },
      { name: "Khan Academy Medicine – Анатомия, физиология, патологии", url: "https://www.khanacademy.org/science/health-and-medicine" }
    ],
    paid: [
      { name: "Udemy – Медицинская терминология", url: "https://www.udemy.com" },
      { name: "GeekBrains – Медицинская информатика", url: "https://geekbrains.ru" }
    ]
  },
  "Юрист": {
    free: [
      { name: "Coursera – Constitutional Law", url: "https://www.coursera.org" },
      { name: "Coursera – International Law", url: "https://www.coursera.org" },
      { name: "edX – Contract Law", url: "https://www.edx.org" },
      { name: "edX – Human Rights", url: "https://www.edx.org" },
      { name: "Открытое образование – Основы правоведения (МГЮА)", url: "https://openedu.ru" },
      { name: "Универсариум – Юридическая техника", url: "https://universarium.org" },
      { name: "Универсариум – Гражданское право", url: "https://universarium.org" }
    ],
    paid: [
      { name: "Udemy – Юриспруденция для начинающих", url: "https://www.udemy.com" },
      { name: "Udemy – Подготовка к ЕГЭ по праву", url: "https://www.udemy.com" },
      { name: "GeekBrains – Юрист с нуля", url: "https://geekbrains.ru" },
      { name: "Синергия Онлайн – Подготовка к юридическим экзаменам", url: "https://online.synergy.ru" }
    ]
  },
  "Учитель": {
    free: [
      { name: "Coursera – Foundations of Teaching for Learning", url: "https://www.coursera.org" },
      { name: "edX – Inclusive Teaching", url: "https://www.edx.org" },
      { name: "edX – STEM Education", url: "https://www.edx.org" },
      { name: "Открытое образование – Педагогика", url: "https://openedu.ru" },
      { name: "Открытое образование – Психология развития", url: "https://openedu.ru" },
      { name: "Khan Academy – Методики объяснения сложных тем", url: "https://www.khanacademy.org" }
    ],
    paid: [
      { name: "Фоксфорд – Курсы для учителей, методистов", url: "https://foxford.ru" },
      { name: "Udemy – Как стать репетитором", url: "https://www.udemy.com" },
      { name: "Udemy – Цифровая педагогика", url: "https://www.udemy.com" }
    ]
  },
  "Переводчик": {
    free: [
      { name: "Coursera – Translation in Practice (UMich)", url: "https://www.coursera.org" },
      { name: "edX – Professional Translation", url: "https://www.edx.org" },
      { name: "Stepik – Перевод научных текстов", url: "https://stepik.org" },
      { name: "Stepik – Технический английский", url: "https://stepik.org" },
      { name: "LoftBlog – Английский для IT-переводчиков", url: "https://loftblog.ru" }
    ],
    paid: [
      { name: "Udemy – CAT-инструменты (Trados, MemoQ)", url: "https://www.udemy.com" },
      { name: "Udemy – Юридический перевод", url: "https://www.udemy.com" },
      { name: "Netology – Переводчик с нуля", url: "https://netology.ru" }
    ]
  },
  "Журналист": {
    free: [
      { name: "Coursera – Journalism Skills for Engaged Citizens", url: "https://www.coursera.org" },
      { name: "Google News Initiative – Фактчекинг, цифровая журналистика", url: "https://journalisttraining.google.com" },
      { name: "Открытое образование – Основы журналистики (МГИМО)", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Udemy – Журналистика в цифровую эпоху", url: "https://www.udemy.com" },
      { name: "Skillbox – Копирайтинг и журналистика", url: "https://skillbox.ru" }
    ]
  },
  "Инженер-программист": {
    free: [
      { name: "freeCodeCamp – Full-stack, Python, SQL, Data Visualization", url: "https://www.freecodecamp.org" },
      { name: "The Odin Project – Веб-разработка (HTML → React → Node.js)", url: "https://www.theodinproject.com" },
      { name: "Kaggle Learn – Python, ML, SQL, Data Cleaning", url: "https://www.kaggle.com/learn" },
      { name: "MIT OpenCourseWare – Introduction to Computer Science", url: "https://ocw.mit.edu" },
      { name: "MIT OpenCourseWare – Algorithms", url: "https://ocw.mit.edu" },
      { name: "Microsoft Learn – Azure, DevOps, PowerShell", url: "https://learn.microsoft.com" },
      { name: "Stepik – Алгоритмы", url: "https://stepik.org" },
      { name: "Stepik – Python для анализа данных", url: "https://stepik.org" },
      { name: "Хекслет – Backend, архитектура, Git", url: "https://hexlet.io" }
    ],
    paid: [
      { name: "Яндекс Практикум – Data Scientist, Веб-разработчик, Аналитик", url: "https://practicum.yandex.ru" },
      { name: "Skillbox – Fullstack, DevOps, Cybersecurity", url: "https://skillbox.ru" },
      { name: "GeekBrains – Программист", url: "https://geekbrains.ru" },
      { name: "Udemy – 1000+ курсов по всем языкам и специальностям", url: "https://www.udemy.com" },
      { name: "DataCamp – R, Python, SQL, статистика", url: "https://www.datacamp.com" }
    ]
  },
  "Data Scientist": {
    free: [
      { name: "freeCodeCamp – Full-stack, Python, SQL, Data Visualization", url: "https://www.freecodecamp.org" },
      { name: "Kaggle Learn – Python, ML, SQL, Data Cleaning", url: "https://www.kaggle.com/learn" },
      { name: "MIT OpenCourseWare – Introduction to Computer Science", url: "https://ocw.mit.edu" },
      { name: "Fast.ai – Practical Deep Learning", url: "https://www.fast.ai" },
      { name: "Stepik – Python для анализа данных", url: "https://stepik.org" }
    ],
    paid: [
      { name: "Яндекс Практикум – Data Scientist", url: "https://practicum.yandex.ru" },
      { name: "DataCamp – R, Python, SQL, статистика", url: "https://www.datacamp.com" },
      { name: "Udemy – Data Science курсы", url: "https://www.udemy.com" }
    ]
  },
  "Веб-разработчик": {
    free: [
      { name: "freeCodeCamp – Full-stack, Python, SQL", url: "https://www.freecodecamp.org" },
      { name: "The Odin Project – Веб-разработка (HTML → React → Node.js)", url: "https://www.theodinproject.com" },
      { name: "Microsoft Learn – Azure, DevOps", url: "https://learn.microsoft.com" },
      { name: "Хекслет – Backend, архитектура, Git", url: "https://hexlet.io" }
    ],
    paid: [
      { name: "Яндекс Практикум – Веб-разработчик", url: "https://practicum.yandex.ru" },
      { name: "Skillbox – Fullstack", url: "https://skillbox.ru" },
      { name: "Udemy – Веб-разработка", url: "https://www.udemy.com" }
    ]
  },
  "Системный администратор": {
    free: [
      { name: "Microsoft Learn – Azure, DevOps, PowerShell", url: "https://learn.microsoft.com" },
      { name: "AWS Training – Облачные технологии, безопасность", url: "https://aws.amazon.com/training" },
      { name: "IBM SkillsBuild – Cybersecurity, IT Support", url: "https://skillsbuild.org" }
    ],
    paid: [
      { name: "Skillbox – DevOps, Cybersecurity", url: "https://skillbox.ru" },
      { name: "GeekBrains – Системный администратор", url: "https://geekbrains.ru" },
      { name: "Pluralsight – Enterprise-курсы: сети, безопасность", url: "https://www.pluralsight.com" }
    ]
  },
  "Веб-дизайнер": {
    free: [
      { name: "Canva Design School – Основы композиции, типографики", url: "https://www.canva.com/learn" },
      { name: "Interaction Design Foundation – UX/UI (частично бесплатно)", url: "https://www.interaction-design.org" },
      { name: "Coursera – Graphic Design Specialization (CalArts)", url: "https://www.coursera.org" },
      { name: "Google UX Design (Coursera) – Можно слушать бесплатно", url: "https://www.coursera.org/professional-certificates/google-ux-design" }
    ],
    paid: [
      { name: "Domestika – Иллюстрация, анимация, фото, дизайн", url: "https://www.domestika.org" },
      { name: "Skillbox – UX/UI-дизайн", url: "https://skillbox.ru" },
      { name: "Udemy – Figma, Adobe Photoshop/Illustrator", url: "https://www.udemy.com" },
      { name: "Netology – Дизайн интерфейсов", url: "https://netology.ru" },
      { name: "Skillshare – Творческие мастер-классы", url: "https://www.skillshare.com" }
    ]
  },
  "Графический дизайнер": {
    free: [
      { name: "Canva Design School – Основы композиции, типографики", url: "https://www.canva.com/learn" },
      { name: "Coursera – Graphic Design Specialization (CalArts)", url: "https://www.coursera.org" }
    ],
    paid: [
      { name: "Skillbox – Графический дизайн", url: "https://skillbox.ru" },
      { name: "Udemy – Adobe Photoshop/Illustrator", url: "https://www.udemy.com" },
      { name: "Domestika – Иллюстрация, анимация", url: "https://www.domestika.org" }
    ]
  },
  "Инженер-строитель": {
    free: [
      { name: "Coursera – Construction Management", url: "https://www.coursera.org" },
      { name: "edX – Mechanics", url: "https://www.edx.org" },
      { name: "MIT OCW – Полные курсы по строительству", url: "https://ocw.mit.edu" },
      { name: "Khan Academy – Физика, электричество", url: "https://www.khanacademy.org" },
      { name: "Открытое образование – Теоретическая механика", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Udemy – AutoCAD, SolidWorks", url: "https://www.udemy.com" },
      { name: "GeekBrains – Инженер-программист", url: "https://geekbrains.ru" }
    ]
  },
  "Инженер-механик": {
    free: [
      { name: "Coursera – Construction Management", url: "https://www.coursera.org" },
      { name: "edX – Mechanics", url: "https://www.edx.org" },
      { name: "MIT OCW – Полные курсы по механике", url: "https://ocw.mit.edu" },
      { name: "Khan Academy – Физика", url: "https://www.khanacademy.org" }
    ],
    paid: [
      { name: "Udemy – SolidWorks, AutoCAD", url: "https://www.udemy.com" }
    ]
  },
  "Инженер-энергетик": {
    free: [
      { name: "edX – Circuits and Electronics (MIT)", url: "https://www.edx.org" },
      { name: "MIT OCW – Полные курсы по электронике", url: "https://ocw.mit.edu" },
      { name: "Khan Academy – Физика, электричество", url: "https://www.khanacademy.org" },
      { name: "Открытое образование – Электротехника", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Udemy – PLC, Arduino", url: "https://www.udemy.com" }
    ]
  },
  "Инженер-робототехник": {
    free: [
      { name: "Coursera – Robotics (UPenn)", url: "https://www.coursera.org" },
      { name: "MIT OCW – Полные курсы по робототехнике", url: "https://ocw.mit.edu" },
      { name: "Khan Academy – Физика, электричество", url: "https://www.khanacademy.org" }
    ],
    paid: [
      { name: "Udemy – Arduino", url: "https://www.udemy.com" },
      { name: "GeekBrains – Робототехника", url: "https://geekbrains.ru" }
    ]
  },
  "Менеджер по продажам": {
    free: [
      { name: "Coursera – Financial Markets (Yale)", url: "https://www.coursera.org" },
      { name: "Coursera – Digital Marketing", url: "https://www.coursera.org" },
      { name: "HubSpot Academy – Inbound Marketing, Sales, CRM", url: "https://academy.hubspot.com" },
      { name: "Google Digital Garage – Digital-маркетинг, аналитика", url: "https://learndigital.withgoogle.com/digitalgarage" },
      { name: "Открытое образование – Основы предпринимательства", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Udemy – Стратегия продаж", url: "https://www.udemy.com" },
      { name: "Netology – Интернет-маркетинг", url: "https://netology.ru" },
      { name: "Skillbox – Бизнес-аналитик", url: "https://skillbox.ru" }
    ]
  },
  "Маркетолог": {
    free: [
      { name: "Coursera – Digital Marketing", url: "https://www.coursera.org" },
      { name: "HubSpot Academy – Inbound Marketing, Sales, CRM", url: "https://academy.hubspot.com" },
      { name: "Google Digital Garage – Digital-маркетинг, аналитика", url: "https://learndigital.withgoogle.com/digitalgarage" },
      { name: "Открытое образование – Основы предпринимательства", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Netology – Интернет-маркетинг", url: "https://netology.ru" },
      { name: "Skillbox – Бизнес-аналитик", url: "https://skillbox.ru" }
    ]
  },
  "Бухгалтер": {
    free: [
      { name: "Alison – Бухгалтерия, финансы", url: "https://alison.com" },
      { name: "Открытое образование – Основы предпринимательства", url: "https://openedu.ru" }
    ],
    paid: [
      { name: "Udemy – Excel для финансистов, 1С", url: "https://www.udemy.com" },
      { name: "GeekBrains – Бухгалтерия с нуля", url: "https://geekbrains.ru" }
    ]
  },
  "Врач": {
    free: [
      { name: "Coursera – Anatomy", url: "https://www.coursera.org" },
      { name: "Coursera – Medical Neuroscience", url: "https://www.coursera.org" },
      { name: "Coursera – Global Health", url: "https://www.coursera.org" },
      { name: "edX – Principles of Biochemistry", url: "https://www.edx.org" },
      { name: "Khan Academy Medicine – Анатомия, физиология, патологии", url: "https://www.khanacademy.org/science/health-and-medicine" },
      { name: "OpenStax – Учебники по биологии, химии", url: "https://openstax.org/subjects/science" }
    ],
    paid: [
      { name: "Udemy – Медицинская терминология", url: "https://www.udemy.com" },
      { name: "GeekBrains – Медицинская информатика", url: "https://geekbrains.ru" }
    ]
  },
  "Ветеринар": {
    free: [
      { name: "Coursera – Animal Behaviour", url: "https://www.coursera.org" },
      { name: "Coursera – Veterinary Epidemiology", url: "https://www.coursera.org" }
    ],
    paid: []
  },
  "default": {
    free: [
      { name: "Требуется обучение в колледже/институте", url: "#" }
    ],
    paid: []
  }
};
