describe("fullHouse", () => {
    it("returns a true or false statement depending if the array given is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
    expect(fullHouse(hand1)).toEqual(yarn jesttrue)
     expect(fullHouse(hand2)).toEqual(false)
     expect(fullHouse(hand3)).toEqual(false)
    })
})
// ReferenceError: fullHouse is not defined

const fullHouse = (array) =>{
    if (array[0] === array[1, 2] && array[3] === array[4])
    return true
    else
    return false
    
}

// PASS  ./assessment.test.js
// fullHouse
//   ✓ returns a true or false statement depending if the array given is a full house (4 ms