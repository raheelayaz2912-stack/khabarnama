export type Category =
  | "Pakistan"
  | "Punjab"
  | "Lahore"
  | "World"
  | "Business"
  | "Technology"
  | "Sports";

export interface SourceLink {
  label: string;
  publisher: string;
}

export interface Article {
  slug: string;
  category: Category;
  tags: string[];
  englishTitle: string;
  urduTitle: string;
  englishSummary: string;
  urduSummary: string;
  englishBody: string[]; // paragraphs
  urduBody: string[]; // paragraphs
  featuredImage: string;
  imageAlt: string;
  imageCaption: string;
  imageCredit: string;
  author: string;
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  sources: SourceLink[];
  seoDescription: string;
}

export const articles: Article[] = [
  {
    slug: "new-electricity-tariff-announced",
    category: "Pakistan",
    tags: ["Pakistan", "Government", "Economy"],
    englishTitle: "Pakistan Announces Revised Electricity Tariff for Domestic Consumers",
    urduTitle: "پاکستان میں گھریلو صارفین کے لیے بجلی کے نئے ٹیرف کا اعلان",
    englishSummary:
      "The federal government has approved a revised electricity tariff structure aimed at easing the burden on lower-consumption households while adjusting rates for higher slabs.",
    urduSummary:
      "وفاقی حکومت نے بجلی کے نئے ٹیرف ڈھانچے کی منظوری دے دی ہے، جس کا مقصد کم بجلی استعمال کرنے والے گھرانوں پر بوجھ کم کرنا اور زیادہ استعمال والے صارفین کے لیے شرحوں میں تبدیلی کرنا ہے۔",
    englishBody: [
      "The federal government has approved a revised electricity tariff structure for domestic consumers, effective from the next billing cycle. The changes adjust per-unit rates across different consumption slabs, with officials saying the goal is to protect lower-income households while gradually reducing the sector's circular debt.",
      "Under the revised structure, consumers using up to 200 units a month will see little to no change in their per-unit rate, according to a statement from the Power Division. Households in higher consumption brackets will face a modest increase, which officials say reflects the actual cost of generation and transmission rather than a broad-based hike.",
      "The Power Division said the adjustment is part of a wider plan to stabilise the energy sector's finances, alongside efforts to reduce transmission losses and improve bill recovery. A spokesperson said further relief measures for low-consumption households are under consideration for the coming fiscal year.",
      "Consumer groups have given a mixed response. Some welcomed the protection for smaller households, while others said the government needs to address line losses and theft before asking consumers to absorb further cost increases. The revised tariff is expected to appear on bills beginning next month, and distribution companies have been asked to update their billing systems accordingly.",
      "Officials have not yet confirmed whether industrial and commercial tariffs will be revised separately. A further announcement on that front is expected once consultations with industry representatives conclude.",
    ],
    urduBody: [
      "وفاقی حکومت نے گھریلو صارفین کے لیے بجلی کے نئے ٹیرف ڈھانچے کی منظوری دے دی ہے، جو اگلے بلنگ سائیکل سے نافذ العمل ہوگا۔ اس تبدیلی کے تحت مختلف استعمال کی سطحوں پر فی یونٹ شرحوں میں ردوبدل کیا گیا ہے، اور حکام کا کہنا ہے کہ اس کا مقصد کم آمدنی والے گھرانوں کا تحفظ اور توانائی کے شعبے کے گردشی قرضے میں بتدریج کمی لانا ہے۔",
      "پاور ڈویژن کے مطابق، نئے ڈھانچے کے تحت ماہانہ دو سو یونٹ تک بجلی استعمال کرنے والے صارفین کی فی یونٹ شرح میں معمولی یا کوئی تبدیلی نہیں ہوگی۔ زیادہ یونٹ استعمال کرنے والے گھرانوں کو معمولی اضافے کا سامنا کرنا پڑے گا، جسے حکام پیداوار اور ترسیل کی اصل لاگت کا عکاس قرار دے رہے ہیں، نہ کہ ایک عمومی اضافہ۔",
      "پاور ڈویژن کا کہنا ہے کہ یہ ایڈجسٹمنٹ توانائی کے شعبے کی مالی حالت کو مستحکم کرنے کے وسیع تر منصوبے کا حصہ ہے، جس کے ساتھ ترسیلی نقصانات کم کرنے اور بلوں کی وصولی بہتر بنانے کی کوششیں بھی جاری ہیں۔ ایک ترجمان کے مطابق آئندہ مالی سال میں کم استعمال والے گھرانوں کے لیے مزید ریلیف اقدامات پر غور کیا جا رہا ہے۔",
      "صارف تنظیموں کا ردعمل ملا جلا رہا ہے۔ کچھ نے چھوٹے گھرانوں کے تحفظ کا خیرمقدم کیا، جبکہ دیگر کا کہنا ہے کہ صارفین پر مزید بوجھ ڈالنے سے پہلے حکومت کو لائن لاسز اور بجلی چوری جیسے مسائل حل کرنے چاہئیں۔ توقع ہے کہ نیا ٹیرف اگلے مہینے سے بلوں پر ظاہر ہونا شروع ہو جائے گا، اور تقسیم کار کمپنیوں کو اپنے بلنگ سسٹم اپ ڈیٹ کرنے کی ہدایت دی گئی ہے۔",
      "حکام نے تاحال اس بات کی تصدیق نہیں کی کہ صنعتی اور کمرشل ٹیرف میں الگ سے تبدیلی کی جائے گی یا نہیں۔ صنعتی نمائندوں کے ساتھ مشاورت مکمل ہونے کے بعد اس حوالے سے مزید اعلان متوقع ہے۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Electricity transmission towers and power lines against an evening sky in Pakistan",
    imageCaption: "Transmission infrastructure carries power to distribution networks across the country.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-28T08:15:00+05:00",
    updatedAt: "2026-08-28T11:40:00+05:00",
    sources: [
      { label: "Power Division statement", publisher: "Government of Pakistan" },
      { label: "Tariff notification", publisher: "NEPRA" },
    ],
    seoDescription:
      "Pakistan's federal government has approved a revised electricity tariff for domestic consumers. Read what changed, who is affected, and what happens next — in English and Urdu.",
  },
  {
    slug: "lahore-smog-advisory-issued",
    category: "Lahore",
    tags: ["Lahore", "Punjab", "Health", "Weather"],
    englishTitle: "Lahore Issues Smog Advisory as Air Quality Drops to Unhealthy Levels",
    urduTitle: "لاہور میں فضائی آلودگی خطرناک سطح پر، سموگ ایڈوائزری جاری",
    englishSummary:
      "Punjab's environment department has issued a smog advisory for Lahore after air quality index readings crossed into the unhealthy range across several parts of the city.",
    urduSummary:
      "پنجاب کے محکمہ ماحولیات نے لاہور کے مختلف علاقوں میں ایئر کوالٹی انڈیکس کے غیر صحت بخش سطح تک پہنچنے کے بعد سموگ ایڈوائزری جاری کر دی ہے۔",
    englishBody: [
      "The Punjab Environmental Protection Department has issued a smog advisory for Lahore after monitoring stations recorded air quality index (AQI) readings in the unhealthy range across several neighbourhoods. Officials are advising residents, particularly children, the elderly and people with respiratory conditions, to limit outdoor activity during peak pollution hours.",
      "The department attributed the spike to a combination of seasonal crop residue burning in surrounding districts, vehicular emissions and low wind speeds that trap pollutants closer to the ground. Similar advisories have been issued in past years around the same time.",
      "Schools have not been ordered to close, but authorities said they are monitoring the situation and could take further steps if AQI levels continue to rise. Residents are being advised to use masks outdoors, avoid unnecessary travel on high-pollution days and keep windows closed during the morning hours when smog is typically at its worst.",
      "The provincial government said enforcement teams have been deployed to monitor industrial emissions and open burning within city limits, with penalties for violations. A more detailed action plan is expected to be announced in the coming days.",
    ],
    urduBody: [
      "پنجاب انوائرنمنٹل پروٹیکشن ڈیپارٹمنٹ نے لاہور کے کئی علاقوں میں مانیٹرنگ اسٹیشنز پر ایئر کوالٹی انڈیکس کے غیر صحت بخش سطح پر ریکارڈ ہونے کے بعد سموگ ایڈوائزری جاری کر دی ہے۔ حکام نے شہریوں بالخصوص بچوں، بزرگوں اور سانس کی بیماریوں میں مبتلا افراد کو مشورہ دیا ہے کہ آلودگی کے عروج کے اوقات میں باہر کی سرگرمیاں محدود رکھیں۔",
      "محکمے کے مطابق اس اضافے کی وجہ آس پاس کے اضلاع میں فصلوں کی باقیات جلانا، گاڑیوں کا دھواں اور ہوا کی کم رفتار ہے، جس کی وجہ سے آلودگی زمین کے قریب جمع ہو جاتی ہے۔ اسی طرح کی ایڈوائزریاں گزشتہ برسوں میں بھی اسی موسم میں جاری کی جا چکی ہیں۔",
      "اسکولوں کو بند کرنے کا حکم نہیں دیا گیا، تاہم حکام کا کہنا ہے کہ صورتحال پر نظر رکھی جا رہی ہے اور اگر ایئر کوالٹی انڈیکس مزید بڑھا تو مزید اقدامات کیے جا سکتے ہیں۔ شہریوں کو مشورہ دیا گیا ہے کہ باہر ماسک استعمال کریں، غیر ضروری سفر سے گریز کریں اور صبح کے اوقات میں کھڑکیاں بند رکھیں جب سموگ عموماً سب سے زیادہ ہوتی ہے۔",
      "صوبائی حکومت کا کہنا ہے کہ شہر کی حدود میں صنعتی اخراج اور کھلے عام آگ جلانے پر نظر رکھنے کے لیے نفاذی ٹیمیں تعینات کر دی گئی ہیں، اور خلاف ورزی پر جرمانے عائد کیے جائیں گے۔ آئندہ چند دنوں میں مزید تفصیلی ایکشن پلان کا اعلان متوقع ہے۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1573472975842-4e63f0e9e0b3?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A hazy cityscape skyline partly obscured by smog",
    imageCaption: "Smog reduces visibility over the city during peak pollution hours.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-27T09:00:00+05:00",
    updatedAt: "2026-08-27T09:00:00+05:00",
    sources: [{ label: "Smog advisory notice", publisher: "Punjab Environmental Protection Department" }],
    seoDescription:
      "Punjab's environment department has issued a smog advisory for Lahore. Here's what the advisory covers and how residents can stay safe — in English and Urdu.",
  },
  {
    slug: "state-bank-holds-policy-rate",
    category: "Business",
    tags: ["Business", "Economy", "Pakistan"],
    englishTitle: "State Bank Keeps Policy Rate Unchanged, Cites Inflation Outlook",
    urduTitle: "اسٹیٹ بینک کا شرح سود میں کوئی تبدیلی نہ کرنے کا فیصلہ",
    englishSummary:
      "The central bank's monetary policy committee has kept the benchmark interest rate unchanged, saying near-term inflation risks remain balanced but warrant caution.",
    urduSummary:
      "مرکزی بینک کی مانیٹری پالیسی کمیٹی نے بینچ مارک شرح سود کو برقرار رکھنے کا فیصلہ کیا ہے اور کہا ہے کہ قریب مدتی مہنگائی کے خطرات متوازن ہیں مگر احتیاط کی ضرورت ہے۔",
    englishBody: [
      "The State Bank of Pakistan's Monetary Policy Committee has decided to keep the benchmark interest rate unchanged, citing a broadly balanced inflation outlook alongside external account pressures that warrant a cautious approach.",
      "In its statement, the committee noted that recent inflation readings have been in line with expectations, while risks from global commodity prices and domestic fiscal pressures remain in view. The central bank said it would continue to monitor incoming data before making further adjustments.",
      "Business groups had submitted mixed recommendations ahead of the decision, with exporters pushing for a rate cut to ease borrowing costs and some economists cautioning against loosening policy too early. Analysts said the decision reflects a wait-and-watch approach ahead of the next review.",
      "The committee is scheduled to meet again in the coming weeks, with the next inflation reading expected to inform its decision. Markets showed a muted reaction following the announcement.",
    ],
    urduBody: [
      "اسٹیٹ بینک آف پاکستان کی مانیٹری پالیسی کمیٹی نے بینچ مارک شرح سود کو برقرار رکھنے کا فیصلہ کیا ہے، اور اس کی وجہ مہنگائی کے مجموعی طور پر متوازن آؤٹ لک کے ساتھ بیرونی کھاتوں کے دباؤ کو قرار دیا ہے، جن کے پیش نظر احتیاط ضروری ہے۔",
      "کمیٹی نے اپنے بیان میں کہا کہ حالیہ مہنگائی کے اعداد و شمار توقعات کے مطابق رہے ہیں، جبکہ عالمی اجناس کی قیمتوں اور ملکی مالیاتی دباؤ سے جڑے خطرات اب بھی موجود ہیں۔ مرکزی بینک نے کہا کہ وہ مزید ایڈجسٹمنٹ سے پہلے آنے والے اعداد و شمار پر نظر رکھے گا۔",
      "فیصلے سے قبل کاروباری تنظیموں کی جانب سے ملی جلی سفارشات موصول ہوئیں، جہاں برآمد کنندگان قرض کی لاگت کم کرنے کے لیے شرح میں کمی چاہتے تھے، جبکہ کچھ ماہرینِ معیشت نے پالیسی جلد نرم کرنے کے خلاف خبردار کیا۔ تجزیہ کاروں کا کہنا ہے کہ یہ فیصلہ اگلے جائزے تک انتظار کرنے کی حکمت عملی کو ظاہر کرتا ہے۔",
      "کمیٹی کا اگلا اجلاس آئندہ ہفتوں میں متوقع ہے، اور مہنگائی کے اگلے اعداد و شمار اس کے فیصلے پر اثرانداز ہوں گے۔ اعلان کے بعد مارکیٹ کا ردعمل محدود رہا۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Exterior view of a central bank building facade",
    imageCaption: "The central bank's policy committee meets periodically to review the benchmark rate.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-26T14:20:00+05:00",
    updatedAt: "2026-08-26T14:20:00+05:00",
    sources: [{ label: "Monetary policy statement", publisher: "State Bank of Pakistan" }],
    seoDescription:
      "The State Bank of Pakistan has kept its policy rate unchanged. Read the reasoning, market reaction, and what comes next — in English and Urdu.",
  },
  {
    slug: "pakistani-startups-adopt-ai-customer-service",
    category: "Technology",
    tags: ["Technology", "AI", "Business"],
    englishTitle: "Pakistani Startups Turn to AI Tools to Handle Customer Support",
    urduTitle: "پاکستانی اسٹارٹ اپس کا کسٹمر سپورٹ کے لیے مصنوعی ذہانت کے استعمال کا رجحان",
    englishSummary:
      "A growing number of small and mid-sized Pakistani businesses are adopting AI-powered chat tools to manage customer queries, citing lower costs and faster response times.",
    urduSummary:
      "پاکستان کے چھوٹے اور درمیانے درجے کے کاروبار صارفین کے سوالات نمٹانے کے لیے مصنوعی ذہانت پر مبنی چیٹ ٹولز اپنا رہے ہیں، جس کی وجہ کم لاگت اور تیز جواب دہی بتائی جا رہی ہے۔",
    englishBody: [
      "A growing number of small and mid-sized businesses across Pakistan are adopting AI-powered chat tools to handle routine customer queries, according to industry representatives, as companies look to cut support costs and respond to customers faster outside business hours.",
      "E-commerce sellers and service businesses say the tools are typically used for order tracking, frequently asked questions and initial complaint handling, with human staff stepping in for more complex issues. Several local software vendors have launched Urdu-language chat assistants aimed specifically at this market.",
      "Industry representatives caution that the technology works best when paired with clear escalation paths to human agents, and that businesses should be transparent with customers about when they are speaking to an automated system.",
      "Analysts say the trend mirrors a broader regional shift toward AI adoption among small businesses, driven partly by the falling cost of accessing capable language models. They caution that data privacy and the quality of local-language support remain areas businesses should evaluate carefully before adopting these tools.",
    ],
    urduBody: [
      "صنعتی نمائندوں کے مطابق پاکستان بھر میں چھوٹے اور درمیانے درجے کے کاروبار روزمرہ کے صارف سوالات نمٹانے کے لیے مصنوعی ذہانت پر مبنی چیٹ ٹولز اپنا رہے ہیں، کیونکہ کمپنیاں سپورٹ کی لاگت کم کرنا اور کاروباری اوقات کے بعد بھی صارفین کو تیزی سے جواب دینا چاہتی ہیں۔",
      "ای کامرس فروخت کنندگان اور سروس فراہم کرنے والے کاروباروں کا کہنا ہے کہ یہ ٹولز عام طور پر آرڈر ٹریکنگ، عمومی سوالات اور ابتدائی شکایات نمٹانے کے لیے استعمال ہوتے ہیں، جبکہ پیچیدہ معاملات میں انسانی عملہ مداخلت کرتا ہے۔ کئی مقامی سافٹ ویئر کمپنیوں نے خاص طور پر اس مارکیٹ کے لیے اردو زبان میں چیٹ اسسٹنٹس متعارف کروائے ہیں۔",
      "صنعتی نمائندوں کا کہنا ہے کہ یہ ٹیکنالوجی اس وقت بہترین کام کرتی ہے جب اسے انسانی نمائندوں تک واضح رسائی کے راستوں کے ساتھ جوڑا جائے، اور کاروباروں کو صارفین کو یہ بتانا چاہیے کہ وہ کب خودکار نظام سے مخاطب ہیں۔",
      "تجزیہ کاروں کا کہنا ہے کہ یہ رجحان علاقائی سطح پر چھوٹے کاروباروں میں مصنوعی ذہانت اپنانے کے وسیع تر رجحان کی عکاسی کرتا ہے، جس کی ایک وجہ طاقتور لینگویج ماڈلز تک رسائی کی گھٹتی ہوئی لاگت ہے۔ ان کا کہنا ہے کہ ڈیٹا پرائیویسی اور مقامی زبان میں سپورٹ کا معیار وہ پہلو ہیں جن کا کاروباروں کو یہ ٹولز اپنانے سے پہلے احتیاط سے جائزہ لینا چاہیے۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A person working on a laptop displaying a chat interface",
    imageCaption: "Small businesses are increasingly using automated chat tools to support customers.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-25T10:05:00+05:00",
    updatedAt: "2026-08-25T10:05:00+05:00",
    sources: [{ label: "Industry survey summary", publisher: "Local software industry association" }],
    seoDescription:
      "More Pakistani small businesses are adopting AI chat tools for customer support. Read what's driving the shift — in English and Urdu.",
  },
  {
    slug: "falcons-edge-sharks-in-t20-thriller",
    category: "Sports",
    tags: ["Cricket", "Sports"],
    englishTitle: "Lahore Falcons Edge Karachi Sharks in Last-Over T20 Thriller",
    urduTitle: "لاہور فالکنز کی کراچی شارکس کے خلاف آخری اوور میں سنسنی خیز جیت",
    englishSummary:
      "Lahore Falcons held their nerve in the final over to beat Karachi Sharks by four wickets in a closely fought domestic T20 fixture.",
    urduSummary:
      "لاہور فالکنز نے آخری اوور میں اعصاب پر قابو رکھتے ہوئے کراچی شارکس کو چار وکٹوں سے شکست دے دی، جو ایک سنسنی خیز ملکی ٹی ٹوئنٹی مقابلہ تھا۔",
    englishBody: [
      "Lahore Falcons held their nerve in a tense final over to beat Karachi Sharks by four wickets in a domestic T20 fixture, chasing down a target of 168 with two balls to spare.",
      "Sharks had set a competitive total after their middle order rebuilt the innings following an early collapse, with a fifty from the number four batter anchoring the innings. In reply, Falcons lost regular wickets through the middle overs before a late partnership steadied the chase.",
      "The chase came down to the final over, with Falcons needing 11 runs. A six over long-on and a scrambled two off the last ball sealed the win, sparking celebrations among the home crowd.",
      "The result keeps Falcons in contention for a place in the knockout stage, while Sharks will need to win their remaining fixtures to stay in the race. Both sides return to action later this week.",
    ],
    urduBody: [
      "لاہور فالکنز نے ایک سنسنی خیز آخری اوور میں اعصاب پر قابو رکھتے ہوئے کراچی شارکس کو چار وکٹوں سے شکست دے دی، اور ایک سو اڑسٹھ رنز کا ہدف دو گیندیں باقی رہتے ہوئے حاصل کر لیا۔",
      "شارکس نے ابتدائی وکٹوں کے نقصان کے بعد مڈل آرڈر کی بدولت ایک مقابلہ جاتی مجموعہ اکٹھا کیا، جس میں نمبر چار بلے باز کی نصف سنچری نمایاں رہی۔ جواب میں فالکنز نے درمیانی اوورز میں تسلسل سے وکٹیں گنوائیں، تاہم ایک اہم شراکت داری نے اننگز کو سنبھال لیا۔",
      "مقابلہ آخری اوور تک پہنچا جہاں فالکنز کو گیارہ رنز درکار تھے۔ لانگ آن پر چھکے اور آخری گیند پر بھاگ کر لیے گئے دو رنز نے جیت پر مہر ثبت کر دی، جس پر ہوم گراؤنڈ میں موجود شائقین نے جشن منایا۔",
      "اس نتیجے سے فالکنز ناک آؤٹ مرحلے تک رسائی کی دوڑ میں شامل رہے، جبکہ شارکس کو دوڑ میں رہنے کے لیے اپنے باقی میچز جیتنا ہوں گے۔ دونوں ٹیمیں اسی ہفتے دوبارہ میدان میں اتریں گی۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A cricket batsman playing a shot under floodlights",
    imageCaption: "The chase went down to the final over under the lights.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-27T22:10:00+05:00",
    updatedAt: "2026-08-27T22:10:00+05:00",
    sources: [{ label: "Match scorecard", publisher: "League match officials" }],
    seoDescription:
      "Lahore Falcons beat Karachi Sharks by four wickets in a last-over T20 thriller. Read the match recap — in English and Urdu.",
  },
  {
    slug: "global-chip-supply-pressures-ease",
    category: "World",
    tags: ["World", "Technology", "Business"],
    englishTitle: "Global Semiconductor Supply Pressures Show Signs of Easing",
    urduTitle: "عالمی سطح پر سیمی کنڈکٹر کی سپلائی میں دباؤ کم ہونے کے آثار",
    englishSummary:
      "Industry data suggests semiconductor lead times are shortening after two years of tight supply, offering relief to electronics and auto manufacturers worldwide.",
    urduSummary:
      "صنعتی اعداد و شمار کے مطابق دو سال کی تنگ سپلائی کے بعد سیمی کنڈکٹر کی ترسیل کے اوقات میں کمی آ رہی ہے، جس سے دنیا بھر میں الیکٹرانکس اور آٹو ساز اداروں کو ریلیف ملنے کی توقع ہے۔",
    englishBody: [
      "Global semiconductor supply pressures appear to be easing, according to industry tracking data, with average lead times for key chip categories shortening for a third consecutive quarter after two years of tight supply.",
      "Analysts attribute the improvement to expanded manufacturing capacity coming online in several countries, alongside a moderation in demand from some electronics segments. Automakers, who were among the hardest hit by earlier shortages, say supply has become more predictable in recent months.",
      "The easing comes with caveats. Specialised chips used in advanced computing and AI hardware remain in tight supply, and analysts caution that geopolitical tensions or a sudden demand spike could reverse the trend.",
      "Manufacturers say they are using the improved supply picture to rebuild inventory buffers depleted during the shortage, rather than assuming the current conditions will hold indefinitely.",
    ],
    urduBody: [
      "صنعتی ٹریکنگ ڈیٹا کے مطابق عالمی سطح پر سیمی کنڈکٹر کی سپلائی میں دباؤ کم ہوتا نظر آ رہا ہے، اور دو سال کی تنگ سپلائی کے بعد اہم چپ اقسام کی اوسط ترسیل کے اوقات مسلسل تیسری سہ ماہی میں مختصر ہوئے ہیں۔",
      "تجزیہ کاروں کے مطابق اس بہتری کی وجہ کئی ممالک میں پیداواری صلاحیت کا بڑھنا اور کچھ الیکٹرانکس شعبوں میں طلب میں اعتدال ہے۔ آٹو ساز ادارے، جو پہلے قلت سے سب سے زیادہ متاثر ہوئے تھے، کہتے ہیں کہ حالیہ مہینوں میں سپلائی زیادہ قابلِ پیش گوئی ہو گئی ہے۔",
      "اس بہتری کے ساتھ کچھ تحفظات بھی ہیں۔ جدید کمپیوٹنگ اور مصنوعی ذہانت کے ہارڈویئر میں استعمال ہونے والی خصوصی چپس اب بھی تنگ سپلائی کا شکار ہیں، اور تجزیہ کار خبردار کرتے ہیں کہ جغرافیائی و سیاسی کشیدگی یا طلب میں اچانک اضافہ اس رجحان کو پلٹ سکتا ہے۔",
      "مینوفیکچررز کا کہنا ہے کہ وہ بہتر سپلائی کی صورتحال کو قلت کے دوران کم ہونے والے انوینٹری بفرز دوبارہ بنانے کے لیے استعمال کر رہے ہیں، نہ کہ یہ فرض کرتے ہوئے کہ موجودہ حالات ہمیشہ برقرار رہیں گے۔",
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Close-up of a semiconductor chip on a circuit board",
    imageCaption: "Lead times for key chip categories have shortened for a third straight quarter.",
    imageCredit: "Photo: Unsplash",
    author: "News Desk",
    publishedAt: "2026-08-24T16:45:00+05:00",
    updatedAt: "2026-08-24T16:45:00+05:00",
    sources: [{ label: "Industry lead-time tracker", publisher: "Semiconductor industry data provider" }],
    seoDescription:
      "Global semiconductor lead times are shortening after two years of tight supply. Read what's driving the change — in English and Urdu.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, limit);
}

export function getAllSortedByDate(): Article[] {
  return [...articles].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
