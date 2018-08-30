
; (async function () {

  const yawf = window.yawf;
  const util = yawf.util;
  const rule = yawf.rule;

  const about = yawf.rules.about;

  const i18n = util.i18n;
  i18n.aboutScriptGroupTitle = {
    cn: '关于',
    hk: '關於',
    tw: '關於',
    en: 'About',
  };

  const script = about.script = {};
  script.script = rule.Group({
    parent: about.about,
    template: () => i18n.aboutScriptGroupTitle,
  });

  i18n.aboutText = {
    cn: '当前扩展正在开发之中，如欲贡献代码请联系 {{scriptWeibo}}。',
    tw: '當前擴充套件正在開發，如慾參與編碼或翻譯工作請聯絡 {{scriptWeibo}}。',
    en: 'This extension is under construction. Please contact {{scriptWeibo}} if you want contribute coding or translations.',
  };

  script.text = rule.Text({
    parent: script.script,
    template: () => i18n.aboutText,
    ref: {
      scriptWeibo: {
        render() {
          const link = document.createElement('a');
          link.href = 'https://weibo.com/yawfscript';
          link.title = 'YAWF脚本';
          link.textContent = '@YAWF脚本';
          link.setAttribute('usercard', 'id=5601033111');
          return link;
        },
      },
    },
    rendered(container) {
      const image = new Image(64, 64);
      image.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTYgOTYiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiI+CiAgPHBhdGggZmlsbD0iI0Q5MkQzQSIgZD0iTTEyLDU0YzExLjY4Ny0wLjU3NiwyMS4xOTctMC4xNDMsMjQuNzUsNy41YzMuMzk4LDUuNzAxLDAuMTkxLDEzLjA3NS0xLjUsMThjMy45MzYsMC43MDUsNi4xNjQsMi4wMTIsOC4yNSw0LjVjLTEwLjQ5OSwwLTIxLjAwMSwwLTMxLjUsMEMxMiw3NC4wMDEsMTIsNjMuOTk5LDEyLDU0eiIvPgogIDxwYXRoIGZpbGw9IiNFOThENDkiIGQ9Ik03MS4zNjYsMjguOTExYy0xMS4yMDQtMTMuMjYtMjcuNzMtMTguMzE1LTQyLjk4NC0xNC44NTNoLTAuMDA2Yy0zLjUzLDAuODA3LTUuNzgsNC41MTMtNS4wMjQsOC4yNzRjMC43NTIsMy43NjQsNC4yMjQsNi4xNjksNy43NTMsNS4zNjZjMTAuODUyLTIuNDYsMjIuNTk1LDEuMTM4LDMwLjU2LDEwLjU1OGM3Ljk1Nyw5LjQxOSwxMC4xMTksMjIuMjY2LDYuNzExLDMzLjUyOGwwLjAwMiwwLjAwMmMtMS4xMTEsMy42NjksMC43NjksNy41OTMsNC4yMSw4Ljc3OWMzLjQyNywxLjE4NSw3LjExMS0wLjgxOSw4LjIyMy00LjQ3OWMwLTAuMDA3LDAtMC4wMjEsMC4wMDItMC4wMjdDODUuNTk1LDYwLjIxNyw4Mi41NzQsNDIuMTU4LDcxLjM2NiwyOC45MTFNNTQuMTYxLDQ1LjQ4NmMtNS40NTMtNi40NTgtMTMuNTA1LTguOTExLTIwLjkzOC03LjIyNGMtMy4wMzgsMC42OTEtNC45NzQsMy44ODMtNC4zMjIsNy4xMjhjMC42NSwzLjIzMiwzLjYzNyw1LjMwOSw2LjY2OCw0LjYwNXYwLjAwN2MzLjYzMy0wLjgyLDcuNTczLDAuMzc2LDEwLjIzOSwzLjUyN2MyLjY2OSwzLjE1OCwzLjM4Niw3LjQ2LDIuMjQxLDExLjIzNWgwLjAwNmMtMC45NTIsMy4xNTEsMC42NjQsNi41MzksMy42MTgsNy41NmMyLjk1NSwxLjAxLDYuMTI1LTAuNzEsNy4wNzktMy44NjlDNjEuMDg2LDYwLjczOSw1OS42MjUsNTEuOTQzLDU0LjE2MSw0NS40ODYiLz4KPC9zdmc+Cg==';
      image.style.cssFloat = 'right';
      container.appendChild(image);
      return container;
    },
  });

}());