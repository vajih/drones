export type Essay = {
  slug: string;
  title: { en: string; ar: string };
  dek: { en: string; ar: string };
  date: string; // ISO yyyy-mm-dd
  body: { en: string[]; ar: string[] };
};

export const essays: Essay[] = [
  {
    slug: 'sovereignty-is-industrial',
    date: '2024-09-15',
    title: {
      en: 'Sovereignty is industrial.',
      ar: 'السيادة صناعية.',
    },
    dek: {
      en: 'Why the next decade of regional security will be decided on factory floors, not on flight lines.',
      ar: 'لماذا سيُحسَم العقد القادم من الأمن الإقليمي على أرضيات المصانع، لا على ممرات الطائرات.',
    },
    body: {
      en: [
        'For most of the post-Cold-War era, sovereign defense was treated as a procurement problem. A capable nation defined its requirements, selected a supplier from a short list of advanced industrial democracies, and accepted that the price of the platform included a permanent dependency: spare parts, software updates, weapons release authorities, and ultimately the political conditions under which the system could be used.',
        'That model is now visibly failing. Not because the platforms are deficient — many of them are exceptional — but because the world that produced them has changed. Conflicts in Eastern Europe, the Caucasus, the Red Sea, and increasingly across the Indo-Pacific have made plain that the decisive variables in modern conflict are mass, dispersion, attrition, and the speed of industrial iteration. Twenty exquisite platforms cannot answer the operational question that two thousand acceptable platforms can.',
        'Unmanned systems are at the center of this shift, and they are at the center of it specifically because they collapse the cost-per-engagement curve. A defender who can manufacture, integrate, and sustain unmanned vehicles at scale — across air, land, and maritime domains — gains the privilege of fighting a long war on favorable terms. A defender who cannot is, in a real sense, fighting on borrowed time.',
        'The implication for sovereign nations is not that they should buy more drones. The implication is that the locus of sovereign defense is migrating from the platform to the industrial column behind it. The question that matters is no longer "do we have the system" but "do we have the system, the production capacity, the iterative engineering team, and the doctrine to disperse production under contested conditions." Each of those layers is independently consequential. Together they constitute industrial sovereignty.',
        'This is the architecture that Sterling Autonomous Systems is engineered to stand up. Not a catalog of vehicles. Not a license-and-assemble shop. The full stack — the airframes, the surface and undersea craft, the ground vehicles, the AI-enabled C2 fabric, and the mobile, dispersed manufacturing posture that makes the rest survivable. Built with a sovereign partner, governed by sovereign authority, sustained by sovereign engineering teams.',
        'Sovereignty in the unmanned-systems era is industrial. It is built one cell, one rail car, one hardened bay at a time — and the nations that understand this in the next five years will define the regional security architecture for the next thirty.',
      ],
      ar: [
        'طوال معظم حقبة ما بعد الحرب الباردة، عُومِل الدفاع السيادي كمشكلة تَوريد. تُحدّد الدولة القادرة متطلباتها، وتختار مورِّدًا من قائمة قصيرة من الديمقراطيات الصناعية المتقدمة، وتقبل أن ثمن المنصة يتضمن تبعيّة دائمة: قطع غيار، تحديثات برمجية، صلاحيات إطلاق أسلحة، وفي النهاية الشروط السياسية التي يمكن للنظام أن يُستخدَم في إطارها.',
        'يَفشل هذا النموذج الآن بشكل واضح. لا لأن المنصّات قاصرة — كثير منها استثنائي — بل لأن العالم الذي أنتجها قد تغيّر. لقد أوضحت النزاعات في أوروبا الشرقية والقوقاز والبحر الأحمر، وعلى نحو متزايد عبر منطقة المحيطين الهندي والهادئ، أن المتغيّرات الحاسمة في النزاع الحديث هي الكتلة والتشتت والتآكل وسرعة التكرار الصناعي. لا يمكن لعشرين منصّة باهرة أن تُجيب على السؤال العملياتي الذي يُجيب عليه ألفا منصّة مقبولة.',
        'المنظومات بدون طيار في قلب هذا التحوّل، وهي في قلبه تحديدًا لأنها تُسقط منحنى تكلفة الاشتباك. المدافع الذي يستطيع تصنيع المركبات بدون طيار وتكاملها وإدامتها على نطاق واسع — في المجالات الجوية والبرية والبحرية — يكتسب امتياز خوض حرب طويلة بشروط مواتية. والمدافع الذي لا يستطيع ذلك، يحارب بمعنى حقيقي بوقت مُستعار.',
        'الدلالة بالنسبة للدول السيادية ليست أن تشتري المزيد من الطائرات بدون طيار. الدلالة هي أن مركز ثقل الدفاع السيادي يهاجر من المنصّة إلى العمود الصناعي خلفها. السؤال الذي يهم لم يَعد "هل لدينا النظام" بل "هل لدينا النظام، والقدرة الإنتاجية، وفريق الهندسة التكراري، والعقيدة لتشتيت الإنتاج تحت الظروف المتنازع عليها". كل طبقة من هذه الطبقات لها أثر مستقل. ومجتمعةً، تُشكِّل السيادة الصناعية.',
        'هذه هي الهيكلية التي صُمِّمت ستيرلنغ أوتونوماس سيستمز لإنشائها. لا كتالوج مركبات. لا متجر ترخيص وتجميع. الحُزمة الكاملة — الهياكل الجوية، والقطع السطحية والغاطسة، والمركبات البرية، ونسيج القيادة والسيطرة المعزَّز بالذكاء الاصطناعي، وموقف التصنيع المتنقل الموزَّع الذي يجعل بقيّة المنظومة قابلة للبقاء. مبنيّة مع شريك سيادي، تحت حوكمة السلطة السيادية، يُديمها فِرَق هندسة سيادية.',
        'السيادة في عصر المنظومات بدون طيار صناعية. تُبنى خليّةً تلو خليّة، وعربةَ سكّةٍ تلو عربة، وحجيرةً محصَّنةً تلو حجيرة — والدول التي تفهم ذلك في السنوات الخمس القادمة ستُحدِّد هيكلية الأمن الإقليمي للثلاثين السنة التالية.',
      ],
    },
  },
  {
    slug: 'mass-versus-mass',
    date: '2024-10-22',
    title: {
      en: 'Mass against mass.',
      ar: 'كتلة ضد كتلة.',
    },
    dek: {
      en: 'On asymmetric defense and why dispersion, not concentration, will define the next decade of unmanned warfare.',
      ar: 'حول الدفاع غير المتكافئ ولماذا سيُحدِّد التشتت، لا التركيز، العقد القادم من حرب المنظومات بدون طيار.',
    },
    body: {
      en: [
        'There is a recurring temptation in defense planning to answer mass with quality. Faced with a numerically superior threat, planners reach for an ever-more-capable platform — more sensors, more range, more lethality, more cost. The intuition behind this is a relic of a world in which platforms could be assumed to survive long enough for their quality to matter. That world is gone.',
        'Modern unmanned warfare punishes concentration of value. A small fleet of high-cost platforms is, in the simplest accounting, a high-payoff target set: deny it once and the operational problem is solved for the adversary. A large fleet of acceptable platforms, dispersed and produced continuously, is the inverse — there is no single point at which denial yields strategic effect, and the cost-per-engagement of attacking the fleet exceeds the value of any single airframe denied.',
        'The same logic applies to the production base behind the fleet. A single advanced facility producing a high-end platform is a high-value target. A network of small dispersed nodes producing acceptable platforms is not. The defender who chooses dispersion buys himself the most valuable asset in modern conflict: time. Time to iterate. Time to absorb losses. Time to refuse the political pressure to ration capability.',
        'This is the strategic logic underneath the Sterling Autonomous Systems industrial doctrine. The Forge containers, the rail-mobile Anvil train, the maritime Tide hulls, the Mesh micro-factory networks, the hardened Burrow tier — these are not separate product lines. They are five answers to the same question: how do we make sovereign production survivable and replicable under conditions in which an adversary will, with high confidence, attempt to deny it?',
        'A nation that adopts this posture does not eliminate the threat. It changes the cost-of-denial calculus until the threat becomes uneconomic. That is what asymmetric defense actually means. It is not a clever workaround. It is the deliberate, doctrinal choice to make the adversary spend more to suppress capability than the capability itself costs to produce.',
        'The architecture is sized for that choice. The question for sovereign partners is whether they intend to make it.',
      ],
      ar: [
        'هناك إغراء متكرّر في تخطيط الدفاع: الإجابة على الكتلة بالجودة. حين يواجَه المخطط تهديدًا يفوقه عدديًا، يلجأ إلى منصّة أعلى قدرةً — مستشعرات أكثر، مدى أبعد، فتك أعلى، كلفة أعلى. الحدس وراء ذلك بقيّة من عالم كان يمكن فيه افتراض بقاء المنصّات حية لفترة كافية لتظهر فيها جودتها. ذلك العالم انقضى.',
        'تُعاقب حرب المنظومات بدون طيار الحديثة تركيز القيمة. أسطول صغير من المنصّات عالية الكلفة هو، بأبسط الحسابات، مجموعة أهداف عالية المردود: يكفي حرمانه مرّة واحدة لتُحَلّ المشكلة العملياتية للخصم. أسطول كبير من المنصّات المقبولة، الموزَّعة والمُنتَجَة باستمرار، هو العكس — لا توجد نقطة منفردة يَحقّق الحرمان فيها أثرًا استراتيجيًا، وتكلفة اشتباك مهاجمة الأسطول تتجاوز قيمة أيّ هيكل جوي مفقود.',
        'ينطبق المنطق نفسه على القاعدة الإنتاجية خلف الأسطول. منشأة متقدمة واحدة تُنتج منصّة راقية هي هدف عالي القيمة. شبكة من العقد الصغيرة الموزَّعة تُنتج منصّات مقبولة ليست كذلك. المدافع الذي يختار التشتت يُكسِب نفسه الأصل الأثمن في النزاع الحديث: الوقت. وقت للتكرار. وقت لامتصاص الخسائر. وقت لرفض الضغط السياسي لتقنين القدرة.',
        'هذا هو المنطق الاستراتيجي خلف عقيدة ستيرلنغ أوتونوماس سيستمز الصناعية. حاويات فورج، وقطار سندان المتنقل بالسكك الحديدية، وهياكل تايد البحرية، وشبكات ميش للمصانع الدقيقة، وطبقة بَورو المحصَّنة — هذه ليست خطوط منتجات منفصلة. هي خمس إجابات على السؤال نفسه: كيف نجعل الإنتاج السيادي قابلًا للبقاء وقابلًا للتكرار في ظروف سيحاول فيها الخصم، بثقة عالية، أن يحرمنا منه؟',
        'الدولة التي تتبنّى هذا الموقف لا تُلغي التهديد. تُغيِّر حسبة كلفة الحرمان حتى يصبح التهديد غير اقتصادي. هذا هو المعنى الفعلي للدفاع غير المتكافئ. ليس حيلة ذكية. هو الاختيار العقدي المتعمَّد لجعل الخصم يُنفق على إخماد القدرة أكثر مما تكلِّفه القدرة نفسها للإنتاج.',
        'هذه الهيكلية مُحَجَّمة لهذا الاختيار. السؤال للشركاء السياديين هو ما إذا كانوا ينوون اتخاذه.',
      ],
    },
  },
  {
    slug: 'the-thirty-year-window',
    date: '2024-12-01',
    title: {
      en: 'The thirty-year window.',
      ar: 'نافذة الثلاثين عامًا.',
    },
    dek: {
      en: 'Why the regional sovereign nation that builds an unmanned-vehicle industry now will define the architecture of regional security through 2055.',
      ar: 'لماذا ستُحدِّد الدولة السيادية الإقليمية التي تبني صناعة مركبات بدون طيار الآن هيكلية الأمن الإقليمي حتى 2055.',
    },
    body: {
      en: [
        'Industrial defense capability accrues over decades. The American defense industrial base of 2025 is the cumulative result of decisions made in 1955, 1985, and 2005 — about which companies to fund, which engineering programs to seed, which sovereign capabilities to retain, and which to externalize. The same will be true of the regional defense industrial base of 2055.',
        'The window for shaping that 2055 base is unusually short. Three structural factors are converging. First, unmanned-systems technology is in the rare phase where mature engineering knowledge exists outside the small club of advanced industrial democracies — a window that historically closes once the dominant suppliers establish license-and-IP regimes. Second, the operational evidence from recent conflicts has eliminated the political objection to sovereign unmanned-systems programs as luxuries; they are now visibly necessities. Third, the regional capital required to fund such programs is, in this decade, in greater alignment with regional strategic objectives than at any prior moment.',
        'These three factors will not remain aligned indefinitely. The dominant suppliers will close the engineering window. New geopolitical pressures will reorient capital. The political consensus on necessity will be partially reabsorbed by procurement-as-usual once immediate crises ebb. The window for a regional sovereign nation to build a full-stack unmanned-vehicle industry — to own the platforms, the production, the engineering, and the doctrine — is not infinite. It is approximately the next decade.',
        'A nation that uses that decade well will, by 2035, possess sovereign capability across air, land, and maritime unmanned domains. By 2045 it will have iterated that capability through two full generations of platforms and one full generation of doctrine. By 2055 it will define the regional security architecture — because the suppliers, the standards, the doctrine, and the export relationships will all originate from inside it.',
        'A nation that does not use that decade well will, by 2055, be in the same procurement posture it occupies today: dependent on foreign suppliers, dependent on foreign release authorities, dependent on the political conditions under which platforms can be employed. Whether that posture remains tenable in 2055 is a question that deserves serious thought.',
        'Sterling Autonomous Systems is engineered for the first path. The platform exists for partners who intend to take it. The conversation, when it begins, will be one of the most consequential of the coming decade.',
      ],
      ar: [
        'تتراكم القدرة الدفاعية الصناعية عبر عقود. القاعدة الصناعية الدفاعية الأمريكية لعام 2025 هي النتيجة التراكمية لقرارات اتُّخذت في 1955 و1985 و2005 — حول الشركات التي يجب تمويلها، وبرامج الهندسة التي تستحق البذر، والقدرات السيادية الواجب الاحتفاظ بها، وتلك التي تُخارَج. سيكون الأمر نفسه صحيحًا عن القاعدة الصناعية الدفاعية الإقليمية لعام 2055.',
        'النافذة لتشكيل قاعدة 2055 تلك قصيرة بشكل غير عادي. ثلاثة عوامل بنيوية تتقارب. أولًا: تكنولوجيا المنظومات بدون طيار في المرحلة النادرة التي تتوفّر فيها معرفة هندسية ناضجة خارج النادي الصغير من الديمقراطيات الصناعية المتقدمة — نافذة تُغلَق تاريخيًا حالما يُؤسِّس المورِّدون المهيمنون أنظمة ترخيص وملكية فكرية. ثانيًا: الأدلة العملياتية من النزاعات الأخيرة أزالت الاعتراض السياسي على برامج المنظومات السيادية بدون طيار باعتبارها رفاهيات؛ هي الآن ضرورات بشكل واضح. ثالثًا: رأس المال الإقليمي المطلوب لتمويل مثل هذه البرامج، في هذا العقد، في توافق أكبر مع الأهداف الاستراتيجية الإقليمية من أيّ لحظة سابقة.',
        'لن تظل هذه العوامل الثلاثة متوافقة إلى الأبد. سيغلق المورِّدون المهيمنون النافذة الهندسية. ستُعيد ضغوط جيوسياسية جديدة توجيه رأس المال. سيُمتَصّ الإجماع السياسي على الضرورة جزئيًا في إطار "التوريد كالمعتاد" حين تنحسر الأزمات الفورية. النافذة لدولة سيادية إقليمية لبناء صناعة كاملة الطيف للمركبات بدون طيار — لامتلاك المنصّات والإنتاج والهندسة والعقيدة — ليست لانهائية. هي تقريبًا العقد القادم.',
        'الدولة التي تستخدم ذلك العقد جيدًا ستمتلك بحلول 2035 قدرة سيادية في المجالات الجوية والبرية والبحرية للمركبات بدون طيار. وبحلول 2045 ستكون قد كرّرت تلك القدرة عبر جيلين كاملين من المنصّات وجيل كامل من العقيدة. وبحلول 2055 ستُحدِّد هيكلية الأمن الإقليمي — لأن المورِّدين والمعايير والعقيدة وعلاقات التصدير ستنشأ جميعها من داخلها.',
        'الدولة التي لا تستخدم ذلك العقد جيدًا ستكون بحلول 2055 في موقف التوريد نفسه الذي تحتله اليوم: معتمدة على مورِّدين أجانب، ومعتمدة على صلاحيات إطلاق أجنبية، ومعتمدة على الشروط السياسية التي يمكن في إطارها استخدام المنصّات. ما إذا كان ذلك الموقف سيظل قابلًا للاستمرار في 2055 سؤال يستحق تفكيرًا جدّيًا.',
        'هُندست ستيرلنغ أوتونوماس سيستمز للمسار الأول. وُجدت المنصّة للشركاء الذين يعتزمون اتخاذه. المحادثة، حين تبدأ، ستكون من بين أكثر المحادثات تأثيرًا في العقد القادم.',
      ],
    },
  },
];

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
