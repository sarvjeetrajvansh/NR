export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.cuisines?.some((cuisine) =>
      cuisine?.toLowerCase()?.includes(searchText.toLowerCase())
    )
  );
  return filterData;
}
