import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function countPizzasInToppings(pizzas) {
  // Return the pizzas with the count
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // Check if this is an existing topping
      const existingTopping = acc[topping.id];

      // If true, increment by 1
      if (existingTopping) {
        existingTopping.count += 1;
      }

      // Otherwise, create a new entry in our acc and set it to one
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1,
      };
      return acc;
    }, {});
  // Sort them based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

export default function ToppingsFilter() {
  // Get a list of all the toppings
  // Get a list of all the pizzas with the toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // Count how many pizzas are in the toppings
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  // Loop over the lsit of toppings and display the topping and the count of the pizzas in the topping
  // Link it up
  return (
    <div>
      <p>TOPPINGS</p>
    </div>
  );
}
