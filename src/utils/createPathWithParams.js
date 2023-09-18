export const createPathWithParams = ({path, params}) => {
    if(!params || Object.keys(params).length < 1){
        return path
    }
    else {
        const searchParams = params.idSection || '';
        return `${path}${searchParams}`
    }
};