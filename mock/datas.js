function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function queryItem(arr, field, value) {
  for (const item of arr) {
    if (item[field] === value) return item;
  }
}



/*
 * 分类表
 * id:varchar(40) 主键
 * name:varchar(10) 分类名称
 */

let categories = [];

categories.push({
  id: guid(),
  name: '电影'
});

categories.push({
  id: guid(),
  name: '电视剧'
});

categories.push({
  id: guid(),
  name: '综艺'
});

categories.push({
  id: guid(),
  name: '书籍'
});



/*
 * 首页Banner表
 * id:varchar(40) 主键
 * img:varchar(255) 图片路径
 */

let index_banners = [];

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});

index_banners.push({
  id: guid(),
  img: '/mock/index/images/banners/banner1.jpg'
});



/*
 * 电影表
 * id:varchar(40) 主键
 * cid:varchar(40) 外键，链接到 categories表 的 id 值
 * title:varchar(255) 电影名称
 * originalTitle:varchar(500) 电影原名称
 * cover:varchar(255) 电影封面图片路径
 * releaseTime:datetime 上映时间
 * duration:int 时长
 * released:boolean 是否已上映
 * state:int 状态，0为预售，1为可售，-1为不可购票
 * score:float(-1~10) 评分，为-1时表示未评分
 * wish:int 愿望值，表示多少人想看
 * tags:varchar(255) 标签，用逗号分隔每个标签
 */

let videos = [];

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '胡桃夹子和四个王国',
  originalTitle: 'The Nutcracker And The Four Realms',
  desc: '克拉拉（麦肯吉·弗依 饰）一直在寻找一把钥匙——这把与众不同的钥匙将可以开启已故母亲装有无价之宝的盒子。在教父德罗塞尔梅耶（摩根·弗里曼 饰）举办的一次节日聚会上，一根金线指引着她找到了这把梦寐以求的钥匙，却在瞬间消失进入一个陌生而神秘的平行世界。在平行世界里，克拉拉结识了士兵菲利普（杰登·奈特 饰）、一群老鼠、以及分别掌管雪花王国、鲜花王国、糖果王国的三位国王。克拉拉和菲利普必须勇敢地接受第四位国王——暴君姜母（海伦·米伦 饰）的考验，才能够找回钥匙、并将和平重新带回这个摇摇欲坠的平行世界。',
  cover: '/mock/videos/cover1.jpg',
  releaseTime: '2018-11-02',
  duration: 100,
  state: 1,
  released: true,
  score: 7.9,
  wish: 46755,
  tags: '3D,CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '流浪猫鲍勃',
  originalTitle: 'A Street Cat Named Bob',
  desc: '家庭的破裂令詹姆斯（卢克·崔德威 饰）遭受了巨大的打击开始自暴自弃，身无分文，成为了一名流连在街头的卖艺者。瓦尔（琼安·弗洛加特 饰）是负责詹姆斯的戒毒所医生，在她的帮助下，詹姆斯终于有了一个能够遮风挡雨的家，瓦尔坚信詹姆斯能够凭借自己的意志，彻底摆脱毒品的诱惑。某日，一只流浪猫闯进了詹姆斯的家，詹姆斯收养了它，给它取名鲍勃，当詹姆斯离开家走上街头卖艺的时候，鲍勃跟在他的身边寸步不离。很快，这一人一猫的组合便吸引了过路人的注意， 詹姆斯的经济状况因此得到了巨大的改善，与此同时，詹姆斯结识了住在隔壁的女子贝拉（鲁塔·盖德敏塔斯  饰），在贝拉的身上，詹姆斯重新燃起了对爱的渴望。',
  cover: '/mock/videos/cover2.jpg',
  releaseTime: '2018-11-02',
  duration: 103,
  state: 1,
  released: true,
  score: 9.0,
  wish: 352154,
  tags: ''
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '毒液：致命守护者',
  originalTitle: 'Venom',
  desc: '记者埃迪·布洛克（汤姆·哈迪 饰）在调查生命基金会的最新科学实验过程中，受到不明外星物质共生体的入侵与控制，历经挣扎成为亦正亦邪的超级英雄——毒液。他将以毒攻毒，破解生命基金会的惊天阴谋，拯救世界。',
  cover: '/mock/videos/cover3.jpg',
  releaseTime: '2018-11-09',
  duration: 107,
  state: 0,
  released: false,
  score: -1,
  wish: 363452,
  tags: '3D IMAX,CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '飓风奇劫',
  originalTitle: 'The Hurricane Heist',
  desc: '影片讲述财务部女监察探员(格蕾斯饰)负责押运一批6亿美元残旧货币到碎钞厂处理，然而当地罕见的飓风灾难即将来临，一群全副武装的盗贼想在居民全部疏散后“乘风打劫”，而当飓风达到致命的5级之后，所有精心计划都被打乱，他们发现需要一个金库密码，而这个密码只有女监察探员知道，她和所被劫持人质的生命面临威胁，在和滞留当地气象学家（凯贝尔饰）结盟后，后者的弟弟也被盗贼绑架，两人不得不联袂面对飓风和匪徒，在历经惊险刺激后最终战胜了盗贼和飓风灾难。',
  cover: '/mock/videos/cover4.jpg',
  releaseTime: '2018-11-02',
  duration: 103,
  state: 1,
  released: true,
  score: 8.4,
  wish: 236485,
  tags: ''
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '无双',
  originalTitle: 'Project Gutenberg',
  desc: '以代号“画家”（周润发 饰）为首的犯罪团伙，掌握了制造伪钞技术，难辨真伪，并在全球进行交易获取利益，引起警方高度重视。然而“画家”和其他成员的身份一直成谜，警方的破案进度遭受到了前所未有的挑战。在关键时刻，擅长绘画的李问（郭富城 饰）打开了破案的突破口，而“画家”的真实身份却让众人意想不到……',
  cover: '/mock/videos/cover5.jpg',
  releaseTime: '2018-09-30',
  duration: 130,
  state: 1,
  released: true,
  score: 8.9,
  wish: 486521,
  tags: '2D IMAX,CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '铁血战士',
  originalTitle: 'The Predator',
  desc: '一位男孩（雅各布特伦布莱 饰）偶然间打开了尘封的箱子，触发了特殊机关，唤醒了宇宙最强猎手一一铁血战士。其父亲(波伊德霍布鲁克 饰)与一名愤世嫉俗的女生物学家（奥立薇娅玛恩 饰）发现了外星物种入侵的迹象。为保护家人和赖以生存的地球家园，他们担负起拯救人类的使命，组成一支精英小队共同对抗这些外来侵略者。',
  cover: '/mock/videos/cover6.jpg',
  releaseTime: '2018-10-26',
  duration: 106,
  state: 1,
  released: true,
  score: 7.5,
  wish: 125789,
  tags: '3D IMAX,CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '滴答屋',
  originalTitle: 'The House with a Clock in its Walls',
  desc: '失去双亲的小男孩路易斯（欧文·瓦卡罗 饰）前来投奔已离家多年的舅舅乔纳森（杰克·布莱克 饰），意外发现舅舅的真实身份竟是拥有神奇法术的魔法师，并对舅舅那栋充满超自然现象的房子好奇不已。舅舅乔纳森和同为魔法师的毒舌好友齐默尔曼夫人(凯特·布兰切特 饰)总在半夜寻找房子神秘“滴答”声的来源，拥有邪恶法术的黑暗魔法师夫妻（凯尔·麦克拉克伦和芮妮·戈兹贝里分别饰演）在房子里留下了一个足以毁灭人类文明的惊天秘密。为了阻止阴谋实施，路易斯与舅舅乔纳森及齐默尔曼夫人共同经历了一系列奇幻刺激的魔法冒险……',
  cover: '/mock/videos/cover7.jpg',
  releaseTime: '2018-11-01',
  duration: 105,
  state: 1,
  released: true,
  score: 7.5,
  wish: 654213,
  tags: '2D IMAX,CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '名侦探柯南：零的执行人',
  originalTitle: '名探偵コナン ゼロの執行人',
  desc: '5月1日，东京湾边的新建筑“海洋边缘”将举办首脑云集的东京峰会。然而，峰会开办前一周，会场发生超大规模的爆炸事件，并出现了安室透的身影。疑似恐怖袭击的事件引起了警察部门的严肃调查。在警察局大型搜查会议上，公安部门提交证物，却发现疑犯指纹与毛利小五郎（小山力也 配音）指纹吻合。作为律师的妃英理努力收集证据证明丈夫的无辜，却无力阻止毛利小五郎被收监。看到毛利兰（山崎和佳奈 配音）绝望哭泣的样子，柯南（高山南 配音）决定调查事件真相，还毛利小五郎清白。另一方面，少年侦探团的孩子们正紧密关注着无人探测器“天鹅”的回航任务。行踪诡异的安室透、惨遭陷害的毛利小五郎、错综复杂的警察部门、即将着陆的无人探测器；随着“机密任务”进入倒计时，关乎整个东京的可怕计划拉开帷幕…',
  cover: '/mock/videos/cover8.jpg',
  releaseTime: '2018-11-09',
  duration: 105,
  state: 0,
  released: false,
  score: -1,
  wish: 120571,
  tags: 'CGS'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '你好，之华',
  originalTitle: 'Last Letter',
  desc: '有人慌张地见面，有人简单地告别。姐姐袁之南离世的那个清晨，只匆匆留下一封信和一张同学会邀请函。妹妹之华代替 姐姐参加，却意外遇见年少时的倾慕对象尹川。往日的记忆在苏醒，但再次相见，已物是人非。',
  cover: '/mock/videos/cover9.jpg',
  releaseTime: '2018-11-09',
  duration: 114,
  state: 0,
  released: false,
  score: -1,
  wish: 35784,
  tags: ''
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '冰封侠:时空行者',
  originalTitle: 'The Iceman Cometh 3D 2',
  desc: '明朝大将军贺英（甄子丹 饰）利用时空金球终于重返明朝，与锦衣卫兄弟萨獒（王宝强 饰）获悉了倭寇和朝廷奸党之间足以倾覆皇权的密谋，绵延400年的惊天危机一触即发。贺英也在红颜知己小美（黄圣依 饰）的帮助下开始了抗倭锄奸和保护族人的战斗。',
  cover: '/mock/videos/cover10.jpg',
  releaseTime: '2018-11-02',
  duration: 87,
  state: 1,
  released: true,
  score: 3.6,
  wish: 1248,
  tags: '3D'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '嗝嗝老师',
  originalTitle: 'Hichki',
  desc: '患有图雷特综合症的女主人公奈娜（拉妮·玛克赫吉 饰）经常会不受控制的头部抽动，并发出怪异的嗝声，由于大众对这种疾患的无知，她经常被视为怪物，而她想要成为老师的理想更被视为妄想。经过无数次面试失败后，奈娜终于找到理想的工作，成为了一名中学老师。然而她被指派的班级学生却是全校最顽皮的学生……',
  cover: '/mock/videos/cover11.jpg',
  releaseTime: '2018-10-12',
  duration: 117,
  state: 1,
  released: true,
  score: 9.4,
  wish: 987645,
  tags: ''
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '雪怪大冒险',
  originalTitle: 'Smallfoot',
  desc: '一个聪明开朗的年轻雪怪发现了一个他认为不存在的神秘生物——人类，发现“小脚人”的消息让单纯的雪怪村陷入了骚乱之中，除了他们的村庄，还有什么未知生物会出现在外面的世界呢？这是一场呆萌雪怪携手“小脚怪”人类，开启一段欢乐大冒险！人类与雪怪两个物种，因为天差地别的语言、体型和居住环境等原因，产生了种种反差误会，逗趣场面令人捧腹；两大种族从互相害怕到逐渐包容的“破冰“之旅又暖心不已、其乐融融。',
  cover: '/mock/videos/cover12.jpg',
  releaseTime: '2018-10-19',
  duration: 96,
  state: 1,
  released: true,
  score: 9.3,
  wish: 1087645,
  tags: '3D'
});

