import { IBreadcrumb } from "@/base-ui/breadcrumb"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export async function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // const routeFiles = require.context('../router/main', true, /\.ts/)
  const routeFiles = import.meta.glob("../router/main/**/**/*.ts")
  console.log("routeFiles", routeFiles)
  for (const path in routeFiles) {
    console.log("routepath", path)
    const mod = await routeFiles[path]()
    // .then((mod) => {
    //   console.log("mod", mod)
    const file = mod?.default
    console.log("file", file)
    allRoutes.push(file)
    // })
    // const route = require(path)
    // allRoutes.push(route.default)
  }

  // console.log("allRoutes", allRoutes)
  // routeFiles.keys().forEach((key) => {
  //   const route = require("../router/main" + key.split(".")[1])
  //   allRoutes.push(route.default)
  // })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    console.log("___allRoutes", allRoutes)
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
// export function _recurseGetRoute(menus: any[]) {
//   console.log("___allRoutes", allRoutes)
//   for (const menu of menus) {
//     if (menu.type === 2) {
//       const route = allRoutes.find((route) => route.path === menu.url)
//       if (route) routes.push(route)
//       if (!firstMenu) {
//         firstMenu = menu
//       }
//     } else {
//       _recurseGetRoute(menu.children)
//     }
//   }
// }
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
//   const breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }

//   return breadcrumbs
// }

// // /main/system/role  -> type === 2 对应menu
// export function pathMapToMenu(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//       const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
//       if (findMenu) {
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}

export { firstMenu }
