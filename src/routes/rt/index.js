import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import List from './List'
import Filter from './Filter'

const Index = ({ rt, dispatch, loading, location }) => {
  const { list, resourceCategorys, pagination } = rt
  const { query = {}, pathname } = location
  console.log('resourceCategorys')
  console.log(resourceCategorys)

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
          offset: (page.current - 1) * page.pageSize,
          limit: page.pageSize,
        },
      }))
    },
  }
  const filterProps = {
    filter: {
      ...location.query,
    },
    resCategorys: resourceCategorys,
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize: 10,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/rt',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/rt',
      }))
    },
    onAdd () {
      dispatch({
        type: 'user/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion () {
      dispatch({ type: 'user/switchIsMotion' })
    },
  }

  return (<div className="content-inner">
    <Filter {...filterProps} />
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
