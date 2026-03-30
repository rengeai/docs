/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  gettingStartedSidebar: [
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
      label: "路线图",
      items: [
        "roadmap/路线图总览",
        "roadmap/MVP范围与模块",
        "roadmap/第一版本落地顺序",
        "roadmap/需求计划总览",
        "roadmap/需求-单公司单项目闭环",
        "roadmap/需求-公司级更新播报者",
        "roadmap/需求-代码审查代理",
        "roadmap/需求-TypeScript研发者"
      ]
    },
    {
      type: "category",
      label: "计划提案库",
      items: [
        "plan/README",
        "plan/CONTRIBUTING",
        "plan/PLAN-0001-提案流程与模板",
        "plan/PLAN-0002-产品设计阶段"
      ]
    },
    {
      type: "category",
      label: "构建博客",
      items: [
        "blog/README",
        "blog/2026-03-30渐进式优化，而不是造轮子"
      ]
    }
  ],
  productGuideSidebar: [
    {
      type: "category",
      label: "AI 代理",
      items: [
        {
          type: "doc",
          id: "ai/agents/template/README",
          label: "文件体系规范"
        },
        {
          type: "category",
          label: "Problem Agent",
          items: [
            { type: "doc", id: "ai/agents/Problem/ProblemAgent/IDENTITY", label: "身份定义" },
            { type: "doc", id: "ai/agents/Problem/ProblemAgent/SOUL", label: "行为风格" },
            { type: "doc", id: "ai/agents/Problem/ProblemAgent/AGENTS", label: "运行规则" }
          ]
        },
        {
          type: "category",
          label: "Validator Agent",
          items: [
            { type: "doc", id: "ai/agents/Problem/ValidatorAgent/AGENTS", label: "运行规则" }
          ]
        },
        {
          type: "category",
          label: "ProblemOwner Agent",
          items: [
            { type: "doc", id: "ai/agents/Problem/ProblemOwnerAgent/AGENTS", label: "运行规则" }
          ]
        },
        {
          type: "category",
          label: "Product Agent",
          items: [
            { type: "doc", id: "ai/agents/ProductAgent/IDENTITY", label: "身份定义" },
            { type: "doc", id: "ai/agents/ProductAgent/SOUL", label: "行为风格" },
            { type: "doc", id: "ai/agents/ProductAgent/AGENTS", label: "运行规则" },
            { type: "doc", id: "ai/agents/ProductAgent/assets/OUTPUT_TEMPLATE", label: "输出模板" }
          ]
        },
        {
          type: "category",
          label: "ROI Agent",
          items: [
            { type: "doc", id: "ai/agents/ROIAgent/IDENTITY", label: "身份定义" },
            { type: "doc", id: "ai/agents/ROIAgent/SOUL", label: "行为风格" },
            { type: "doc", id: "ai/agents/ROIAgent/AGENTS", label: "运行规则" },
            { type: "doc", id: "ai/agents/ROIAgent/assets/OUTPUT_TEMPLATE", label: "输出模板" }
          ]
        },
        {
          type: "category",
          label: "TaskDecomposer Agent",
          items: [
            { type: "doc", id: "ai/agents/TaskDecomposerAgent/AGENTS", label: "运行规则" },
            { type: "doc", id: "ai/agents/TaskDecomposerAgent/assets/OUTPUT_TEMPLATE", label: "输出模板" }
          ]
        }
      ]
    },
    {
      type: "category",
      label: "AI 技能",
      items: [
        { type: "doc", id: "ai/skills/create-skill/SKILL", label: "创建技能" },
        { type: "doc", id: "ai/skills/git-commit/SKILL", label: "Git 提交" },
        { type: "doc", id: "ai/skills/gitlab-cli/SKILL", label: "GitLab CLI" }
      ]
    },
    {
      type: "category",
      label: "用例",
      items: [
        "tutorials/运行示例-研发需求交付",
        "tutorials/运行示例-产品方案设计",
        "tutorials/运行示例-线上故障事件响应",
        {
          type: "category",
          label: "需求设计试运行",
          items: [
            { type: "doc", id: "tutorials/2026-03-30 需求设计试运行/Problem-回复", label: "Problem 回复" },
            { type: "doc", id: "tutorials/2026-03-30 需求设计试运行/Validator-回复", label: "Validator 回复" },
            { type: "doc", id: "tutorials/2026-03-30 需求设计试运行/ProblemOwner-回复1", label: "ProblemOwner 回复 1" },
            { type: "doc", id: "tutorials/2026-03-30 需求设计试运行/ProblemOwner-回复2", label: "ProblemOwner 回复 2" },
            { type: "doc", id: "tutorials/2026-03-30 需求设计试运行/Product-回复", label: "Product 回复" }
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
