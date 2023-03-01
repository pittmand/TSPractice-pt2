export default interface WareHouse
{
    name: string
    price: number
    fiveG: boolean
}

export const addPhone = (array: WareHouse[], name:string, price:number, fiveG:boolean ): void =>
{
    const phone: WareHouse = {
        name,
        price,
        fiveG
       }
       array.push(phone);
};

export const deletePhoneByIndex = (array: WareHouse[], index: number): void =>
{
    array.splice(index,1);
}

export const deletePhoneByName = (array: WareHouse[], name: string):void =>
{
    if (array.length > 0)
    {
        for (var x = array.length -1; x > 0; x--)
        {
            if(array[x].name === name)
            {
                array.splice(x,1)
            }
        }
    }
}

export const filter5G = (array:WareHouse[]) : WareHouse[] => 
    array.filter((item) => item.fiveG);

export const filterPriceLessThan = (array:WareHouse[], price:number) : WareHouse[] =>
{
    return array.filter((item) => item.price < price);
}


export const filterPriceGreaterThan = (array:WareHouse[], price:number) : WareHouse[] =>
{
    return array.filter((item) => item.price > price);
}

export const findPhoneByName = (array:WareHouse[], name:string) :WareHouse | undefined =>
{
    return  array.find((element) =>
    {
        return element.name === name;
    })
}

export const calcAverageCost = (array:WareHouse[]): number =>
{
    let sum: number = 0;
    array.forEach((element) => 
    {
        sum += element.price
    });
    
    return sum/array.length;
}

export const doWeHaveA5GPhone = (array:WareHouse[]): boolean =>
{
    let has5G: boolean = false;
    array.forEach(element => {
        if (element.fiveG) has5G=true
    });
    return  has5G;
}

export const phoneFlashSale = (array:WareHouse[], discount:number): WareHouse[] =>
{
    let newPhoneList: WareHouse[] = []

    array.forEach(element => {
        element.price *= 1 - discount;
        newPhoneList.push(element);
    });
    return newPhoneList
}

export const phoneFlashSaleV2 = (array:WareHouse[], name:string, discount:number): WareHouse[] =>
{
    let newPhoneList: WareHouse[] = []

    array.forEach(element => {
        if (element.name === name)
        {
            element.price *= 1 - discount;
            newPhoneList.push(element);
        }
    });
    return newPhoneList
}