import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import List from './List'

const Index = ({ rt, dispatch, loading, location }) => {
  console.log(rt)
  const { list, pagination } = rt
  const { query = {}, pathname } = location

  const listProps = {
    pagination,
    dataSource: list,
    loading: loading.effects['rt/query'],
    onChange (page) {
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
  }

  return (<div className="content-inner">
    <List {...listProps} />
  </div>)
}

Index.propTypes = {
  rt: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ rt, loading }) => ({ rt, loading }))(Index)
