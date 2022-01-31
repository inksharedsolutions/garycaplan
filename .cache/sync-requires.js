const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\404.js"))),
  "component---src-pages-about-the-author-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\about-the-author.js"))),
  "component---src-pages-books-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\books.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\page-2.js"))),
  "component---src-pages-privacy-policy-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\privacy-policy.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\terms-and-conditions.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("D:\\Davie\\Projects\\garycaplan\\src\\pages\\using-typescript.tsx")))
}

