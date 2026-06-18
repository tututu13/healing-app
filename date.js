window.bookData = {
  1: {
    title: "第 1 章：了解自己，不要迷失自我",
    steps: [
      { title: "溯源：被忽视的真实自我", desc: "在成长过程中，如果我分别采访你的父母，他们会如何描述你？而你觉得他们完全不了解你哪一点真实特质？", inputs: [{ key: "parentsView", type: "text", placeholder: "他们一直觉得我是一个..." }, { key: "trueSelf", type: "text", placeholder: "但他们完全不知道我是如此..." }] },
      { title: "直面内化的批评者", desc: m => `当你试图展现<span class="dynamic-text">“${m.trueSelf}”</span>的真实自我时，脑海中那个内化了父母态度的“自我挫败”的声音是怎么批评你的？请写下一句最让你泄气的话。`, inputs: [{ key: "innerCritic", type: "text", placeholder: "它会对我说：“多浪费时间啊，你肯定会...”" }] },
      { title: "无礼的反击", desc: m => `不要让这个声音控制你的生活。针对你脑海里那句<span class="dynamic-text">“${m.innerCritic}”</span>，请对那个虚假的权威提出无礼的质疑：`, inputs: [{ key: "rebuttal", type: "text", placeholder: "喂！谁给你的权利..." }] },
      { title: "时间不允许我们停滞不前", desc: "面对了解自己、成为真实的自己这件事，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：探索自我纯属逃避现实，继续压抑自己过日子就行。", isGrowth: false }, { text: "🌟 【成长之路】：我要创造怎样的生活取决于我自己！我积极地选择通过自我发现来使生活更有意义。", isGrowth: true }] }
    ]
  },
  2: {
    title: "第 2 章：唤醒你的自信",
    steps: [
      { title: "溯源：被打击的自发性", desc: "自信不由他人的反应决定。童年时期，你主动分享某件事，对方的反应却让你觉得自己做错了或很奇怪。当时你心里是什么感觉？", inputs: [{ key: "hurtFeeling", type: "textarea", placeholder: "当时我感到..." }] },
      { title: "自我怀疑的余音", desc: m => `那种<span class="dynamic-text">“${m.hurtFeeling}”</span>的感觉，在成年后变成了自我怀疑。现在，当你尝试新事物时，你会如何打击自己？`, inputs: [{ key: "selfDoubt", type: "text", placeholder: "我会对自己说..." }] },
      { title: "宣告主权", desc: m => `当你脑海里出现<span class="dynamic-text">“${m.selfDoubt}”</span>的声音时，告诉它，自信不由他人的反应决定！请大胆补全这句话：`, inputs: [{ key: "declare", type: "text", placeholder: "什么？谁说我不能..." }] },
      { title: "时间不允许我们停滞不前", desc: "面对建立自信，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：为什么要冒着失败的风险尝试新事物？我还是不要太自信了。", isGrowth: false }, { text: "🌟 【成长之路】：我相信自己有能力改变和习得新技能。我要建立自信，不再畏惧他人的反应！", isGrowth: true }] }
    ]
  },
  3: {
    title: "第 3 章：建立归属感",
    steps: [
      { title: "伪装与排斥", desc: "如果周围的人对你真实的内在不感兴趣，你是不会有归属感的。为了融入群体，你会在哪些人面前伪装自己？", inputs: [{ key: "fakeMask", type: "text", placeholder: "当面对___时，我会隐藏真实的自己..." }] },
      { title: "寻找恐惧的根源", desc: m => `如果你在这些人面前摘下伪装，展现真实的自我，你最害怕他们做出什么反应？`, inputs: [{ key: "fearRejection", type: "text", placeholder: "我怕他们会觉得我..." }] },
      { title: "赋予自己选择的权利", desc: m => `你有权期待人际关系能使生活丰富多彩。针对<span class="dynamic-text">“怕他们觉得我${m.fearRejection}”</span>的恐惧，请写下一句赋能的话：`, inputs: [{ key: "belongingBelief", type: "text", placeholder: "我不再强迫自己融入不适合的圈子，我有权..." }] },
      { title: "时间不允许我们停滞不前", desc: "关于寻找属于你的归属之地，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：我先观望别人怎么看我，再尝试伪装融入，即使那让我不舒服。", isGrowth: false }, { text: "🌟 【成长之路】：归属感的基础是接受真实的自己。我有权去寻找真正接纳我的群体！", isGrowth: true }] }
    ]
  },
  4: {
    title: "第 4 章：保护自己，划清界限",
    steps: [
      { title: "被压抑的自我保护", desc: "情感不成熟者认为他们的需求远比你想要什么的权利更重要。当别人提出不合理的要求时，你不去划清界限的顾虑是什么？", inputs: [{ key: "boundaryFear", type: "textarea", placeholder: "如果我说“不”，我会觉得..." }] },
      { title: "无礼的质问", desc: m => `这种<span class="dynamic-text">“${m.boundaryFear}”</span>的内疚感是被植入的。现在，在心里对那个强迫你的人提出无礼的反击：`, inputs: [{ key: "pushback1", type: "text", placeholder: "为什么你能... 而我却不能？" }, { key: "pushback2", type: "text", placeholder: "谁给你的权利..." }] },
      { title: "时间不允许我们停滞不前", desc: "面对你设界限的权利，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：我继续忍耐，免得惹出麻烦显得我很小气。", isGrowth: false }, { text: "🌟 【成长之路】：我有权根据自身需要限制他人对我的行为！界限能使我们的关系保持真实。", isGrowth: true }] }
    ]
  },
  5: {
    title: "第 5 章：立即回应",
    steps: [
      { title: "恐吓与僵局", desc: "情感不成熟者常带有急躁的评判态度。回想一次你被他们的反应吓得僵在原地、没能为自己发声的经历。他们是怎么做到的？", inputs: [{ key: "freezeTrigger", type: "textarea", placeholder: "他们当时的反应是..." }] },
      { title: "夺回主导权", desc: m => `沉默不是软弱，而是被恐吓的标志。不要让<span class="dynamic-text">“${m.freezeTrigger}”</span>的反应接管你的大脑。写下一句你想对他们说的话：`, inputs: [{ key: "takeBack", type: "text", placeholder: "从现在起，我不允许你再..." }] },
      { title: "时间不允许我们停滞不前", desc: "当再次面临恐吓和压迫，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：他们总能吓到我，我不是他们的对手，躲远点就好。", isGrowth: false }, { text: "🌟 【成长之路】：我会大声说出想法！这代表我不会再给他们恐吓和迷惑我的权利，我会坚守立场。", isGrowth: true }] }
    ]
  },
  6: {
    title: "第 6 章：停止自我责备",
    steps: [
      { title: "承担不属于你的错", desc: "情感不成熟者从不反思，总是防御性地责怪他人。发生冲突时，什么样的指责或表情最容易让你产生内疚，让你觉得是自己错了？", inputs: [{ key: "blameTrigger", type: "text", placeholder: "当他们... 时，我会觉得都是我的错。" }] },
      { title: "拒绝背锅", desc: m => `哪怕只是为了不再体会<span class="dynamic-text">“${m.blameTrigger}”</span>的糟糕感觉，你也会妥协。现在，理直气壮地拒绝这种内疚：`, inputs: [{ key: "rejectGuilt", type: "text", placeholder: "如果真的不是我的错，我绝不会..." }] },
      { title: "时间不允许我们停滞不前", desc: "关于自我责备的习惯，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：按他们说的办并说对不起，这样日子容易些。", isGrowth: false }, { text: "🌟 【成长之路】：我承认自己有时会犯错，但如果真的不是我的错，我拒绝承担责任，我拒绝因为礼貌表达观点而内疚！", isGrowth: true }] }
    ]
  },
  7: {
    title: "第 7 章：倾听自己的声音，给自己力量",
    steps: [
      { title: "被剥夺的自我照顾权", desc: "情感不成熟者让你觉得优先考虑自己就是自私。童年时期，别人是怎么说你懒惰或浪费时间的？这如何影响了你休息的能力？", inputs: [{ key: "guiltRest", type: "textarea", placeholder: "每当我花时间照顾自己，我就会觉得..." }] },
      { title: "夺回休息的权利", desc: m => `自我照顾不会让任何人付出代价，除了想指挥你生活的人。针对你内心<span class="dynamic-text">“${m.guiltRest}”</span>的内疚感，请写下赋能的话：`, inputs: [{ key: "claimRest", type: "text", placeholder: "我总是为他人着想，我是时候..." }] },
      { title: "时间不允许我们停滞不前", desc: "关于倾听自己的需求，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：我压抑休息的需求，免得别人觉得我自私。", isGrowth: false }, { text: "🌟 【成长之路】：我有权倾听自己的感受，好好照顾自己！我的直觉会指引我。", isGrowth: true }] }
    ]
  },
  8: {
    title: "第 8 章：提升心理韧性",
    steps: [
      { title: "不知所措的内在小孩", desc: "情感不成熟者往往无法为孩子示范如何应对压力。回想最近令你害怕或压抑的困境，你内心那个不知所措的孩子在害怕什么？", inputs: [{ key: "innerFear", type: "textarea", placeholder: "我真正害怕发生的是..." }] },
      { title: "WABCO 五步法急救", desc: m => `面对<span class="dynamic-text">“${m.innerFear}”</span>，请抑制自我批评（Curb），并乐观地想象（Optimistically）解决问题后的感觉：`, inputs: [{ key: "curbCriticism", type: "text", placeholder: "我不会因为感到害怕而羞愧，因为..." }, { key: "optimisticView", type: "text", placeholder: "当这一切过去后，我会感到..." }] },
      { title: "时间不允许我们停滞不前", desc: "关于面对压力和提升韧性，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：遇到麻烦时我会拼命掩饰恐惧，独自硬抗，假装一切尽在掌握。", isGrowth: false }, { text: "🌟 【成长之路】：我接纳自己的恐惧，并允许自己向合适的人寻求情感支持和实用建议！", isGrowth: true }] }
    ]
  },
  9: {
    title: "第 9 章：对你的错误宽容以待",
    steps: [
      { title: "严厉的自我批评", desc: "缺乏支持的内在小孩犯错后会陷入恐惧，并攻击你的自我价值。当你犯错时，你内心最喜欢指责自己的部分会对你说什么？", inputs: [{ key: "mistakeCritic", type: "textarea", placeholder: "它会对我说：你怎么连这个都做不好..." }] },
      { title: "宽容的重塑", desc: m => `严厉的批评会使解决问题变得更难。请反驳<span class="dynamic-text">“${m.mistakeCritic}”</span>这个声音，用幽默和宽容的态度接纳自己：`, inputs: [{ key: "forgiveSelf", type: "text", placeholder: "从今往后，面对我犯的错误，我会尝试..." }] },
      { title: "时间不允许我们停滞不前", desc: "关于犯错，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：如果再搞砸我会很痛苦，并狠狠惩罚自己，以防下次再犯。", isGrowth: false }, { text: "🌟 【成长之路】：世上没有完美的人。如果我犯了错，我会改正并分析它，但我知道自己不是机器。", isGrowth: true }] }
    ]
  },
  10: {
    title: "第 10 章：寻找那些善待你的人",
    steps: [
      { title: "熟悉的消耗感", desc: "童年缺少情感支持可能让你习惯于忍受专横。在你的过往中，你是否曾为了维持联系，而忍受过自私或“有毒”的关系？", inputs: [{ key: "toxicTolerance", type: "textarea", placeholder: "我曾为他人的自私行为找借口，因为..." }] },
      { title: "设定关系底线", desc: m => `这种<span class="dynamic-text">“${m.toxicTolerance}”</span>的习惯源于早期的家庭生活。现在，大胆说出你想要什么样的关系：`, inputs: [{ key: "healthyRelation", type: "text", placeholder: "我只愿意让那些对待我____的人进入我的生活。" }] },
      { title: "时间不允许我们停滞不前", desc: "关于人际关系，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：拥有一段关系总比独自一人好，我能忍受别人对我的轻视或专横。", isGrowth: false }, { text: "🌟 【成长之路】：我相信自己的直觉！我了解自己，我只愿意让那些待我好、体贴我、尊重我界限的人进入我的生活。", isGrowth: true }] }
    ]
  },
  11: {
    title: "第 11 章：审视治愈幻想",
    steps: [
      { title: "治愈幻想的重量", desc: "你可能抱有一种“治愈幻想”，希望只要你足够努力，你爱的人总有一天会改变。你曾为了等待谁的改变而耗费了大量精力？", inputs: [{ key: "healingFantasy", type: "textarea", placeholder: "我一直希望只要我足够好，他们就会..." }] },
      { title: "夺回能量", desc: m => `作为成年人，你需要根据自己的能量水平来决定相处距离，而不是等待<span class="dynamic-text">“${m.healingFantasy}”</span>。请写下你要放下的决心：`, inputs: [{ key: "dropFantasy", type: "text", placeholder: "我不会无限期地等待某人改变。我要去追求..." }] },
      { title: "时间不允许我们停滞不前", desc: "面对消耗你的人际关系，你想走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：我继续等待，希望有一天我爱的人能发自内心地理解我。", isGrowth: false }, { text: "🌟 【成长之路】：在见他们之前，我会设定好最佳相处时间。如果这让我觉得被束缚，我有权随时离开，保护我的能量！", isGrowth: true }] }
    ]
  },
  12: {
    title: "第 12 章：感受自己的活力与价值",
    steps: [
      { title: "评判的阴影", desc: "为了取悦情感不成熟者，你可能不断检视自己的行为，这削弱了你天生的热情和活力。哪些情况最容易让你狠狠批评自己、压抑天性？", inputs: [{ key: "suppressJoy", type: "textarea", placeholder: "当我试图表达自我或感到快乐时，我会担心..." }] },
      { title: "活力的宣言", desc: m => `永远不值得为取悦他人而疏远真实自我！面对<span class="dynamic-text">“${m.suppressJoy}”</span>的恐惧，向那些随意评判你的人发出最后反击：`, inputs: [{ key: "vitalityClaim1", type: "text", placeholder: "究竟是什么让你觉得你有权让我陷入..." }, { key: "vitalityClaim2", type: "text", placeholder: "从今以后，我将..." }] },
      { title: "时间不允许我们停滞不前", desc: "面对你的人生和真实的活力，你最终选择走哪条路？", isChoice: true, choices: [{ text: "🌑 【停滞之路】：别人评判我一定有他们的理由，压抑自己能防止我惹人讨厌。", isGrowth: false }, { text: "🌟 【成长之路】：我喜欢真实的自我！我的活力对我至关重要，无论别人怎么想，我都选择做充满活力的自己！", isGrowth: true }] }
    ]
  }
};
