const categories=[
 {icon:'🤖',name:'AI',desc:'AI tools, prompting, assistants and practical workflows.'},
 {icon:'💻',name:'Technology',desc:'နည်းပညာကို မြန်မာလို နားလည်ပြီး လက်တွေ့အသုံးချခြင်း။'},
 {icon:'🌐',name:'Web Development',desc:'HTML, CSS, JavaScript, websites and deployment.'},
 {icon:'📱',name:'Digital Skills',desc:'ဖုန်းတစ်လုံးနဲ့ အသုံးချနိုင်တဲ့ digital workflow များ။'},
 {icon:'🔧',name:'Electronics',desc:'Circuit, troubleshooting and practical repair knowledge.'},
 {icon:'💼',name:'Digital Business',desc:'Online services, templates, content and small-business tools.'},
 {icon:'🧠',name:'Art of Learning',desc:'သင်ယူမှုကို ပိုမြန်ပြီး နားလည်လွယ်အောင် စနစ်တကျဖန်တီးခြင်း။'},
 {icon:'🛠️',name:'Practical Projects',desc:'သင်ယူထားတာကို တကယ်အသုံးဝင်တဲ့ project အဖြစ်ပြောင်းခြင်း။'},
 {icon:'📚',name:'Free Resources',desc:'အသုံးဝင်တဲ့ tools, references and learning resources.'}
];
const articles=[
 {cat:'AI',level:'START',title:'AI ကို ဘာအတွက်အသုံးချနိုင်လဲ?',text:'AI ကို chatbot တစ်ခုအဖြစ်သာမက သင်ယူခြင်း၊ စီစဉ်ခြင်း၊ ဖန်တီးခြင်းနဲ့ အလုပ် workflow အဖြစ် စဉ်းစားကြည့်ပါ။'},
 {cat:'Web Development',level:'START',title:'Website တစ်ခုဘယ်လိုအလုပ်လုပ်လဲ?',text:'Browser, HTML, CSS, JavaScript, hosting နဲ့ domain တို့ရဲ့ ဆက်စပ်မှုကို အခြေခံကနေ စတင်လေ့လာပါ။'},
 {cat:'Digital Skills',level:'PRACTICAL',title:'ဖုန်းတစ်လုံးနဲ့ Digital Workflow',text:'File, browser, editor, cloud နှင့် AI ကို ချိတ်ပြီး အလုပ်တစ်ခုကို အဆုံးထိလုပ်နိုင်တဲ့ workflow ကို တည်ဆောက်ပါ။'},
 {cat:'Art of Learning',level:'BASIC',title:'မသိတာကို ဘယ်လိုစမလဲ?',text:'မေးခွန်းခွဲခြင်း၊ စမ်းသပ်ခြင်း၊ အမှားရှာခြင်းနဲ့ ပြန်ရှင်းပြခြင်းက သင်ယူမှုကို အလုပ်လုပ်နိုင်တဲ့ skill အဖြစ် ပြောင်းပေးတယ်။'},
 {cat:'Technology',level:'PRACTICAL',title:'Tool တစ်ခုကို မသုံးခင် မေးရမယ့် ၄ ခု',text:'ဘာလဲ? ဘာအတွက်လဲ? ဘာကိုဖြေရှင်းပေးလဲ? ကိုယ့် workflow ထဲ ဘယ်မှာထည့်မလဲ?'}
];
const catEl=document.querySelector('#categories'), cardsEl=document.querySelector('#cards'), search=document.querySelector('#search'), count=document.querySelector('#count');
function renderCategories(){catEl.innerHTML=categories.map(c=>`<article class="category"><div class="icon">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p></article>`).join('')}
function renderCards(q=''){const query=q.trim().toLowerCase();const list=articles.filter(a=>!query||`${a.cat} ${a.title} ${a.text}`.toLowerCase().includes(query));cardsEl.innerHTML=list.map(a=>`<article class="card"><span class="tag">${a.cat}</span><h3>${a.title}</h3><p>${a.text}</p><span class="level">${a.level}</span></article>`).join('');count.textContent=`${list.length} items`}
renderCategories();renderCards();search.addEventListener('input',e=>renderCards(e.target.value));
const root=document.documentElement;const saved=localStorage.getItem('abk-theme');if(saved==='light')root.dataset.theme='light';document.querySelector('#theme').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';localStorage.setItem('abk-theme',root.dataset.theme)});
