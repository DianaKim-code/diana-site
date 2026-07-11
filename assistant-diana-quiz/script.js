const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6JcNgw6FjQL-ROkbCvgnvL5mjVe7SbfYGWnHe22hWVN5oOw/formResponse?pli=1";

const GOOGLE_FORM_FIELDS = {
  title: "entry.1620891843",
  direction: "entry.1118736785",
  contact: "entry.2005357315",
  message: "entry.967962223",
  createdAt: "entry.1963465004",
};

const introStep = {
  type: "intro",
  title: "Здравствуйте 🤍",
  text:
    "Я ассистент Дианы. Я помогу вам бережно сориентироваться: с каким запросом вы пришли, какой формат может подойти и как передать заявку Диане.",
};

const directions = [
  { id: "money", label: "Деньги и доход" },
  { id: "digital", label: "Digital-упаковка эксперта через смыслы" },
  { id: "deck", label: "Терапевтическая колода «Будь с собой»" },
  { id: "support", label: "Точка опоры / первичная сессия" },
];

const quizData = {
  money: {
    title: "Деньги и доход",
    applicationTitle: "Новая заявка: Деньги и доход",
    summary:
      "Спасибо, я сохранил ваши ответы 🤍\n\nВаш запрос касается не только денег как цифр, а того, как вы внутри взаимодействуете с доходом, возможностями, ростом и устойчивостью.\n\nДиана посмотрит ваши ответы и сможет предложить формат, который будет соответствовать вашему состоянию, запросу и текущей точке.",
    questions: [
      {
        id: "money_theme",
        label: "Что откликается в теме денег",
        type: "choice",
        text: "Что сейчас больше всего откликается в теме денег?",
        options: [
          "Деньги приходят, но быстро уходят",
          "Доход нестабилен",
          "Есть ощущение финансового потолка",
          "Сложно брать больше / поднимать чек",
          "Есть тревога, когда денег становится больше",
          "Много работаю, но доход не растет",
          "Не понимаю, где теряю деньги",
          "Хочу понять свою денежную систему глубже",
        ],
      },
      {
        id: "money_reason",
        label: "С чем это может быть связано",
        type: "choice",
        text: "Как вам кажется, с чем это больше связано?",
        options: [
          "С внутренними ограничениями и установками",
          "Со страхом проявляться / продавать / брать больше",
          "С тревогой и напряжением",
          "С отсутствием системы в деньгах",
          "С тем, что много отдаю, но мало получаю",
          "С ощущением, что я как будто не разрешаю себе больше",
          "Пока не понимаю",
        ],
      },
      {
        id: "money_result",
        label: "Какой результат хочет получить",
        type: "choice",
        text: "Что вы хотели бы получить в результате работы с этой темой?",
        options: [
          "Понять свои денежные сценарии",
          "Увидеть, где я теряю деньги",
          "Разобраться с внутренним потолком",
          "Научиться спокойнее брать больше",
          "Стать устойчивее в доходе",
          "Перестать откатываться после роста",
          "Понять, какой следующий шаг мне нужен",
          "Пока не могу сформулировать, но чувствую, что хочу разобраться",
        ],
      },
      {
        id: "money_situation",
        label: "Текущая ситуация",
        type: "choice",
        text: "Что сейчас ближе к вашей ситуации?",
        options: [
          "Я работаю на себя / эксперт / предприниматель",
          "Я работаю в найме",
          "Я в переходном периоде",
          "Доход есть, но хочется больше устойчивости",
          "Сейчас доход снизился или нестабилен",
          "Я начинаю новое направление",
        ],
      },
    ],
  },
  digital: {
    title: "Digital-упаковка эксперта",
    applicationTitle: "Новая заявка: Digital-упаковка эксперта",
    summary:
      "Спасибо, я сохранил ваши ответы 🤍\n\nВаш запрос касается не только сайта или визуального оформления, а того, как ваша экспертность, смыслы, услуги и ценность становятся понятными для клиента.\n\nДиана посмотрит ваши ответы и сможет предложить формат, который будет соответствовать вашей текущей точке, уровню экспертности и задаче.",
    questions: [
      {
        id: "digital_field",
        label: "Сфера",
        type: "text",
        text: "В какой сфере вы работаете?",
        placeholder: "Например: психология, коучинг, бьюти, обучение, консалтинг...",
        hint:
          "Можно коротко: направление, ниша или тип услуг. Если пока сложно сформулировать, напишите как чувствуете.",
      },
      {
        id: "digital_gap",
        label: "Что сложнее всего в экспертной упаковке",
        type: "choice",
        text: "Что сейчас сложнее всего в вашей экспертной упаковке?",
        options: [
          "Понятно рассказать о себе",
          "Сформулировать, в чем моя ценность",
          "Описать услуги так, чтобы клиент понимал, что выбрать",
          "Собрать оффер",
          "Разделить услуги по уровням / линейке",
          "Оформить сайт или лендинг",
          "Сделать путь клиента к заявке понятным",
          "У меня все есть, но выглядит не на мой уровень",
          "Пока не понимаю, с чего начать",
        ],
      },
      {
        id: "digital_assets",
        label: "Что уже есть сейчас",
        type: "choice",
        text: "Что у вас уже есть на данный момент?",
        options: [
          "Актуальный Instagram / соцсети",
          "Telegram-канал",
          "Сайт или лендинг",
          "Описание услуг",
          "Несколько продуктов / продуктовая линейка",
          "Отзывы / кейсы",
          "Есть опыт и клиенты, но все не собрано в систему",
          "Пока ничего не оформлено",
        ],
      },
      {
        id: "digital_result",
        label: "Что хочет получить в результате упаковки",
        type: "choice",
        text: "Что вы хотите получить в результате упаковки?",
        options: [
          "Понятное позиционирование",
          "Готовое описание себя как эксперта",
          "Упакованную ключевую услугу",
          "Структуру продуктовой линейки",
          "Тексты для сайта / лендинга",
          "Сайт или лендинг под заявку",
          "Telegram-бота для заявок / прогрева",
          "Мини-воронку от интереса до заявки",
          "Более премиальную подачу",
          "Понятный путь клиента: от первого интереса до обращения",
          "Пока не могу сформулировать, но чувствую, что текущая упаковка меня не отражает",
        ],
      },
    ],
    extraFields: [
      {
        id: "digital_link",
        label: "Ссылка на сайт / соцсеть / канал",
        placeholder: "Можно оставить пустым, если страницы пока нет",
        required: false,
        hint:
          "Так Диана сможет точнее посмотреть, как сейчас представлена ваша экспертность и какой формат работы может подойти.",
      },
    ],
  },
  deck: {
    title: "Колода «Будь с собой»",
    applicationTitle: "Новая заявка: Колода «Будь с собой»",
    opening:
      "Колода «Будь с собой» — это терапевтический инструмент для бережного контакта с собой.\n\nОна не дает готовых ответов и не предсказывает будущее. Она помогает остановиться, услышать себя, заметить свое состояние, чувства, потребности и внутренние опоры.",
    details:
      "Сейчас терапевтическая колода «Будь с собой» доступна в ограниченном количестве.\n\nСтоимость колоды — 45 000 тг. В стоимость входит 30-минутная консультация по колоде: Диана поможет познакомиться с инструментом и покажет, как бережно использовать его для себя или в работе.\n\nДоставка рассчитывается отдельно.\n\nЕсли вы хотите не только приобрести колоду, а пройти полноценную консультацию с использованием колоды, доступен отдельный формат.\n\nГлубокий разбор с колодой — 60 000 тг. Это глубокая индивидуальная встреча, где через карты, вопросы и бережное сопровождение Дианы можно прояснить состояние, запрос, внутренние опоры и следующий шаг.",
    summary:
      "Спасибо, я сохранил ваши ответы 🤍\n\nВаш отклик на колоду связан не только с покупкой инструмента, а с желанием быть внимательнее к себе, своему состоянию, внутренним вопросам и опорам.\n\nДиана посмотрит ваши ответы и сможет подсказать, какой формат будет точнее: колода для самостоятельной практики или глубокий разбор с использованием колоды.",
    questions: [
      {
        id: "deck_intro",
        type: "message",
        text: "Продолжить",
        body:
          "Колода «Будь с собой» — это терапевтический инструмент для бережного контакта с собой.\n\nОна не дает готовых ответов и не предсказывает будущее. Она помогает остановиться, услышать себя, заметить свое состояние, чувства, потребности и внутренние опоры.",
      },
      {
        id: "deck_purpose",
        label: "Для чего интересна колода",
        type: "choice",
        text: "Для чего вам сейчас интересна колода?",
        options: [
          "Для личного использования",
          "Для работы с клиентами",
          "Как подарок",
          "Хочу познакомиться с инструментом",
          "Хочу консультацию / разбор с колодой",
          "Пока не знаю, просто откликнулась",
        ],
      },
      {
        id: "deck_value",
        label: "Что особенно важно в этом инструменте",
        type: "choice",
        text: "Что вам особенно важно в этом инструменте?",
        options: [
          "Лучше слышать себя",
          "Быстрее возвращаться в контакт с собой",
          "Разбирать состояние через вопросы",
          "Иметь бережную практику на каждый день",
          "Использовать карты в работе с клиентами",
          "Получить поддержку в период неопределенности",
          "Понять, как устроена колода и подойдет ли она мне",
        ],
      },
      {
        id: "deck_format",
        label: "Выбранный формат",
        type: "choice",
        text: "Что вам сейчас ближе?",
        options: [
          "Приобрести колоду",
          "Глубокий разбор с колодой",
          "Узнать подробнее о колоде",
          "Понять, подойдет ли мне этот инструмент",
        ],
      },
      {
        id: "deck_info",
        type: "message",
        text: "Продолжить к заявке",
        body:
          "Сейчас терапевтическая колода «Будь с собой» доступна в ограниченном количестве.\n\nСтоимость колоды — 45 000 тг. В стоимость входит 30-минутная консультация по колоде: Диана поможет познакомиться с инструментом и покажет, как бережно использовать его для себя или в работе.\n\nДоставка рассчитывается отдельно.\n\nЕсли вы хотите не только приобрести колоду, а пройти полноценную консультацию с использованием колоды, доступен отдельный формат.\n\nГлубокий разбор с колодой — 60 000 тг.",
      },
    ],
    extraFields: [
      {
        id: "deck_city",
        label: "Город / страна для отправки колоды",
        placeholder: "Например: Алматы, Казахстан",
        required: true,
        condition: (answers) => answers.deck_format === "Приобрести колоду",
      },
    ],
  },
  support: {
    title: "Точка опоры / первичная сессия",
    applicationTitle: "Новая заявка: Точка опоры / первичная сессия",
    summary:
      "Спасибо, я сохранил ваши ответы 🤍\n\nВаш запрос касается не только ситуации, которая сейчас происходит, а того, как вы внутри ее проживаете, на что можете опереться и какой следующий шаг будет для вас бережным.\n\nДиана посмотрит ваши ответы и сможет предложить формат поддержки, который соответствует вашему состоянию и текущей точке.",
    questions: [
      {
        id: "support_intro",
        type: "message",
        text: "Продолжить",
        body:
          "«Точка опоры» — это первичная сессия для женщины, которая хочет бережно прояснить свое состояние и вернуть больше внутренней устойчивости.\n\nЭто пространство, где можно остановиться, увидеть, что сейчас происходит внутри, что забирает силы, где потерян контакт с собой и какой следующий шаг может стать поддерживающим.",
      },
      {
        id: "support_request",
        label: "С чем хочет прийти на первичную сессию",
        type: "choice",
        text: "С чем вы сейчас больше всего хотите прийти на первичную сессию?",
        options: [
          "Внутреннее состояние: тревога, напряжение, усталость, потеря опоры",
          "Отношения: неопределенность, боль, ожидание, сложный выбор, эмоциональная зависимость",
          "Поиск себя: не понимаю, чего хочу, куда двигаться, что сейчас мое",
          "Стрессовая ситуация: резкие перемены, конфликт, расставание, переезд, кризис, потеря устойчивости",
          "Самооценка и самоценность: сложно выбирать себя, отстаивать себя, доверять себе",
          "Деньги / реализация тоже связаны с внутренним состоянием",
          "Пока не могу сформулировать точно, но чувствую, что нужна поддержка",
        ],
      },
      {
        id: "support_manifestation",
        label: "Как это проявляется в жизни",
        type: "choice",
        text: "Как это сейчас проявляется в вашей жизни?",
        options: [
          "Много думаю, но не могу прийти к ясности",
          "Эмоционально качает: то легче, то снова накрывает",
          "Сложно принять решение",
          "Чувствую, что потеряла контакт с собой",
          "Держусь внешне, но внутри много напряжения",
          "Есть ощущение, что я снова выбираю не себя",
          "Хочется поддержки, но сложно попросить",
          "Не понимаю, с чего начать",
        ],
      },
      {
        id: "support_result",
        label: "Что хочет получить от первичной сессии",
        type: "choice",
        text: "Что вам хотелось бы получить от первичной сессии?",
        options: [
          "Прояснить, что со мной сейчас происходит",
          "Понять, на что я могу опереться",
          "Увидеть следующий шаг",
          "Разобраться в ситуации без давления на себя",
          "Снизить внутреннее напряжение",
          "Понять, какой формат поддержки мне сейчас нужен",
          "Почувствовать, что я не одна в этом состоянии",
          "Пока не знаю точно, но хочу начать с бережного разговора",
        ],
      },
      {
        id: "support_info",
        type: "message",
        text: "Продолжить к заявке",
        body:
          "Первичная сессия «Точка опоры» длится 60 минут.\n\nФормат — онлайн: WhatsApp, Telegram или Max.\n\nСтоимость — 15 000 тг.\n\nНа встрече Диана поможет бережно разобрать ваше состояние, прояснить, что сейчас происходит, и понять, какой следующий шаг может быть для вас поддерживающим.",
      },
    ],
  },
};

