

function Computer(cpu,gpu,ram){
    this.cpu=cpu;
    this.gpu=gpu;
    this.ram=ram

    this.performance = function(){
        console.log('${this.cpu} by ${this.gpu} has ${this.ram}')
    }
}