videos.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电影').id,
  title: '三国杀·幻',
  originalTitle: 'Love Illusion',
  desc: '两件神秘锦囊， 带出充斥着主忠反内“英雄门”传承的惊人秘密， 而当揭开这些表象时，另一个关于深爱与成全的纠结故事开始展露它的真实面目。',
  cover: '/mock/videos/cover13.jpg',
  releaseTime: '2018-11-09',
  duration: 94,
  state: 0,
  released: false,
  score: -1,
  wish: 25184,
  tags: ''
});



/*
 * 电视剧表
 * id:varchar(40) 主键
 * cid:varchar(40) 外键，链接到 categories表 的 id 值
 * title:varchar(255) 电视剧名称
 * originalTitle:varchar(500) 电视剧原名称
 * cover:varchar(255) 电视剧封面图片路径
 * releaseTime:datetime 上映时间
 * overseas:boolean 是否为海外电视剧
 * episodeCount:int 集数
 * duration:int 每集时长
 * score:float(0~10) 评分
 * wish:int 愿望值，表示多少人想看
 * tracing:int 有多少人在追
 */

let telethon = [];

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '创业时代',
  originalTitle: 'Entrepreneurial Age',
  desc: '在一次偶然的机会中，软件工程师郭鑫年找到了新的灵感，他决心开发一款新的手机通讯软件，可以将手机短信以语音的形式在用户之间传送，这个想法让郭鑫年激动不已，他怀着一腔热血，走上了创业之路。在天使投资人和旧日朋友的支持下，郭鑫年经过艰苦的研发，终于令手机软件诞生，起名为魔盒，并获得了巨大的成功，同时也与投资分析师那蓝，成为了莫逆之交。然而创业的道路并非一帆风顺，在激烈的市场竞争和技术更迭中，同行的竞争，技术上的难关，种种问题纷至沓来，郭鑫年经历了一次又一次磨难，终于令新技术得以推广。在郭鑫年最艰难的时期，他收获了那蓝的爱情，在爱人的鼓励下，他意识到，眼下的困难并不是终结，而是新的开始，最终，郭鑫年和那蓝一起携手，继续走上了创业之路。',
  cover: '/mock/telethon/cover1.jpg',
  releaseTime: '2018-10-12',
  overseas: false,
  episodeCount: 40,
  duration: 45,
  score: 4.8,
  wish: 251,
  tracing: 200
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '凉生，我们可不可以不忧伤',
  originalTitle: 'Cool, we can not sad',
  desc: '童年贫瘠的时光，姜生（孙怡饰）和凉生（马天宇饰）相依相偎，尽管是没有血缘的兄妹，仍对彼此不离不弃，物质虽然匮乏，精神却无比充实。他们双双考入理想大学后一场车祸，凉生失踪，由此揭开了凉生的身世之谜。姜生苦心寻找凉生，程天佑（钟汉良饰）陪伴左右，深深爱上了这个平凡而不平常的女孩。凉生回归，成为了程天佑的表弟，错综复杂的家族关系，让三人的生活再也无法平静。噩耗降临，凉生得了骨髓血癌，姜生为挽救凉生的生命，放弃出国留学的机会，割舍对程天佑的爱，回到凉生身边。尽管治愈希望渺茫，姜生相信不放弃就有希望。程天佑为爱绝望之后，背城而去。当病情逐步好转，凉生终于放下负担，昭告天下对姜生的爱，姜生却拒绝了凉生。在历经重重困难之后，姜生真正领悟到了生活的意义和爱情的真谛，勇敢追寻自己的内心。姜生远走法国，磨难之后，相爱的人终于收获了爱与信仰。',
  cover: '/mock/telethon/cover2.jpg',
  releaseTime: '2018-09-17',
  overseas: false,
  episodeCount: 70,
  duration: 45,
  score: 7.2,
  wish: 391,
  tracing: 390
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '橙红时代',
  originalTitle: 'Age of legends',
  desc: '失踪八年的刘子光突然回到故乡江北市，丧失记忆的他却发现自己有了异于常人的体魄和能力。在一次营救被劫儿童的事件中，被女警胡蓉当成嫌疑人物盯上。江北警方追查新型毒品“天使”跨国大案，机缘巧合下，一腔热血的刘子光协助胡蓉和警方将聂万峰及相关毒枭一一揪出，却意外发现自己牵涉其中，且与聂万峰渊源颇深。胡蓉的亲生父亲在执行卧底任务时被杀害，也和刘子光脱不了关系。遗失的八年发生了很多，让刘子光的人生彻底颠覆。',
  cover: '/mock/telethon/cover3.jpg',
  releaseTime: '2018-09-17',
  overseas: false,
  episodeCount: 47,
  duration: 45,
  score: 9.1,
  wish: 500,
  tracing: 403
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '许你浮生若梦',
  originalTitle: 'Granting You a Dreamlike Life',
  desc: '享誉国际的年轻华裔美食评论家林静芸（安悦溪饰）来东江探访美食，借机展开寻根之旅。此时，奶奶生活过的林家老宅早已被改造成主打传统东江菜的一道餐厅，林静芸前来品尝。依照餐厅过往的规定，主厨程慕生（朱一龙饰）先是拒绝了林静芸的点菜，随后又补充说可以用一道好菜换一个好故事，最后她要了最家常、也最能体现掌勺人手艺的糖醋排骨。谁料因为程慕生的醉炒，林静芸吃后对菜肴成品很是不满，扔下手里的筷子生气离开。一波未平一波又起。林静芸在自己社交平台上一句“醉蟹醉虾不如醉厨师”的点评，让程慕生和一道餐厅在网上大火。为给餐厅正名，程慕生“设计”偷拍了林静芸亲口承认他厨艺不错的视频，并上传到微博。视频一出，林静芸去一道找他评理。两个人一番争论后，林静芸自知理亏，愿赌服输，答应讲述有关自己奶奶的亲身经历，由此揭开了一段尘封已久的民国家族往事。',
  cover: '/mock/telethon/cover4.jpg',
  releaseTime: '2018-09-07',
  overseas: false,
  episodeCount: 40,
  duration: 45,
  score: 7.4,
  wish: 150,
  tracing: 24
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '斗破苍穹',
  originalTitle: 'Fights Break Sphere',
  desc: '被视为天赋异禀的少年武者萧炎（吴磊饰），九岁时母亲古文心（李若彤饰）被族人强行带回家族囚禁，父亲萧战（于荣光饰）讳莫如深。萧炎的母亲给了萧炎一枚纳戒，但是却令萧炎的功力减弱无法修炼，早已订好婚约的家族也来退婚，令萧家蒙受奇耻大辱。萧炎无意中唤醒了戒指的主人药尘（陈楚河饰）老人，在药尘老人的帮助下，萧炎的武功进步惊人。萧炎进入迦南学院学习艺技，在这里结交了一群良师益友，再次引起了敌人的注意。一次特殊修炼中，萧炎遭到陷害，死里逃生后，发现他的家族也遭到了灭顶之灾。为了世间和平，萧炎毅然选择了只身一人向邪恶的势力发起挑战。最后联手女侠萧薰儿（林允饰），共同战胜了强敌。',
  cover: '/mock/telethon/cover5.jpg',
  releaseTime: '2018-09-03',
  overseas: false,
  episodeCount: 45,
  duration: 45,
  score: 6.2,
  wish: 316,
  tracing: 336
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '天坑鹰猎',
  originalTitle: 'Eagles And Youngster',
  desc: '20世纪80年代末，北京少年张保庆只身前往东北鹰屯，与猎鹰族姐弟菜瓜、二鼻子不打不相识。城市少年第一次感受到了自然的奇妙，同时从菜瓜姐弟的行为中明白了人和自然，取之有道，敬畏生命的道理。三个热血少年结为好友，共赴雪原为其恩师寻找解药线索，突遇风雪掉入雪山天坑。天坑地势凶险，张保庆逞强一人突破难关，无奈落入险境，菜瓜姐弟俩面对重重危险，依然对张保庆不离不弃。这次的意外不仅让张保庆学会了团队协作，他还意外拾到一颗鹰蛋，孵出一只举世无双的白鹰。菜瓜教会他人与鹰的契约，等到白鹰学会捕猎就将它放归自然。但心怀贪念的人怎可能放弃这稀世珍宝，由白鹰引发的东北金王马殿臣的秘密也浮出水面。少年们不惧危险，勇挫贪婪势力。在过程中深刻领悟到人类的过度贪婪终将破坏大自然的平衡；张保庆也从懵懂的毛头小子成长为有责任感的少年。',
  cover: '/mock/telethon/cover6.jpg',
  releaseTime: '2018-08-30',
  overseas: false,
  episodeCount: 40,
  duration: 45,
  score: 8.8,
  wish: 1781,
  tracing: 1031
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '我的ID是江南美人',
  originalTitle: '내 아이디는 강남미인',
  desc: '外貌主义至上的姜美来（林秀香饰）从小就因为丑陋的外貌备受他人排挤和欺负。为了改变自己的人生，她决定做整型手术，变成一个超级美女，也就是韩国俗称的“江南美人”，在江南区的整型医院成为美人。美来终于成功变身，但变身后的她并不能获得一切，她的美却再度成为众人的笑柄，被冠上整形怪的称号，心理再次受到创伤，她开始发现一切远不是有张好看的脸就能够改变的。再次陷入艰难的大学生活的姜美来遇到了中学同学都炅锡（车银优饰），都炅锡跟她正好相反，因为从小就是美男备受瞩目。随后，姜美来与都炅锡展开了一段真挚的爱情，也重新找回自信。',
  cover: '/mock/telethon/cover7.jpg',
  releaseTime: '2018-07-27',
  overseas: true,
  episodeCount: 16,
  duration: 60,
  score: 8.5,
  wish: 387,
  tracing: 584
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '人生删除事务所',
  originalTitle: 'dele ディーリー',
  desc: '由于不明疑难杂症导致下半身瘫痪，过着轮椅生活的自由程序员坂上圭司与亡父设立的坂上法律事务所合作，成立了「dele.LIFE」（人生删除事务所），承接在委托人去世后将其不想遗留在世上的电脑、手机中的电子数据秘密消除的业务。自由职业者真柴佑太郎因为意外事件成为了他的协助者。二人在执行委托的过程中，不断被卷入各种事件中，陷入不得不探查委托人的人生以及隐藏于水面下的真相的局面……',
  cover: '/mock/telethon/cover8.jpg',
  releaseTime: '2018-07-27',
  overseas: true,
  episodeCount: 8,
  duration: 45,
  score: 8.7,
  wish: 370,
  tracing: 298
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: 'Life',
  originalTitle: 'Life 라이프',
  desc: '韩国国内前五的私立大学医院-尚国大学医院遭到华政集团并购，是第一次不是医生而是由财阀出身的专业经理人来担任医院社长，社长具胜孝（曹承佑饰）认为身为企业家追求利益是理所当然的事，他对医院的巨额赤字心怀不满，一上任就要派遣医院3个赤字科室去地方医院，而一直以来只是安静地做自己份内事的急救专科医生芮镇宇（李栋旭饰）与只在乎医院收益的社长立场相悖，于是他决定站出来表达立场，两大阵营的矛盾也就此拉开帷幕 。',
  cover: '/mock/telethon/cover9.jpg',
  releaseTime: '2018-07-23',
  overseas: true,
  episodeCount: 16,
  duration: 60,
  score: 8.3,
  wish: 241,
  tracing: 289
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '善良医生',
  originalTitle: 'グッド・ドクター',
  desc: '新堂凑拥有令人惊异的默记和空间认知能力，同时又是个患有交流障碍的自闭症患者。受儿科医生司贺明的影响，阿凑从小时候起就梦想成为儿科医生。终于，他凭借默记能力背下了大量医书，从医科毕业，通过了医师资格考试。在已经成为大医院院长的司贺邀请下，他作为实习医生进入了小儿外科。他一边承受着来自周围人的偏见与反对，一边为了拯救孩子们的生命而努力。身为新人医生的他与儿童们患者心连心、共同成长。',
  cover: '/mock/telethon/cover10.jpg',
  releaseTime: '2018-07-12',
  overseas: true,
  episodeCount: 10,
  duration: 45,
  score: 8.7,
  wish: 226,
  tracing: 231
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '名姝 第二季',
  originalTitle: 'Harlots Season 2',
  desc: '由Hulu和ITV合拍的《#名姝# Harlots》被续订第二季，10集的次季预定18年播出。该剧讲述了Margaret Wells（Samantha Morton饰演）和她的女儿们的生活，她努力让自己在一个母亲和妓院老鸨这两个角色之间调和。当她的事业遭到了来自一个无情的竞争对手Lydia Quigley（Lesley Manville饰）的威胁，她决定奋起反击，即使这样会破坏她的家庭也在所不惜。',
  cover: '/mock/telethon/cover11.jpg',
  releaseTime: '2018-07-11',
  overseas: true,
  episodeCount: 8,
  duration: 45,
  score: 8.4,
  wish: 277,
  tracing: 304
});

