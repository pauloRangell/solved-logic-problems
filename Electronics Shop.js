// problem: https://www.hackerrank.com/challenges/electronics-shop/

function getMoneySpent(keyboards, drives, b) {
      let prices = new Set();
      for(let keyboardPrice of keyboards){
          for(let drivePrice of drives){
              prices.add(keyboardPrice+drivePrice);
          }
      }
      
      let most_expensive_in_budget = 0;
      prices = Array.from(prices).sort((a, b) => a - b);
      for(let price of prices){
          if(most_expensive_in_budget < price && price <= b){
              most_expensive_in_budget = price;
          }
      }
      return most_expensive_in_budget !== 0 ? most_expensive_in_budget : -1
  }