const state = {
  mode: "intro",
  direction: null,
  step: 0,
  answers: {},
  extra: {},
  safetyShown: false,
  applicationText: "",
  isSubmitting: false,
};

const crisisPattern =
  /(суицид|умереть|убить себя|самоубий|самоповреж|порезать|насили|опасност|угрож|избил|изнасил|не хочу жить|crisis|suicide)/i;

const els = {
  card: document.querySelector("#quiz-card"),
  stepLabel: document.querySelector("#step-label"),
  progressBar: document.querySelector("#progress-bar"),
  changeDirection: document.querySelector("#change-direction"),
  kicker: document.querySelector("#card-kicker"),
  title: document.querySelector("#question-title"),
  text: document.querySelector("#question-text"),
  options: document.querySelector("#options"),
  fields: document.querySelector("#fields"),
  safetyNotice: document.querySelector("#safety-notice"),
  status: document.querySelector("#form-status"),
  back: document.querySelector("#back-button"),
  next: document.querySelector("#next-button"),
};

function getSteps() {
  if (state.mode === "intro") return [introStep];
  if (state.mode === "direction") return [{ type: "direction" }];
  if (!state.direction) return [];

  const data = quizData[state.direction];
  return [
    ...data.questions.filter((question) => !question.condition || question.condition(state.answers)),
    { type: "summary" },
    { type: "contact" },
  ];
}

