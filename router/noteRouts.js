import express,{Router} from "express";
import { isAuth } from "../middleware/checkAuth.js";
import save from "../controler/note/save.js";
import allNote from "../controler/note/allNote.js";
import update from "../controler/note/update.js";
import deleteNote from "../controler/note/deleteNote.js";

const noteRouter=Router()

noteRouter.post("/save",isAuth,save);
noteRouter.post("/allnote",isAuth,allNote);
noteRouter.post("/update",isAuth,update);
noteRouter.post("/delete",isAuth,deleteNote);

export default noteRouter;