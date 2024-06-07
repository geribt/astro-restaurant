import BaseController from "./BaseController";


class PlatController extends BaseController {

    constructor() {
        super('mhp3fxtpo6y3a93');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la Imatge, només agafem la primera
        carta = carta.map(e => {
            let Imatge = (e.Imatge && e.Imatge[0].signedUrl) ?  e.Imatge[0].signedUrl : '';
            delete e.Imatge;
            e.Imatge = Imatge;
            return e;
        });
        return carta;
    }

    async getMenu() {
        let Menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return Menu.filter(e => e.Menu); 
    }

}


export default PlatController;