/* 1108. Defanging an IP Address

https://leetcode.com/problems/defanging-an-ip-address/

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".

Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
 
Constraints:
The given address is a valid IPv4 address.
*/

function defangIPaddr(address: string): string {
  return address.replace(/\./g, "[.]");
}

//trying to not use regex
function defangIPaddr1(address: string): string {
  const length = address.length;
  let result: string = "";
  for (let i = 0; i < length; i++) {
    if (address[i] === ".") {
      result += "[.]";
    } else {
      result += address[i];
    }
  }
  return result;
}

// chatgpt optimised
function defangIPaddr2(address: string): string {
  const result: string[] = [];
  const len = address.length;
  for (let i = 0; i < len; i++) {
    if (address[i] === ".") {
      result.push("[.]");
    } else {
      result.push(address[i]);
    }
  }
  return result.join("");
}
