import Page from "../../core/templates/page";

class StatisticsPage extends Page {
    static TextObject = {
        MainTitle: 'statics'
    }
    constructor(id: string) {
        super(id)
    }
    render():HTMLElement {
        const title:HTMLElement = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle)
        this.container.append(title)
        return this.container
    }
}
export default StatisticsPage