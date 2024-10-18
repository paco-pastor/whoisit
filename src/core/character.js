import { Preferences } from '@capacitor/preferences';
import { v4 as uuidv4 } from 'uuid';

class Character {
    constructor(name = null, image = null) {
        this.id = null;
        this.name = name;
        this.image = image;
    }

    async load(id) {
        const ret = await Preferences.get({ key: id });
        const character = JSON.parse(ret.value);
        this.id = id;
        this.name = character.name;
        this.image = character.image;
    }
    
    async save() {
        await Preferences.set({
            key: this.id,
            value: JSON.stringify({
                name: this.name,
                image: this.image
            })
        })
        
    }

    async delete(id) {
        await Preferences.remove({ key: id });
    }
}

export default Character;