telethon.push({
  id: guid(),
  cid: queryItem(categories, 'name', '电视剧').id,
  title: '利器',
  originalTitle: 'Sharp Objects',
  desc: '记者的卡米尔（艾米·亚当斯饰）家乡的几名女孩被谋杀，由于工作的原因，她被迫回到那个古老南方贵族与吸毒青年共同生活的地方。很多年来，她都没有和自己患有忧郁症母亲（派翠西娅·克拉克森饰）以及那个和自己只有一半血缘关系的怪异妹妹说过几次话。而后卡米尔发现，除了来自于一个地方，她和这些死去的女孩有着更多的共同点。卡米莉逐步揭露了杀害那些女孩的凶手以及杀人动机的谜底。',
  cover: '/mock/telethon/cover12.jpg',
  releaseTime: '2018-07-08',
  overseas: true,
  episodeCount: 8,
  duration: 60,
  score: 8.4,
  wish: 232,
  tracing: 169
});



/*
 * 综艺表
 * id:varchar(40) 主键
 * cid:varchar(40) 外键，链接到 categories表 的 id 值
 * title:varchar(255) 综艺名称
 * originalTitle:varchar(500) 综艺原名称
 * cover:varchar(255) 综艺封面图片路径
 * releaseTime:datetime 上映时间
 * overseas:boolean 是否为海外综艺
 * numberOfPeriods:int 期数
 * duration:int 每期时长，-1为未知
 * score:float(0~10) 评分
 * wish:int 愿望值，表示多少人想看
 * tracing:int 有多少人在追
 */

