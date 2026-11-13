/* ===== 新闻卡片渲染：首页与新闻列表页共用 =====
   容器元素：<div class="news-grid" data-news-count="3"> 或 data-news-count="all"
   页面位于 news/ 目录内时，站内路径自动加 ../ 前缀。
   每条新闻只有一个目标链接：独立新闻稿页 / 外部网页（link），
   或通用详情页 detail.html?id=xxx（无 link 时）。
*/
(function () {
  var IN_NEWS_DIR = /\/news\//.test(location.pathname);
  var ROOT = IN_NEWS_DIR ? "../" : "";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function isExternal(href) {
    return /^(https?:)?\/\//.test(href) || href.indexOf("mailto:") === 0;
  }

  function resolveHref(href) {
    if (!href || isExternal(href) || href.charAt(0) === "#" || href.charAt(0) === "/") {
      return href;
    }
    return ROOT + href;
  }

  function targetUrl(item) {
    if (item.link) {
      return resolveHref(item.link);
    }
    return (IN_NEWS_DIR ? "detail.html?id=" : "news/detail.html?id=") +
      encodeURIComponent(item.id);
  }

  function cardHtml(item) {
    var url = targetUrl(item);
    var img = item.image
      ? '<a href="' + esc(url) + '">' +
        '<img class="news-photo" src="' + esc(resolveHref(item.image)) + '" alt="' + esc(item.title) + '"></a>'
      : "";
    return (
      '<article class="news-card">' +
      img +
      '<h3><a href="' + esc(url) + '">' + esc(item.title) + "</a></h3>" +
      '<p class="news-date"><time>' + esc(item.date) + "</time></p>" +
      "<p>" + esc(item.lead) + "</p>" +
      '<a class="read-more" href="' + esc(url) + '">' + esc(item.linkText || "新闻详情") + "</a>" +
      "</article>"
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    var items = window.NEWS_ITEMS || [];
    document.querySelectorAll(".news-grid[data-news-count]").forEach(function (el) {
      var count = el.getAttribute("data-news-count");
      var list = count === "all" ? items : items.slice(0, parseInt(count, 10) || 3);
      el.innerHTML = list.map(cardHtml).join("");
    });
  });
})();