function currentStep() {
  return getSteps()[state.step];
}

function render() {
  const steps = getSteps();
  const step = currentStep();
  const total = Math.max(steps.length, 1);
  const progress = Math.round(((state.step + 1) / total) * 100);

  els.card.classList.remove("is-changing");
  void els.card.offsetWidth;
  els.card.classList.add("is-changing");

  els.stepLabel.textContent = `Шаг ${state.step + 1} из ${total}`;
  els.progressBar.style.width = `${progress}%`;
  els.changeDirection.classList.toggle("hidden", !state.direction || state.mode !== "quiz");
  els.options.innerHTML = "";
  els.fields.innerHTML = "";
  els.status.className = "form-status hidden";
  els.status.textContent = "";
  els.next.classList.add("hidden");
  els.back.classList.toggle("hidden", state.mode === "intro");

  renderSafetyNotice();

  if (state.mode === "intro") renderIntro();
  if (state.mode === "direction") renderDirection();
  if (state.mode === "quiz") renderQuizStep(step);
}

function renderIntro() {
  els.kicker.textContent = "Ассистент";
  els.title.textContent = introStep.title;
  els.text.innerHTML = paragraphs(introStep.text);
  addOption("Начать", () => {
    state.mode = "direction";
    state.step = 0;
    render();
  });
}