let variety = [];

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: 'Hi 室友',
  originalTitle: 'Hi Housemate',
  desc: '《Hi室友》以全方位无死角的镜头记录了合宿嘉宾们生活中的点点滴滴，展示现代都市年轻人的相处之道。通过以金星为代表的传统观念，和以年轻嘉宾为代表的新潮想法之间的碰撞，打破二者之间的壁垒，拉近不同年代人群的距离，向广大青年群体传达正能量。',
  cover: '/mock/variety/cover1.jpg',
  releaseTime: '2018-09-26',
  overseas: false,
  numberOfPeriods: 10,
  duration: -1,
  score: 7.0,
  wish: 39,
  tracing: 15
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '我就是演员',
  originalTitle: 'wo jiu shi yan yuan',
  desc: '《我就是演员》是浙江卫视推出的演技竞演类励志综艺，由浙江卫视节目中心制作，张国立担任推荐人，章子怡、徐峥、吴秀波担任常驻演技导师。节目以演技为视角，演员们进行演技对决，凭实力获得大导演认可，与导师在影视化里切磋演技。节目于2018年9月8日起每周六20:15在浙江卫视首播。',
  cover: '/mock/variety/cover2.jpg',
  releaseTime: '2018-09-08',
  overseas: false,
  numberOfPeriods: 12,
  duration: -1,
  score: 7.0,
  wish: 13,
  tracing: 71
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '心动的信号',
  originalTitle: 'HEART SIGNAL',
  desc: '《心动的信号》挑选8位身份背景各不相同的素人单身男女，入住信号小屋，在不耽误日常工作生活的前提下，展开为期一个月的交往体验。节目组特别设定先后进入、晚间匿名短信、约会发起等规则，创造机会令这些青年男女尽可能真实的展现心动的瞬间；而每期邀请的明星嘉宾和心理学专家将以场外观察员的身份组成心动侦探团，来反观几位素人单身男女日常相处的生活细节和情感走向，从而进行推理分析和心动连线。',
  cover: '/mock/variety/cover3.jpg',
  releaseTime: '2018-08-26',
  overseas: false,
  numberOfPeriods: 10,
  duration: -1,
  score: 8.7,
  wish: 5,
  tracing: 128
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '这！就是灌篮',
  originalTitle: 'Dunk of China',
  desc: '《这！就是灌篮》是浙江卫视、优酷、天猫联合出品推出的青春篮球竞技原创节目，由周杰伦、李易峰、林书豪、郭艾伦担任四大领队。节目通过篮球聚焦青年潮流文化，以中国大学生3X3篮球联赛为基本核心 ，集结了全国来自不同年龄、职业、身份的一百多位热爱篮球的青少年，并设置四位领队分两大阵营带领球员比赛。通过多轮激烈的篮球对战，最终在篮球少年们中角逐出MVP 。',
  cover: '/mock/variety/cover4.jpg',
  releaseTime: '2018-08-25',
  overseas: false,
  numberOfPeriods: 12,
  duration: 80,
  score: 9.0,
  wish: 69,
  tracing: 276
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '这！就是歌唱·对唱季',
  originalTitle: 'Double Voice',
  desc: '《这！就是歌唱·对唱季》舞美设计体现用场景讲故事的思路，从踏上这片土地到最终登上王座，这些场景将会伴随选手们的整个成长历程，像游戏通关一样，每个场景都蕴藏着不可预知的情节，最终见证从普通人到步入“神域”的艰辛历程。舞美一一展现了霓虹灯管方块座椅、白色气球吊顶、绿色植被、漂浮的音符灯等极具视觉冲击力的甜蜜对唱元素。在舞台上最醒目的就是两座高达16米的现代青年男女雕塑。整个舞美围绕两座人像为主题发展，全部风格都采用当代美术装置的体现，兼具未来感和浪漫主义气息，而颇具创新理念的360度全景舞台也让人耳目一新。本次舞美被命名为“神域”，象征着音乐在追求梦想的年轻人心中的神圣地位。',
  cover: '/mock/variety/cover5.jpg',
  releaseTime: '2018-07-27',
  overseas: false,
  numberOfPeriods: 19,
  duration: -1,
  score: 8.2,
  wish: 292,
  tracing: 108
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '幻月之城',
  originalTitle: 'Phantacity 2018',
  desc: '《幻乐之城》是由湖南卫视与酷博特文化共同出品、联合制作的国内首档音乐创演秀。梁翘柏担任幻乐发起人、联合出品人，王菲担任幻乐体验官，何炅担任主持人，刘烨担任唱演助理。节目共12期，每期有4位由幻乐发起人召集的唱演人与幻乐导演组成拍档，共同对歌曲进行创意设计和剧情式呈现。',
  cover: '/mock/variety/cover6.jpg',
  releaseTime: '2018-07-20',
  overseas: false,
  numberOfPeriods: 12,
  duration: -1,
  score: 8.0,
  wish: 594,
  tracing: 537
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '中餐厅 第二季',
  originalTitle: 'China Restaurant Season 2',
  desc: '《中餐厅第二季》是湖南卫视推出的青春合伙人经营体验节目，共12期，由苏有朋、赵薇、舒淇、王俊凯、白举纲担任固定主持。节目由5位青春合伙人通过20天时间，从零开始经营一家位于法国科尔马小镇的中餐厅，互相协作并彼此关心和学习，在中餐厅内做出中国的味道。',
  cover: '/mock/variety/cover7.jpg',
  releaseTime: '2018-07-20',
  overseas: false,
  numberOfPeriods: 12,
  duration: 90,
  score: 8.0,
  wish: 799,
  tracing: 673
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '中国新说唱',
  originalTitle: 'The Rap of China',
  desc: '《中国新说唱》是爱奇艺自制华语青年说唱音乐节目。节目以“剧集式”叙事 理念制作，兼具“燃、酷、潮“三大基因的同时，中国元素与说唱音乐的华丽碰撞，以及新时代新青年的自信表达。节目于2018年7月14日起每周六晚20: 00在爱奇艺播出；10月6日，艾热获得总决赛冠军，那吾克热获得亚军，ICE和刘柏辛分居季军、第四名 。',
  cover: '/mock/variety/cover8.jpg',
  releaseTime: '2018-07-14',
  overseas: false,
  numberOfPeriods: 12,
  duration: 100,
  score: 6.4,
  wish: 574,
  tracing: 565
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '中国好声音 第五季',
  originalTitle: 'Sing! China',
  desc: '《中国好声音2018》是浙江卫视推出的音乐励志评论类节目，节目不再引进任何海外模式，继续致力于原创模式的开发。该节目共13期，由周杰伦、谢霆锋、李健、庾澄庆担任四位固定导师。节目旨在为中国乐坛的发展提供一批怀揣梦想、具有天赋才华的音乐人。四位导师通过盲选选择自己心仪的学员组成战队，并带领自己的战队进行战队内和战队间关于音乐的对抗。节目于2018年7月13日起每周五晚21: 10在浙江卫视首播，于2018年10月7日收官。李健战队的旦增尼玛获得年度总冠军，李健成为冠军导师；黎真吾获得亚军；刘郡格获得第三名；宿涵、周兴才让获得第四名、第五名。',
  cover: '/mock/variety/cover9.jpg',
  releaseTime: '2018-07-13',
  overseas: false,
  numberOfPeriods: 15,
  duration: 90,
  score: 7.5,
  wish: 819,
  tracing: 505
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '潮音战记',
  originalTitle: 'CHAO YIN ZHAN JI',
  desc: '《潮音战纪》，是由腾讯视频出品，企鹅影视、哇唧唧哇、光启传媒联合制作的偶像搭档对决音乐真人秀。该节目着力于寻找新的潮流音乐风向口，为打造潮流音乐的发源地，填补国内潮流音乐节目在大众视野里的空白，在全亚洲范围内，邀请了极具音乐才华的符龙飞、宫阁、Jony J、Samuel、伍嘉成、文俊辉、徐明浩、闫桉、周兴哲、周震南共十位潮音偶像（按艺人姓名字母顺序进行排序）参与同场竞技。他们将从编曲、演唱、舞蹈等各方位进行展示，通过舞台表现将自己的独特魅力、超强实力与才华一一展现在每位观众面前。该节目于7月12日在腾讯视频首播。',
  cover: '/mock/variety/cover10.jpg',
  releaseTime: '2018-07-12',
  overseas: false,
  numberOfPeriods: 10,
  duration: -1,
  score: 4.8,
  wish: 270,
  tracing: 167
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '举杯呵呵喝 第二季',
  originalTitle: '举杯呵呵喝2',
  desc: '《举杯呵呵喝》第二季是由天猫出品、优酷、因唯、巨匠联合出品的全网首档明星聚会脱口秀节目。节目共10期，第二季节目由胡海泉、大左、杨迪、沈南组成“呵喝兄弟”固定主持团，每期邀请不同的嘉宾到呵呵喝小馆实体店参加明星聚会。《举杯呵呵喝》第二季是一档明星聚会真人秀。节目从明星私人聚会角度出发，重新定义“饭局”，每一次聚会，都期待好久。《举杯呵呵喝第二季》已经于2018年7月11日在优酷独家播出。',
  cover: '/mock/variety/cover11.jpg',
  releaseTime: '2018-07-11',
  overseas: false,
  numberOfPeriods: 10,
  duration: -1,
  score: 6.7,
  wish: 247,
  tracing: 192
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '我家那小子',
  originalTitle: 'My Little One',
  desc: '《我家那小子》是湖南卫视推出的中国首档亲情观察成长励志节目，共12期。 节目每期邀请明星妈妈们（或其他亲戚长辈）在棚内观察明星独居生活的真实模样，了解其生活的另一面。节目不仅以多元化的观察视角记录明星嘉宾的独居生活，更让“观察”成为一种全新的沟通方式—作为观察员的妈妈（或亲友）“围观”自家孩子的独居日常，彼此分享、发现问题、思考改变，让“好好去生活”在跨代观察中得到新的理解和尝试。节目于2018年7月7日起每周六晚22：00在湖南卫视首播。',
  cover: '/mock/variety/cover12.jpg',
  releaseTime: '2018-07-07',
  overseas: false,
  numberOfPeriods: 12,
  duration: 90,
  score: 7.6,
  wish: 221,
  tracing: 195
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: 'PRODUCE 48',
  originalTitle: 'PRODUCE 48',
  desc: 'AKB48方面表示所有成员均可报名参加《Produce48》。对此，Mnet方面相关人士向媒体回应表示：“AKB48确实将参加节目，报名成员将于2018年1月参加选拔。”另外，《Produce48》是将《Produce101》和AKB48的模式相结合的选秀节目，将通过该节目打造出在韩、日两国活动女子组合。《Produce48》在2018年4月11日正式开拍，来自日本和韩国的96名练习生们开始了合宿，她们在5月10日出演Mnet《M倒计时》节目，演唱了《Produce48》主题歌《PICK ME》。《Produce48》是《Produce101》的第三季，将于6月15日正式开播。李昇基担任《Produce48》国民制作人代表。',
  cover: '/mock/variety/cover13.jpg',
  releaseTime: '2018-06-15',
  overseas: true,
  numberOfPeriods: 12,
  duration: 130,
  score: 7.5,
  wish: 474,
  tracing: 319
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '粉雄救兵 第二季',
  originalTitle: 'Queer Eye Season 2',
  desc: 'Netflix《粉雄救兵》续订第二季！“五人组”安东尼·波罗夫斯基、鲍比·伯克、卡拉莫·布朗、乔纳森·凡·奈斯、谭·法郎士确定回归。',
  cover: '/mock/variety/cover14.jpg',
  releaseTime: '2018-06-15',
  overseas: true,
  numberOfPeriods: 8,
  duration: 45,
  score: 9.5,
  wish: 430,
  tracing: 278
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '街头美食斗士',
  originalTitle: '스트리트 푸드 파이터',
  desc: '白种元携手tvN推出新美食综艺节目《街头美食斗士》，此次也是曾担任过tvN《家常饭白老师》导演的朴熙妍PD再次与白种元联手，该节目将记录白种元寻找藏在世界各地的街头美食。',
  cover: '/mock/variety/cover15.jpg',
  releaseTime: '2018-06-15',
  overseas: true,
  numberOfPeriods: 8,
  duration: 67,
  score: 9.0,
  wish: 510,
  tracing: 391
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '林中小屋',
  originalTitle: '숲속의 작은집',
  desc: '苏志燮、朴信惠确定合作出演tvN新综艺 林中小屋，该节目为 罗英锡PD全新策划的真人版综艺。 以目前流行的Off Grid为素材，真实地描写苏志燮、朴信惠住进人迹罕至的深山里的Off Grid House，房子里连电都没有，他们需要自己发电，并自食其力从自然中获取食物 的过程，下个月首播。',
  cover: '/mock/variety/cover16.jpg',
  releaseTime: '2018-04-06',
  overseas: true,
  numberOfPeriods: 10,
  duration: 90,
  score: 8.7,
  wish: 540,
  tracing: 301
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '心脏信号2',
  originalTitle: '하트시그널 시즌2',
  desc: 'Channel A全新心理推理综艺《Heart Signal》是一档通过对在一个月的时间里在合租房中生活的6位年轻男女之间出现的信号进行推理爱情线的节目。',
  cover: '/mock/variety/cover17.jpg',
  releaseTime: '2018-03-16',
  overseas: true,
  numberOfPeriods: 13,
  duration: 87,
  score: 8.1,
  wish: 465,
  tracing: 336
});

