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
  ],
});
