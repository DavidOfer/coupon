class MenuItemModel {
    id: number;
    menuTitle:string;
    pageURL:string;
    
    constructor(menuTitle:string, pageURL:string){
        this.menuTitle= menuTitle;
        this.pageURL=pageURL;
        this.id=Math.random();
    }
}
export default MenuItemModel;