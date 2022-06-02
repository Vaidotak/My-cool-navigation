/**
 * Tai kai pasikrauna puslapis, mes paimam array'u su musu puslpaiai (puslapio pavadinimas, puslapio failas)
 * mes kai pildysim, ta lista, tai automatiskai su JS turite sudeti puslapius i navigation'a
 *
 * Kai jau generuosit automatiskai puslapius, tada jau galesit tirkinti kuriame esate puslapyje ir uzdeti active klase
 * */

let arr = [
  {
    name: "Home",
    link: "index.html",
  },
  {
    name: "Contacts",
    link: "contacts.html",
  },
  {
    name: "About",
    link: "about.html",
  },
];

let navigacija = document.getElementsByTagName("ul");
console.log(navigacija[0]);

for (i = 0; i < arr.length; i++) {
  let createdLi = document.createElement("li");
  createdLi.classList.add("nav-item");

  let arrName = arr[i].name;
  let arrLink = arr[i].link;

  let a = document.createElement("a");
  a.setAttribute("href", arrLink);
  a.innerHTML = arrName;

  createdLi.appendChild(a);

  current = window.location.pathname;

  if (current == "/" + arrLink) {
    a.classList.add("active");
  }

  navigacija[0].appendChild(createdLi);
}



// function createdLink(liItem, pavadinimas, nuoroda) {
//   let a = document.createElement("a");
//   a.setAttribute("href", nuoroda);
//   a.innerHTML = pavadinimas;
//   liItem.appendChild(a);
// }

// let home = document.createElement("li");
// createdLink(home, "Home", "index.html");

// let contacts = document.createElement("li");
// createdLink(contacts, "Contacts", "contacts.html");

// let about = document.createElement("li");
// createdLink(about, "About", "about.html");

// navigacija[0].append(home, contacts, about);

// let navLi = [home, contacts, about];
// navLi.forEach((item) => item.classList.add("nav-item"));
