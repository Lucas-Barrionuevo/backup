/**
 * 
 * @param {Array<String>} deck 
 */
export const pedirCarta = (deck) => {
    if(deck===0) 
    throw new Error('deck es obligatorio como un arreglo de string')

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}