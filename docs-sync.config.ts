import { defineConfig } from 'docs-sync-cli';

const isDev = process.env.NODE_ENV === 'development';

interface FileMapping {
  from: string;
  to: string;
}

function createSyncMapping(files: (string | FileMapping)[]) {
  return files.map(file => {
    if (typeof file === 'string') {
      return {
        from: `common:${file}`,
        to: `docs/${file}`,
      }
    } else {
      return {
        from: `common:${file.from}`,
        to: `docs/${file.to}`,
      }
    }
  });
}

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
    ...createSyncMapping([
      'ai/_sidebar.md',
      'ai/auto-test.md',
      'ai/github-copilot.md',
      'ai/README.md',
      'ai/hbuilderx-ai-chat.md',
      'ai/uni-agent.md',
      'ai/vibe-partner.md',
      'ai/use-ui-mcp.md',
      'ai/personal-subscription.md',
      'ai/enterprise-subscription.md',
    ]),
    // worktile
    ...createSyncMapping([
      'worktile/_sidebar.md',
      'worktile/git-svn.md',
      'worktile/README.md',
      'worktile/running-env.md',
      'worktile/auto/api.md',
      'worktile/auto/hbuilderx-cli-uniapp-test.md',
      'worktile/auto/quick-start.md',
      'worktile/auto/uniapp-cli-project.md',
      'worktile/auto/hbuilderx-extension/index.md',
      'worktile/CLI.md',
      'worktile/CI.md'
    ]),
    // plugin
    ...createSyncMapping([
      'plugin/_sidebar.md',
      'plugin/README.md',
      'plugin/language.md',
      'plugin/native-covert-uts.md',
      'plugin/oath.md',
      'plugin/plugin-ext-introduction.md',
      'plugin/publish.md',
      'plugin/sell.md',
      'plugin/uni_modules.md',
      'plugin/uts-component-compatible.md',
      'plugin/uts-component-vue.md',
      'plugin/uts-component.md',
      'plugin/uts-for-android.md',
      'plugin/uts-for-harmony.md',
      'plugin/uts-for-ios.md',
      'plugin/uts-ios-cocoapods.md',
      'plugin/uts-ios-spms.md',
      'plugin/uts-plugin-hybrid.md',
      'plugin/uts-plugin.md',
      'plugin/uts-uni-api.md',
      'plugin/faq/faq.md',
      'plugin/native-plugin.md'
    ]),
    // tutorial
    ...createSyncMapping([
      'tutorial/err-spec.md',
      'tutorial/platform.md',
      'tutorial/env.md',
      'tutorial/CORS.md',
      'tutorial/adapt.md',
      'tutorial/page-static-assets.md',
      'tutorial/app-nativeresource-android.md',
      'tutorial/app-nativeresource-ios.md',
      'tutorial/run/run-app.md',
      'tutorial/run/uts-development-android.md',
      'tutorial/run/uts-development-ios.md',
      'tutorial/debug/uni-uts-debug.md',
      'tutorial/debug/uni-uts-debug-ios.md',
      'tutorial/debug/uni-uts-debug-harmony.md',
      'tutorial/harmony/runbuild.md',
      'tutorial/app-privacy-detect.md',
      'tutorial/app-sec-android.md',
      'tutorial/app-sec-api.md',
      'tutorial/app-sec-confusion.md',
      'tutorial/app-security.md',
      'tutorial/djbh.md',
      'tutorial/safe.md',
    ]),
    // collocation
    ...createSyncMapping([
      'collocation/main.md',
      'collocation/uni-scss.md',
    ]),
    // uni-publish
    ...createSyncMapping([
      'uni-publish/faq.md',
      'uni-publish/first.md',
      'uni-publish/intro.md',
      'uni-publish/update.md',
      'uni-publish/config.md',
    ]),
    // uni-push
    ...createSyncMapping([
      {
        from: 'uni-push/intro.md',
        to: 'unipush.md',
      },
      {
        from: 'uni-push/v2.md',
        to: 'unipush-v2.md',
      },
      {
        from: 'uni-push/vendor_config.md',
        to: 'unipush_vendor_config.md',
      },
      'uni-push/open.md',
      'uni-push/google-fcm.md',
    ])
  ],
});
