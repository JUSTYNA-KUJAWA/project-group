//selectors
export const getAllPosts = ({ posts }) => posts;

// actions
//const createActionName = actionName => `app/posts/${actionName}`;

// action creators

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
