interface CardioForm {
    distance : number,
    calorie : number,
    date: string
}

export const initialForm : CardioForm = {
    distance : 0,
    calorie : 0,
    date : new Date().toLocaleDateString()
}