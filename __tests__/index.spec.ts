import { handleReducers, handleActions } from '../src';

describe('handleReducers', () => {
  it('should return reducers tree by given input object', () => {
    const apis = {
      fetchTodos: {
        reducer: 'todosReducer',
        config: {
          statePath: 'data.todos',
        },
      },
      fetchUsers: {
        reducer: 'usersReducer',
        config: {
          statePath: 'data.users',
        },
      },
      fetchRecentArticles: {
        reducer: 'recentArticles',
        config: {
          statePath: 'data.articles.recent',
        },
      },
      fetchPopularArticles: {
        reducer: 'popularArticles',
        config: {
          statePath: 'data.articles.popular',
        },
      },
      fetchNotifications: {
        reducer: 'notificationsReducer',
        config: {
          statePath: 'notifications',
        },
      },
      fetchIndexPage: {
        reducer: 'indexPageReducer',
        config: {},
      },
    };
    expect(handleReducers(apis)).toEqual({
      data: {
        articles: {
          recent: 'recentArticles',
          popular: 'popularArticles',
        },
        users: 'usersReducer',
        todos: 'todosReducer',
      },
      notifications: 'notificationsReducer',
    });
  });
});

describe('handleActions', () => {
  it('should return actions creators object', () => {
    const apis = {
      fetchTodos: {
        actionsCreators: 'fetchTodosActionsCreators',
      },
      fetchArticles: {
        actionsCreators: 'fetchArticlesActionsCreators',
      },
    };
    expect(handleActions(apis)).toEqual({
      fetchTodos: 'fetchTodosActionsCreators',
      fetchArticles: 'fetchArticlesActionsCreators',
    });
  });
});
