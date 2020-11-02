import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: {
        username: "marigold1920",
        displayName: "Victor Nguyễn",
        imageUrl: "https://i.ibb.co/G5x3bRr/vo-ngoc-tran.png"
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;
