const setFilterCategories = (category: string, filter: string[]): string[] => {
  if (filter.includes(category)) {
    return filter.filter((item: string) => item !== category);
  } else return [...filter, category];
};

export default setFilterCategories;
