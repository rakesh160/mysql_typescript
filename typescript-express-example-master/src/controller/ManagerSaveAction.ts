import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Manager} from "../entity/Manager";

/**
 * Saves given post.
 */
export async function managerSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Manager);

    // create a real post object from post json object sent over http
    const newPost = postRepository.create(request.body);

    // save received post
    await postRepository.save(newPost);

    // return saved post back
    response.send(newPost);
}