/* 1603. Design Parking System

https://leetcode.com/problems/design-parking-system/

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
 
Example 1:
Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
 
Constraints:
0 <= big, medium, small <= 1000
carType is 1, 2, or 3
At most 1000 calls will be made to addCar
*/

class ParkingSystem {
  constructor(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType) {
    if (carType == 1) {
      if (this.big == 0) return false;
      this.big -= 1;
      return true;
    }
    if (carType == 2) {
      if (this.medium == 0) return false;
      this.medium -= 1;
      return true;
    }
    if (carType == 3) {
      if (this.small == 0) return false;
      this.small -= 1;
      return true;
    }
  }
}

// chatGPT refractored

class ParkingSystem {
  constructor(big, medium, small) {
    this.spots = {
      1: big,
      2: medium,
      3: small,
    };
  }

  addCar(carType) {
    if (this.spots[carType] > 0) {
      this.spots[carType] -= 1;
      return true;
    }
    return false;
  }
}