function renderDirection() {
  els.kicker.textContent = "Выбор направления";
  els.title.textContent = "Выберите направление";
  els.text.innerHTML = paragraphs("Выберите направление, которое сейчас ближе всего к вашему запросу:");
  directions.forEach((direction) => {
    addOption(direction.label, () => {
      state.direction = direction.id;
      state.mode = "quiz";
      state.step = 0;
      state.answers = {};
      state.extra = {};
      state.safetyShown = false;
      render();
    });
  });
}

function renderQuizStep(step) {
  const data = quizData[state.direction];
  els.kicker.textContent = data.title;

  if (step.type === "choice") {
    els.title.textContent = step.text;
    els.text.innerHTML = "";
    step.options.forEach((option) => {
      const selected = state.answers[step.id] === option;
      addOption(option, () => {
        state.answers[step.id] = option;
        goNext();
      }, selected);
    });
  }

  if (step.type === "text") {
    els.title.textContent = step.text;
    els.text.innerHTML = step.hint ? `<p>${step.hint}</p>` : "";
    addTextField(step, state.answers[step.id] || "", (value) => {
      state.answers[step.id] = value;
      checkSafety(value);
      renderSafetyNotice();
    });
    els.next.classList.remove("hidden");
    els.next.textContent = "Продолжить";
  }

  if (step.type === "message") {
    els.title.textContent = step.text;
    els.text.innerHTML = paragraphs(step.body);
    addOption(step.text, goNext);
  }

  if (step.type === "summary") {
    els.title.textContent = "Ваши ответы сохранены";
    els.text.innerHTML = paragraphs(data.summary);
    els.next.classList.remove("hidden");
    els.next.textContent = "Оставить контакт";
  }

  if (step.type === "contact") {
    els.title.textContent = "Контакт для связи";
    els.text.innerHTML = paragraphs(
      "Чтобы Диана могла лично вернуться к вашему запросу, оставьте, пожалуйста, удобный контакт для связи: номер телефона, Telegram или WhatsApp."
    );
    addTextField(
      {
        id: "contact",
        label: "Ваш контакт",
        placeholder: "Телефон, Telegram или WhatsApp",
        required: true,
      },
      state.extra.contact || "",
      (value) => {
        state.extra.contact = value;
        checkSafety(value);
        renderSafetyNotice();
      }
    );

    (data.extraFields || [])
      .filter((field) => !field.condition || field.condition(state.answers))
      .forEach((field) => {
        addTextField(field, state.extra[field.id] || "", (value) => {
          state.extra[field.id] = value;
          checkSafety(value);
          renderSafetyNotice();
        });
      });

    els.next.classList.remove("hidden");
    els.next.textContent = "Отправить заявку Диане";
  }
}

