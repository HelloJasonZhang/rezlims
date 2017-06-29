import modelExtend from 'dva-model-extend'
import { query } from '../services/rt'
import * as resCateogryService from '../services/resCategory'
import { pageModel } from './common'

export default modelExtend(pageModel, {

  namespace: 'rt',

  state: {
    resourceCategorys: [],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/rt') {
          dispatch({ type: 'query', payload: {
            paginate: true,
            ordering: '-id',
            ...location.query,
          } })
        }
      })
    },
  },

  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      const resCategorys = yield call(resCateogryService.query, {})
      console.log('resCategorys = ')
      console.log(resCategorys[0])
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.results,
            resourceCategorys: resCategorys,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.limit) || 10,
              total: data.count,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