variety.push({
  id: guid(),
  cid: queryItem(categories, 'name', '综艺').id,
  title: '巅峰拍档 第二十五季',
  originalTitle: 'Top Gear Season 25',
  desc: 'Top Gear，是由BBC出品的一档汽车娱乐节目，自2002年改版推出，至今已经25季。脑回路清奇的创意、疯狂在燃烧的经费、堪比好莱坞的制作，它被称为全世界最好的汽车秀。本次，Top Gear第25季将于2月26起，在bilibili全网独播，每周一10:00更新一集，前24季也将陆续上线。不解释了，赶紧上车吧。',
  cover: '/mock/variety/cover18.jpg',
  releaseTime: '2018-02-25',
  overseas: true,
  numberOfPeriods: 6,
  duration: 60,
  score: 8.6,
  wish: 350,
  tracing: 199
});



/*
 * 书籍表
 * id:varchar(40) 主键
 * cid:varchar(40) 外键，链接到 categories表 的 id 值
 * title:varchar(255) 书籍名称
 * originalTitle:varchar(500) 书籍原名称
 * author:varchar(255) 作者
 * translator:varchar(255) 译者
 * publishingHouse:varchar(255) 出版社
 * cover:varchar(255) 书籍封面图片路径
 * releaseTime:datetime 出版时间
 * overseas:boolean 是否为海外书籍
 * recommend:boolean 是否为推荐书籍
 * score:float(-1~10) 评分，为-1时表示未评分
 * wish:int 愿望值，表示多少人想读
 * tracing:int 有多少人在读
 */

