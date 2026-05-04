export type Domain = 'air' | 'land' | 'sea';
export type Family = 'kinetic' | 'counter-uas' | 'vigilance' | 'maritime' | 'ground' | 'manufacturing';
export type SpecStatus = 'design-target' | 'tktk';

export type Localized = { en: string; ar: string };

export type SpecRow = {
  k: Localized;
  v: Localized;
  status?: SpecStatus;
};

export type Product = {
  code: string; // e.g. SAS-K1
  slug: string; // e.g. sas-k1
  codename: Localized;
  family: Family;
  domain: Domain[];
  classification: Localized;
  summary: Localized;
  envelope: Localized; // single-line envelope description
  payloads?: Localized[];
  missionProfiles: string[]; // mission slugs
  conops: Localized[];
  parameters: SpecRow[];
  deployment: Localized;
};

export const products: Product[] = [
  // ─────────────────────────── KINETIC EFFECTS ───────────────────────────
  {
    code: 'SAS-K1',
    slug: 'sas-k1',
    codename: { en: 'Talon', ar: 'تالون' },
    family: 'kinetic',
    domain: ['air'],
    classification: {
      en: 'Tactical loitering munition · dismounted defensive precision strike',
      ar: 'ذخيرة جوّالة تكتيكية · ضربة دقيقة دفاعية للقوات المترجلة',
    },
    summary: {
      en: 'A rucksack-portable, canister-launched loitering munition engineered for sovereign forces requiring precision defensive effects without standoff aviation tasking.',
      ar: 'ذخيرة جوّالة محمولة قابلة للإطلاق من حاوية، مُهندَسة للقوات السيادية التي تتطلب تأثيرات دفاعية دقيقة دون الحاجة إلى تكليف طائرات بعيدة المدى.',
    },
    envelope: {
      en: '~30 km operational radius · 60+ min loiter · 3–5 kg modular bay',
      ar: '~30 كم نصف قطر تشغيلي · 60+ دقيقة جوَلان · 3–5 كغ حمولة معيارية',
    },
    payloads: [
      { en: 'High-explosive fragmentation', ar: 'متفجرة شديدة شظوية' },
      { en: 'Shaped-charge anti-armor', ar: 'حشوة مشكَّلة مضادة للدروع' },
      { en: 'Inert training', ar: 'حشوة تدريبية خاملة' },
    ],
    missionProfiles: ['border', 'tactical-isr', 'counter-mortar'],
    conops: [
      {
        en: 'Talon is launched from a small unit organic canister at the squad or platoon level. Once airborne, the munition transitions into electric-propulsion loiter, providing the operator persistent overwatch with EO/IR dual-channel imagery and on-board target classification.',
        ar: 'تُطلَق تالون من حاوية عضوية لوحدة صغيرة على مستوى الفصيلة أو السرية. وبمجرد إقلاعها، تنتقل الذخيرة إلى وضع الجوَلان بالدفع الكهربائي، لتوفّر للمشغّل مراقبة مستمرة بصور كهروبصرية وحرارية ثنائية القناة وتصنيف للأهداف على متنها.',
      },
      {
        en: 'Engagement is operator-authorized; the seeker performs the autonomous terminal phase under GPS-denied navigation. Mission abort is supported throughout flight, returning the vehicle to a recovery profile where geometry permits.',
        ar: 'يتم الاشتباك بإذن المشغّل؛ ويُنفّذ الباحث المرحلة النهائية بشكل ذاتي تحت ملاحة لا تعتمد على نظام تحديد المواقع. ويُدعَم إلغاء المهمة طوال الطيران، مع إعادة المركبة إلى مسار استرداد حيث يسمح وضعها.',
      },
    ],
    parameters: [
      { k: { en: 'Operational radius', ar: 'نصف قطر التشغيل' }, v: { en: '~ 30 km', ar: '~ 30 كم' }, status: 'design-target' },
      { k: { en: 'Loiter time', ar: 'زمن الجوَلان' }, v: { en: '60+ min', ar: '60+ دقيقة' }, status: 'design-target' },
      { k: { en: 'Warhead bay', ar: 'حجيرة الحشوة' }, v: { en: '3–5 kg modular', ar: '3–5 كغ معيارية' }, status: 'design-target' },
      { k: { en: 'Seeker', ar: 'الباحث' }, v: { en: 'EO/IR dual-channel', ar: 'كهروبصري/حراري ثنائي القناة' }, status: 'design-target' },
      { k: { en: 'Navigation', ar: 'الملاحة' }, v: { en: 'GPS-denied resilient', ar: 'صامدة في غياب نظام تحديد المواقع' }, status: 'design-target' },
      { k: { en: 'Launch', ar: 'الإطلاق' }, v: { en: 'Canister · 1-operator', ar: 'حاوية · مشغّل واحد' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Issued at the squad and platoon level. Carry profile: rucksack-portable launcher and two reusable canister rounds per soldier.',
      ar: 'تُجهَّز على مستوى الفصيلة والسرية. ملف الحمل: قاذف محمول في حقيبة الظهر وحاويتان قابلتان لإعادة الاستخدام لكل جندي.',
    },
  },
  {
    code: 'SAS-K2',
    slug: 'sas-k2',
    codename: { en: 'Sirocco', ar: 'سيروكو' },
    family: 'kinetic',
    domain: ['air'],
    classification: {
      en: 'Long-range standoff strike · sovereign deep-effect platform',
      ar: 'ضربة بعيدة المدى من خارج المجال · منصة تأثير عميق سيادية',
    },
    summary: {
      en: 'A sovereign-class long-range, long-endurance strike vehicle engineered for fixed and time-sensitive high-value defensive targets without dependence on foreign tasking.',
      ar: 'منصة ضربة سيادية بعيدة المدى وطويلة التحمّل، مُهندَسة للأهداف الدفاعية الثابتة والحساسة زمنيًا عالية القيمة دون الاعتماد على تكليف أجنبي.',
    },
    envelope: {
      en: '800+ km range · 12 hr endurance · modular payload bay · SATCOM relay',
      ar: '800+ كم مدى · 12 ساعة تحمّل · حجيرة حمولة معيارية · ربط بالقمر الصناعي',
    },
    missionProfiles: ['strike-hvt', 'persistent-isr'],
    conops: [
      {
        en: 'Sirocco operates from sovereign-controlled launch sites under national C2. Deep navigation backbone fuses inertial, terrain-reference, and electro-optical aiding to remain effective in heavily denied environments.',
        ar: 'تعمل سيروكو من مواقع إطلاق تحت السيطرة السيادية الوطنية. يدمج عمودها الملاحي العميق المرجع القصوري ومرجعية التضاريس والمساعدة الكهروبصرية للحفاظ على فاعليتها في البيئات المُكثّفة الإعاقة.',
      },
      {
        en: 'Mission updates are delivered via SATCOM relay; targets may be re-tasked mid-flight under sovereign authority. Effects-on-target authorization remains exclusively national.',
        ar: 'يتم تحديث المهام عبر الربط بالقمر الصناعي؛ ويمكن إعادة تكليف الأهداف أثناء الطيران تحت السلطة السيادية. ويبقى إذن إحداث التأثير وطنيًا حصريًا.',
      },
    ],
    parameters: [
      { k: { en: 'Range', ar: 'المدى' }, v: { en: '800+ km', ar: '800+ كم' }, status: 'design-target' },
      { k: { en: 'Endurance', ar: 'التحمّل' }, v: { en: '12 hr', ar: '12 ساعة' }, status: 'design-target' },
      { k: { en: 'Payload bay', ar: 'حجيرة الحمولة' }, v: { en: 'Modular', ar: 'معيارية' }, status: 'design-target' },
      { k: { en: 'Datalink', ar: 'وصلة البيانات' }, v: { en: 'SATCOM + LOS', ar: 'قمر صناعي + خط رؤية' }, status: 'design-target' },
      { k: { en: 'Navigation', ar: 'الملاحة' }, v: { en: 'GPS-denied resilient', ar: 'صامدة في غياب نظام تحديد المواقع' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Sovereign-controlled launch architecture. Pairs with national air-tasking process and integrates into existing C2 infrastructure.',
      ar: 'هيكلية إطلاق تحت السيطرة السيادية. تتكامل مع منظومة تكليف الطلعات الوطنية والبنية القيادية القائمة.',
    },
  },
  {
    code: 'SAS-K3',
    slug: 'sas-k3',
    codename: { en: 'Saif Swarm', ar: 'سرب سيف' },
    family: 'kinetic',
    domain: ['air'],
    classification: {
      en: 'Tube-launched swarming kinetic effects · saturation against layered defenses',
      ar: 'ذخائر سربية تُطلَق من أنابيب · إشباع ضد الدفاعات المتعدّدة الطبقات',
    },
    summary: {
      en: 'An eight-pack canister of cooperative loitering vehicles with distributed targeting AI and mesh networking, designed for layered-defense saturation under sovereign command.',
      ar: 'حاوية ثمانية ذخائر متعاونة جوّالة، بذكاء استهداف موزَّع وشبكة تواصل متشابكة، مصممة لإشباع الدفاعات المتعدّدة الطبقات تحت قيادة سيادية.',
    },
    envelope: {
      en: '8-vehicle pack · mesh comms · distributed target allocation',
      ar: 'حزمة 8 مركبات · اتصالات شبكية متشابكة · توزيع الأهداف الموزَّع',
    },
    missionProfiles: ['sead', 'strike-hvt'],
    conops: [
      {
        en: 'Saif Swarm is launched from a single canister and self-organizes into a cooperative formation. Distributed targeting AI allocates effects across the formation under operator authorization, maintaining cohesion under attrition.',
        ar: 'يُطلَق سرب سيف من حاوية واحدة ويُنظِّم نفسه ذاتيًا في تشكيل تعاوني. يُوزِّع ذكاء الاستهداف التأثيرات داخل التشكيل تحت إذن المشغّل، مع الحفاظ على التماسك تحت التآكل.',
      },
    ],
    parameters: [
      { k: { en: 'Pack size', ar: 'حجم الحزمة' }, v: { en: '8 vehicles', ar: '8 مركبات' }, status: 'design-target' },
      { k: { en: 'Coordination', ar: 'التنسيق' }, v: { en: 'Mesh-network distributed', ar: 'شبكة متشابكة موزَّعة' }, status: 'design-target' },
      { k: { en: 'Authorization', ar: 'التفويض' }, v: { en: 'Operator-in-loop', ar: 'مشغّل في حلقة القرار' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Brigade-level offensive air-defense suppression. Pairs with intelligence layer for layered-target prioritization.',
      ar: 'يُستخدَم على مستوى اللواء لإخماد الدفاع الجوي. يتكامل مع طبقة الاستخبارات لترتيب الأولويات.',
    },
  },
  {
    code: 'SAS-N1',
    slug: 'sas-n1',
    codename: { en: 'Surfrider', ar: 'سيرفرايدر' },
    family: 'kinetic',
    domain: ['air', 'sea'],
    classification: {
      en: 'Sea-skimming anti-surface variant · coastal and USV-launched',
      ar: 'متغيّر يطفو فوق البحر مضاد للسطح · يُطلَق من الساحل أو من سفينة سطحية بدون طاقم',
    },
    summary: {
      en: 'A sea-skimming variant of the Talon family designed for sovereign coastal defense and FAC engagement, launchable from coastal batteries or unmanned surface motherships.',
      ar: 'متغيّر يطفو فوق سطح البحر من عائلة تالون مصمم للدفاع الساحلي السيادي والاشتباك مع زوارق الهجوم السريع، يُطلَق من بطاريات ساحلية أو سفن سطحية أم بدون طاقم.',
    },
    envelope: {
      en: 'Sea-skimming · EO/IR + millimeter-wave seeker · coastal defense',
      ar: 'تطفو فوق سطح البحر · باحث كهروبصري/حراري + موجة ميليمترية · دفاع ساحلي',
    },
    missionProfiles: ['coastal-defense', 'anti-fac'],
    conops: [
      {
        en: 'Surfrider provides sovereign coastal commanders an anti-surface capability that does not depend on imported missiles. Launch from fixed coastal batteries or USV motherships extends the engagement footprint.',
        ar: 'يُوفِّر سيرفرايدر للقادة الساحليين السياديين قدرة مضادة للسطح لا تعتمد على صواريخ مستوردة. يُمدِّد الإطلاق من البطاريات الساحلية أو من سفن سطحية أم النطاق التشغيلي.',
      },
    ],
    parameters: [
      { k: { en: 'Profile', ar: 'الملف' }, v: { en: 'Sea-skimming', ar: 'يطفو فوق البحر' }, status: 'design-target' },
      { k: { en: 'Seeker', ar: 'الباحث' }, v: { en: 'EO/IR + MMW', ar: 'كهروبصري/حراري + موجة ميليمترية' }, status: 'design-target' },
      { k: { en: 'Launch', ar: 'الإطلاق' }, v: { en: 'Coastal · USV', ar: 'ساحلي · سفينة سطحية أم' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Coastal batteries integrated with national maritime surveillance picture. USV launch enables forward presence in disputed waters.',
      ar: 'بطاريات ساحلية مرتبطة بصورة المراقبة البحرية الوطنية. يُتيح الإطلاق من سفينة سطحية أم وجودًا متقدّمًا في المياه المتنازع عليها.',
    },
  },

  // ─────────────────────────── COUNTER-UAS ───────────────────────────
  {
    code: 'SAS-C1',
    slug: 'sas-c1',
    codename: { en: 'Sentinel', ar: 'سنتينل' },
    family: 'counter-uas',
    domain: ['air'],
    classification: {
      en: 'Hard-kill kinetic interceptor · layered point-defense',
      ar: 'معترض حركي ذو إعاقة قاسية · دفاع نقطي متعدّد الطبقات',
    },
    summary: {
      en: 'A vertically launched hard-kill interceptor for layered point-defense of sovereign installations against hostile small-UAS threats.',
      ar: 'معترض حركي ذو إعاقة قاسية يُطلَق عموديًا للدفاع النقطي متعدّد الطبقات عن المنشآت السيادية ضد تهديدات الطائرات الصغيرة المعادية بدون طيار.',
    },
    envelope: { en: '8 km engagement envelope · vertical canister launch · operator-in-the-loop ID', ar: '8 كم نطاق اشتباك · إطلاق عمودي من حاوية · تحديد بقرار المشغّل' },
    missionProfiles: ['cuas', 'critical-infrastructure'],
    conops: [
      {
        en: 'Sentinel intercepts hostile small-UAS threats inside the inner defensive bubble of high-value installations. Machine-vision terminal homing acquires the target after operator-authorized engagement.',
        ar: 'يعترض سنتينل تهديدات الطائرات الصغيرة المعادية داخل الفقاعة الدفاعية الداخلية للمنشآت عالية القيمة. يكتسب التوجيه النهائي بالرؤية الآلية الهدف بعد إذن الاشتباك من المشغّل.',
      },
    ],
    parameters: [
      { k: { en: 'Engagement envelope', ar: 'نطاق الاشتباك' }, v: { en: '8 km', ar: '8 كم' }, status: 'design-target' },
      { k: { en: 'Launch', ar: 'الإطلاق' }, v: { en: 'Vertical canister', ar: 'عمودي من حاوية' }, status: 'design-target' },
      { k: { en: 'Authorization', ar: 'التفويض' }, v: { en: 'Operator-in-loop', ar: 'مشغّل في حلقة القرار' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Fixed-site point-defense of national infrastructure. Integrates with national air-defense command picture.',
      ar: 'دفاع نقطي ثابت للبنية التحتية الوطنية. يتكامل مع صورة قيادة الدفاع الجوي الوطنية.',
    },
  },
  {
    code: 'SAS-C2',
    slug: 'sas-c2',
    codename: { en: 'Mesh-Net', ar: 'شبكة الإيقاف' },
    family: 'counter-uas',
    domain: ['air'],
    classification: {
      en: 'Reusable net-capture interceptor · permissive-environment forensic capture',
      ar: 'معترض إيقاف بشبكة قابلة لإعادة الاستخدام · إيقاف جنائي في البيئات المسموحة',
    },
    summary: {
      en: 'A non-lethal net-capture vehicle engineered for permissive environments — airports, energy facilities, urban perimeters — where forensic recovery of the target is required.',
      ar: 'مركبة إيقاف غير قاتلة بشبكة، مصممة للبيئات المسموحة كالمطارات ومرافق الطاقة والمحيطات الحضرية، حيث يكون استرداد الهدف للتحقيق الجنائي مطلوبًا.',
    },
    envelope: { en: 'Reusable airframe · forensic capture · permissive-environment ConOps', ar: 'هيكل قابل لإعادة الاستخدام · إيقاف جنائي · مفهوم عمليات للبيئات المسموحة' },
    missionProfiles: ['cuas', 'critical-infrastructure'],
    conops: [
      {
        en: 'Mesh-Net captures the target in flight and returns it to a designated safe-handoff zone, preserving forensics and chain-of-custody for legal action.',
        ar: 'تُوقِف شبكة الإيقاف الهدف أثناء الطيران وتُعيده إلى منطقة تسليم آمنة مُحدَّدة، مع الحفاظ على الأدلة وسلسلة الاستلام للإجراءات القانونية.',
      },
    ],
    parameters: [
      { k: { en: 'Effect', ar: 'التأثير' }, v: { en: 'Non-lethal capture', ar: 'إيقاف غير قاتل' }, status: 'design-target' },
      { k: { en: 'Reusability', ar: 'إعادة الاستخدام' }, v: { en: 'Multiple sorties', ar: 'طلعات متعددة' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Critical infrastructure perimeters where lethal effects are not authorized. Pairs with intelligence layer for early target classification.',
      ar: 'محيطات البنية التحتية الحرجة حيث لا تُؤذَن التأثيرات القاتلة. يتكامل مع طبقة الاستخبارات لتصنيف الأهداف مبكرًا.',
    },
  },
  {
    code: 'SAS-C3',
    slug: 'sas-c3',
    codename: { en: 'Saiqa', ar: 'صاعقة' },
    family: 'counter-uas',
    domain: ['air'],
    classification: {
      en: 'Swarm-vs-swarm defensive interceptor formation',
      ar: 'تشكيل معترض دفاعي سرب-ضد-سرب',
    },
    summary: {
      en: 'A 12-vehicle defensive formation engineered specifically for the saturation-attack threat profile, with autonomous coordination and mesh-network target allocation.',
      ar: 'تشكيل دفاعي مكوَّن من 12 مركبة مُهندَس خصيصًا لتهديد الهجوم الإشباعي، بتنسيق ذاتي وتوزيع للأهداف عبر شبكة متشابكة.',
    },
    envelope: { en: '12-vehicle defensive swarm · mesh target allocation · autonomous coordination', ar: '12 مركبة سرب دفاعي · توزيع شبكي للأهداف · تنسيق ذاتي' },
    missionProfiles: ['cuas'],
    conops: [
      {
        en: 'Saiqa launches into a defensive screen and self-allocates incoming targets across the formation, designed to retain effectiveness as individual interceptors are expended.',
        ar: 'تنطلق صاعقة في حاجز دفاعي وتُوزِّع الأهداف الواردة ذاتيًا داخل التشكيل، بحيث تحتفظ بفاعليتها مع استهلاك المعترضات الفردية.',
      },
    ],
    parameters: [
      { k: { en: 'Formation', ar: 'التشكيل' }, v: { en: '12 vehicles', ar: '12 مركبة' }, status: 'design-target' },
      { k: { en: 'Coordination', ar: 'التنسيق' }, v: { en: 'Autonomous mesh', ar: 'شبكة متشابكة ذاتية' }, status: 'design-target' },
    ],
    deployment: {
      en: 'High-value installation defense against hostile saturation attack. Magazine sized to a planned threat profile.',
      ar: 'دفاع المنشآت عالية القيمة ضد الهجوم الإشباعي المعادي. يُحدَّد عدد المعترضات وفق ملف التهديد المخطَّط.',
    },
  },
  {
    code: 'SAS-C4',
    slug: 'sas-c4',
    codename: { en: 'Skylight', ar: 'سكاي لايت' },
    family: 'counter-uas',
    domain: ['air'],
    classification: {
      en: 'Aerial directed-energy carrier · soft-kill counter-UAS',
      ar: 'حامل طاقة موجَّهة جوّي · إعاقة ناعمة للطائرات بدون طيار',
    },
    summary: {
      en: 'An aerial platform carrying compact laser or high-power microwave for soft-kill of small UAS at standoff range, enabling near-zero cost-per-engagement and effectively magazine-deep defense.',
      ar: 'منصة جوية تحمل ليزرًا مدمجًا أو موجة دقيقة عالية الطاقة لإعاقة ناعمة للطائرات الصغيرة من خارج المدى، مما يُتيح تكلفة اشتباك تكاد تكون صفرية ودفاعًا شبه لا محدود الذخيرة.',
    },
    envelope: { en: 'Compact DE payload · standoff soft-kill · cost-per-engagement near zero', ar: 'حمولة طاقة موجَّهة مدمجة · إعاقة ناعمة من خارج المدى · تكلفة اشتباك تكاد تكون صفرية' },
    missionProfiles: ['cuas', 'critical-infrastructure'],
    conops: [
      {
        en: 'Skylight orbits at altitude over a defended area and provides standoff soft-kill against incoming small-UAS threats. Cost-per-engagement asymmetry favors the defender.',
        ar: 'يدور سكاي لايت على ارتفاع فوق المنطقة المحمية ويُوفِّر إعاقة ناعمة من خارج المدى ضد تهديدات الطائرات الصغيرة الواردة. التماثل غير المتكافئ في تكلفة الاشتباك يصبّ لصالح المدافع.',
      },
    ],
    parameters: [
      { k: { en: 'Payload', ar: 'الحمولة' }, v: { en: 'Laser or HPM', ar: 'ليزر أو موجة دقيقة عالية الطاقة' }, status: 'design-target' },
      { k: { en: 'Effect class', ar: 'فئة التأثير' }, v: { en: 'Soft-kill', ar: 'إعاقة ناعمة' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Layered air-defense above critical infrastructure. Pairs with hard-kill systems for complete defensive bubble.',
      ar: 'دفاع جوي متعدّد الطبقات فوق البنية التحتية الحرجة. يتكامل مع منظومات الإعاقة القاسية لفقاعة دفاعية كاملة.',
    },
  },

  // ─────────────────────────── HIGH-ALTITUDE VIGILANCE ───────────────────────────
  {
    code: 'SAS-H1',
    slug: 'sas-h1',
    codename: { en: 'Auriga', ar: 'أوريغا' },
    family: 'vigilance',
    domain: ['air'],
    classification: {
      en: 'High-altitude long-endurance ISR · strategic persistence',
      ar: 'استطلاع عالي الارتفاع وطويل التحمّل · حضور استراتيجي',
    },
    summary: {
      en: 'A HALE-class platform providing sovereign decision-makers with persistent strategic ISR across the full national perimeter, independent of foreign tasking pipelines.',
      ar: 'منصة من فئة الارتفاع العالي وطويل التحمّل توفّر لصنّاع القرار السياديين استطلاعًا استراتيجيًا مستمرًا على كامل المحيط الوطني، باستقلالية عن قنوات التكليف الأجنبية.',
    },
    envelope: { en: '~ 65,000 ft ceiling · 30+ hr endurance · multi-INT payload bay', ar: '~ 65,000 قدم سقف · 30+ ساعة تحمّل · حجيرة حمولة متعدّدة الأبعاد الاستخباراتية' },
    missionProfiles: ['border', 'persistent-isr'],
    conops: [
      {
        en: 'Auriga operates above commercial air traffic and most weather, providing long-dwell coverage of border, coastal, and strategic-area-of-interest geographies. Multi-INT bay supports EO/IR + SAR + SIGINT in mission-tailored fits.',
        ar: 'تعمل أوريغا فوق الحركة الجوية التجارية ومعظم الطقس، وتوفّر تغطية طويلة الجوَلان للحدود والسواحل والمناطق الاستراتيجية. تدعم حجيرة الأبعاد الاستخباراتية المتعدّدة دمج الكهروبصري/الحراري والرادار التركيبي والاستخبارات الإشارية بحسب المهمة.',
      },
    ],
    parameters: [
      { k: { en: 'Service ceiling', ar: 'سقف الخدمة' }, v: { en: '~ 65,000 ft', ar: '~ 65,000 قدم' }, status: 'design-target' },
      { k: { en: 'Endurance', ar: 'التحمّل' }, v: { en: '30+ hr', ar: '30+ ساعة' }, status: 'design-target' },
      { k: { en: 'Payload bay', ar: 'حجيرة الحمولة' }, v: { en: 'EO/IR · SAR · SIGINT', ar: 'كهروبصري/حراري · رادار تركيبي · استخبارات إشارية' }, status: 'design-target' },
      { k: { en: 'Datalink', ar: 'وصلة البيانات' }, v: { en: 'OTH-capable', ar: 'تتجاوز الأفق' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Sovereign ISR squadron under national air authority. Sortie cycles align with national intelligence requirements.',
      ar: 'سرب استطلاع سيادي تحت السلطة الجوية الوطنية. تتماشى دورات الطلعات مع متطلبات الاستخبارات الوطنية.',
    },
  },
  {
    code: 'SAS-H2',
    slug: 'sas-h2',
    codename: { en: 'Stratos', ar: 'ستراتوس' },
    family: 'vigilance',
    domain: ['air'],
    classification: {
      en: 'Solar high-altitude pseudo-satellite · stratospheric persistence',
      ar: 'شبه قمر صناعي شمسي عالي الارتفاع · حضور ستراتوسفيري',
    },
    summary: {
      en: 'A stratospheric pseudo-satellite providing multi-week station-keeping ISR and comms relay over a designated orbit — sovereign overhead presence without orbital cost or geopolitics.',
      ar: 'شبه قمر صناعي ستراتوسفيري يوفّر بقاء على مدار محدّد وعمليات استطلاع وبثّ اتصالات لأسابيع متعددة — حضور سيادي علوي بدون تكلفة مدارية أو حسابات جيوسياسية.',
    },
    envelope: { en: '~ 70,000 ft · multi-week persistence · solar propulsion', ar: '~ 70,000 قدم · بقاء لأسابيع · دفع شمسي' },
    missionProfiles: ['persistent-isr', 'border'],
    conops: [
      {
        en: 'Stratos provides a sovereign alternative to space-based assets for designated orbits — recoverable, repairable, and re-taskable on national timelines.',
        ar: 'تُوفِّر ستراتوس بديلًا سياديًا للأصول الفضائية على مدارات محدّدة — قابلة للاسترداد والإصلاح وإعادة التكليف وفق الجداول الوطنية.',
      },
    ],
    parameters: [
      { k: { en: 'Altitude', ar: 'الارتفاع' }, v: { en: '~ 70,000 ft', ar: '~ 70,000 قدم' }, status: 'design-target' },
      { k: { en: 'Persistence', ar: 'البقاء' }, v: { en: 'Multi-week', ar: 'أسابيع متعددة' }, status: 'design-target' },
      { k: { en: 'Propulsion', ar: 'الدفع' }, v: { en: 'Solar', ar: 'شمسي' }, status: 'design-target' },
    ],
    deployment: {
      en: 'Sovereign overhead capability for designated geographies and mission cycles.',
      ar: 'قدرة علوية سيادية للمناطق الجغرافية ودورات المهام المحدّدة.',
    },
  },
  {
    code: 'SAS-H3',
    slug: 'sas-h3',
    codename: { en: 'Mirage', ar: 'ميراج' },
    family: 'vigilance',
    domain: ['air'],
    classification: {
      en: 'Stratospheric SIGINT/COMINT carrier · sovereign signals collection',
      ar: 'حامل استخبارات إشارات ستراتوسفيري · جمع إشارات سيادي',
    },
    summary: {
      en: 'A specialized signals-payload high-altitude platform providing sovereign nations independence from commercial SIGINT supply chains.',
      ar: 'منصة عالية الارتفاع متخصصة بحمولة إشارات تُوفِّر للدول السيادية استقلالًا عن سلاسل توريد استخبارات الإشارات التجارية.',
    },
    envelope: { en: 'High-altitude SIGINT/COMINT · long-dwell over signal-rich areas', ar: 'استخبارات إشارات في ارتفاع عالٍ · جوَلان طويل فوق مناطق غنية بالإشارات' },
    missionProfiles: ['persistent-isr', 'sigint'],
    conops: [
      {
        en: 'Mirage dwells over signal-rich operational areas, collecting against priority emitters and feeding the national intelligence layer in near-real time.',
        ar: 'تُجوِّل ميراج فوق المناطق التشغيلية الغنية بالإشارات، وتجمع ضد الباعثات ذات الأولوية وتُغذِّي طبقة الاستخبارات الوطنية في زمن شبه حقيقي.',
      },
    ],
    parameters: [
      { k: { en: 'Payload', ar: 'الحمولة' }, v: { en: 'SIGINT/COMINT', ar: 'استخبارات إشارات/اتصالات' }, status: 'design-target' },
      { k: { en: 'Class', ar: 'الفئة' }, v: { en: 'Stratospheric', ar: 'ستراتوسفيري' }, status: 'design-target' },
    ],
    deployment: { en: 'Sovereign signals architecture under national intelligence authority.', ar: 'هيكلية إشارات سيادية تحت السلطة الاستخبارية الوطنية.' },
  },
  {
    code: 'SAS-H4',
    slug: 'sas-h4',
    codename: { en: 'Apex', ar: 'أبيكس' },
    family: 'vigilance',
    domain: ['air'],
    classification: {
      en: 'High-altitude resilient communications relay · degraded-environment C2 backbone',
      ar: 'مرحِّل اتصالات صامد عالي الارتفاع · عمود قيادة لبيئات الأداء المتدنّي',
    },
    summary: {
      en: 'A resilient mesh-comms backbone providing sovereign forces continuity of C2 in degraded environments where adversary action denies GPS or SATCOM.',
      ar: 'عمود اتصالات شبكي صامد يوفّر للقوات السيادية استمرارية القيادة والسيطرة في البيئات المتدنّية الأداء حيث تَحرم الإجراءات المعادية نظام تحديد المواقع أو الاتصالات الفضائية.',
    },
    envelope: { en: 'Mesh comms relay · GPS-denied · SATCOM-denied resilience', ar: 'مرحِّل اتصالات شبكي · صامد بدون نظام مواقع · صامد بدون اتصالات فضائية' },
    missionProfiles: ['persistent-isr', 'c2-resilience'],
    conops: [
      {
        en: 'Apex provides an alternate sovereign comms backbone independent of orbital and terrestrial denied-environment risks.',
        ar: 'يُوفِّر أبيكس عمود اتصالات سياديًا بديلًا مستقلًا عن مخاطر البيئات المتدنّية الأداء المدارية والأرضية.',
      },
    ],
    parameters: [
      { k: { en: 'Function', ar: 'الوظيفة' }, v: { en: 'Mesh relay', ar: 'مرحِّل شبكي' }, status: 'design-target' },
      { k: { en: 'Resilience', ar: 'الصمود' }, v: { en: 'Multi-denied environment', ar: 'بيئات متدنّية الأداء متعددة' }, status: 'design-target' },
    ],
    deployment: { en: 'Distributed sovereign C2 architecture, coupled with intelligence layer.', ar: 'هيكلية قيادة سيادية موزَّعة، مرتبطة بطبقة الاستخبارات.' },
  },

  // ─────────────────────────── MARITIME ───────────────────────────
  {
    code: 'SAS-S1',
    slug: 'sas-s1',
    codename: { en: 'Tideline', ar: 'تايد لاين' },
    family: 'maritime',
    domain: ['sea'],
    classification: { en: 'USV coastal ISR & anti-FAC patrol', ar: 'سفينة سطحية أم: استطلاع ساحلي ومطاردة زوارق هجوم سريع' },
    summary: {
      en: 'A medium USV providing persistent coastal ISR and an anti-fast-attack-craft picket along sovereign maritime perimeters.',
      ar: 'سفينة سطحية أم متوسطة تُوفِّر استطلاعًا ساحليًا مستمرًا ومرابطة ضد زوارق الهجوم السريع على طول المحيطات البحرية السيادية.',
    },
    envelope: { en: 'Persistent coastal patrol · multi-sensor fusion · USV mothership for air vehicles', ar: 'دوريات ساحلية مستمرة · دمج متعدد المستشعرات · سفينة سطحية أم لمركبات جوية' },
    missionProfiles: ['coastal-defense', 'anti-fac', 'persistent-isr'],
    conops: [
      { en: 'Tideline patrols sovereign EEZ and territorial waters, providing persistent picture and rapid-response engagement against FACs and small-boat threats.', ar: 'تُسيِّر تايد لاين دوريات في المنطقة الاقتصادية الخالصة والمياه الإقليمية السيادية، وتُوفِّر صورة مستمرة واشتباكًا سريعًا ضد زوارق الهجوم السريع وتهديدات القوارب الصغيرة.' },
    ],
    parameters: [
      { k: { en: 'Class', ar: 'الفئة' }, v: { en: 'Medium USV', ar: 'سفينة سطحية أم متوسطة' }, status: 'design-target' },
      { k: { en: 'Mission fits', ar: 'تجهيزات المهام' }, v: { en: 'ISR · anti-FAC · mothership', ar: 'استطلاع · ضد زوارق هجوم · أم' }, status: 'design-target' },
    ],
    deployment: { en: 'Coastal task groups under national naval command.', ar: 'مجموعات مهام ساحلية تحت القيادة البحرية الوطنية.' },
  },
  {
    code: 'SAS-S2',
    slug: 'sas-s2',
    codename: { en: 'Abyss', ar: 'أبيس' },
    family: 'maritime',
    domain: ['sea'],
    classification: { en: 'UUV persistent undersea ISR & seabed protection', ar: 'مركبة غاطسة بدون طاقم: استطلاع غاطس مستمر وحماية القاع البحري' },
    summary: {
      en: 'A UUV class engineered for persistent undersea presence — seabed-infrastructure protection, mine-countermeasures, and quiet-water ISR.',
      ar: 'فئة مركبات غاطسة بدون طاقم مُهندَسة لحضور غاطس مستمر — حماية البنية التحتية القاعية، ومكافحة الألغام، والاستطلاع في المياه الهادئة.',
    },
    envelope: { en: 'Long-endurance UUV · seabed survey · mine-countermeasures', ar: 'مركبة غاطسة طويلة التحمّل · مسح القاع · مكافحة الألغام' },
    missionProfiles: ['critical-infrastructure', 'persistent-isr'],
    conops: [
      { en: 'Abyss provides persistent undersea picture in territorial waters where surface presence is impractical or operationally undesirable.', ar: 'تُوفِّر أبيس صورة غاطسة مستمرة في المياه الإقليمية حيث يكون الحضور السطحي غير عملي أو غير مرغوب تشغيليًا.' },
    ],
    parameters: [
      { k: { en: 'Class', ar: 'الفئة' }, v: { en: 'Long-endurance UUV', ar: 'مركبة غاطسة طويلة التحمّل' }, status: 'design-target' },
      { k: { en: 'Missions', ar: 'المهام' }, v: { en: 'ISR · MCM · infra', ar: 'استطلاع · مكافحة ألغام · بنية تحتية' }, status: 'design-target' },
    ],
    deployment: { en: 'Naval undersea task units; pairs with seabed-asset operators for infrastructure protection.', ar: 'وحدات مهام غاطسة بحرية؛ تتكامل مع مشغّلي أصول القاع لحماية البنية التحتية.' },
  },

  // ─────────────────────────── GROUND ───────────────────────────
  {
    code: 'SAS-G1',
    slug: 'sas-g1',
    codename: { en: 'Outrider', ar: 'أوت رايدر' },
    family: 'ground',
    domain: ['land'],
    classification: { en: 'UGV perimeter sentry & remote weapon station', ar: 'مركبة برية بدون طاقم: حارس محيط ومحطة سلاح عن بُعد' },
    summary: {
      en: 'A tracked UGV providing perimeter security at fixed installations and a remote weapon station option for sovereign-controlled defensive engagement.',
      ar: 'مركبة برية بدون طاقم بزحّافات تُوفِّر حماية محيط للمنشآت الثابتة وخيار محطة سلاح عن بُعد للاشتباك الدفاعي تحت السيطرة السيادية.',
    },
    envelope: { en: 'Tracked chassis · sentry + RWS option · perimeter ConOps', ar: 'هيكل بزحّافات · حارس + خيار محطة سلاح · مفهوم عمليات للمحيط' },
    missionProfiles: ['critical-infrastructure', 'border'],
    conops: [
      { en: 'Outrider patrols installation perimeters under autonomous waypoint navigation, with operator-authorized engagement when an RWS fit is present.', ar: 'تُسيِّر أوت رايدر دوريات على محيطات المنشآت تحت ملاحة نقاط ذاتية، مع اشتباك بإذن المشغّل عند تركيب محطة سلاح.' },
    ],
    parameters: [
      { k: { en: 'Chassis', ar: 'الهيكل' }, v: { en: 'Tracked', ar: 'بزحّافات' }, status: 'design-target' },
      { k: { en: 'Fits', ar: 'التجهيزات' }, v: { en: 'Sentry · RWS', ar: 'حارس · محطة سلاح عن بُعد' }, status: 'design-target' },
    ],
    deployment: { en: 'Critical infrastructure perimeters and forward border posts.', ar: 'محيطات البنية التحتية الحرجة ونقاط الحدود الأمامية.' },
  },
  {
    code: 'SAS-G2',
    slug: 'sas-g2',
    codename: { en: 'Caravan', ar: 'كرفان' },
    family: 'ground',
    domain: ['land'],
    classification: { en: 'UGV logistics resupply & route clearance', ar: 'مركبة برية بدون طاقم: تموين لوجستي وتطهير طرق' },
    summary: {
      en: 'A UGV class engineered for low-signature resupply of dismounted units and route-clearance against improvised threats.',
      ar: 'فئة مركبات برية بدون طاقم مُهندَسة لتموين منخفض البصمة للوحدات المترجلة وتطهير الطرق ضد التهديدات الارتجالية.',
    },
    envelope: { en: 'Wheeled or tracked · resupply + route-clearance fits', ar: 'بعجلات أو بزحّافات · تجهيزات تموين + تطهير طرق' },
    missionProfiles: ['logistics', 'route-clearance'],
    conops: [
      { en: 'Caravan augments dismounted formations with autonomous resupply along surveyed routes and replaces high-risk human exposure on cleared routes.', ar: 'يُعزِّز كرفان التشكيلات المترجلة بتموين ذاتي على طرق ممسوحة، ويُغني عن التعرض البشري عالي المخاطرة في الطرق المُطهَّرة.' },
    ],
    parameters: [
      { k: { en: 'Drivetrain', ar: 'مجموعة النقل' }, v: { en: 'Wheeled / tracked', ar: 'بعجلات / بزحّافات' }, status: 'tktk' },
      { k: { en: 'Payload', ar: 'الحمولة' }, v: { en: 'Mission-tailored', ar: 'مخصّصة للمهمة' }, status: 'tktk' },
    ],
    deployment: { en: 'Combat-support brigades, sovereign route-clearance units.', ar: 'ألوية الدعم القتالي، وحدات تطهير الطرق السيادية.' },
  },

  // ─────────────────────────── MOBILE / DISPERSED PRODUCTION ───────────────────────────
  {
    code: 'SAS-M1',
    slug: 'sas-m1',
    codename: { en: 'Forge', ar: 'فورج' },
    family: 'manufacturing',
    domain: ['land'],
    classification: { en: 'ISO-containerized production module · 24-hour relocation', ar: 'وحدة إنتاج بحاوية معيارية · إعادة تموضع خلال 24 ساعة' },
    summary: {
      en: 'A 40-foot-container-scale, self-contained assembly cell for tactical UAS class production, relocatable by truck, rail, or ship within 24 hours.',
      ar: 'خلية تجميع مكتفية ذاتيًا بحجم حاوية 40 قدمًا لإنتاج فئة الطائرات بدون طيار التكتيكية، قابلة للنقل عبر الشاحنة والسكة الحديدية والسفن خلال 24 ساعة.',
    },
    envelope: { en: '40 ft ISO container · plug-and-play utilities · 24 hr relocation', ar: 'حاوية معيارية 40 قدم · مرافق جاهزة للتركيب · إعادة تموضع خلال 24 ساعة' },
    missionProfiles: ['industrial-resilience'],
    conops: [
      { en: 'Forge provides the smallest unit of distributed production. Multiple Forge containers compose into a brigade-scale UAS assembly capability that can be dispersed under operational pressure.', ar: 'تُمثِّل فورج الوحدة الأصغر للإنتاج الموزَّع. تُكوِّن حاويات فورج متعددة قدرة تجميع طائرات بدون طيار على مستوى اللواء يمكن تشتيتها تحت الضغط التشغيلي.' },
    ],
    parameters: [
      { k: { en: 'Form factor', ar: 'الشكل' }, v: { en: '40 ft ISO container', ar: 'حاوية معيارية 40 قدم' }, status: 'design-target' },
      { k: { en: 'Relocation', ar: 'إعادة التموضع' }, v: { en: '< 24 hr', ar: 'أقل من 24 ساعة' }, status: 'design-target' },
      { k: { en: 'Output class', ar: 'فئة الإنتاج' }, v: { en: 'Tactical UAS', ar: 'طائرات تكتيكية بدون طيار' }, status: 'design-target' },
    ],
    deployment: { en: 'Distributed national production posture; baseline survivability node.', ar: 'موقف إنتاج وطني موزَّع؛ عقدة قابلية للبقاء أساسية.' },
  },
  {
    code: 'SAS-M2',
    slug: 'sas-m2',
    codename: { en: 'Anvil', ar: 'سندان' },
    family: 'manufacturing',
    domain: ['land'],
    classification: { en: 'Rail-mobile production train · disperses on threat warning', ar: 'قطار إنتاج متنقل بالسكك الحديدية · يتشتّت عند التحذير' },
    summary: {
      en: 'A multi-car train formation that performs inbound parts, assembly, integration, test, and dispatch — operating on the national rail network and dispersing on threat warning.',
      ar: 'تشكيل قطار متعدّد العربات يؤدّي مهام الاستلام والتجميع والتكامل والاختبار والشحن — يعمل على شبكة السكك الحديدية الوطنية ويتشتّت عند التحذير.',
    },
    envelope: { en: 'Rail-mobile · full assembly chain · threat-driven dispersion', ar: 'متنقل بالسكك · سلسلة تجميع كاملة · تشتّت عند التهديد' },
    missionProfiles: ['industrial-resilience'],
    conops: [
      { en: 'Anvil keeps national production in motion. Inspired by mobile strategic systems doctrine, it denies the adversary a fixed targetable production node.', ar: 'يُبقي سندان الإنتاج الوطني في حركة. مستوحى من عقيدة المنظومات الاستراتيجية المتنقلة، ويحرم الخصم من عقدة إنتاج ثابتة قابلة للاستهداف.' },
    ],
    parameters: [
      { k: { en: 'Mobility', ar: 'القابلية للحركة' }, v: { en: 'National rail network', ar: 'شبكة السكك الحديدية الوطنية' }, status: 'design-target' },
      { k: { en: 'Function', ar: 'الوظيفة' }, v: { en: 'Full assembly chain', ar: 'سلسلة تجميع كاملة' }, status: 'design-target' },
    ],
    deployment: { en: 'Coordinated with national rail authority and air-defense overhead screen.', ar: 'بالتنسيق مع هيئة السكك الحديدية الوطنية ومظلّة الدفاع الجوي.' },
  },
  {
    code: 'SAS-M3',
    slug: 'sas-m3',
    codename: { en: 'Tide', ar: 'تايد' },
    family: 'manufacturing',
    domain: ['sea'],
    classification: { en: 'Maritime production vessel · sovereign EEZ posture', ar: 'سفينة إنتاج بحرية · موقف داخل المنطقة الاقتصادية الخالصة' },
    summary: {
      en: 'A commercial-or-naval-auxiliary hull adapted for at-sea manufacturing in sovereign EEZ or international waters — survivable through dispersion across ocean area.',
      ar: 'هيكل تجاري أو مساعد بحري مُكيَّف لتصنيع في عرض البحر داخل المنطقة الاقتصادية الخالصة السيادية أو المياه الدولية — قابل للبقاء عبر التشتت في رقعة المحيط.',
    },
    envelope: { en: 'At-sea production · sovereign EEZ · ocean-area dispersion', ar: 'إنتاج في عرض البحر · منطقة اقتصادية خالصة · تشتّت في رقعة المحيط' },
    missionProfiles: ['industrial-resilience'],
    conops: [
      { en: 'Tide moves national production beyond fixed land targets, leveraging the geographic depth of the maritime domain for survivability.', ar: 'تنقل تايد الإنتاج الوطني إلى ما يتجاوز الأهداف البرية الثابتة، مستفيدةً من العمق الجغرافي للمجال البحري للبقاء.' },
    ],
    parameters: [
      { k: { en: 'Hull base', ar: 'هيكل القاعدة' }, v: { en: 'Commercial / naval auxiliary', ar: 'تجاري / مساعد بحري' }, status: 'tktk' },
      { k: { en: 'Operating area', ar: 'منطقة التشغيل' }, v: { en: 'Sovereign EEZ + international', ar: 'منطقة اقتصادية خالصة + دولية' }, status: 'design-target' },
    ],
    deployment: { en: 'Coordinated with national naval command and maritime traffic deconfliction.', ar: 'بالتنسيق مع القيادة البحرية الوطنية وفصل الحركة البحرية.' },
  },
  {
    code: 'SAS-M4',
    slug: 'sas-m4',
    codename: { en: 'Mesh', ar: 'ميش' },
    family: 'manufacturing',
    domain: ['land'],
    classification: { en: 'Distributed micro-factory network · cross-redundant nodes', ar: 'شبكة مصانع دقيقة موزَّعة · عقد متكرّرة متبادلة' },
    summary: {
      en: 'Many small dispersed production nodes (each under 200 m²) producing at low individual rate but high aggregate throughput — any single node can be lost without halting national production.',
      ar: 'عقد إنتاج صغيرة موزَّعة (كل منها أقل من 200 م²) تُنتج بمعدل فردي منخفض لكنها تُحقّق إنتاجية إجمالية عالية — يمكن فقد أيّ عقدة منفردة دون إيقاف الإنتاج الوطني.',
    },
    envelope: { en: 'Many small nodes · < 200 m² each · cross-redundant', ar: 'عقد صغيرة عديدة · < 200 م² لكل منها · متكرّرة متبادلة' },
    missionProfiles: ['industrial-resilience'],
    conops: [
      { en: 'Mesh distributes production across many low-signature nodes — denying the adversary a high-value targetable centroid.', ar: 'تُوزِّع ميش الإنتاج عبر عقد عديدة منخفضة البصمة — وتحرم الخصم من مركز ثقل عالي القيمة قابل للاستهداف.' },
    ],
    parameters: [
      { k: { en: 'Node size', ar: 'حجم العقدة' }, v: { en: '< 200 m²', ar: '< 200 م²' }, status: 'design-target' },
      { k: { en: 'Posture', ar: 'الموقف' }, v: { en: 'Cross-redundant', ar: 'متكرّر متبادل' }, status: 'design-target' },
    ],
    deployment: { en: 'National industrial dispersion strategy; pairs with M1 / M2 for surge.', ar: 'استراتيجية تشتت صناعي وطنية؛ تتكامل مع M1/M2 للزيادة عند الطلب.' },
  },
  {
    code: 'SAS-M5',
    slug: 'sas-m5',
    codename: { en: 'Burrow', ar: 'بَورو' },
    family: 'manufacturing',
    domain: ['land'],
    classification: { en: 'Hardened sovereign facility · strategic-reserve production', ar: 'منشأة سيادية محصَّنة · إنتاج احتياط استراتيجي' },
    summary: {
      en: 'A buried, EMP-shielded, NBC-protected production facility designed for sustained high-intensity production under contested conditions — the strategic-reserve manufacturing node.',
      ar: 'منشأة إنتاج مدفونة ومحميّة من النبضة الكهرومغناطيسية والتلوث النووي والكيميائي والبيولوجي، مصممة لإنتاج عالي الكثافة ومستدام في الظروف المتنازع عليها — عقدة الإنتاج كاحتياط استراتيجي.',
    },
    envelope: { en: 'Hardened · EMP-shielded · NBC-protected · sustained high-intensity', ar: 'محصَّنة · محميّة من النبضة · محميّة من التلوث · إنتاج عالي الكثافة مستدام' },
    missionProfiles: ['industrial-resilience'],
    conops: [
      { en: 'Burrow holds the strategic floor of national production capacity in worst-case scenarios.', ar: 'تحفظ بَورو الأرضية الاستراتيجية للقدرة الإنتاجية الوطنية في أسوأ السيناريوهات.' },
    ],
    parameters: [
      { k: { en: 'Hardening', ar: 'التحصين' }, v: { en: 'Buried · EMP · NBC', ar: 'مدفون · نبضة كهرومغناطيسية · تلوث' }, status: 'design-target' },
      { k: { en: 'Role', ar: 'الدور' }, v: { en: 'Strategic-reserve', ar: 'احتياط استراتيجي' }, status: 'design-target' },
    ],
    deployment: { en: 'Sovereign-controlled, doctrine-aligned with national continuity-of-government planning.', ar: 'تحت السيطرة السيادية، متوافقة مع تخطيط استمرارية الحكم الوطني.' },
  },
];

export const families: Family[] = ['kinetic', 'counter-uas', 'vigilance', 'maritime', 'ground', 'manufacturing'];
export const domains: Domain[] = ['air', 'land', 'sea'];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsByFamily(family: Family): Product[] {
  return products.filter((p) => p.family === family);
}
