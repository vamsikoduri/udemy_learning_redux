// the state mentioned here is the state realted to this particular  reducer
// not the state of the entire application
export default function(state=null,action)
{

    switch(action.type)
    {
        case 'BOOK_SELECTED':
            return action.payload;


    }
    
    return state;

}