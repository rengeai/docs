/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "基础框架",
      items: [
        "项目愿景与理念",
        "产品蓝图与功能板块",
        "组织与权限模型",
        "研发协作体系",
        "OKR-管理机制",
        "代理运行与治理机制",
        "角色职责权限与沟通框架",
        "术语表"
      ]
    },
    {
      type: "category",
      label: "运行示例",
      items: [
        "运行示例-研发需求交付",
        "运行示例-产品方案设计",
        "运行示例-线上故障事件响应"
      ]
    }
  ]
};

module.exports = sidebars;