function addOption(label, onClick, selected = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `option-button${selected ? " is-selected" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  els.options.append(button);
}

function addTextField(field, value, onInput) {
  const wrap = document.createElement("div");
  wrap.className = "field";

  const label = document.createElement("label");
  label.htmlFor = field.id;
  label.textContent = field.label || field.text;

  const input = field.long ? document.createElement("textarea") : document.createElement("input");
  input.id = field.id;
  input.placeholder = field.placeholder || "";
  input.value = value;
  input.required = Boolean(field.required);
  input.autocomplete = field.id === "contact" ? "tel" : "off";
  input.addEventListener("input", (event) => onInput(event.target.value.trim()));

  wrap.append(label, input);
  if (field.hint) {
    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = field.hint;
    wrap.append(hint);
  }
  els.fields.append(wrap);
}

function goNext() {
  const step = currentStep();
  if (step.type === "text" && !validateCurrentText(step)) return;
  if (step.type === "contact") {
    submitApplication();
    return;
  }

  const steps = getSteps();
  state.step = Math.min(state.step + 1, steps.length - 1);
  render();
}

function validateCurrentText(step) {
  const value = state.answers[step.id];
  if (!value) {
    showStatus("Пожалуйста, заполните поле, чтобы продолжить.", true);
    return false;
  }
  return true;
}

function validateContact() {
  const data = quizData[state.direction];
  const fields = [
    { id: "contact", label: "Ваш контакт", required: true },
    ...(data.extraFields || []).filter((field) => !field.condition || field.condition(state.answers)),
  ];

  const missing = fields.find((field) => field.required && !state.extra[field.id]);
  if (missing) {
    showStatus(`Пожалуйста, заполните поле «${missing.label}».`, true);
    return false;
  }
  return true;
}

async function submitApplication() {
  if (state.isSubmitting) return;
  if (!validateContact()) return;

  const createdAt = formatApplicationDate();
  state.applicationText = buildApplicationText(createdAt);

  if (!isGoogleFormConfigured()) {
    showStatus(
      "Автоматическая отправка пока не подключена. Заявку можно скопировать и отправить Диане в личные сообщения.",
      true
    );
    showCopyButton();
    return;
  }

  state.isSubmitting = true;
  els.next.disabled = true;
  els.next.textContent = "Отправляем заявку...";
  showStatus("Отправляю заявку...", false);

  try {
    const data = quizData[state.direction];
    const formData = new FormData();
    formData.append(GOOGLE_FORM_FIELDS.title, data.applicationTitle);
    formData.append(GOOGLE_FORM_FIELDS.direction, data.title);
    formData.append(GOOGLE_FORM_FIELDS.contact, state.extra.contact);
    formData.append(GOOGLE_FORM_FIELDS.message, state.applicationText);
    formData.append(GOOGLE_FORM_FIELDS.createdAt, createdAt);

    await fetch(GOOGLE_FORM_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    renderSuccess();
  } catch (error) {
    state.isSubmitting = false;
    els.next.disabled = false;
    els.next.textContent = "Отправить заявку Диане";
    showStatus(
      "Похоже, заявку не удалось отправить автоматически. Пожалуйста, скопируйте ваши ответы и отправьте их Диане в личные сообщения.",
      true
    );
    showCopyButton();
  }
}

function isGoogleFormConfigured() {
  const endpointReady =
    typeof GOOGLE_FORM_ENDPOINT === "string" &&
    GOOGLE_FORM_ENDPOINT.includes("/formResponse") &&
    !GOOGLE_FORM_ENDPOINT.includes("PASTE_GOOGLE_FORM_FORMRESPONSE_URL_HERE");

  const fieldsReady = Object.values(GOOGLE_FORM_FIELDS).every(
    (field) => typeof field === "string" && /^entry\.\d+$/.test(field)
  );

  return endpointReady && fieldsReady;
}

function renderSuccess() {
  els.kicker.textContent = "Заявка";
  els.title.textContent = "Заявка передана Диане 🤍";
  els.text.innerHTML = paragraphs(
    "Диана посмотрит ваши ответы и свяжется с вами лично, чтобы предложить подходящий формат работы.\n\nСпасибо, что бережно обозначили свой запрос."
  );
  els.options.innerHTML = "";
  els.fields.innerHTML = "";
  els.status.className = "form-status hidden";
  els.next.classList.add("hidden");
  addOption("Вернуться к началу", resetAll);
}

function showCopyButton() {
  els.options.innerHTML = "";
  addOption("Скопировать заявку", async () => {
    try {
      await navigator.clipboard.writeText(state.applicationText);
      showStatus("Заявка скопирована. Теперь ее можно отправить Диане в личные сообщения.", false);
    } catch (error) {
      showStatus("Не удалось скопировать автоматически. Выделите текст заявки ниже и скопируйте вручную.", true);
      const field = {
        id: "application-copy",
        label: "Текст заявки",
        long: true,
      };
      addTextField(field, state.applicationText, () => {});
    }
  });
}

function formatApplicationDate() {
  return new Date().toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function buildApplicationText(date) {
  const data = quizData[state.direction];

  const lines = [
    data.applicationTitle,
    "",
    `Контакт: ${state.extra.contact || "не указан"}`,
    `Дата: ${date}`,
    `Выбранное направление: ${data.title}`,
    "",
    "Ответы:",
  ];

  data.questions
    .filter((question) => question.label && state.answers[question.id])
    .forEach((question, index) => {
      lines.push(`${index + 1}. ${question.label}: ${state.answers[question.id]}`);
    });

  if (state.direction === "deck" && !state.extra.deck_city) {
    lines.push("Город / страна для отправки: не требуется");
  }

  Object.entries(state.extra).forEach(([key, value]) => {
    if (key === "contact" || !value) return;
    const fieldLabel = findExtraLabel(key);
    lines.push(`${fieldLabel}: ${value}`);
  });

  if (state.safetyShown) {
    lines.push("");
    lines.push("Отмечено кризисное предупреждение: да");
  }

  return lines.join("\n");
}

function findExtraLabel(id) {
  const field = (quizData[state.direction].extraFields || []).find((item) => item.id === id);
  return field ? field.label : id;
}

function showStatus(message, isError) {
  els.status.textContent = message;
  els.status.className = `form-status${isError ? " is-error" : ""}`;
}

function checkSafety(value) {
  if (crisisPattern.test(value)) state.safetyShown = true;
}

function renderSafetyNotice() {
  if (!state.safetyShown) {
    els.safetyNotice.classList.add("hidden");
    els.safetyNotice.textContent = "";
    return;
  }

  els.safetyNotice.classList.remove("hidden");
  els.safetyNotice.textContent =
    "Мне очень жаль, что вам сейчас так тяжело. Эта форма не заменяет экстренную помощь или живого специалиста в кризисной ситуации. Если есть риск для вашей безопасности или жизни, пожалуйста, обратитесь за срочной помощью в экстренные службы вашего города или к близкому человеку, который может быть рядом прямо сейчас.";
}

function paragraphs(text) {
  return text
    .split("\n")
    .filter(Boolean)
    .map((line) => `<p>${line}</p>`)
    .join("");
}

function resetDirection() {
  const confirmed = window.confirm("Вернуться к выбору направления? Текущие ответы будут очищены.");
  if (!confirmed) return;
  state.mode = "direction";
  state.direction = null;
  state.step = 0;
  state.answers = {};
  state.extra = {};
  state.safetyShown = false;
  state.isSubmitting = false;
  render();
}

function resetAll() {
  state.mode = "intro";
  state.direction = null;
  state.step = 0;
  state.answers = {};
  state.extra = {};
  state.safetyShown = false;
  state.applicationText = "";
  state.isSubmitting = false;
  render();
}

els.back.addEventListener("click", () => {
  if (state.mode === "direction") {
    state.mode = "intro";
    state.step = 0;
  } else if (state.mode === "quiz" && state.step > 0) {
    state.step -= 1;
  } else if (state.mode === "quiz") {
    state.mode = "direction";
    state.direction = null;
  }
  render();
});

els.next.addEventListener("click", goNext);
els.changeDirection.addEventListener("click", resetDirection);

render();
