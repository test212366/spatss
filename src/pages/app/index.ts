import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import Header from '../../core/components/header/index'

export const enum PageIds {
    mainPage= 'main-page',
    settingsPage = 'settings-page',
    statisticsPage = 'statistics-page'
}

class App {
    private static container: HTMLElement = document.body
    private initialPage: MainPage
    private header: Header

    static renderNewPage(idPage: string) {
        App.container.innerHTML = ''
        let page: Page | null = null
        if(idPage === PageIds.mainPage) {
            page = new MainPage(idPage)
        } else if (idPage === PageIds.settingsPage) {
            page = new SettingsPage(idPage)
        } else if (idPage === PageIds.statisticsPage) {
            page = new StatisticsPage(idPage)
        }
        if(page) {
            const pageHtml = page.render()
            App.container.append(pageHtml)
        }
    }
    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1)
            App.renderNewPage(hash)
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page')
        this.header = new Header('header', 'header')
    }

    run() {
        App.renderNewPage('main-page')
        App.container.append(this.header.render())
        this.enableRouteChange()
    }
}
export default App