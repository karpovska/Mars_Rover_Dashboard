// Directions: Rewrite the imperative code below as Object-Oriented 
class WarpDrive {
    constructor(type, recipient){             
        this.type = type
        this.status = 'active'
        this.warp = 2
        this.recipient = recipient ? recipient : 'Captain'
    }
    
    status_report(){        
        if(this.status === 'active' && this.warp <= 4) {
            return this.recipient += ', the engines are active and we could be going faster.'
        } else if (this.status === 'active' && this.warp > 4) {
            return this.recipient += ', the engines are active and we are going ' + this.warp + '.'
        } else if (this.status === 'down') {
            return this.recipient += ', the engines are down.'
        } else {
            return this.recipient += ', the comms are down and we can`t reach engineering.'
        }        
    }

    set_status(status){
        this.status = status;
    }

    set_warp(integer){
        this.warp = integer;
    }
}

let enterprizeWarp = new WarpDrive('Dilithium Crystal');
enterprizeWarp.set_warp = 2;
console.log(enterprizeWarp.status_report());

enterprizeWarp.set_warp = 6;
console.log(enterprizeWarp.status_report());
