import React, { ReactElement } from 'react'
import { Spin } from 'antd'
import styles from './PageLoading.module.less'
interface Iprops {
  placeholder: string
}

const PageLoading = (props: Iprops): ReactElement => {
  const { placeholder } = props
  return (
    <div className={styles.container}>
      <Spin size="large" />
      <p className={styles.placeholder}>{placeholder}</p>
    </div>
  )
}
export default PageLoading
