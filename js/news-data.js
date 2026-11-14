/* ===== 新闻数据：全站唯一数据源 =====
   新增新闻：在数组【最前面】追加一个对象即可，
   首页前三条、新闻列表页会自动更新。
   - id       唯一标识
   - date     显示用日期
   - title    标题
   - image    配图路径（无图填 ""）
   - lead     摘要（卡片上显示）
   - link     整条新闻的目标链接：独立新闻稿页面 / 论文等外部网页；
              无 link 的新闻则使用通用详情页 detail.html?id=xxx
   - linkText 卡片底部链接文字（默认「新闻详情」）
   - body     通用详情页正文，数组中每个字符串为一段
*/
window.NEWS_ITEMS = [
  {
    id: "andreev-qubit-readout-2026",
    date: "2026-11-10",
    title: "我们团队在 Andreev 量子比特近无损读出研究方面取得重要进展",
    image: "figures/news/andreev_scheme.jpg",
    lead: "我们团队姚裕贵院士、张先鹏研究员与巴西圣保罗大学 Jose Carlos Egues 教授在超导量子测量领域取得重要进展，提出基于动态干涉超导电流的 Andreev 量子比特读出新方案，成果发表于《Physical Review B》并获多家国际科学媒体报道。",
    link: "news/andreev-qubit-readout.html",
    linkText: "新闻详情",
    body: [
      "近日，北京理工大学姚裕贵院士、张先鹏研究员与巴西圣保罗大学 Jose Carlos Egues 教授在超导量子测量领域取得重要进展。研究团队提出了一种基于动态干涉超导电流（dynamic interference supercurrent）的 Andreev 量子比特读出新方案，相关成果发表于《Physical Review B》114, L080502 (2026)。"
    ]
  },
  {
    id: "welcome-2026",
    date: "2026-09-15",
    title: "欢迎新同学加入课题组！",
    image: "figures/news/welcome_2026.jpg",
    lead: "金秋九月，课题组迎来了新一级研究生同学。新成员的加入为团队注入了新的活力，期待大家在量子材料研究的广阔天地中收获成长，与团队共同进步！",
    link: "",
    linkText: "新闻详情",
    body: [
      "金秋九月，课题组迎来了新一级研究生同学。新成员的加入为团队注入了新的活力。",
      "课题组为每位新同学配备了导师并制定了个性化培养方案。期待大家在量子材料研究的广阔天地中收获成长，与团队共同进步！",
      "课题组每年招收博士生、硕士生数名，常年招聘博士后，欢迎具有凝聚态物理、材料物理等背景的同学和青年学者通过「联系我们」页面与我们取得联系。"
    ]
  },
  {
    id: "prl-altermagnet-2025",
    date: "2025-12",
    title: "张先鹏老师在 Physical Review Letters 发表论文",
    image: "papers/2025/PRL_zhang_2025.jpg",
    lead: "课题组在交错磁体（altermagnet）各向异性磁电阻理论方面取得重要进展，相关成果以“Theory of Anisotropic Magnetoresistance in Altermagnets and Its Applications”为题发表于《物理评论快报》（Physical Review Letters）。",
    link: "https://journals.aps.org/prl/abstract/10.1103/32zc-ggjy",
    linkText: "阅读论文",
    body: [
      "课题组在交错磁体（altermagnet）各向异性磁电阻理论方面取得重要进展。研究建立了描述交错磁体中各向异性磁电阻的微观理论框架，并探讨了其在自旋电子学器件中的应用前景。",
      "相关成果以“Theory of Anisotropic Magnetoresistance in Altermagnets and Its Applications”为题发表于《物理评论快报》（Physical Review Letters 135, 266706）。",
      "论文作者：Xian-Peng Zhang, Wanxiang Feng*, Run-Wu Zhang, Xiaolong Fan, Xiangrong Wang*, and Yugui Yao*。"
    ]
  }
];
