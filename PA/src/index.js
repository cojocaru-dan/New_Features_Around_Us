const countries = [
  {
    name: "Albania",
    capital: "Tirana"
  },
  {
    name: "Belgium",
    capital: "Brussels"
  },
  {
    name: "Bulgaria",
    capital: "Sofia"
  },
  {
    name: "Comoros",
    capital: "Moroni"
  },
  {
    name: "Denmark",
    capital: "Copenhagen"
  },
  {
    name: "Italy",
    capital: "Rome"
  },
  {
    name: "Liberia",
    capital: "Monrovia"
  },
  {
    name: "Madagascar",
    capital: "Antananarivo"
  },
  {
    name: "Nigeria",
    capital: "Abuja"
  },
  {
    name: "Singapore",
    capital: "Singapore"
  },
  {
    name: "Tajikistan",
    capital: "Dushanbe"
  },
  {
    name: "Zimbabwe",
    capital: "Harare"
  }
];

const textArea = document.querySelector("textarea");
const input = document.querySelector("input");
const selectDropDown = document.querySelector("select");

input.addEventListener("input", (event) => {
  textArea.value = "";
  if (event.target.value === "") {
    textArea.value = countries.reduce((accumulator, Country) => {
      accumulator += Country.name + "\n";
      return accumulator;
    }, "");
    return;
  }
  if (selectDropDown.value === "name") {
    const SelectedCountries = countries.map((country) => {
      if (country.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return country.name + "\n";
      } else {
        return "";
      }
    });
    textArea.value = SelectedCountries.join("");
  } 
  else if (selectDropDown.value === "capital") {
      const filteredCountries = countries.filter((country) => {
        return country.capital.toLowerCase().includes(event.target.value.toLowerCase());
      });
      textArea.value = filteredCountries.reduce((firstC, secondC) => firstC + secondC.name + "\n", "");
    }
});
