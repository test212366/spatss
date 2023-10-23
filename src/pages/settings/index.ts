import Page from "../../core/templates/page";

class SettingsPage extends Page {
    static textObject = {
        MainTitle: 'settings Page'
    }
    constructor(id:string) {
        super(id)
    }
    render():HTMLElement {
        const title:HTMLElement = this.createHeaderTitle(SettingsPage.textObject.MainTitle)
        return title
    }
}
export default SettingsPage