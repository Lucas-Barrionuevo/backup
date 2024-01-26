import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) =>{

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = locashostUser;

    return new User ({
        avatar,
        balance,
        first_name: first_name,
        gender,
        id,
        isActive,
        last_name: last_name,
    })
}