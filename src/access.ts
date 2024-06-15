/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.userRole === 1,
    canCustomer: currentUser && currentUser.userRole === 0,
  };
}
