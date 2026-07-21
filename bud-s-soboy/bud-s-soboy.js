// Реальные тексты авторской колоды «Будь с собой»: 40 карт саморефлексии и 20 коротких практик.
const cards = [
  {id:1,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь не знать ответа.",prompt:"Где ты уже всё понимаешь, но не решаешься признать?",practice:"",tag:"Контакт важнее контроля"},
  {id:2,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право быть уставшей.",prompt:"Что ты продолжаешь тащить, хотя давно можно остановиться?",practice:"",tag:"Контакт важнее контроля"},
  {id:3,category:"reflection",type:"Карта саморефлексии",phrase:"Твои чувства имеют значение.",prompt:"Какие из них ты обесцениваешь прямо сейчас?",practice:"",tag:"Контакт важнее контроля"},
  {id:4,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право хотеть тишины.",prompt:"Кого или что ты не решаешься отодвинуть?",practice:"",tag:"Контакт важнее контроля"},
  {id:5,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь замедлиться.",prompt:"От чего ты бежишь?",practice:"",tag:"Контакт важнее контроля"},
  {id:6,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь быть уязвимой.",prompt:"Кому ты не позволяешь увидеть тебя настоящую?",practice:"",tag:"Контакт важнее контроля"},
  {id:7,category:"reflection",type:"Карта саморефлексии",phrase:"С тобой всё в порядке.",prompt:"Почему ты всё ещё пытаешься себя «исправить»?",practice:"",tag:"Контакт важнее контроля"},
  {id:8,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не одна в этом опыте.",prompt:"Почему ты продолжаешь проживать его в одиночку?",practice:"",tag:"Контакт важнее контроля"},
  {id:9,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не обязана справляться идеально.",prompt:"Зачем тебе всё время быть сильной?",practice:"",tag:"Контакт важнее контроля"},
  {id:10,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь не соответствовать ожиданиям.",prompt:"Чьим именно?",practice:"",tag:"Контакт важнее контроля"},
  {id:11,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право чувствовать злость.",prompt:"На кого она на самом деле направлена?",practice:"",tag:"Контакт важнее контроля"},
  {id:12,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право хотеть большего.",prompt:"Что ты запрещаешь себе желать?",practice:"",tag:"Контакт важнее контроля"},
  {id:13,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь быть мягкой.",prompt:"Где эта мягкость превращается в отказ от себя?",practice:"",tag:"Контакт важнее контроля"},
  {id:14,category:"reflection",type:"Карта саморефлексии",phrase:"Ты уже достаточно.",prompt:"Что должно случиться, чтобы ты в это поверила?",practice:"",tag:"Контакт важнее контроля"},
  {id:15,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право выбирать себя.",prompt:"Где ты выбираешь удобство вместо себя?",practice:"",tag:"Контакт важнее контроля"},
  {id:16,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на паузу.",prompt:"Почему ты себе её не даёшь?",practice:"",tag:"Контакт важнее контроля"},
  {id:17,category:"reflection",type:"Карта саморефлексии",phrase:"Ты живая.",prompt:"Где ты себя давно не чувствуешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:18,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь ошибаться.",prompt:"Чего ты на самом деле боишься?",practice:"",tag:"Контакт важнее контроля"},
  {id:19,category:"reflection",type:"Карта саморефлексии",phrase:"Тебе можно быть разной.",prompt:"Какую часть себя ты прячешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:20,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на свои границы.",prompt:"Где ты их снова нарушаешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:21,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не обязана быть удобной.",prompt:"Что ты боишься потерять, если перестанешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:22,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не обязана терпеть.",prompt:"Зачем ты всё ещё терпишь?",practice:"",tag:"Контакт важнее контроля"},
  {id:23,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право хотеть поддержки.",prompt:"Почему ты не просишь?",practice:"",tag:"Контакт важнее контроля"},
  {id:24,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь быть в сомнениях.",prompt:"Что ты откладываешь, прикрываясь ими?",practice:"",tag:"Контакт важнее контроля"},
  {id:25,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь остановиться.",prompt:"Что произойдёт, если ты это сделаешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:26,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на свой темп.",prompt:"С кем ты всё время себя сравниваешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:27,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь хотеть безопасности.",prompt:"Где ты предаёшь себя ради неё?",practice:"",tag:"Контакт важнее контроля"},
  {id:28,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право чувствовать страх.",prompt:"Почему он управляет твоими решениями?",practice:"",tag:"Контакт важнее контроля"},
  {id:29,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь быть честной с собой.",prompt:"Что ты себе сейчас не договариваешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:30,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не обязана быть идеальной.",prompt:"Для кого ты стараешься?",practice:"",tag:"Контакт важнее контроля"},
  {id:31,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на свои желания.",prompt:"Когда ты последний раз им следовала?",practice:"",tag:"Контакт важнее контроля"},
  {id:32,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не сломана.",prompt:"Почему ты всё ещё думаешь, что с тобой что-то не так?",practice:"",tag:"Контакт важнее контроля"},
  {id:33,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь чувствовать пустоту.",prompt:"Что ты в ней не хочешь увидеть?",practice:"",tag:"Контакт важнее контроля"},
  {id:34,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на изменения.",prompt:"Что мешает тебе начать?",practice:"",tag:"Контакт важнее контроля"},
  {id:35,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право на поддержку.",prompt:"Кого ты не подпускаешь?",practice:"",tag:"Контакт важнее контроля"},
  {id:36,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь быть собой.",prompt:"Кто ты без ролей?",practice:"",tag:"Контакт важнее контроля"},
  {id:37,category:"reflection",type:"Карта саморефлексии",phrase:"Ты можешь выбирать себя.",prompt:"Что ты выбираешь вместо этого?",practice:"",tag:"Контакт важнее контроля"},
  {id:38,category:"reflection",type:"Карта саморефлексии",phrase:"Ты не обязана знать всё наперёд.",prompt:"Какой шаг ты можешь сделать сейчас?",practice:"",tag:"Контакт важнее контроля"},
  {id:39,category:"reflection",type:"Карта саморефлексии",phrase:"Ты имеешь право чувствовать боль.",prompt:"Что ты всё ещё не прожила?",practice:"",tag:"Контакт важнее контроля"},
  {id:40,category:"reflection",type:"Карта саморефлексии",phrase:"Ты уже в процессе.",prompt:"Где ты отказываешь себе в признании?",practice:"",tag:"Контакт важнее контроля"},
  {id:41,category:"practice",type:"Короткая практика",phrase:"Ты можешь остановиться.",prompt:"Поставь стопы на пол. Назови 5 предметов вокруг. Почувствуй опору.",practice:"Заземление",tag:"Контакт важнее контроля"},
  {id:42,category:"practice",type:"Короткая практика",phrase:"Тело всегда знает.",prompt:"Спроси себя: «Где я сейчас напряжена?» Просто заметь.",practice:"Контакт с телом",tag:"Контакт важнее контроля"},
  {id:43,category:"practice",type:"Короткая практика",phrase:"Любое чувство допустимо.",prompt:"Назови 3 чувства, которые есть сейчас. Без анализа.",practice:"Эмоции",tag:"Контакт важнее контроля"},
  {id:44,category:"practice",type:"Короткая практика",phrase:"Ты можешь быть медленнее.",prompt:"Сделай 5 медленных выдохов, удлиняя выдох.",practice:"Замедление",tag:"Контакт важнее контроля"},
  {id:45,category:"practice",type:"Короткая практика",phrase:"Ты уже ценна.",prompt:"Запиши 3 своих качества, не связанные с пользой для других.",practice:"Самоценность",tag:"Контакт важнее контроля"},
  {id:46,category:"practice",type:"Короткая практика",phrase:"Ты здесь.",prompt:"Закрой глаза на 1 минуту. Ничего не делай.",practice:"Присутствие",tag:"Контакт важнее контроля"},
  {id:47,category:"practice",type:"Короткая практика",phrase:"Ты можешь чувствовать.",prompt:"Заверши фразу: «Сейчас во мне есть…»",practice:"Чувства",tag:"Контакт важнее контроля"},
  {id:48,category:"practice",type:"Короткая практика",phrase:"Ты можешь быть рядом с собой.",prompt:"Положи руку на грудь и скажи: «Я с тобой».",practice:"Поддержка",tag:"Контакт важнее контроля"},
  {id:49,category:"practice",type:"Короткая практика",phrase:"Ты можешь выбирать.",prompt:"Спроси: «Что сейчас будет заботой обо мне?»",practice:"Выбор",tag:"Контакт важнее контроля"},
  {id:50,category:"practice",type:"Короткая практика",phrase:"Ты можешь остановиться здесь.",prompt:"Сделай паузу и ничего не планируй дальше.",practice:"Завершение",tag:"Контакт важнее контроля"},
  {id:51,category:"practice",type:"Короткая практика",phrase:"Ты можешь быть в теле, а не в голове.",prompt:"Обрати внимание на стопы. Почувствуй, как они касаются пола. Побудь с этим 30 секунд.",practice:"Присутствие в теле",tag:"Контакт важнее контроля"},
  {id:52,category:"practice",type:"Короткая практика",phrase:"Тебе не нужно быть «нормальной».",prompt:"Заверши фразу письменно или вслух: «Сейчас со мной происходит…»",practice:"Признание состояния",tag:"Контакт важнее контроля"},
  {id:53,category:"practice",type:"Короткая практика",phrase:"Ты имеешь право уставать.",prompt:"Спроси себя: «Где в теле я чувствую усталость?»",practice:"Контакт с усталостью",tag:"Контакт важнее контроля"},
  {id:54,category:"practice",type:"Короткая практика",phrase:"Ты в безопасности в этом моменте.",prompt:"Сделай 3 цикла дыхания: вдох на 4 — выдох на 6. Отмечай ощущения.",practice:"Заземление через дыхание",tag:"Контакт важнее контроля"},
  {id:55,category:"practice",type:"Короткая практика",phrase:"Любое чувство допустимо.",prompt:"Выбери одно чувство, которое сейчас сильнее всего.",practice:"Контакт с чувствами",tag:"Контакт важнее контроля"},
  {id:56,category:"practice",type:"Короткая практика",phrase:"Твоя ценность не в действиях.",prompt:"Назови одну свою черту, которая ценна сама по себе.",practice:"Самоценность",tag:"Контакт важнее контроля"},
  {id:57,category:"practice",type:"Короткая практика",phrase:"Ты можешь жить не на максимуме.",prompt:"Сделай одно привычное действие сегодня медленнее обычного.",practice:"Мягкое замедление",tag:"Контакт важнее контроля"},
  {id:58,category:"practice",type:"Короткая практика",phrase:"Ты можешь вернуться к себе в любой момент.",prompt:"Положи руку на грудь и скажи: «Я здесь. Я с тобой».",practice:"Возвращение к себе",tag:"Контакт важнее контроля"},
  {id:59,category:"practice",type:"Короткая практика",phrase:"У тебя есть выбор.",prompt:"Спроси себя: «Что сейчас будет самым бережным по отношению ко мне?»",practice:"Контакт с выбором",tag:"Контакт важнее контроля"},
  {id:60,category:"practice",type:"Короткая практика",phrase:"Ты уже достаточно сделала.",prompt:"В конце дня назови одну вещь, за которую можешь поблагодарить себя.",practice:"Завершение дня",tag:"Контакт важнее контроля"}
];

const DAILY_LIMIT = 3;
const STORAGE = {date:"budCardsDate",count:"budCardsCount",ids:"budCardsOpenedIds"};
const phone = "77774563866";
const messages = {
  deck:"Здравствуйте, хочу узнать о колоде Будь с собой",
  meeting:"Здравствуйте, хочу встречу с колодой Будь с собой",
  write:"Здравствуйте, открыла карту Будь с собой и хочу написать вам",
  support:"Здравствуйте, хочу колоду Будь с собой + сопровождение на 7 дней",
  question:"Здравствуйте, хочу задать вопрос о колоде Будь с собой"
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function localDateKey(){
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
}

function getState(){
  const today = localDateKey();
  if(localStorage.getItem(STORAGE.date) !== today){
    localStorage.setItem(STORAGE.date,today);
    localStorage.setItem(STORAGE.count,"0");
    localStorage.setItem(STORAGE.ids,"[]");
  }
  let ids=[];
  try{ ids=JSON.parse(localStorage.getItem(STORAGE.ids)||"[]").filter(Number.isInteger); }catch(e){ ids=[]; }
  return {count:Math.min(Number(localStorage.getItem(STORAGE.count))||0,DAILY_LIMIT),ids};
}

function saveState(state){
  localStorage.setItem(STORAGE.date,localDateKey());
  localStorage.setItem(STORAGE.count,String(state.count));
  localStorage.setItem(STORAGE.ids,JSON.stringify(state.ids));
}

function randomCard(openedIds){
  const available=cards.filter(card=>!openedIds.includes(card.id));
  const pool=available.length?available:cards;
  return pool[Math.floor(Math.random()*pool.length)];
}

function showCard(card){
  $("#card-number").textContent=String(card.id).padStart(2,"0");
  $("#card-type").textContent=card.type;
  $("#card-phrase").textContent=card.phrase;
  $("#card-prompt").textContent=card.prompt;
  const practice=$("#card-practice");
  practice.textContent=card.practice?`Тема практики · ${card.practice}`:"";
  practice.hidden=!card.practice;
  $(".card-reflection").textContent=card.tag||"Контакт важнее контроля";
  const interactive=$("#interactive-card");
  interactive.dataset.category=card.category;
  interactive.classList.add("is-flipped");
}

function updateInterface(state){
  const limited=state.count>=DAILY_LIMIT;
  $("#draw-count").textContent=`Сегодня открыто: ${state.count} из ${DAILY_LIMIT}`;
  $("#draw-button").hidden=limited;
  $("#draw-button").disabled=limited;
  $("#draw-again").hidden=limited;
  $("#limit-message").hidden=!limited;
  if(limited) $("#after-draw").hidden=false;
}

function drawCard(){
  const state=getState();
  if(state.count>=DAILY_LIMIT){ updateInterface(state); return; }
  const card=randomCard(state.ids);
  const interactive=$("#interactive-card");
  if(interactive.classList.contains("is-flipped")){
    interactive.classList.remove("is-flipped");
    window.setTimeout(()=>{showCard(card);commitDraw(state,card);},460);
  }else{ showCard(card);commitDraw(state,card); }
}

function commitDraw(state,card){
  state.count+=1;
  state.ids.push(card.id);
  saveState(state);
  $("#after-draw").hidden=false;
  updateInterface(state);
}

function initLinks(){
  $$('[data-wa]').forEach(link=>{
    const message=messages[link.dataset.wa]||messages.write;
    link.href=`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    link.target="_blank";
    link.rel="noopener noreferrer";
  });
}

function initReveal(){
  const items=$$(".reveal");
  if(!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("visible"));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}
  }),{threshold:.12});
  items.forEach(el=>observer.observe(el));
}

function initMenu(){
  const toggle=$(".menu-toggle"),nav=$("#main-nav");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
  $$("#main-nav a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
}

document.addEventListener("DOMContentLoaded",()=>{
  initLinks();initReveal();initMenu();updateInterface(getState());
  $("#draw-button").addEventListener("click",drawCard);
  $("#card-back").addEventListener("click",drawCard);
  $("#draw-again").addEventListener("click",drawCard);
  $("#year").textContent=new Date().getFullYear();
  const header=$(".site-header");
  const onScroll=()=>header.classList.toggle("scrolled",window.scrollY>20);
  onScroll();window.addEventListener("scroll",onScroll,{passive:true});
});

// Временный помощник для ручной проверки дневного лимита в консоли браузера.
window.resetBudCardsLimit = function(){
  localStorage.removeItem("budCardsDate");
  localStorage.removeItem("budCardsCount");
  localStorage.removeItem("budCardsOpenedIds");
  location.reload();
};