let books = [];

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '半小时漫画世界史',
  originalTitle: '',
  author: '陈磊',
  translator: '',
  publishingHouse: '江苏凤凰文艺出版社',
  desc: '看半小时漫画，通五千年历史，脉络无比清晰，看完就能倒背。仅仅通过手绘和段子，二混子就捋出清晰的历史大脉络：简到崩溃的极简欧洲史、美国往事三部曲、一口气就能读完的日本史、肌肉猛男斯巴达300勇士、酷炫无比的加勒比海盗……掀开纷繁复杂的历史表象，略去无关紧要的细枝末节，每一页都有历史段子，每三秒让你笑翻一次，而二混子手绘的历史人物则是又贱又蠢萌：亚历山大、恺撒、君士坦丁、查理曼大帝、华盛顿、林肯、拿破仑、明治天皇，全都和你我一样，有优点和缺陷，有朋友和敌人，他们在历史关键节点迸发出的惊人能量铸就了五千年的精彩世界史。而你在笑出腹肌的同时，不知不觉已经通晓了历史。',
  cover: '/mock/books/cover1.jpg',
  releaseTime: '2018-04-20',
  overseas: false,
  recommend: false,
  score: 8.4,
  wish: 2078,
  tracing: 1315
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '高兴死了！！！',
  originalTitle: '',
  author: '珍妮·罗森',
  translator: '吴洁静',
  publishingHouse: '江苏凤凰文艺出版社',
  desc: '《高兴死了！！！》是一位抑郁症患者的快乐宣言，在美国鼓励了数百万人，盘踞《纽约时报》畅销书榜近半年。我正在人生低谷，我现 在高兴死了！珍妮，一位抑郁症患者，将自己与孤独、痛苦朝夕相处的故事写成了《高兴死了！！！》。她疯狂收集每一个快乐的瞬间，用它们回击每一个糟糕的日子。这本书里，有她与精神科医生的滑稽对话，她与家人、小浣熊标本的有趣日常，以及存在于她脑袋里的幽默闹剧与感人战歌。人生难免风风雨雨，但只要我们永远乐观，我们就会收获巨大的快乐。处于人生低谷时，记得提醒自己：我们每赢得一场战斗，就会变得更强壮一点。我们的挣扎不会白费，我们会胜利，我们会活着。',
  cover: '/mock/books/cover2.jpg',
  releaseTime: '2018-04',
  overseas: false,
  recommend: false,
  score: 8.6,
  wish: 844,
  tracing: 1179
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '你那么懂事，一定很辛苦吧',
  originalTitle: '',
  author: '阿莫学长',
  translator: '',
  publishingHouse: '四川文艺出版社',
  desc: '每个人都有过关于成长的困惑，那些没有回报的努力，那些辗转反侧的深夜，碌碌无为时的迷茫，面对离别时的感伤。他来了！特别懂你的阿莫学长带着22篇关于生活，关于青春，关于成长的故事与感悟，拍拍你的肩膀对你说“久等了”。多年后，回想起与他同行的这段时光，也许你会突然领悟，哪怕刹那温暖，也可以点亮漫漫长路。',
  cover: '/mock/books/cover3.jpg',
  releaseTime: '2018-04',
  overseas: false,
  recommend: false,
  score: 8.1,
  wish: 1613,
  tracing: 937
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '欲罢不能',
  originalTitle: '',
  author: '亚当·奥尔特',
  translator: '闾佳',
  publishingHouse: '机械工业出版社',
  desc: '欢迎来到“行为上瘾”的时代！我们中近半数人至少有一种“行为上瘾”：无时无刻盯着手机，不断刷朋友圈，通宵追看电视剧集，没日没夜打游戏，频繁查看邮件，用太多时间工作……而那些生产和设计高科技产品的人，却仿佛遵守着毒品交易的头号规则——自己绝不能上瘾。乔布斯的孩子从未用过iPad，Twitter创始人没有给两个儿子买过平板电脑，游戏设计师对“魔兽世界”避之不及，数量惊人的硅谷巨头们根本不让自己的孩子靠近电子设备……这是因为，上瘾行为带来短期的快乐，却会破坏长期的幸福——智能手机抢夺我们的时间，危害我们与他人的人际关系质量。电子游戏让千万年轻人沉迷其中，失去了正常交流的能力。可穿戴设备让很多人运动上瘾，出现了运动伤害。无处不在的高科技让购物、工作、色情变得难以回避。以大量科学研究为基础，本书揭示出一个惊人真相：行为上瘾的生理机制与药物上瘾相同——沉迷于电子游戏时，你的大脑看起来就和海洛因吸食者的大脑一样。本书将会说明商业公司利用哪些原理设计出诱人上钩的高科技产品，并且会指导我们摆脱行为上瘾、重获生活掌控权，也帮助孩子远离上瘾、健康成长。',
  cover: '/mock/books/cover4.jpg',
  releaseTime: '2018-04-01',
  overseas: false,
  recommend: false,
  score: 7.9,
  wish: 470,
  tracing: 481
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '粉墨',
  originalTitle: '',
  author: '张天翼',
  translator: '',
  publishingHouse: '北京十月文艺出版社',
  desc: '《粉墨》收入了张天翼十一篇散文，共三辑：《地下的铁》《出行记》《从透明到灰烬》，讲述了作者的私人生活以及亲人的故事。其中《租房记》描述了作者二十余年的租房史，《从透明到灰烬》讲述了姥姥从家族权 威到“透明人”再到化为灰烬的过程，正如作者所言：那些关于亲人和故乡的回忆，是环绕着荆棘的果实，是我的珍宝，也令我痛苦。只有把它们讲出来，敷粉着墨地画在纸上，我才感到我驯服了它们，达成和解，获得平静。',
  cover: '/mock/books/cover5.jpg',
  releaseTime: '2018-04',
  overseas: false,
  recommend: false,
  score: 8.3,
  wish: 435,
  tracing: 266
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '寂静回声',
  originalTitle: '',
  author: '艾玛·克莱儿·斯维尼',
  translator: '刘勇军',
  publishingHouse: '百花洲文艺出版社',
  desc: '航运西路31号有一家海景旅店，经营者是年过古稀的老妇人梅芙。这家旅店有些不同寻常，无论是工作人员，还是投宿者，大多都是不健全的人。梅芙个性尖刻，言语带刺，在半个多世纪的岁月里一直守护着海景旅店。梅芙以为她将就此终老，然而平静的日子，最终被熟知梅芙过往的文森特的到访而打破。故事开始在梅芙的记忆中往返穿梭。梅芙有一个双胞胎妹妹，名为伊迪。伊迪天真、善良，有着天籁般的歌声，但却一直笨拙而喧闹，因为她是唐氏综合征患者。梅芙的父母坚决不愿将伊迪托付给精神病院照顾，他们无视世人狭隘的偏见和指责，尽可能地为姐妹二人提供平等的关注。然而母亲去世后，无助的父亲不顾梅芙的反对，选择将伊迪送往女修道院，而梅芙的命运也由此开始发生了翻天覆地的变化……那些从未宣之于口的话，轻轻说与你听。放不过的只是自己，放不下的唯爱而已。',
  cover: '/mock/books/cover6.jpg',
  releaseTime: '2018-04',
  overseas: false,
  recommend: false,
  score: -1,
  wish: 441,
  tracing: 404
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '时间的悖论',
  originalTitle: '关于时间与人生的科学',
  author: '菲利普·津巴多',
  translator: '张迪衡',
  publishingHouse: '中信出版集团',
  desc: '阅读本书前，你可以先思考如下问题：什么是时间？你可以更有效地利用时间吗？我们知道，财富有价，但时间无价。人生是短暂且有限的，而时间是我们度过一生的媒介。如果不能地充分地利用时间，那么我们将付出沉重的机会成本。我们对时间的态度形成了时间观。在生活中，我们所做的每一个重大选择，都取决于我们的时间观。因此，关于时间的问题本质上就是关于人生意义的问题。在《时间心理学》中，心理学家菲利普·津巴多和他的研究伙伴约翰·博伊德对时间观进行了深入研究，认为存在六种时间观：关注过去的消极时间观、关注过去的积极时间观、关注当下的宿命论时间观、关注当下的享乐主义时间观、关注未来的时间观、超越未来的时间观。此外，研究还发现：1.你的时间观决定了你的人生观2.偏激的时间观必会导致不健康的生活方式3.每个人都能够调整自己的时间观，从而拥有平衡的时间观。适度的未来时间观加上当下时间观，再辅以固定的积极怀旧时间观，这就是理想的组合时间观。如果你能根据情境灵活地转换时间观，就能有效地利用时间，拥有高效、健康的生活。',
  cover: '/mock/books/cover7.jpg',
  releaseTime: '2018-04',
  overseas: false,
  recommend: false,
  score: 7.5,
  wish: 544,
  tracing: 253
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '刺杀骑士团长',
  originalTitle: '',
  author: '村上春树',
  translator: '林少华',
  publishingHouse: '上海译文出版社',
  desc: '“我”，36岁，美术科班出身，原本爱好抽象画，多年来为了养家糊口成为专业肖像画画家。结婚六周年纪念日前，妻子毫无征兆地提出已有外遇，要求离婚，于是“我”独自离家开车在外游荡了一个半月，最终应好友雨田政彦之邀，住进小田原郊外山间其父雨田具彦的旧居兼画室，期待通过环境的改变调整心情。奇妙的事件就发生在搬家后不到八个月的时间里。雨田政彦帮“我”介绍了山下绘画班任教的工作，“我”和班里的两位人妻先后成了情人，经神秘邻居免色的精心策划, 和班上的少女真理惠也建立了密切联系。房子主人雨田具彦是著名日本画画家，“我”搬进那栋房子后不久，意外在阁楼发现了一幅雨田具彦不为世人所知的大师级作品，名为“刺杀骑士团长”。由此，“我”被卷入一系列不可思议的事件……夜半铃声与古庙洞口、神秘邻居免色涉与绘画班女学生秋川真理惠、“骑士团长”与“长面人”、现实世界与隐喻世界……村上春树用他擅长的层层剥开的写法，将读者步步引入奇妙之境。',
  cover: '/mock/books/cover8.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: false,
  score: 7.5,
  wish: 423,
  tracing: 439
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '夏日终曲',
  originalTitle: '',
  author: '安德烈·艾席蒙',
  translator: '吴妍蓉',
  publishingHouse: '外语教学与研究出版社',
  desc: '怎么样的渴望，能如此灼烧灵魂；怎么样的思念，能刺痛每一根神经末稍，想要靠近，不敢靠近；想要推开，不舍推开；当猛烈的火焰包裹住两人，这世上，只剩彼此搏搏狂跳的心。我喃喃向你说：请，以你的名呼唤我。',
  cover: '/mock/books/cover9.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: false,
  score: 8.7,
  wish: 971,
  tracing: 735
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '佛系：如何成为一个快乐的人',
  originalTitle: '',
  author: '草薙龙瞬',
  translator: '许天小',
  publishingHouse: '江苏凤凰文艺出版社',
  desc: '人生总与痛苦相伴，烦恼总是如影随形：工作不如意，觉得自己的工作没有价值。厌恶的事、不走运的事接踵而至，令人沮丧。和身旁的人性格不合，在人际交往中倍感压力。内心埋藏着一段无法忘却的沉重往事。因无法准确地表达自己的想法而感到压力。不知道今后的人生该如何活下去，总觉得不安。烦恼始于“心灵的反应”，痛苦源于“不满的心”。日式“佛系”快乐思考法，传授“清·简·行”的健康生活理念，帮助现代人缓解因社会压力、人际关系、资讯爆炸而带来的焦虑不安。清——清理内心多余的烦恼，感受“被欲望所驱使，感到不快乐”和“享受快乐”的两种心理状态：“快乐”是指感到喜悦或欢乐时的心理状态，也就是幸福。“不快乐”是指内心充满愤怒、恐惧或不安时的心理状态，也就是不幸福。简——简洁理性的正面思考，放下多余的执念、妄想，将合理的欲望转化为能量。行——践行重视快乐的生活方式，以“慈、悲、喜、舍”之心与世界相处，享受当下的圆满。',
  cover: '/mock/books/cover10.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: false,
  score: 6.9,
  wish: 755,
  tracing: 780
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '黎明之街',
  originalTitle: '',
  author: '东野圭吾',
  translator: '李超楠',
  publishingHouse: '南海出版公司',
  desc: '东野圭吾（ひがしのけいご），日本著名作家，1958年2月4日出生于日本大阪。毕业于大阪府立大学电气工学专业，之后在公司担任生产技术工程师，并开始推理小说的创作。1985年，凭借《放学以后》获得第31回江户川乱步奖，从此成为职业作家，开始专职写作。1999年，《秘密》获得第52回日本推理作家协会奖，入围第120届直木奖；此后《白夜行》、《暗恋》、《信》、《幻夜》四度入围直木奖；2006年，《嫌疑人X的献身》史无前例地将第134届直木奖、第6届本格推理小说大奖及当年度三大推理小说排行榜第1名一并斩获。早期作品多为精巧细致的本格推理，后期笔锋越发老辣，文字鲜加雕琢，叙述简练凶狠，情节跌宕诡异，故事架构几至匪夷所思的地步，擅长从极不合理之处写出极合理的故事，功力之深令世人骇然。代表作：《十一字杀人》《绑架游戏》《白夜行》《信》《侦探伽利略》等，多部作品已被改拍成电视剧或电影。',
  cover: '/mock/books/cover11.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: false,
  score: 7.4,
  wish: 428,
  tracing: 487
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '姑娘，你活得太硬了',
  originalTitle: '',
  author: '姚林君',
  translator: '',
  publishingHouse: '江苏凤凰文艺出版社',
  desc: '你足够了解自己吗？还是你以为的了解，其实只是一种误解？你以为自己生性保守，其实是因为没有创新的勇气；你以为自己贪图安稳，只是因为你未曾想过出门闯荡；你以为自己淡泊名利，其实只是因为穷而已。你的一生都在被洗脑，被他人的想法左右，你失去了所有尝试未知的机会。然而当你终于了解真正的自己，一切都已经太晚。姚林君的文字如芥末一般，让你醍醐灌顶，混沌的头脑瞬间清醒。真是所有活得很硬、假装坚强、低头走路的迷惘年轻人都应该看的一本书，她的文字掷地有声，从不拖泥带水，从她真挚无暇文字里，你一定能找到曾经懦弱胆小的自己和一直咬牙坚持的自己，并与之产生强烈共鸣。“别怕什么用力过猛，多试错才会成功。”',
  cover: '/mock/books/cover12.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: false,
  score: 7.4,
  wish: 629,
  tracing: 770
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '橘子不是唯一的水果',
  originalTitle: '',
  author: '珍妮特·温特森',
  translator: '于是',
  publishingHouse: '北京联合出版公司',
  desc: '在英国一个偏远的小镇，女孩珍妮特生长在一个信奉福音派新教的家庭里。母亲是一个偏执虔诚的教徒，喜欢将事物分成敌友两派。恶魔，邻居，性是她的敌人，而上帝，她家的狗，夏洛特·勃朗特的小说是她的好友。在母亲的教育下，教会活动成了她日常生活的一切。随着她慢慢成长，珍妮特发现自己与小镇和母亲的偏执并不和谐。于是，当她爱上了另外一个女孩，并且这种超出常规之外的爱被发现后，两者的矛盾爆发了。这场她人生中最初的爱恋在教会和母亲的阻止下无疾而终，但让珍妮特理解了内心的渴望。她离开了小镇和母亲，同时也带着这份决绝进入了她的成年。',
  cover: '/mock/books/cover13.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: true,
  score: 8.9,
  wish: 1528,
  tracing: 828
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '梦的花嫁',
  originalTitle: '',
  author: '岩井俊二',
  translator: '张苓',
  publishingHouse: '南海出版公司',
  desc: '胆小懦弱的七海忽然被公司辞退，慌不择路地与通过相亲网站认识的男人闪婚，然而婚后不久，七海便发现丈夫有出轨的迹象，同时落入婆婆设下的陷阱，被逐出家门。无处可去的七海四处求职，找到一份高薪工作，每月一百万日元，在一幢别墅内担任女仆。这栋房子极为诡异，处处凌乱奢华，养着许多剧毒生物。同是女仆的真白也极为神秘，经常夜不归宿，但工作拼命，即使高烧也不停歇。这一切都让七海百思不得其解，她究竟陷入了一个怎样的谜团？',
  cover: '/mock/books/cover14.jpg',
  releaseTime: '2018-03',
  overseas: false,
  recommend: true,
  score: 8.5,
  wish: 696,
  tracing: 434
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '葡萄牙的高山',
  originalTitle: '',
  author: '扬·马特尔',
  translator: '亚可',
  publishingHouse: '北京联合出版公司',
  desc: '一九〇四年，葡萄牙。有一天，托马斯开始倒着走路。在那之前，他失去了一生所爱——爱人、孩子和父亲。深陷痛苦泥沼中的他意外发现一本来自两百多年前葡萄牙殖民地的、尘封的神父日记，里面记载到，神父制作了一件“世间罕有”的圣物，后来辗转流落到了葡萄牙高山区。托马斯借了伯父的雷诺汽车，踏上寻找圣物的公路旅行……一九三八年的最后一天深夜，还有几个小时就到新年。病理医师欧塞比奥在解剖室邂逅了举止奇怪的妻子，她谈起阿加莎·克里斯蒂和《圣经》之间千丝万缕的联系。奇怪的客人随之而至——一位带着破旧手提箱，从葡萄牙高山区的小村庄跋涉而来的老妇，想要知道自己亡夫的讯息……一九八〇年。加拿大参议员保罗并不会知道，自己会在偶然造访的灵长目研究所与一只猿猴心意相通，也不会知道，当自己带着这只猿猴踏上寻根之旅时，自己的命运会与七十多年前的怪人托马斯联系在一起……每个人都在讲述自己的故事。穿透语言的迷雾，你将看到一个暗流汹涌、堆满镜子的世界。',
  cover: '/mock/books/cover15.jpg',
  releaseTime: '2017-11-01',
  overseas: false,
  recommend: true,
  score: 8.5,
  wish: 855,
  tracing: 366
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '南方高速',
  originalTitle: '科塔萨尔短篇小说全集2',
  author: '胡利奥·科塔萨尔',
  translator: '金灿,林叶青,陶玉平',
  publishingHouse: '南海出版公司',
  desc: '如果所有的事物都是独一无二的呢？如果所有的独一无二最终都指向一处呢？高速公路上持续多日的大堵车，令困守的车主们步入了另一重常态生活；摄影师在公园里偶然拍下一张照片，洗印的照片不断放大，第一印象被骇人的细节逐一摧毁；在古罗马行省的竞技场和现代的巴黎，两场三角恋情同步交错展开，最后消逝于同样的大火……在科塔萨尔笔下，现实与幻想交织，时空秩序犹如充满变化的万花筒，冥冥中存在奇异、神秘、荒诞的联系。与科塔萨尔的每一次相遇，都是一段独一无二的飞驰，一场华丽自由的冒险。',
  cover: '/mock/books/cover16.jpg',
  releaseTime: '2017-09',
  overseas: false,
  recommend: true,
  score: 8.6,
  wish: 1047,
  tracing: 894
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '灰猫奇异事务所',
  originalTitle: '',
  author: '康夫',
  translator: '',
  publishingHouse: '中信出版集团',
  desc: '一只灰猫撑起了一支侦探小分队！他带领着“失业科学家”和“三流编剧”两位人类“底层员工”，在人类世界和动植物的精怪世界之间展开了一场奇妙之旅。一个圆脸男人向我发出求助，转世到他家的麻团精灵总是一副怒气冲冲的样子，这究竟是怎么回事？供暖日来临的前几天总是异常寒冷，一天深夜灰猫突然把我叫醒。他说：“三流编剧，你立功的时候到了，我调查清楚了，有人在搞大事情。暖气君失踪了！”接下来，更离奇的事情发生了，作为啮齿类动物的银行坚果仓库的大面额栗子一夜间不翼而飞，动物界金融危机一触即发！这些故事充满了冒险、奇幻、诙谐、喜剧、温情，既贴近生活又放飞千里。《灰猫奇异事务所》是写给令人爱恨交加的城市的情书，希望它像冬天的烤地瓜，治愈每一个异乡漂泊者的伤痕。',
  cover: '/mock/books/cover17.jpg',
  releaseTime: '2017-08',
  overseas: false,
  recommend: true,
  score: 8.5,
  wish: 804,
  tracing: 294
});

