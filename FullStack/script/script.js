function fullStack(frontEndNames, backEndNames) {
    
    const frontEndNamesArray = frontEndNames.split(';').map(name => name.trim())
    const backEndNamesArray = backEndNames.split(';').map(name => name.trim())

    const fullStackNames = frontEndNamesArray.filter(name => backEndNamesArray.includes(name))

    return fullStackNames
}

const frontEndDevelopers = "Nagy Béla; Mekk Elek; László Boldizsár; Péter Dávid"
const backEndDevelopers = "Nagy Elza; Mekk Elek; Kiss Franciska; László Boldizsár"

console.log(fullStack(frontEndDevelopers, backEndDevelopers))