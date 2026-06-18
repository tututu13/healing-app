window.bookData = {
  // ==================== 第 1 章 ====================
  1: {
    title: "第 1 章：了解自己，不要迷失自我",
    steps: [
      {
        title: "溯源：被忽视的真实自我",
        desc: "在成长过程中，如果我分别采访你的父母，他们会如何描述你？而你觉得他们完全不了解你哪一点真实特质？",
        inputs: [
          { key: "parentsView", type: "text", placeholder: "他们一直觉得我是一个..." },
          { key: "trueSelf", type: "text", placeholder: "但他们完全不知道我是如此..." }
        ]
      },
      {
        title: "直面内化的批评者",
        desc: m => `当你试图展现<span class="dynamic-text">“${m.trueSelf}”</span>的真实自我时，脑海中那个内化了父母态度的“自我挫败”的声音是怎么批评你的？请写下一句最让你泄气的话。`,
        inputs: [{ key: "innerCritic", type: "text", placeholder: "它会对我说：“多浪费时间啊，你肯定会...”" }]
      },
      {
        title: "无礼的反击",
        desc: m => `不要让这个声音控制你的生活。针对你脑海里那句<span class="dynamic-text">“${m.innerCritic}”</span>，请对那个虚假的权威提出无礼的质疑：`,
        inputs: [
          { key: "rebuttal", type: "text", placeholder: "喂！谁给你的权利..." }
        ]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "面对了解自己、成为真实的自己这件事，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：探索自我纯属逃避现实，继续压抑自己过日子就行。", isGrowth: false },
          { text: "🌟 【成长之路】：我要创造怎样的生活取决于我自己！我积极地选择通过自我发现来使生活更有意义。", isGrowth: true }
        ]
      }
    ]
  },

  // ==================== 第 2 章 ====================
  2: {
    title: "第 2 章：唤醒你的自信",
    steps: [
      {
        title: "溯源：被打击的自发性",
        desc: "自信不由他人的反应决定。童年时期，你有没有过这样的经历：你主动分享某件事，对方的反应却让你觉得自己做错了或很奇怪？当时你心里是什么感觉？",
        inputs: [{ key: "hurtFeeling", type: "textarea", placeholder: "当时我感到..." }]
      },
      {
        title: "自我怀疑的余音",
        desc: m => `那种<span class="dynamic-text">“${m.hurtFeeling}”</span>的感觉，在成年后变成了自我怀疑。现在，当你尝试新事物时，你会如何打击自己？`,
        inputs: [{ key: "selfDoubt", type: "text", placeholder: "我会对自己说..." }]
      },
      {
        title: "宣告主权",
        desc: m => `当你脑海里出现<span class="dynamic-text">“${m.selfDoubt}”</span>的声音时，告诉它，自信不由他人的反应决定！请大胆补全这句话：`,
        inputs: [{ key: "declare", type: "text", placeholder: "什么？谁说我不能..." }]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "面对建立自信，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：为什么要冒着失败的风险尝试新事物？我还是不要太自信了。", isGrowth: false },
          { text: "🌟 【成长之路】：我相信自己有能力改变和习得新技能。我要建立自信，不再畏惧他人的反应！", isGrowth: true }
        ]
      }
    ]
  },

  // ==================== 第 3 章 ====================
  3: {
    title: "第 3 章：建立归属感",
    steps: [
      {
        title: "伪装与排斥",
        desc: "如果周围的人对你真实的内在不感兴趣，你是不会有归属感的。为了融入群体，你会在哪些人面前伪装自己？",
        inputs: [{ key: "fakeMask", type: "text", placeholder: "当面对___时，我会隐藏真实的自己..." }]
      },
      {
        title: "寻找恐惧的根源",
        desc: m => `如果你在这些人面前摘下伪装，展现真实的自我，你最害怕他们做出什么反应？`,
        inputs: [{ key: "fearRejection", type: "text", placeholder: "我怕他们会觉得我..." }]
      },
      {
        title: "赋予自己选择的权利",
        desc: m => `记住，你有权期待人际关系能使生活丰富多彩，而不是让你失望。针对<span class="dynamic-text">“怕他们觉得我${m.fearRejection}”</span>的恐惧，请写下一句赋能自己的话：`,
        inputs: [{ key: "belongingBelief", type: "text", placeholder: "我不再强迫自己融入不适合的圈子，我有权..." }]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "关于寻找属于你的归属之地，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：我先观望别人怎么看我，再尝试伪装融入，即使那让我不舒服。", isGrowth: false },
          { text: "🌟 【成长之路】：归属感的基础是接受真实的自己。如果对方不欢迎真实的我也没关系，我有权去寻找真正接纳我的群体！", isGrowth: true }
        ]
      }
    ]
  },

  // ==================== 第 4 章 ====================
  4: {
    title: "第 4 章：保护自己，划清界限",
    steps: [
      {
        title: "被压抑的自我保护",
        desc: "情感不成熟者认为他们的需求远比你想要什么的权利更重要。当别人提出不合理的要求时，你不去划清界限的顾虑是什么？",
        inputs: [{ key: "boundaryFear", type: "textarea", placeholder: "如果我说“不”，我会觉得..." }]
      },
      {
        title: "无礼的质问",
        desc: m => `这种<span class="dynamic-text">“${m.boundaryFear}”</span>的内疚感是被植入的。现在，在心里对那个强迫你的人提出无礼的反击：`,
        inputs: [
          { key: "pushback1", type: "text", placeholder: "为什么你能... 而我却不能？" },
          { key: "pushback2", type: "text", placeholder: "谁给你的权利..." }
        ]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "面对你设界限的权利，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：我继续忍耐，免得惹出麻烦显得我很小气。", isGrowth: false },
          { text: "🌟 【成长之路】：我有权根据自身需要限制他人对我的行为！界限能使我们的关系保持真实。", isGrowth: true }
        ]
      }
    ]
  },

  // ==================== 第 5 章 ====================
  5: {
    title: "第 5 章：立即回应",
    steps: [
      {
        title: "恐吓与僵局",
        desc: "情感不成熟者常带有急躁的评判态度。回想一次你被他们的反应吓得僵在原地、没能为自己发声的经历。他们是怎么做到的？",
        inputs: [{ key: "freezeTrigger", type: "textarea", placeholder: "他们当时的反应是..." }]
      },
      {
        title: "夺回主导权",
        desc: m => `沉默不是软弱，而是被恐吓的标志。不要让<span class="dynamic-text">“${m.freezeTrigger}”</span>的反应接管你的大脑。写下一句你想对他们说的话：`,
        inputs: [{ key: "takeBack", type: "text", placeholder: "从现在起，我不允许你再..." }]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "当再次面临恐吓和压迫，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：他们总能吓到我，我不是他们的对手，躲远点就好。", isGrowth: false },
          { text: "🌟 【成长之路】：我会大声说出想法！这代表我不会再给他们恐吓和迷惑我的权利，我会坚守立场。", isGrowth: true }
        ]
      }
    ]
  },

  // ==================== 第 6 章 ====================
  6: {
    title: "第 6 章：停止自我责备",
    steps: [
      {
        title: "承担不属于你的错",
        desc: "情感不成熟者从不反思，总是防御性地责怪他人。发生冲突时，什么样的指责或表情最容易让你产生内疚，让你觉得是自己错了？",
        inputs: [{ key: "blameTrigger", type: "text", placeholder: "当他们... 时，我会觉得都是我的错。" }]
      },
      {
        title: "拒绝背锅",
        desc: m => `哪怕只是为了不再体会<span class="dynamic-text">“${m.blameTrigger}”</span>的糟糕感觉，你也会妥协。现在，理直气壮地拒绝这种内疚：`,
        inputs: [{ key: "rejectGuilt", type: "text", placeholder: "如果真的不是我的错，我绝不会..." }]
      },
      {
        title: "时间不允许我们停滞不前",
        desc: "关于自我责备的习惯，你想走哪条路？",
        isChoice: true,
        choices: [
          { text: "🌑 【停滞之路】：按他们说的办并说对不起，这样日子容易些。", isGrowth: false },
          { text: "🌟 【成长之路】：我承认自己有时会犯错，但如果真的不是我的错，我拒绝承担责任，我拒绝因为礼貌表达观点而内疚！", isGrowth: true }
        ]
      }
    ]
  }
};

