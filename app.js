const defaultState = {
  activeView: "today",
  search: "",
  analyzedRequest: null,
  requests: [
    {
      id: "PR-1048",
      title: "طرمبة هيدروليك للبوكلين كوماتسو",
      part: "طرمبة هيدروليك PC200",
      equipment: "EQ-214 | Komatsu PC200",
      project: "مشروع الرياض",
      requester: "إدارة المعدات",
      owner: "أحمد فؤاد",
      status: "بانتظار عروض",
      statusTone: "warn",
      priority: "high",
      due: "اليوم 04:30 م",
      cost: 8750,
      supplier: "Hydro Gulf",
      note: "المعدة واقفة، والمساعد لقى آخر شراء من 72 يوم بسعر أقل 6%.",
    },
    {
      id: "PR-1047",
      title: "فلاتر ديزل للمولدات",
      part: "Fuel Filter FF-5052",
      equipment: "مولدات كاتربيلر",
      project: "مستودع الدمام",
      requester: "المستودعات",
      owner: "محمود ناصر",
      status: "مراجعة مخزون",
      statusTone: "blue",
      priority: "medium",
      due: "غدا 11:00 ص",
      cost: 2180,
      supplier: "Gulf Filters",
      note: "يوجد 8 قطع في الرياض و3 في جدة، والحد الأدنى المقترح 14.",
    },
    {
      id: "PR-1044",
      title: "أطقم إصلاح هيدروليك بالجملة",
      part: "Seal Kits (Various)",
      equipment: "Komatsu & CAT",
      project: "مستودع الرياض المركزي",
      requester: "المستودعات",
      owner: "ياسر (مندوب الصين)",
      status: "تواصل مع المورد",
      statusTone: "blue",
      priority: "low",
      due: "بعد 14 يوم",
      cost: 15000,
      supplier: "YNF Machinery (Guangzhou)",
      note: "طلب استيراد لتوفير 40%، جاري التواصل مع مصانع سوق Zhuji بالصين.",
    },
    {
      id: "PR-1043",
      title: "تفصيل خراطيم هيدروليك ضغط عالي",
      part: "High Pressure Hoses",
      equipment: "معدة ثقيلة متفرقة",
      project: "صيانة طارئة",
      requester: "الصيانة",
      owner: "فهد (مندوب السوق)",
      status: "شراء مباشر",
      statusTone: "warn",
      priority: "high",
      due: "اليوم 02:00 م",
      cost: 1200,
      supplier: "الصناعية القديمة (الرياض)",
      note: "النزول فورا للصناعية القديمة بمؤسسة المضخات للكبس والتفصيل لاستعجال تشغيل المعدة.",
    },
    {
      id: "PR-1046",
      title: "كاوتشات رافعة شوكية",
      part: "Forklift Solid Tire 7.00-12",
      equipment: "رافعة شوكية WH-09",
      project: "مستودع جدة",
      requester: "تشغيل المستودع",
      owner: "سارة علي",
      status: "أمر شراء مرسل",
      statusTone: "default",
      priority: "low",
      due: "بعد 3 أيام",
      cost: 5400,
      supplier: "Al Madar Tires",
      note: "المورد ملتزم 92%، والتوريد المتوقع يوم الأحد.",
    },
    {
      id: "PR-1045",
      title: "حساس حرارة للمعدة EQ-118",
      part: "Temperature Sensor TS-118",
      equipment: "EQ-118 | Volvo Loader",
      project: "مشروع الخبر",
      requester: "الصيانة",
      owner: "أحمد فؤاد",
      status: "ناقص بيانات",
      statusTone: "danger",
      priority: "high",
      due: "متأخر 6 ساعات",
      cost: 940,
      supplier: "غير محدد",
      note: "ناقص صورة اللوحة أو رقم القطعة لتجنب شراء بديل غير مطابق.",
    },
  ],
  parts: [
    {
      name: "طرمبة هيدروليك PC200",
      number: "OEM 708-2L-00650",
      arabic: "طرمبة هيدروليك رئيسية",
      equipment: "Komatsu PC200, PC220",
      stock: 0,
      min: 1,
      location: "غير متوفر",
      supplier: "Hydro Gulf",
      price: 8750,
      lead: "4 أيام",
      alternatives: ["708-2L-00651", "HG-PC200-PUMP"],
      risk: "حرجة",
      icon: "gauge",
    },
    {
      name: "Fuel Filter FF-5052",
      number: "FF-5052",
      arabic: "فلتر ديزل",
      equipment: "مولدات كاتربيلر، شاحنات ديزل",
      stock: 11,
      min: 14,
      location: "الرياض A-03، جدة B-12",
      supplier: "Gulf Filters",
      price: 145,
      lead: "يومان",
      alternatives: ["FF5052X", "CAT-1R0750"],
      risk: "تحت الحد",
      icon: "filter",
    },
    {
      name: "Temperature Sensor TS-118",
      number: "TS-118",
      arabic: "حساس حرارة",
      equipment: "Volvo Loader, SDLG",
      stock: 4,
      min: 3,
      location: "الدمام C-21",
      supplier: "Sensor House",
      price: 940,
      lead: "3 أيام",
      alternatives: ["TS-118A", "VLV-Temp-22"],
      risk: "مستقر",
      icon: "thermometer",
    },
    {
      name: "Forklift Solid Tire 7.00-12",
      number: "FLT-70012",
      arabic: "كاوتش رافعة شوكية مصمت",
      equipment: "Toyota Forklift, Heli Forklift",
      stock: 2,
      min: 4,
      location: "جدة D-05",
      supplier: "Al Madar Tires",
      price: 1350,
      lead: "5 أيام",
      alternatives: ["FLT-70012-HD"],
      risk: "تحت الحد",
      icon: "disc-3",
    },
    {
      name: "Chinese Filter ZX-99",
      number: "ZX-99-AF",
      arabic: "فلتر هواء رديء",
      equipment: "Komatsu & CAT",
      stock: 45,
      min: 10,
      location: "الرياض C-10",
      supplier: "Al Safwa Heavy Parts",
      price: 25,
      lead: "متاح",
      alternatives: ["FF-5052"],
      risk: "نطاق أحمر 🚫",
      icon: "alert-triangle",
    },
  ],
  suppliers: [
    {
      name: "Hydro Gulf",
      category: "هيدروليك وطرمبات",
      score: 88,
      delivery: "4.2 أيام",
      saving: "6%",
      status: "مفضل",
      notes: "أفضل سعر تاريخي للطرمبات، يحتاج متابعة مبكرة في الطلبات العاجلة.",
    },
    {
      name: "Gulf Filters",
      category: "فلاتر وزيوت",
      score: 93,
      delivery: "1.8 يوم",
      saving: "11%",
      status: "مفضل",
      notes: "سريع ومنضبط، مناسب للشراء المجمع للفلاتر الدورية.",
    },
    {
      name: "Al Madar Tires",
      category: "إطارات ومستلزمات مستودع",
      score: 82,
      delivery: "5 أيام",
      saving: "3%",
      status: "احتياطي",
      notes: "جودة جيدة، لكن زمن التوريد يزيد في الطلبات الصغيرة.",
    },
    {
      name: "Sensor House",
      category: "حساسات وكهرباء معدات",
      score: 76,
      delivery: "3.5 أيام",
      saving: "2%",
      status: "مراجعة",
      notes: "يفضل طلب صورة ورقم بديل قبل الترسية لتقليل أخطاء المطابقة.",
    },
    {
      name: "Al Safwa Heavy Parts",
      category: "فلاتر ومضخات هيدروليك",
      score: 35,
      delivery: "9 أيام",
      saving: "15%",
      status: "بلاك ليست 🚫",
      notes: "تم استبعاده بناءً على شكاوى الفنيين (تهريب في طرمبات الهيدروليك وسوء كفاءة).",
    },
  ],
  activities: [
    "المساعد اكتشف طلب مشابه لفلتر الديزل وربطه بآخر سعر شراء.",
    "تم رفع أولوية طرمبة الهيدروليك بسبب توقف المعدة EQ-214.",
    "تم اقتراح تحويل 3 فلاتر من جدة قبل إنشاء شراء جديد.",
  ],
};

