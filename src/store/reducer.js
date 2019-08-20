var tmp;
if(localStorage.getItem('myColor')){
     tmp=localStorage.getItem('myColor');
}
else {
tmp="#181cb3";
}

const initialState = {

    color: tmp
}
const reducer = (state = initialState, action) => {

    if (action.type === 'COLOR_CHANGE') {
        return {

            color: action.event.target.value

        }
    }
    else if (action.type === 'COLOR_CHANGE_HEX') {
        return {

            color: action.color.hex
        }
    }
    else {
        return state;
    }
}

export default reducer;