function classOf(o){
    if(o===null)return "null";
    if(o===undefined)return "undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
//classOf获取对象的类型，例如classOf([]) => Array