量子材料珠港澳国际研究团队网站使用说明
========================================

文件结构：
lab_site/
├── index.html          首页（大图 Banner + 简介 + 最近新闻三卡片）
├── research.html       研究方向
├── team.html           团队成员总览（Leader / 珠海全职教师 / 本部兼职教师 / 学生）
├── publications.html   论文（预印本 + 按年份发表论文）
├── facilities.html     实验设施
├── contact.html        联系方式 + 招生招聘
├── news/               新闻文件夹（所有新闻稿都放这里）
│   ├── index.html      新闻动态列表页（蓝色通栏 + 图文卡片）
│   ├── detail.html     通用新闻详情页（按 ?id= 渲染 js/news-data.js 中的正文）
│   └── andreev-qubit-readout.html  Andreev 量子比特读出专题新闻页（独立排版）
├── js/
│   ├── news-data.js    新闻数据（新增新闻在数组最前面加一条）
│   └── news-render.js  新闻卡片渲染（首页与新闻列表页共用）
├── css/style.css       全站样式（改配色只需改顶部 :root 变量）
├── figures/            人物照片与封面图
│   ├── avatars/        统一裁剪的圆形头像（团队页使用）
│   ├── news/           新闻配图
│   └── Affiliated/     本部兼职教师原始照片
├── papers/             论文 PDF 与配图（按年份 / arXiv 分目录）
├── doc/                文档（招聘启事、新闻稿 docx 等）
└── README.txt          本说明

使用方法：
1. 浏览器打开 index.html 即可浏览全站。
2. 新增新闻：在 js/news-data.js 数组最前面加一条（id / 日期 / 标题 /
   配图 / 摘要 / 正文），首页前三条与新闻列表页自动更新；
   长篇新闻稿可在 news/ 文件夹新建独立排版页面，并把该条新闻的
   link 指向它（参考 news/andreev-qubit-readout.html）。
3. 更换老师头像：替换 figures/avatars/ 下同名 jpg 即可（已统一为
   正方形居中裁剪，替换时保持人脸居中、头顶留白一致）。
4. 部署：整个文件夹传到任意静态托管（学院服务器、GitHub Pages 等）。
5. 全站配色集中在 css/style.css 的 :root 变量（--accent 为点缀色）。
