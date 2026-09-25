import {
  getURLsFromHTML,
  getImagesFromHTML
} from "./crawl";



const inputURL = "https://crawler-test.com";
const inputBody = `<html><body><img src="/logo.png" alt="Logo"></body></html>`;

getImagesFromHTML(inputBody, inputURL);
