import React from 'react'
import { Table } from 'antd'
import styles from './List.less'

const List = ({ ...tableProps }) => {
  const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '货号',
    dataIndex: 'part_number',
    key: 'part_number',
  }, {
    title: '单位',
    dataIndex: 'uom_name',
    key: 'uom_name',
  }, {
    title: '类别',
    dataIndex: 'category_name',
    key: 'category_name',
  }, {
    title: '描叙',
    dataIndex: 'description',
    key: 'description',
  }]

/*  const dataSource = [{
    id: 1,
    part_number: 'sample-batch',
    category_name: 'SAMPLE_BATCH',
    description: 'Sample Batch contains list of planned source samples',
    uom_name: 'unit',
  }, {
    id: 2,
    part_number: 'sample-batch',
    category_name: 'SAMPLE_BATCH',
    description: 'Sample Batch contains list of planned source samples',
    uom_name: 'unit',
  }, {
    id: 3,
    part_number: 'sample-batch',
    category_name: 'SAMPLE_BATCH',
    description: 'Sample Batch contains list of planned source samples',
    uom_name: 'unit',
  }]*/

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List
