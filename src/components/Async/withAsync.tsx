import React, { ReactElement } from 'react';
import Loadable from 'react-loadable';
import { PageLoading } from '../Loading'

/**
 * 此处不返回任何值, 因为无需列举 Loadable
 * 所有的返回值
 */

function withAsync(component: () => Promise<
  React.ComponentType<any> | // React组件类型
  { default: React.ComponentType<any> } // 或者是个对象，这个对象的default属性是React组件类型
>) {
  return Loadable({
    loader: component,
    loading(): ReactElement {
      return <PageLoading placeholder="正在为您加载模块，请稍后..." />
    }
  })
}

export default withAsync;

/**
 * 懒加载的实现通常依赖于动态导入，在js里动态导入返回一个promise，这个promise在模块加载完成后解析为模块的内容
 * 所以这里才说接收【一个返回promise的函数】，因为要实现异步的懒加载！
 * 
 * 在此，promise有几个目的
 * 1. 返回一个promise，这个promise在模块加载完成后解析为模块的内容
 * 2. 在模块加载完成之前，返回一个组件，这个组件用于显示加载中的状态
 * 3. 在模块加载完成后，返回一个组件，这个组件用于显示加载完成后的内容
 * 
 * <>里，它将被解析成这两种类型其中之一 React组件类型
 */