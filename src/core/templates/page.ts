abstract class Page {
    protected container:HTMLElement
    static TextObject = {}
    constructor(id:string) {
        this.container = document.createElement('div')
        this.container.id = id
    }
    protected createHeaderTitle(text: string) {
        const headerTitle:HTMLElement = document.createElement('div')
        headerTitle.textContent = text
        return headerTitle
    }
    render():HTMLElement {
        return this.container
    }
}
export default Page