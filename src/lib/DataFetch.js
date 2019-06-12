/*
 * Async fetch graphql data from wordpress
 *
 * @author Darryl Cousins <darryljcousins@gmail.com>
 *
 * Created at    :
 * Last modified :
 */
const graphqlEndpoint = 'http://10.42.0.99/graphql';

/*
 * Helper function for http fetch requests.
 */
const fetchPromise = (body, authToken) => {
  const headers = {};
  headers['Content-Type'] = 'application/json';
  if (authToken) headers.Authorization = `Bearer ${authToken}`;
  return (
    fetch(graphqlEndpoint, {
      method: 'POST',
      credentials: 'same-origin',
      headers,
      body,
    })
  );
};

export default fetchPromise;
