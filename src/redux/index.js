const init = {
    totalOrder: 0,
    nama: "",
    formula: [],
    objtoEdit: {},
    globEdit: false,
    idxEdit: -1,
    user: "user"
}
//reducer
const rootReducer = (state = init, action) => {
    let tmpformula =[]
    let idx
    switch (action.type) {
        case "SET_FORMULA":
            console.log("MASUK REDUX SET FORMULA");
            tmpformula = state.formula
            tmpformula.push(action.formula)
            console.log("formula awal",state.formula);
            return {
                ...state,
                formula: tmpformula
            }
        case "DEL_FORMULA" :
            console.log("action",action.idxFormula);
            idx = action.idxFormula
            console.log("idx dek",idx);
            tmpformula = state.formula
            tmpformula.splice(idx,1)
            return {
                ...state,
                formula: tmpformula,
                idxEdit: idx
            }
        case "PUT_FORMULA" :
            console.log("PUT FORMULA");
            idx = action.idxFormula
            tmpformula = state.formula
            let objTarget = tmpformula[idx]
            console.log(objTarget);
            return {
                ...state,
                objtoEdit: objTarget,

            }
        case "TOGGLE_EDITSTAT" :
            return {
                ...state,
                globEdit: action.editstat

            }
        case "SET_UPDATE":
            let objtoSave= action.dataBaru
            idx=action.idx
            tmpformula= state.formula
            tmpformula.splice(idx,1,objtoSave)
            return{
                ...state,
                formula: tmpformula,
                idxEdit: -1
            }
        case "LOGIN":
            let userlogin = action.user
            
            return{
                ...state,
                user: userlogin
            }

        default:
            return state
    }
}

export default rootReducer