import { defineConfig } from 'docs-sync-cli';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'unidocs-zh',

  cacheDir: '.docs-sync-cache',

  sources: {
    common: {
      repo: isDev ? '/Users/lxh/DCloud/git_projects/docs-common' : 'https://gitcode.com/dcloud/docs-common.git',
      branch: 'main',
    }
  },

  mappings: [
    // ai
    {
      from: 'common:ai/_sidebar.md',
      to: 'docs/ai/_sidebar.md',
    },
    {
      from: 'common:ai/auto-test.md',
      to: 'docs/ai/auto-test.md',
    },
    {
      from: 'common:ai/github-copilot.md',
      to: 'docs/ai/github-copilot.md',
    },
    {
      from: 'common:ai/README.md',
      to: 'docs/ai/README.md',
    },
    // worktile
    {
      from: 'common:worktile/_sidebar.md',
      to: 'docs/worktile/_sidebar.md',
    },
    {
      from: 'common:worktile/CI.md',
      to: 'docs/worktile/CI.md',
    },
    {
      from: 'common:worktile/CLI.md',
      to: 'docs/worktile/CLI.md',
    },
    {
      from: 'common:worktile/git-svn.md',
      to: 'docs/worktile/git-svn.md',
    },
    {
      from: 'common:worktile/README.md',
      to: 'docs/worktile/README.md',
    },
    {
      from: 'common:worktile/running-env.md',
      to: 'docs/worktile/running-env.md',
    },
    {
      from: 'common:worktile/auto/api.md',
      to: 'docs/worktile/auto/api.md',
    },
    {
      from: 'common:worktile/auto/hbuilderx-cli-uniapp-test.md',
      to: 'docs/worktile/auto/hbuilderx-cli-uniapp-test.md',
    },
    {
      from: 'common:worktile/auto/quick-start.md',
      to: 'docs/worktile/auto/quick-start.md',
    },
    {
      from: 'common:worktile/auto/uniapp-cli-project.md',
      to: 'docs/worktile/auto/uniapp-cli-project.md',
    },
    {
      from: 'common:worktile/auto/hbuilderx-extension/index.md',
      to: 'docs/worktile/auto/hbuilderx-extension/index.md',
    },
    // plugin
    {
      from: 'common:plugin/_sidebar.md',
      to: 'docs/plugin/_sidebar.md',
    },
    {
      from: 'common:plugin/README.md',
      to: 'docs/plugin/README.md',
    },
    {
      from: 'common:plugin/language.md',
      to: 'docs/plugin/language.md',
    },
    {
      from: 'common:plugin/native-covert-uts.md',
      to: 'docs/plugin/native-covert-uts.md',
    },
    {
      from: 'common:plugin/native-plugin.md',
      to: 'docs/plugin/native-plugin.md',
    },
    {
      from: 'common:plugin/oath.md',
      to: 'docs/plugin/oath.md',
    },
    {
      from: 'common:plugin/plugin-ext-introduction.md',
      to: 'docs/plugin/plugin-ext-introduction.md',
    },
    {
      from: 'common:plugin/publish.md',
      to: 'docs/plugin/publish.md',
    },
    {
      from: 'common:plugin/sell.md',
      to: 'docs/plugin/sell.md',
    },
    {
      from: 'common:plugin/uni_modules.md',
      to: 'docs/plugin/uni_modules.md',
    },
    {
      from: 'common:plugin/uts-component-compatible.md',
      to: 'docs/plugin/uts-component-compatible.md',
    },
    {
      from: 'common:plugin/uts-component-vue.md',
      to: 'docs/plugin/uts-component-vue.md',
    },
    {
      from: 'common:plugin/uts-component.md',
      to: 'docs/plugin/uts-component.md',
    },
    {
      from: 'common:plugin/uts-for-android.md',
      to: 'docs/plugin/uts-for-android.md',
    },
    {
      from: 'common:plugin/uts-for-harmony.md',
      to: 'docs/plugin/uts-for-harmony.md',
    },
    {
      from: 'common:plugin/uts-for-ios.md',
      to: 'docs/plugin/uts-for-ios.md',
    },
    {
      from: 'common:plugin/uts-ios-cocoapods.md',
      to: 'docs/plugin/uts-ios-cocoapods.md',
    },
    {
      from: 'common:plugin/uts-ios-spms.md',
      to: 'docs/plugin/uts-ios-spms.md',
    },
    {
      from: 'common:plugin/uts-plugin-hybrid.md',
      to: 'docs/plugin/uts-plugin-hybrid.md',
    },
    {
      from: 'common:plugin/uts-plugin.md',
      to: 'docs/plugin/uts-plugin.md',
    },
    {
      from: 'common:plugin/uts-uni-api.md',
      to: 'docs/plugin/uts-uni-api.md',
    },
    {
      from: 'common:plugin/faq/faq.md',
      to: 'docs/plugin/faq/faq.md',
    },
  ],
});
