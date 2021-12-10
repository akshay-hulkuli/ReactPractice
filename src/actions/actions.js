import dispatcher from "../appDispatcher";
import data from "../db.json";

export function getPosts() {
    dispatcher.dispatch({
        actionTypes: 'GET_POSTS',
        posts: data["posts"],
    });
}