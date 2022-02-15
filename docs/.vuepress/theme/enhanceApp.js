function handleRedirectForCleanUrls(router, to) {
  if (isRouteExists(router, to.path)) {
    return to.path
  } else {
    if (!/(\/|\.html)$/.test(to.path)) {
      const endingSlashUrl = to.path + '/'
      const endingHtmlUrl = to.path + '.html'
      if (isRouteExists(router, endingHtmlUrl)) {
        return endingHtmlUrl
      } else if (isRouteExists(router, endingSlashUrl)) {
        return endingSlashUrl
      } else {
        return to.path
      }
    } else if (/\/$/.test(to.path)) {
      const endingHtmlUrl = to.path.replace(/\/$/, '') + '.html'
      if (isRouteExists(router, endingHtmlUrl)) {
        return endingHtmlUrl
      } else {
        return to.path
      }
    } else {
      return to.path
    }
  }
}

function isRouteExists(router, path) {
  const pathLower = path.toLowerCase()
  return router.options.routes.some(route => route.path.toLowerCase() === pathLower)
}

function handlePath(router, to) {
  const id = to.query.id
  const redirectPath = handleRedirectForCleanUrls(router, to)

  if (id) {
    return {
      path: redirectPath,
      hash: '#' + decodeURIComponent(id.toLowerCase())
    }
  }
  if (redirectPath !== to.path) {
    return {
      path: redirectPath,
      hash: decodeURIComponent(to.hash).toLowerCase()
    }
  }
  if (/\bREADME\b/.test(to.path)) {
    return {
      path: to.path.replace(/\bREADME\b/, ''),
      hash: decodeURIComponent(to.hash).toLowerCase()
    }
  }
}

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  let mounted = false
  const ScrollBehavior = 'instant'

  router.beforeHooks.unshift((to, from, next) => {
    next(handlePath(router, to))
  })

  router.options.scrollBehavior = function scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return window.scrollTo({
        top: savedPosition.y,
        behavior: ScrollBehavior,
      });
    }
    else if (to.hash) {
      if (Vue.$vuepress.$get('disableScrollBehavior')) {
        return false;
      }
      const selector = decodeURIComponent(to.hash)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!mounted) mounted = true
          const targetElement = document.querySelector(selector);
          if (targetElement) {
            return window.scrollTo({
              top: getElementPosition(targetElement).y,
              behavior: ScrollBehavior,
            });
          }
          return resolve(false);
        }, mounted ? 0 : 700)
      })
    }
    else {
      return window.scrollTo({
        top: 0,
        behavior: ScrollBehavior,
      });
    }
  }
}

function getElementPosition(el) {
  const docEl = document.documentElement;
  const docRect = docEl.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top,
  };
}