books.push({
  id: guid(),
  cid: queryItem(categories, 'name', '书籍').id,
  title: '遗产',
  originalTitle: '',
  author: '露图·莫丹',
  translator: '来兹',
  publishingHouse: '后浪,北京联合出版公司',
  desc: '为了收回父母留下的一处房产，雷吉娜带着孙女米卡回到阔别六十七年的华沙。在这个对犹太人颇具意味的地方，两代人的矛盾不断。奶奶的举止也越发奇怪，米卡不禁开始怀疑奶奶回到这个伤心地的真正目的……',
  cover: '/mock/books/cover18.jpg',
  releaseTime: '2017-08',
  overseas: false,
  recommend: true,
  score: 8.3,
  wish: 739,
  tracing: 403
});







let mock = {
  'categories': function(params) {
    return categories;
  },
  'index/banners': function(params) {
    return index_banners;
  },
  // 获取电影信息
  'getVideoInfos': function({
    page = 1,
    count = 12,
    state = [0, 1],
    released = [true, false]
  } = {}) {
    let list = [];
    let startIndex = ((page - 1) * count);
    for (let i = startIndex; i < startIndex + count; i++) {
      if (!videos[i]) break;
      if (state.indexOf(videos[i].state) < 0 ||
        released.indexOf(videos[i].released) < 0) {
        startIndex++;
        continue;
      }

      let v = JSON.parse(JSON.stringify(videos[i]));
      if (v.tags === '') {
        v.tags = [];
      } else {
        v.tags = v.tags.split(',');
      }

      v.releaseTimeText = v.releaseTime.split('-');
      if (v.releaseTimeText[0] == new Date().getFullYear()) {
        v.releaseTimeText.shift();
        v.releaseTimeText = `${v.releaseTimeText[0]}月${v.releaseTimeText[1]}日`;
      } else {
        v.releaseTimeText = `${v.releaseTimeText[0].substr(2,2)}年${v.releaseTimeText[1]}月${v.releaseTimeText[2]}日`;
      }

      v.scoreText = v.score.toString();
      if (v.scoreText.indexOf('.') < 0) {
        v.scoreText += '.0';
      }

      list.push(v);
    }

    let allCount = 0;
    for (let i = 0; i < videos.length; i++) {
      if (state.indexOf(videos[i].state) < 0 ||
        released.indexOf(videos[i].released) < 0) {
        continue;
      }
      allCount++;
    }

    return {
      allCount,
      list
    };
  },
  // 获取电视剧信息
  'getTelethonInfos': function({
    page = 1,
    count = 12,
    overseas = false
  } = {}) {
    let list = [];
    let startIndex = ((page - 1) * count);
    for (let i = startIndex; i < startIndex + count; i++) {
      if (!telethon[i]) break;
      if (telethon[i].overseas != overseas) {
        startIndex++;
        continue;
      }

      let t = JSON.parse(JSON.stringify(telethon[i]));

      t.scoreText = t.score.toString();
      if (t.scoreText.indexOf('.') < 0) {
        t.scoreText += '.0';
      }

      list.push(t);
    }

    let allCount = 0;
    for (let i = 0; i < telethon.length; i++) {
      if (telethon[i].overseas != overseas) {
        continue;
      }
      allCount++;
    }

    return {
      allCount,
      list
    };
  },
  // 获取综艺信息
  'getVarietyInfos': function({
    page = 1,
    count = 12,
    overseas = false
  } = {}) {
    let list = [];
    let startIndex = ((page - 1) * count);
    for (let i = startIndex; i < startIndex + count; i++) {
      if (!variety[i]) break;
      if (variety[i].overseas != overseas) {
        startIndex++;
        continue;
      }

      let v = JSON.parse(JSON.stringify(variety[i]));

      v.scoreText = v.score.toString();
      if (v.scoreText.indexOf('.') < 0) {
        v.scoreText += '.0';
      }

      list.push(v);
    }

    let allCount = 0;
    for (let i = 0; i < variety.length; i++) {
      if (variety[i].overseas != overseas) {
        continue;
      }
      allCount++;
    }

    return {
      allCount,
      list
    };
  },
  // 获取书籍信息
  'getBookInfos': function({
    page = 1,
    count = 12,
    overseas = [true, false],
    recommend = [true, false],
  } = {}) {
    let list = [];
    let startIndex = ((page - 1) * count);
    for (let i = startIndex; i < startIndex + count; i++) {
      if (!books[i]) break;
      if (overseas.indexOf(books[i].overseas) < 0 ||
        recommend.indexOf(books[i].recommend) < 0) {
        startIndex++;
        continue;
      }

      let b = JSON.parse(JSON.stringify(books[i]));

      b.scoreText = b.score.toString();
      if (b.scoreText.indexOf('.') < 0) {
        b.scoreText += '.0';
      }

      list.push(b);
    }

    let allCount = 0;
    for (let i = 0; i < books.length; i++) {
      if (overseas.indexOf(books[i].overseas) < 0 ||
        recommend.indexOf(books[i].recommend) < 0) {
        continue;
      }
      allCount++;
    }

    return {
      allCount,
      list
    };
  },
  'index/category': function(params) {
    switch (params.cid) {
      // 电影
      case queryItem(categories, 'name', '电影').id:
        return [{
          cid: queryItem(categories, 'name', '电影').id,
          path: '/pages/videos/videos?released=true',
          title: '正在热映',
          showBtnBuy: true,
          showReleaseTime: false,
          layout: 'scroll',
          info: this.getVideoInfos()
        }, {
          cid: queryItem(categories, 'name', '电影').id,
          path: '/pages/videos/videos?released=false',
          title: '即将上映',
          showBtnBuy: false,
          showReleaseTime: true,
          layout: 'scroll',
          info: this.getVideoInfos({
            state: [-1, 0]
          })
        }];
        // 电视剧
      case queryItem(categories, 'name', '电视剧').id:
        return [{
          cid: queryItem(categories, 'name', '电视剧').id,
          path: '/pages/telethon/telethon?overseas=false',
          title: '正在热播',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'scroll',
          info: this.getTelethonInfos({
            overseas: false
          })
        }, {
          cid: queryItem(categories, 'name', '电视剧').id,
          path: '/pages/telethon/telethon?overseas=true',
          title: '海外热播剧',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'list',
          info: this.getTelethonInfos({
            overseas: true
          })
        }];
        // 综艺
      case queryItem(categories, 'name', '综艺').id:
        return [{
          cid: queryItem(categories, 'name', '综艺').id,
          path: '/pages/variety/variety?overseas=false',
          title: '最热综艺',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'scroll',
          info: this.getVarietyInfos({
            overseas: false
          })
        }, {
          cid: queryItem(categories, 'name', '综艺').id,
          path: '/pages/variety/variety?overseas=true',
          title: '海外热播综艺',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'list',
          info: this.getVarietyInfos({
            overseas: true
          })
        }];
        // 书籍
      case queryItem(categories, 'name', '书籍').id:
        return [{
          cid: queryItem(categories, 'name', '书籍').id,
          path: '/pages/books/books?recommend=false',
          title: '畅销书籍',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'scroll',
          info: this.getBookInfos({
            recommend: [true, false]
          })
        }, {
          cid: queryItem(categories, 'name', '书籍').id,
          path: '/pages/books/books?recommend=true',
          title: '小喵君推荐书籍',
          showBtnBuy: false,
          showReleaseTime: false,
          layout: 'list',
          info: this.getBookInfos({
            recommend: [true]
          })
        }];
    }
  }
};

module.exports = mock;