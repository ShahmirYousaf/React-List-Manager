export const getList = () => {
    const list = localStorage.getItem('listData');
    return list ? JSON.parse(list) : [];
}

export const addItem = (item) => {
    const list = getList();
    list.push(item);
    localStorage.setItem('listData', JSON.stringify(list));
}

export const removeItems = (items) => {
    let list = getList();
    list = list.filter(item => !items.includes(item))
    localStorage.setItem('listData', JSON.stringify(list));
}