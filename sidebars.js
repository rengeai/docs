/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "设计哲学",
      items: [
        "philosophy/项目愿景与理念",
        "philosophy/组织与权限模型",
        "philosophy/研发协作体系",
        "philosophy/OKR管理机制",
        "philosophy/代理运行与治理机制",
        "philosophy/角色职责权限与沟通框架",
        "philosophy/术语表"
      ]
    },
    {
      type: "category",
      label: "用例",
      items: [
        "tutorials/运行示例-研发需求交付",
        "tutorials/运行示例-产品方案设计",
        "tutorials/运行示例-线上故障事件响应"
      ]
    },
    {
      type: "category",
      label: "路线图",
      items: [
        "roadmap/路线图总览",
        "roadmap/MVP范围与模块",
        "roadmap/第一版本落地顺序",
        "roadmap/需求计划总览",
        "roadmap/需求-公司级更新播报者",
        "roadmap/需求-代码审查代理",
        "roadmap/需求-TypeScript研发者"
      ]
    }
  ]
};

module.exports = sidebars;
