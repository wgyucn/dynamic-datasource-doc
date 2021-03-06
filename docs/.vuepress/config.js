module.exports = {
  base: "/",
  port: "3000",
  title: "Dynamic Datasource",
  description: "Dynamic Datasource",
  markdown: {
    lineNumbers: true,
  },
  locales: {
    "/en/": {
      lang: "en-US",
      title: "dynamic-datasource",
      description: "A dynamic-datasource based on the springBoot",
    },
    "/": {
      lang: "zh-CN",
      title: "动态数据源",
      description: "一个基于SpringBoot的动态多数据源组件",
    },
  },
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-9566603771819848",
        async: true,
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],
    ['script', {}, `
    var hm1 = document.createElement("script");
    hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-92550705-1";
    var s1 = document.getElementsByTagName("script")[0]; 
    s1.parentNode.insertBefore(hm1, s1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-92550705-1');
`]
  ],
  themeConfig: {
    repo: "baomidou/dynamic-datasource-spring-boot-starter",
    docsRepo: "dynamic-datasource/dynamic-datasource-doc",
    smoothScroll: true,
    editLinks: true,
    docsDir: 'docs',
    locales: {
      "/en/": {
        selectText: "Languages",
        label: "English",
        editLinkText: "Improve Doc",
        lastUpdated: "lastUpdated",
        nav: genNav(false),
        sidebar: {
          "/en/guide/": genGuideSidebar(false),
        },
      },
      "/": {
        selectText: "Language",
        label: "简体中文",
        editLinkText: "在Github上编辑此文档",
        lastUpdated: "上次更新",
        nav: genNav(true),
        sidebar: {
          "/guide/": genGuideSidebar(true),
        },
      },
    },
  },
};

function genNav(isZh) {
  return [
    {
      text:  isZh ?"生态":"Ecosystem",
      items: [
        {
          text: "MybatisPlus",
          link: "https://mybatis.plus/",
        },
        {
          text: "MybatisX插件",
          link: "https://github.com/baomidou/MybatisX",
        },
        {
          text: "Shuan 权限组件",
          link: "https://gitee.com/baomidou/shaun",
        },
        {
          text: "Kisso 单点登录",
          link: "https://github.com/baomidou/kisso",
        },
        {
          text: "Lock4j 分布式锁",
          link: "https://gitee.com/baomidou/lock4j-spring-boot-starter",
        },
        {
          text: "kaptcha 验证码启动器",
          link: "https://gitee.com/baomidou/kaptcha-spring-boot-starter",
        },
      ],
    },
    {
      text: isZh ? "示例项目" : "samples",
      link: "https://github.com/dynamic-datasource/dynamic-datasource-samples",
    },
    { text: isZh ? "捐赠" : "donate", link: "/guide/donate/" },
    { text: "委托开发", link: "/guide/develop/" },
  ];
}

function genGuideSidebar(isZh) {
  return [
    {
      title: isZh ? "核心" : "Core",
      collapsable: false,
      children: ["", "Star"],
    },
    {
      title: isZh ? "第三方集成" : "Integration",
      collapsable: false,
      children: [
        "integration/Druid",
        "integration/HikariCP",
        "integration/MybatisPlus",
        "integration/Jndi",
        "integration/P6spy",
        "integration/Quartz",
        "integration/ShardingJdbc",
      ],
    },
    {
      title: isZh ? "自定义" : "Customize",
      collapsable: false,
      children: [
        "customize/Annotation",
        "customize/Provider",
        "customize/Strategy",
      ],
    },
    {
      title: isZh ? "进阶使用" : "Advanced",
      collapsable: false,
      children: [
        "advance/Encode",
        "advance/Init-Schema-Data",
        "advance/Add-Remove-DataSource",
        "advance/Manual-Create-DataSource",
        "advance/Dynamic-Analysis-DataSource",
        "advance/Read-Write-Separation",
      ],
    },
    {
      title: isZh ? "事务专栏" : "Transaction",
      collapsable: false,
      children: [
        "tx/Questions",
        "tx/Local",
        "tx/Seata",
      ],
    },
    {
      title: "FAQ",
      collapsable: false,
      children: [
        "faq/Questions",
        "faq/Failed-Switch-Database",
        "faq/Debug-SourceCode",
      ],
    },
  ];
}
