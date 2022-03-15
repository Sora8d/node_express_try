function isType (toTest:object, check: object):boolean {
    var checkKeys =  Object.keys(check)
    if (!(Object.getOwnPropertyNames(toTest).length == checkKeys.length)) {
        return false
    }
    checkKeys.map((key)=>{
        if (!(key in check)){
            return false
        }
    })
    return true
}

export {isType};