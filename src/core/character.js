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
        const character = characters.find(c => c.id === id);
        if (character) {
            this.id = character.id;
            this.name = character.name;
            this.image = character.image;
            this.relations = character.relations;
        }
    }

    save() {
        const character = characters.find(c => c.id === this.id);
        console.log(characters)
        if (character) {
            character.name = this.name;
            character.image = this.image;
            character.relations = this.relations;
        } else {
            characters.push({
                id: uuidv4(),
                name: this.name,
                image: this.image,
                relations: this.relations
            });
            // This cant work because we are client side
            fs.writeFile('../db/characters.json', JSON.stringify(characters), 'utf8', (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }

    delete() {
        const index = characters.findIndex(c => c.id === this.id);
        if (index !== -1) {
            characters.splice(index, 1);
        }
    }
}

export default Character;