const APIURL = 'https://app.nocodb.com/api/v2';
const TOKEN = 'RkOxkSoUH8Grx1K_fotdFZetBb7akB69npnNQptz';



class BaseController {

    
    constructor(tableId, tableName) {
        this.apiUrl = `${APIURL}/tables/${tableId}/records`;
        this.token = TOKEN;
        this.tableName = tableName;
        console.log(this.apiUrl);
    }

    async getTableName(){
        return this.tableName;
    }

    async getAll() {
        const response = await fetch(this.apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        //retornem directament la propietat list que conté els registres
        const data = await response.json();
        return data.list;

    }

    async createItem(ob) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }

    async updateItem(id, ob) {
        ob.Id = id;
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }


    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async deleteItem(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}


export default BaseController;
