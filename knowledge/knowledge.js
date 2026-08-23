const categories=[
 {icon:'🤖',name:'AI',desc:'AI tools, prompting, assistants and practical workflows.'},
 {icon:'💻',name:'Technology',desc:'နည်းပညာကို မြန်မာလို နားလည်ပြီး လက်တွေ့အသုံးချခြင်း။'},
 {icon:'🌐',name:'Web Development',desc:'HTML, CSS, JavaScript, websites and deployment.'},
 {icon:'📱',name:'Digital Skills',desc:'ဖုန်းတစ်လုံးနဲ့ အသုံးချနိုင်တဲ့ digital workflow များ။'},
 {icon:'🔧',name:'Electronics',desc:'Circuit, troubleshooting and practical repair knowledge.'},
 {icon:'💼',name:'Digital Business',desc:'Online services, templates, content and small-business tools.'},
 {icon:'🧠',name:'Art of Learning',desc:'သင်ယူမှုကို ပိုမြန်ပြီး နားလည်လွယ်အောင် စနစ်တကျဖန်တီးခြင်း။'},
 {icon:'🛠️',name:'Practical Projects',desc:'သင်ယူထားတာကို project အဖြစ်ပြောင်းခြင်း။'},
 {icon:'📚',name:'Free Resources',desc:'အသုံးဝင်တဲ့ tools, references and learning resources.'}
];
const catEl=document.querySelector('#categories'),cardsEl=document.querySelector('#cards'),search=document.querySelector('#search'),count=document.querySelector('#count');
function renderCategories(){catEl.innerHTML=categories.map(c=>`<article class="category"><div class="icon">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p></article>`).join('')}
function renderCards(q=''){const query=q.trim().toLowerCase();const list=knowledgeArticles.filter(a=>!query||`${a.cat} ${a.title} ${a.intro} ${a.why}`.toLowerCase().includes(query));cardsEl.innerHTML=list.map(a=>`<a class="card" href="/knowledge/article.html?id=${encodeURIComponent(a.id)}"><span class="tag">${a.cat}</span><h3>${a.title}</h3><p>${a.intro}</p><span class="level">${a.level}</span><span class="read">ဖတ်ရန် →</span></a>`).join('');count.textContent=`${list.length} items`}
renderCategories();renderCards();search.addEventListener('input',e=>renderCards(e.target.value));
const root=document.documentElement;const saved=localStorage.getItem('abk-theme');if(saved==='light')root.dataset.theme='light';document.querySelector('#theme').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('abk-theme',root.dataset.theme)});