const savedStateJSON = localStorage.getItem('eshtreely_state');
let savedState = {};
if (savedStateJSON) {
  try { savedState = JSON.parse(savedStateJSON); } catch (e) {}
}

const state = { ...defaultState, ...savedState, activeView: "today", search: "" };

// Ensure newly added features show up even if old state is cached
if (!state.requests.some(r => r.id === "PR-1044")) {
  state.requests = [...defaultState.requests, ...state.requests.filter(r => !defaultState.requests.some(dr => dr.id === r.id))];
  saveState();
}

function saveState() {
  localStorage.setItem('eshtreely_state', JSON.stringify({
    requests: state.requests,
    activities: state.activities
  }));
}


const viewTitles = {
  today: "اليوم",
  requests: "طلبات الشراء",
  parts: "قطع الغيار",
  suppliers: "الموردين",
  warehouse: "المستودعات",
  assignments: "التكليفات",
};

const priorityLabels = {
  high: "عاجل",
  medium: "متوسط",
  low: "عادي",
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function money(value) {
  const amount = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
  return `<span class="money" dir="ltr">${amount} ريال</span>`;
}

function normalize(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .trim();
}

function filteredRequests() {
  if (!state.search) return state.requests;
  const query = normalize(state.search);
  return state.requests.filter((request) =>
    normalize(
      `${request.id} ${request.title} ${request.part} ${request.equipment} ${request.project} ${request.supplier} ${request.owner}`,
    ).includes(query),
  );
}

function filteredParts() {
  if (!state.search) return state.parts;
  const query = normalize(state.search);
  return state.parts.filter((part) =>
    normalize(`${part.name} ${part.number} ${part.arabic} ${part.equipment} ${part.supplier}`).includes(query),
  );
}

function filteredSuppliers() {
  if (!state.search) return state.suppliers;
  const query = normalize(state.search);
  return state.suppliers.filter((supplier) =>
    normalize(`${supplier.name} ${supplier.category} ${supplier.status} ${supplier.notes}`).includes(query),
  );
}

function statusClass(tone) {
  if (tone === "warn") return "status-pill warn";
  if (tone === "danger" || tone === "نطاق أحمر 🚫" || tone === "بلاك ليست 🚫") return "status-pill danger";
  if (tone === "blue") return "status-pill blue";
  return "status-pill";
}

function requestCard(request) {
  return `
    <article class="work-card">
      <div class="work-main">
        <div>
          <h4>${request.id} | ${request.title}</h4>
          <p>${request.note}</p>
        </div>
        <span class="${statusClass(request.statusTone)}">${request.status}</span>
      </div>
      <div class="work-meta">
        <span class="priority ${request.priority}">${priorityLabels[request.priority]}</span>
        <span class="tag">${request.equipment}</span>
        <span class="tag">${request.project}</span>
        <span class="tag">المكلف: ${request.owner}</span>
        <span class="tag">${money(request.cost)}</span>
        <span class="tag">${request.due}</span>
      </div>
    </article>
  `;
}

function suggestionCard(title, body, action, prompt) {
  return `
    <article class="suggestion-card">
      <h4>${title}</h4>
      <p>${body}</p>
      <button class="ask-suggestion" data-prompt="${prompt}" type="button">${action}</button>
    </article>
  `;
}

function renderToday() {
  const urgent = state.requests.filter((request) => request.priority === "high").length;
  const delayed = state.requests.filter((request) => request.statusTone === "danger").length;
  const openSpend = state.requests.reduce((sum, request) => sum + request.cost, 0);
  const lowStock = state.parts.filter((part) => part.stock < part.min).length;

  return `
    <section class="dashboard-grid">
      <article class="metric-card">
        <span>طلبات مفتوحة</span>
        <strong>${state.requests.length}</strong>
        <small>${urgent} عاجل</small>
      </article>
      <article class="metric-card">
        <span>إنفاق تحت المتابعة</span>
        <strong>${money(openSpend)}</strong>
        <small>قبل الترسية النهائية</small>
      </article>
      <article class="metric-card">
        <span>قطع تحت الحد</span>
        <strong>${lowStock}</strong>
        <small>تحتاج قرار مخزون</small>
      </article>
      <article class="metric-card">
        <span>مخاطر اليوم</span>
        <strong>${delayed}</strong>
        <small>طلب ناقص بيانات</small>
      </article>
    </section>

    <section class="section-layout">
      <div class="surface">
        <div class="surface-head">
          <div>
            <h3>قائمة العمل الذكية</h3>
            <p>المساعد مرتبها حسب التأثير على التشغيل والتأخير والتكلفة.</p>
          </div>
          <button class="mini-action ask-suggestion" data-prompt="رتبلي أولويات النهار" type="button">رتب تاني</button>
        </div>
        <div class="work-list">${state.requests.map(requestCard).join("")}</div>
      </div>

      <div class="surface">
        <div class="surface-head">
          <div>
            <h3>اقتراحات المساعد</h3>
            <p>تنبيهات قابلة للتنفيذ بدل التقارير الطويلة.</p>
          </div>
        </div>
        <div class="suggestions-list">
          ${suggestionCard(
            "ادمج طلبات الفلاتر",
            "في طلب مفتوح للفلاتر واحتياج مخزون قريب. الدمج قد يقلل الشحن ويثبت السعر.",
            "اعرف التفاصيل",
            "هل في طلبات مكررة للفلاتر؟",
          )}
          ${suggestionCard(
            "لا ترسي العاجل على المورد الأبطأ",
            "طلب الطرمبة عاجل، Hydro Gulf سعره جيد لكن يحتاج متابعة. جهز بديل احتياطي.",
            "اقترح بديل",
            "مين أفضل مورد لطرمبة هيدروليك عاجلة؟",
          )}
          ${suggestionCard(
            "استكمل بيانات حساس الحرارة",
            "قبل الشراء، اطلب صورة اللوحة أو رقم OEM عشان ما يحصلش عدم مطابقة.",
            "اكتب رسالة",
            "اكتب رسالة لفني يطلب صورة ورقم حساس الحرارة",
          )}
        </div>
      </div>
    </section>

    <section class="surface">
      <div class="surface-head">
        <div>
          <h3>نبض التشغيل</h3>
          <p>آخر ما رتبه المساعد داخل مساحة العمل.</p>
        </div>
      </div>
      <div class="work-list">
        ${state.activities.map((item) => `<article class="timeline-row"><p>${item}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function renderRequests() {
  const requests = filteredRequests();
  return `
    <section class="surface">
      <div class="surface-head">
        <div>
          <h3>طلبات الشراء</h3>
          <p>كل طلب مربوط بقطعة، معدة، مورد، تكلفة، ومكلف واضح.</p>
        </div>
        <button id="inlineNewRequest" class="primary-action" type="button">
          <i data-lucide="plus"></i>
          <span>طلب جديد</span>
        </button>
      </div>
      <div class="request-list">
        ${
          requests.length
            ? requests.map(requestCard).join("")
            : `<div class="empty-state">مفيش نتائج مطابقة للبحث الحالي.</div>`
        }
      </div>
    </section>
  `;
}

function partCard(part) {
  const tone = part.risk.includes("أحمر") || part.risk.includes("بلاك") ? "danger" : part.stock < part.min ? "danger" : part.risk === "حرجة" ? "warn" : "default";
  return `
    <article class="part-card">
      <div class="part-visual">
        <div class="part-icon"><i data-lucide="${part.icon}"></i></div>
        <div class="part-head">
          <div>
            <h4>${part.arabic}</h4>
            <p>${part.name}</p>
          </div>
          <span class="${statusClass(tone)}">${part.risk}</span>
        </div>
      </div>
      <div class="part-meta">
        <span class="tag">${part.number}</span>
        <span class="tag">رصيد: ${part.stock}</span>
        <span class="tag">حد أدنى: ${part.min}</span>
        <span class="tag">${part.location}</span>
      </div>
      <p>مناسب لـ ${part.equipment}. آخر سعر ${money(part.price)}، والتوريد المعتاد ${part.lead}.</p>
      <div class="part-meta">
        ${part.alternatives.map((alt) => `<span class="tag">بديل: ${alt}</span>`).join("")}
      </div>
      <button class="mini-action ask-suggestion" data-prompt="حلل القطعة ${part.name}" type="button">اسأل المساعد</button>
    </article>
  `;
}

function renderParts() {
  const parts = filteredParts();
  return `
    <section class="surface">
      <div class="surface-head">
        <div>
          <h3>كتالوج قطع الغيار الذكي</h3>
          <p>تعريف موحد للقطعة مع البدائل والمعدات والموردين والأسعار السابقة.</p>
        </div>
      </div>
      <div class="parts-grid">
        ${parts.length ? parts.map(partCard).join("") : `<div class="empty-state">مفيش قطع مطابقة.</div>`}
      </div>
    </section>
  `;
}

function supplierCard(supplier) {
  return `
    <article class="supplier-card">
      <div class="supplier-head">
        <div>
          <h4>${supplier.name}</h4>
          <p>${supplier.category}</p>
        </div>
        <span class="${supplier.status.includes('بلاك') ? 'status-pill danger' : 'status-pill'}">${supplier.status}</span>
      </div>
      <div class="score-bar" aria-label="تقييم المورد"><span style="width: ${supplier.score}%"></span></div>
      <div class="supplier-meta">
        <span class="tag">تقييم ${supplier.score}%</span>
        <span class="tag">توريد ${supplier.delivery}</span>
        <span class="tag">توفير ${supplier.saving}</span>
      </div>
      <p>${supplier.notes}</p>
      <button class="mini-action ask-suggestion" data-prompt="اديني تقييم سريع للمورد ${supplier.name}" type="button">تقييم ذكي</button>
    </article>
  `;
}

function renderSuppliers() {
  const suppliers = filteredSuppliers();
  return `
    <section class="surface">
      <div class="surface-head">
        <div>
          <h3>مركز الموردين</h3>
          <p>المساعد يقارن السعر والالتزام والسرعة قبل ما تقرر.</p>
        </div>
      </div>
      <div class="supplier-grid">
        ${suppliers.length ? suppliers.map(supplierCard).join("") : `<div class="empty-state">مفيش موردين مطابقين.</div>`}
      </div>
    </section>
  `;
}

function renderWarehouse() {
  return `
    <section class="section-layout">
      <div class="surface">
        <div class="surface-head">
          <div>
            <h3>المستودعات السريعة</h3>
            <p>تحقق لحظي من الرصيد قبل إصدار أي شراء.</p>
          </div>
        </div>
        <div class="warehouse-grid">
          <article class="warehouse-card">
            <div class="warehouse-head">
              <h4>مستودع الرياض</h4>
              <span class="status-pill">نشط</span>
            </div>
            <p>أعلى مخزون للفلاتر والمواد الاستهلاكية.</p>
            <div class="warehouse-meta">
              <span class="tag">132 صنف</span>
              <span class="tag">8 تحت الحد</span>
            </div>
          </article>
          <article class="warehouse-card">
            <div class="warehouse-head">
              <h4>مستودع الدمام</h4>
              <span class="status-pill warn">يحتاج جرد</span>
            </div>
            <p>مناسب لتحويل الحساسات والكهرباء للمشاريع الشرقية.</p>
            <div class="warehouse-meta">
              <span class="tag">98 صنف</span>
              <span class="tag">3 تعارضات</span>
            </div>
          </article>
          <article class="warehouse-card">
            <div class="warehouse-head">
              <h4>مستودع جدة</h4>
              <span class="status-pill danger">قطع حرجة</span>
            </div>
            <p>كاوتشات الرافعات تحت الحد ويحتاج قرار شراء.</p>
            <div class="warehouse-meta">
              <span class="tag">76 صنف</span>
              <span class="tag">5 تحت الحد</span>
            </div>
          </article>
        </div>
      </div>

      <div class="surface">
        <div class="surface-head">
          <div>
            <h3>خريطة مواقع مختصرة</h3>
            <p>تصور سريع للرفوف الأكثر حركة.</p>
          </div>
        </div>
        <div class="warehouse-map">
          <div class="warehouse-bin"><strong>A-03</strong><span>فلاتر ديزل | 8</span></div>
          <div class="warehouse-bin"><strong>B-12</strong><span>فلاتر | 3</span></div>
          <div class="warehouse-bin"><strong>C-21</strong><span>حساسات | 4</span></div>
          <div class="warehouse-bin"><strong>D-05</strong><span>كاوتشات | 2</span></div>
          <div class="warehouse-bin"><strong>H-02</strong><span>هيدروليك | 0</span></div>
          <div class="warehouse-bin"><strong>Q-08</strong><span>زيوت | 19</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderAssignments() {
  const byOwner = state.requests.reduce((acc, request) => {
    acc[request.owner] = acc[request.owner] || [];
    acc[request.owner].push(request);
    return acc;
  }, {});

  return `
    <section class="surface">
      <div class="surface-head">
        <div>
          <h3>لوحة التكليف</h3>
          <p>مين ماسك إيه، وإيه المتأخر، وإيه محتاج تدخل.</p>
        </div>
      </div>
      <div class="assignment-grid">
        ${Object.entries(byOwner)
          .map(
            ([owner, requests]) => `
              <article class="assignment-card">
                <div class="assignment-head">
                  <h4>${owner}</h4>
                  <span class="status-pill">${requests.length} طلب</span>
                </div>
                <p>${requests.map((request) => request.id).join("، ")}</p>
                <div class="assignment-meta">
                  <span class="tag">${requests.filter((request) => request.priority === "high").length} عاجل</span>
                  <span class="tag">${money(requests.reduce((sum, request) => sum + request.cost, 0))}</span>
                </div>
                <button class="mini-action ask-suggestion" data-prompt="راجع تكليفات ${owner}" type="button">راجع التكليف</button>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function render() {
  $("#viewTitle").textContent = viewTitles[state.activeView];
  const views = {
    today: renderToday,
    requests: renderRequests,
    parts: renderParts,
    suppliers: renderSuppliers,
    warehouse: renderWarehouse,
    assignments: renderAssignments,
  };
  $("#appContent").innerHTML = views[state.activeView]();
  bindDynamicActions();
  if (window.lucide) window.lucide.createIcons();
}

function setView(view) {
  state.activeView = view;
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  render();
}

function addMessage(content, type = "ai", isHtml = false) {
  const log = $("#chatLog");
  const bubble = document.createElement("div");
  bubble.className = `message ${type}`;
  if (type === "ai" || isHtml) {
    bubble.innerHTML = content;
  } else {
    bubble.textContent = content;
  }
  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

function assistantReply(input) {
  const text = normalize(input);

  if (text.includes("صوره") || text.includes("صورة") || text.includes("ابحث") || text.includes("اتاكد") || text.includes("شكل")) {
    if (text.includes("طرمبه") || text.includes("هيدروليك") || text.includes("كوماتسو")) {
       return `جبتلك أدق صورة من الكتالوج العالمي لطرمبة هيدروليك كوماتسو PC200 عشان الفني يتأكد منها:<br><img src="assets/pump.png" class="chat-img" />`;
    }
    if (text.includes("فلتر") || text.includes("ديزل")) {
       return `دي صورة فلتر الديزل (FF-5052) المطابق لمولدات كاتربيلر، خليه يراجع شكل السن:<br><img src="assets/filter.png" class="chat-img" />`;
    }
  }

  if (text.includes("تقييم") || text.includes("بلاك") || text.includes("احمر") || text.includes("حظر")) {
    return "بناءً على تقارير الفنيين والمستودع 🚨: تم إدراج المورد 'Al Safwa Heavy Parts' والماركة 'ZX-99' للفلاتر في البلاك ليست (النطاق الأحمر). الفلاتر بتسبب ضعف عزم للمعدة، والطرمبات فيها تهريب سريع. النظام هيمنع الشراء منهم مستقبلاً.";
  }

  if (text.includes("محلي") || text.includes("سوق")) {
    return "بالنسبة للسوق المحلي 🇸🇦: عندنا طلبات مستعجلة زي (خراطيم الهيدروليك). وجهت مندوبنا (فهد) ينزل 'الصناعية القديمة بالرياض' ويتعامل مع 'مؤسسة المضخات الهيدروليكية' أو وكيل 'الزاهد'، لأنهم بيخلصوا القطع والتفصيل في نفس اليوم والمعدة ترجع تشتغل فورا.";
  }

  if (text.includes("صين") || text.includes("استيراد")) {
    return "طلبات الصين الحالية 🇨🇳: (أطقم الإصلاح والفلاتر بالجملة). أرسلت تنبيه لمندوبنا في الصين (ياسر) يتواصل مع شركة 'YNF Machinery' و 'Guangzhou Otto Excavator Parts' في سوق Zhuji بمدينة كوانزو. الاستيراد المباشر هيوفر لنا 40% من التكلفة مقارنة بالسوق المحلي.";
  }

  if (text.includes("اولويات") || text.includes("رتب")) {
    return "تمام يا باشا، الأولوية كده: 1) طرمبة الهيدروليك عشان المعدة واقفة، 2) استكمال بيانات حساس الحرارة، 3) دمج طلبات الفلاتر، 4) متابعة كاوتشات الرافعة. أنا شايف إن أحمد يبدأ بالعاجل وسارة تتابع أمر الشراء المفتوح.";
  }

  if (text.includes("مكرر") || text.includes("مكرره") || text.includes("الفلاتر")) {
    return "لقيت احتمال تكرار في الفلاتر. عندك طلب PR-1047 ورصيد موزع بين الرياض وجدة. اقتراحي: حول 3 قطع من جدة مؤقتا، وبعدها اعمل شراء مجمع يوصل الرصيد للحد الآمن 14 قطعة.";
  }

  if (text.includes("مورد") || text.includes("hydro") || text.includes("هيدروليك") || text.includes("طرمبه")) {
    return "بالنسبة للهيدروليك، Hydro Gulf أفضل توازن بين السعر والخبرة، بس لو الطلب مستعجل خلي Sensor House بره المقارنة دي لأنه كهرباء أكتر. للطرمبة العاجلة جهز عرض احتياطي من مورد تاني قبل الترسية.";
  }

  if (text.includes("حساس") || text.includes("حراره") || text.includes("رساله")) {
    return "اكتب للفني كده: من فضلك ابعت صورة واضحة لحساس الحرارة وصورة لوحة المعدة أو رقم OEM قبل الشراء، عشان نطابق البديل ونمنع توريد قطعة غير مناسبة.";
  }

  if (text.includes("مخزون") || text.includes("مستودع") || text.includes("موجود")) {
    return "فحصت الصورة العامة: الفلاتر موجودة 8 في الرياض و3 في جدة، الحساسات 4 في الدمام، الطرمبة الهيدروليك غير متوفرة، وكاوتشات الرافعة تحت الحد في جدة.";
  }

  if (text.includes("تكلفه") || text.includes("سعر") || text.includes("اغلى")) {
    return "أهم نقطة تكلفة حاليا هي الطرمبة بقيمة تقريبية 8,750 ريال. آخر شراء كان أقل بحوالي 6%، فخلي المشتري يطلب تثبيت سعر أو خصم مقابل سرعة التوريد.";
  }

  if (text.includes("قطعه") || text.includes("قطع")) {
    return "ابعت اسم القطعة أو صورة أو رقمها، وأنا أطلع لك الاسم الموحد، البدائل، المعدات المتوافقة، آخر سعر، والمورد الأقرب. لو الوصف ناقص هقولك محتاج إيه بالظبط.";
  }

  return "حاضر، فهمت عليك. أقدر أرتب الطلب، أدور على قطعة مشابهة، أقارن الموردين، أو أطلع لك الخطوة اللي واقفة العملية. جرّب تقولي: حالة طلب، اسم قطعة، أو مورد معين.";
}

function submitAssistant(text) {
  if (!text.trim()) return;
  addMessage(text, "user");
  
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "message ai typing-indicator";
  typingIndicator.innerHTML = "<span></span><span></span><span></span>";
  $("#chatLog").appendChild(typingIndicator);
  $("#chatLog").scrollTop = $("#chatLog").scrollHeight;

  const reply = assistantReply(text);
  
  setTimeout(() => {
    typingIndicator.remove();
    addMessage(reply, "ai");
  }, 700 + Math.random() * 600);

  $("#assistantHint").textContent = "أنا معاك، اسألني عن أي طلب أو قطعة أو مورد.";
}

function analyzeRequestText(text) {
  const normalized = normalize(text);
  const part = normalized.includes("فلتر")
    ? state.parts[1]
    : normalized.includes("حساس")
      ? state.parts[2]
      : normalized.includes("كاوتش") || normalized.includes("رافعه")
        ? state.parts[3]
        : state.parts[0];

  const isUrgent =
    normalized.includes("عاجل") ||
    normalized.includes("واقف") ||
    normalized.includes("متوقف") ||
    normalized.includes("مستعجل");

  const isBulk = normalized.includes("جمله") || normalized.includes("جملة") || normalized.includes("كميه") || normalized.includes("مستودع");
  const strategy = isBulk ? "استيراد مباشر (الصين - YNF Machinery)" : isUrgent ? "نزول ميداني (الصناعية القديمة)" : "طلب عادي (مورد معتمد)";

  const equipmentMatch = text.match(/EQ-\d+/i);
  const equipment = equipmentMatch ? equipmentMatch[0].toUpperCase() : part.equipment.split(",")[0];
  const project = normalized.includes("الدمام")
    ? "مشروع الدمام"
    : normalized.includes("جده")
      ? "مشروع جدة"
      : normalized.includes("الرياض")
        ? "مشروع الرياض"
        : "غير محدد";

  return {
    title: `طلب ${part.arabic}`,
    part: part.name,
    equipment,
    project,
    priority: isUrgent || part.stock < part.min ? "high" : "medium",
    supplier: part.supplier,
    cost: part.price,
    strategy,
    stockNote:
      part.stock > 0
        ? `يوجد ${part.stock} في المخزون، راجع التحويل قبل الشراء.`
        : "غير متوفر حاليا، يوصى بطلب عروض سريع.",
    next: isUrgent
      ? "إرسال للمشتريات كمستعجل مع إشعار إدارة المعدات."
      : "مراجعة المستودع ثم طلب عروض من المورد المفضل.",
  };
}

function renderAnalysis(analysis) {
  $("#analysisResult").innerHTML = `
    <div class="analysis-grid">
      <div class="analysis-item"><span>القطعة</span><strong>${analysis.part}</strong></div>
      <div class="analysis-item"><span>المعدة/النطاق</span><strong>${analysis.equipment}</strong></div>
      <div class="analysis-item"><span>المشروع</span><strong>${analysis.project}</strong></div>
      <div class="analysis-item"><span>الأولوية</span><strong>${priorityLabels[analysis.priority]}</strong></div>
      <div class="analysis-item"><span>استراتيجية التوريد</span><strong>${analysis.strategy || "طلب عادي"}</strong></div>
      <div class="analysis-item"><span>المورد المقترح</span><strong>${analysis.supplier}</strong></div>
      <div class="analysis-item"><span>تكلفة مرجعية</span><strong>${money(analysis.cost)}</strong></div>
      <div class="analysis-item"><span>فحص المخزون</span><strong>${analysis.stockNote}</strong></div>
      <div class="analysis-item"><span>الخطوة التالية</span><strong>${analysis.next}</strong></div>
    </div>
  `;
}

function openModal() {
  $("#requestModal").classList.add("open");
  $("#requestModal").setAttribute("aria-hidden", "false");
  $("#requestText").focus();
}

function closeModal() {
  $("#requestModal").classList.remove("open");
  $("#requestModal").setAttribute("aria-hidden", "true");
}

function createAnalyzedRequest() {
  if (!state.analyzedRequest) return;
  const nextNumber = 1049 + state.requests.length - 4;
  const created = {
    id: `PR-${nextNumber}`,
    title: state.analyzedRequest.title,
    part: state.analyzedRequest.part,
    equipment: state.analyzedRequest.equipment,
    project: state.analyzedRequest.project,
    requester: "طلب ذكي",
    owner: state.analyzedRequest.priority === "high" ? "أحمد فؤاد" : "محمود ناصر",
    status: "مراجعة أولية",
    statusTone: state.analyzedRequest.priority === "high" ? "warn" : "blue",
    priority: state.analyzedRequest.priority,
    due: state.analyzedRequest.priority === "high" ? "اليوم" : "خلال يومين",
    cost: state.analyzedRequest.cost,
    supplier: state.analyzedRequest.supplier,
    note: `[استراتيجية: ${state.analyzedRequest.strategy || "طلب عادي"}] ${state.analyzedRequest.stockNote} ${state.analyzedRequest.next}`,
  };

  state.requests.unshift(created);
  state.activities.unshift(`تم إنشاء ${created.id} من المساعد وربطه بالمورد ${created.supplier}.`);
  saveState();
  addMessage(`أنشأت ${created.id} ورتبته على ${created.owner}. راجعته في طلبات الشراء.`, "ai");
  closeModal();
  setView("requests");
  $("#requestText").value = "";
  $("#analysisResult").innerHTML = "<span>المساعد هيطلع لك التصنيف، القطعة، المعدة، الأولوية، والمورد المقترح.</span>";
  $("#createRequest").disabled = true;
  state.analyzedRequest = null;
}

function bindDynamicActions() {
  $$(".ask-suggestion").forEach((button) => {
    button.addEventListener("click", () => submitAssistant(button.dataset.prompt || button.textContent));
  });

  const inlineNewRequest = $("#inlineNewRequest");
  if (inlineNewRequest) inlineNewRequest.addEventListener("click", openModal);
}

function bindEvents() {
  $$(".nav-item").forEach((item) => {
    item.addEventListener("click", () => setView(item.dataset.view));
  });

  $("#globalSearch").addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
  });

  $("#commandForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#commandInput");
    submitAssistant(input.value);
    input.value = "";
  });

  $$(".quick-prompts button").forEach((button) => {
    button.addEventListener("click", () => submitAssistant(button.dataset.prompt));
  });

  $("#clearChat").addEventListener("click", () => {
    $("#chatLog").innerHTML = "";
    addMessage("مسحت المحادثة. نبدأ من جديد، تحب أرتب الطلبات ولا ندور على قطعة؟", "ai");
  });

  const imageUpload = $("#imageUpload");
  if (imageUpload) {
    imageUpload.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          addMessage(`<img src="${e.target.result}" class="chat-img" />`, "user", true);
          
          const typingIndicator = document.createElement("div");
          typingIndicator.className = "message ai typing-indicator";
          typingIndicator.innerHTML = "<span></span><span></span><span></span>";
          $("#chatLog").appendChild(typingIndicator);
          $("#chatLog").scrollTop = $("#chatLog").scrollHeight;

          setTimeout(() => {
            typingIndicator.remove();
            addMessage("جاري عمل فحص دقيق للصورة ومطابقتها بكتالوجات القطع العالمية... 🌍", "ai");
            
            setTimeout(() => {
              const typingIndicator2 = document.createElement("div");
              typingIndicator2.className = "message ai typing-indicator";
              typingIndicator2.innerHTML = "<span></span><span></span><span></span>";
              $("#chatLog").appendChild(typingIndicator2);
              $("#chatLog").scrollTop = $("#chatLog").scrollHeight;

              setTimeout(() => {
                typingIndicator2.remove();
                addMessage("التحليل دقيق بنسبة 98%: دي <strong>طرمبة هيدروليك كوماتسو (OEM 708-2L-00650)</strong>.<br>متوفرة عند مورد Hydro Gulf وآخر سعر كان 8,750 ريال. تحب أعتمدها في طلب شراء مستعجل؟", "ai");
              }, 2000);
            }, 1000);
          }, 1200);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  $("#openNewRequest").addEventListener("click", openModal);
  $("#closeModal").addEventListener("click", closeModal);
  $("#requestModal").addEventListener("click", (event) => {
    if (event.target.id === "requestModal") closeModal();
  });

  $("#analyzeRequest").addEventListener("click", () => {
    const text = $("#requestText").value.trim();
    if (!text) {
      $("#analysisResult").innerHTML = "<span>اكتب الطلب الأول يا باشا، حتى لو بجملة بسيطة.</span>";
      return;
    }
    state.analyzedRequest = analyzeRequestText(text);
    renderAnalysis(state.analyzedRequest);
    $("#createRequest").disabled = false;
  });

  $("#createRequest").addEventListener("click", createAnalyzedRequest);
}

function init() {
  bindEvents();
  render();
  addMessage(
    "أهلا يا باشا، أنا مساعد اشتريلي. هرتب لك الطلبات، أراجع المخزون، أقارن الموردين، وأقولك الخطوة الجاية من غير لف كتير.",
    "ai",
  );
  if (window.lucide) window.lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", init);
