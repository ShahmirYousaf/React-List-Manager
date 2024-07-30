class ListManager 
{
    constructor() 
    {
        if(!ListManager.instance) 
        {
            this._listData = [];
            ListManager.instance = this;
        }
        else 
        {
            throw new Error("You can only create one instance!");
        }

        return ListManager.instance;
    }

    getList()
    {
        return this._listData;
    }

    static getInstance() 
    {
        if(!ListManager.instance) 
        {
            const instance = new ListManager();
            return instance;
        }

        return ListManager.instance;
    }

    AddItemInList(item)
    {
        this._listData.push(item);
    }

    RemoveItemsFromList(itemsToRemove) 
    {
        //this._listData = this._listData.filter(item => !itemsToRemove.includes(item));

        for (let i = this._listData.length - 1 ; i >= 0 ; i--) 
        {
            const itemsToRemoveSet = new Set(itemsToRemove);
            if (itemsToRemoveSet.has(this._listData[i]))
            {
                this._listData.splice(i , 1);
            }

        }
    }

}

const instance = ListManager.getInstance();

//Object.freeze(instance);

export default instance;