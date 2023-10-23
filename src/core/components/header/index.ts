import Components from '../../templates/components'
import {PageIds} from '../../../pages/app'

const Buttons = [
    {
        id: PageIds.mainPage,
        text: 'mainPage'
    },
    {
        id: PageIds.settingsPage,
        text: 'settPage'
    },
    {
        id: PageIds.statisticsPage,
        text: 'statistPage'
    }
]

class Header extends Components {
    constructor(tagName:string, className:string) {
        super(tagName, className)
    }
    renderButtons() {
        const pageButtons:HTMLElement = document.createElement('div')
        Buttons.forEach(button => {
            const butttonHTML = document.createElement('a')
            butttonHTML.href = `#${button.id}`
            butttonHTML.textContent = button.text
            pageButtons.append(butttonHTML)
        })
        this.container.append(pageButtons)
    }

    render():HTMLElement {
        this.renderButtons()
        return this.container
    }
}
export default Header