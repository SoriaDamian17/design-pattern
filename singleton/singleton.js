class Singleton {

    instance;

    constructor() {
        if (instance) {
            return instance;
        }
    
        this.instance = this;
    }

    static getInstance() {
        if(!this.instance) {
            this.instance = this.createInstance();
        }
        return this.instance;
    }
}

export default Singleton;