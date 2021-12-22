"use strict";

export function filterBy(e) {
  const filter = e.currentTarget.value;
  //returns string with targetted value
  let i = [];
  let switching = false;
  let shouldSwitch = false;
  let list = document.getElementById("photos-list");
  let b = list.childNodes;
  //returns nodeList of articles
  switch (filter) {
    case "popularité":
      switching = true;
      /* Make a loop that will continue until
        no switching has been done: */
      while (switching) {
        // start by saying: no switching is done:
        switching = false;
        // Loop through all list-items:
        for (i = 0; i < b.length - 1; i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
            switch place with the current item: */
          if (
            parseInt(b[i].lastChild.lastChild.children[2].innerText) <
            parseInt(b[i + 1].lastChild.lastChild.children[2].innerText)
          ) {
            /* if next item is lower 
                than current item, mark as a switch
                and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
              and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);

          switching = true;
        }
      }
      break;
    case "date":
      switching = true;
      /* Make a loop that will continue until
            no switching has been done: */
      while (switching) {
        // start by saying: no switching is done:
        switching = false;
        // Loop through all list-items:
        for (i = 0; i < b.length - 1; i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
            switch place with the current item: */
          if (
            b[i].lastChild.lastChild.children[1].innerHTML <
            b[i + 1].lastChild.lastChild.children[1].innerHTML
          ) {
            /* if next item is lower 
              than current item, mark as a switch
              and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
            and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);

          switching = true;
        }
      }
      break;
    case "titre":
      switching = true;
      /* Make a loop that will continue until
        no switching has been done: */
      while (switching) {
        // start by saying: no switching is done:
        switching = false;
        // Loop through all list-items:
        for (i = 0; i < b.length - 1; i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
            switch place with the current item: */
          if (
            b[i].lastElementChild.childNodes[1].innerHTML >
            b[i + 1].lastElementChild.childNodes[1].innerHTML
          ) {
            /* if next item is lower 
              than current item, mark as a switch
              and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
            and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
      break;

    default:
      break;
  }
}
