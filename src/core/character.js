import characters from '../db/characters.json';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

class Character {
    constructor(name = null, image = null, relations = []) {
        this.id = null;
        this.name = name;
        this.image = image;
        this.relations = relations;
    }

    load(id) {

    }

    save() {

    }

    delete() {

    }
}

export default Character;