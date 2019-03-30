import { contains } from "../util";

export const beverages = [
  { id: "c1", title: "Coffee 1", description: "Description of Coffee 1" },
  { id: "c2", title: "Coffee 2", description: "Description of Coffee 2" },
  { id: "b1", title: "Beer 1", description: "Description of Beer 1" },
  { id: "b2", title: "Beer 2", description: "Description of Beer 2" }
];

export const coffees = beverages.slice(0, 2);
export const beers = beverages.slice(2, 4);

const beverageMap = beverages.reduce((result, next) => {
  result[next.id] = next;
  return result;
}, {});

export const beverage = {
  service: (state, update) => {
    const route = contains(state.route, "Beverage");
    if (route) {
      const id = route.params.id;

      if (!state.beverage[id]) {
        const description = beverageMap[id].description;
        update({ beverage: { [id]: description } });
      }
    }
    else if (Object.keys(state.beverage).length > 0) {
      update({ beverage: {} });
    }
  }
};
