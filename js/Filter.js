"use strict";

export function filterBy(e) {
    // const filter = e.currentTarget.textContent;
    //returns strings with options values
    const filter = e.currentTarget.value;
    //returns string with targetted value
    let list, i, switching, b, shouldSwitch;
    // console.log(photographerMedias.sort((a,b)=>{return b.likes - a.likes}));
    switch (filter) {
      case "popularité":
        list = document.getElementById("photos-list");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.childNodes;
          // Loop through all list-items:
          for (i = 0; i < b.length - 1; i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (
              parseInt(b[i].lastElementChild.childNodes[5].innerHTML) <
              parseInt(b[i + 1].lastElementChild.childNodes[5].innerHTML)
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
        list = document.getElementById("photos-list");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.childNodes;
          // Loop through all list-items:
          for (i = 0; i < b.length - 1; i++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should
            switch place with the current item: */
            if (
              Date.parse(b[i].lastElementChild.childNodes[3].innerHTML) <
              Date.parse(b[i + 1].lastElementChild.childNodes[3].innerHTML)
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

        list = document.getElementById("photos-list");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
          // start by saying: no switching is done:
          switching = false;
          b = list.childNodes;
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