export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.cuisines?.some((cuisine) =>
      cuisine?.toLowerCase()?.includes(searchText.toLowerCase())
    )
  );
  return filterData;
}
