import posed from "react-pose"

import { colors } from "../../variables"

// pose fails to animate property like background-image: url(/backgroud.dkmxjdi.jpg)
// even if it is the same before/after. It removes last dot in image path (url(/backgroud.dkmxjdijpg))
// so I moved image to public folder
const background = `url(${process.env.PUBLIC_URL}/images/search-background.jpg)`

export const SearchContainer = posed.div({
  expanded: {
    padding: "16.1rem 0 20.5rem 0",
    backgroundImage: `linear-gradient(${colors.gray2}, ${colors.gray2}),
    linear-gradient(${colors.gray3}, ${colors.gray3}), ${background}`
  },
  collapsed: {
    padding: "1.4rem 0 1.7rem 0",
    backgroundImage: `linear-gradient(${colors.blue}, ${colors.blue}),
    linear-gradient(${colors.gray3}, ${colors.gray3}), ${background}`
  }
})
