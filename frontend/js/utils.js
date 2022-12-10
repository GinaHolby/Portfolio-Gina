import { cdnUrl } from "./env.js";

export function readUrl() {
  const urlString = window.location.search;
  console.log(urlString);
  if (urlString) {
    return urlString.slice(1); // slice remove the "?" from the grl
  }
  return undefined;
}

export function handleParagraphs(blockContent, container) {
  const blockContainer = document.getElementById(container);
  blockContent?.forEach((bc) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  console.log("llllllll: ",bc)
    bc.tmp.map((p) => {
      console.log("content:", p);
      if (p._type === "block") {
        let pEL = document.createElement("p");
        if (p.style === "h4") {
          pEL = document.createElement("h4");
        }
        if (p.style === "h3") {
          pEL = document.createElement("h3");
        }
        if (p.style === "h2") {
          pEL = document.createElement("h2");
        }
        if (p.style === "h1") {
          pEL = document.createElement("h1");
        }
        if (p?.children?.[0].marks?.[0] === "strong") {
          pEL = document.createElement("strong");
        }
        if (p?.children?.[0].marks?.[0] === "em") {
          pEL = document.createElement("em");
        }
        pEL.textContent = p.children[0].text;
        cardDiv.append(pEL)
        blockContainer.append(cardDiv);
      }
      if (p._type === "image") {
        const fileNameArray = p.asset._ref.split("-");
        const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
        const imgEL = document.createElement("img");
        imgEL.setAttribute("src", `${cdnUrl}${fileName}`);
        imgEL.classList.add("project__blockImg");
        cardDiv.append(imgEL)
        blockContainer.append(cardDiv);
      }
    });
  });
}

export function handleParagraphss(blockContent, container) {
  const blockContainertwo = document.getElementById(container);
  blockContent?.forEach((bc) => {
  const cardDivv = document.createElement('div');
  cardDivv.classList.add('pharagraph');
  console.log("llllllll: ",bc)
    bc.tmp.map((p) => {
      console.log("content:", p);
      if (p._type === "block") {
        let pEL = document.createElement("p");
        if (p.style === "h4") {
          pEL = document.createElement("h4");
        }
        if (p.style === "h3") {
          pEL = document.createElement("h3");
        }
        if (p.style === "h2") {
          pEL = document.createElement("h2");
        }
        if (p.style === "h1") {
          pEL = document.createElement("h1");
        }
        if (p?.children?.[0].marks?.[0] === "strong") {
          pEL = document.createElement("strong");
        }
        if (p?.children?.[0].marks?.[0] === "em") {
          pEL = document.createElement("em");
        }
        pEL.textContent = p.children[0].text;
        cardDivv.append(pEL)
        blockContainertwo.append(cardDivv);
      }
      if (p._type === "image") {
        const fileNameArray = p.asset._ref.split("-");
        const fileName = `${fileNameArray[1]}-${fileNameArray[2]}.${fileNameArray[3]}`;
        const imgEL = document.createElement("img");
        imgEL.setAttribute("src", `${cdnUrl}${fileName}`);
        imgEL.classList.add("project__blockImg");
        cardDivv.append(imgEL)
        blockContainertwo.append(cardDivv);
      }
    });
  });
}
