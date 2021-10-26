import { environment } from "src/environments/environment";
import { Episodio } from './episodio';

export class Anime {
    public id: number = NaN;
    public name: string = "";
    public imgSrc: string;
    public imgName: string = "";
    public imgBase64: string = ""; 
    public episodios: Episodio[] = [];

    constructor(other?: any) {
        this.episodios = [];

        const thisKeys = Object.keys(this);
        const otherKeys = Object.keys(other || {});
        const commonKeys = otherKeys.filter(key => thisKeys.indexOf(key) >= 0);
        for (let key of commonKeys) {
            if (key === 'episodios') {
                this[key] = other['episodios'].map(e => new Episodio(e));
            } else {
                this[key] = other[key];
            }
        }
        
        if(this.imgBase64){
            this.imgSrc= this.imgBase64;
        }else{
            this.imgSrc = environment.assetsFolder + (this.imgName ? this.imgName : '/no-image.png');
        }
    }
}