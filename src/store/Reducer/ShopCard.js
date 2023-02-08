
const initialShopCard = []

function shopCard(state = initialShopCard , action){
    if(action.type === "addCard"){
        let currentCard = [...state]
        if(currentCard.length == 0){
            currentCard.push({...action.payload , count : 1})
        }else{
             let result = currentCard.filter((arr)=>{
                 return  arr.title == action.payload.title
            })
            if(result.length == 0){
                currentCard.push({...action.payload , count : 1})
            }
        }
       return state = currentCard
    }

    return state
}

export default shopCard