XX课题组网站使用说明
========================

文件结构：
lab_site/
├── index.html          首页（大图 Banner + 简介 + 新闻）
├── research.html       研究方向
├── team.html           团队成员总览（Leader / 珠海全职教师 / 本部兼职教师 / 学生）
├── publications.html   论文 + 项目
├── news.html           新闻动态
├── contact.html        联系方式 + 留言
├── css/style.css       全站样式（改配色只需改顶部 :root 变量）
├── README.txt          本说明
├── en/                  英文版全站（每页导航有 中文 切换按钮）
└── teachers/
    ├── teacher-zhang.html   张三老师主页
    ├── teacher-li.html      李四老师主页
    └── teacher-wang.html    王五老师主页

使用方法：
1. 浏览器打开 index.html 即可浏览全站。
2. 全站搜索替换「XX」「XXX」为真实信息；图片把 placehold.co 链接换成真实照片。
3. 新增老师：复制 teachers/ 下任一页面改名，在 team.html 加一个头像卡片即可。
4. 部署：整个文件夹传到任意静态托管（学院服务器、GitHub Pages 等）。
5. 全站配色集中在 css/style.css 的 :root 变量（--accent 为点缀色）。
