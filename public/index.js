import { Router } from './services/router.js'
import { NavigationMenuComponent } from "./components/navigation-menu-component.js"
import { WidgetCardComponent } from "./components/widget-card-component.js"
import { AboutMeComponent } from './components/about-me-component.js'
import { DashboardComponent } from './components/dashboard-component.js'
import { DateTimeComponent } from './components/date-time-component.js'
import { TodoComponent } from './components/todo/todo-component.js'
import { DeleteButtonComponent } from './components/generic/buttons/delete-button-component.js'
import { TodoRowComponent } from './components/todo/todo-row-component.js'
import { ModalComponent } from './components/generic/modal/modal-component.js'
import { TodoItemEditFormComponent } from './components/todo/todo-item-edit-form-component.js'
import { ModalBasicComponent } from './components/generic/modal/modal-header-content-footer-component.js'
import { EditButtonComponent } from './components/generic/buttons/edit-button-component copy.js'
import { TodoModalNewComponent } from './components/todo/todo-modal-new-component.js'
import { SaveButtonComponent } from './components/generic/buttons/save-button-component.js'
import { RecursiveUlComponent } from './components/generic/tree/recursive-ul.js'
import { SimpleUploadComponent } from './components/generic/file/simple-upload.js'
import { FileUploadButtonComponent } from './components/generic/buttons/file-upload-button-component copy.js'
import { FileListingComponent } from './components/generic/file/file-listing.js'
import { FilesComponent } from './components/generic/file/files-component.js'
import { CodeComponent } from './components/generic/code-component.js'
import { match } from './services/match.js'
import { Component } from './component.js'

window.match = match
window.Component = Component

DeleteButtonComponent.load()
EditButtonComponent.load()
SaveButtonComponent.load()
FileUploadButtonComponent.load()

FilesComponent.load()
FileListingComponent.load()
SimpleUploadComponent.load()

CodeComponent.load()

ModalComponent.load()
ModalBasicComponent.load()

RecursiveUlComponent.load()

NavigationMenuComponent.load()
WidgetCardComponent.load()
AboutMeComponent.load()
DashboardComponent.load()
DateTimeComponent.load()

TodoComponent.load()
TodoRowComponent.load()
TodoItemEditFormComponent.load()
TodoModalNewComponent.load()

const router = new Router({

    '/example/': DashboardComponent,
    
    '/example/about': AboutMeComponent,

})

document.querySelectorAll('[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigateTo(link.getAttribute('href'))
    })
})

window.addEventListener('popstate', () => {
    router.renderContent(window.location.pathname)
})

window.addEventListener('load', () => {
    router.renderContent(window.location.pathname || '/home')
})

