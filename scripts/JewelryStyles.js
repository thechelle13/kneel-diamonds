
// import get styles to have access to array in database component
import { getStyles, setStyle } from "./database.js"
// define and invoke
const styles = getStyles()
//setStyle()


document.addEventListener(
    "change",
    (event) => {
        //for (const style of styles) {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
            //window.alert(`User choses style ${event.target.value}`)
        }
}
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    
    
    
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    
    html += "</ul>"
    return html
}

